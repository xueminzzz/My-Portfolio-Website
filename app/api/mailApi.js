const nodemailer = require('nodemailer');

export default function handler(req, res) {

    const message = {
        from: req.body.email,
        to: process.env.MY_EMAIL,
        subject: req.body.subject,
        text: req.body.message,
        html: `<p>${req.body.message}</p>`,
    };

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MY_EMAIL,
            pass: process.env.MY_PASSWORD,
        },
    });

    if (req.method === 'POST') {
        transporter.sendMail(message, (err, info) => {

            if (err) {
                res.status(404).json({
                    error: `Connection refused at ${err.address}`
                });
            } else {
                res.status(250).json({
                    success: `Message delivered to ${info.accepted}`
                });
            }
        });
    }
}