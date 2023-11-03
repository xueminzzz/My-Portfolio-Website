import nodemailer from 'nodemailer'

export default async function handler(req, res) {
    if (req.method == "POST") {

        const { name, email, message } = req.body

        if (!name || !email || !message) {
            return res.status(400).json({ message: "Bad request" })
        }

        else {
            const transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                // service: 'gmail',
                auth: {
                    type: "OAuth2",
                    user: "t2988061@gmail.com",
                    clientId: "817441359522-qvrf1a6997vddubp4c1pdp91ld1p40k3.apps.googleusercontent.com",
                    clientSecret: "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",
                },
            });
            try {
                await transporter.sendMail({
                    from: "t2988061@gmail.com",
                    to: "xuemin2809@gmail.com",
                    subject: "New Connection!",
                    text: `Hello,
        
                You have a new form entry from: ${name} ${email}.
        
                ${message}
        
                `,
                })

                return res.status(200).json({ success: true })

            } catch (error) {
                return res.status(400).json({ message: error.message })
            }
        }
    }
    return res.status(400).json({ message: "Bad request" })
}