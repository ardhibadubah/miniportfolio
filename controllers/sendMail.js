const nodemailer = require("nodemailer")

module.exports = {
    sendMail : (req, res) => {
        const { name, email, subject, message } = req.body
        const transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASS_EMAIL
            }
        })
        
        const mailOptions = {
            from: '"YOU HAVE NEW TALK PAPERLINE"',
            to: "artdee.dna@gmail.com",
            subject: subject,
            text: 
            `Nama saya : ${name}
            Email saya : ${email}
            Message saya : ${message}`
        }
        
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                res.status(400).json(error)
            } else {
                res.status(200).json(info.response);
            }
        })

    }
}
