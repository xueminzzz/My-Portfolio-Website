const nodemailer = require('nodemailer');

export default function handler(req, res) {
    // res.status(200).json({ message: "Hello from Next.js!" })
    // console.log(req.body)
    const { name, email, message } = req.body

    const messageData = {
        from: req.body.email,
        to: process.env.MY_EMAIL,
        subject: "New Connection!",
        text: `Hello,
        
        You have a new form entry from: ${name} ${email}.

        ${message}
        
        `,
    };

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MY_EMAIL,
            pass: process.env.MY_PASSWORD,
        },
    });

    if (req.method === 'POST') {
        transporter.sendMail(messageData, (err, info) => {

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