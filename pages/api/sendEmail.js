import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method == "POST") {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ message: "Bad request 1" });
        } else {
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: "t2988061@gmail.com",
                    pass: "cerobkpyqbmprisn"
                },
            })

            const sendMailPromise = new Promise((resolve, reject) => {
                transporter.sendMail({
                    from: "t2988061@gmail.com",
                    to: "t2988061@gmail.com",
                    subject: "New Connection!",
                    text: `Hello,

                    You have a new form entry from:

                    Name: ${name}

                    Email: ${email}.

                    Description: ${message}
                    `,
                }, (error, info) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(info);
                    }
                })
            })

            try {
                await sendMailPromise;
                return res.status(200).json({ success: true });
            } catch (error) {
                return res.status(400).json({ message: error.message });
            }
        }
    }
    return res.status(400).json({ message: "Bad request 2" });
}