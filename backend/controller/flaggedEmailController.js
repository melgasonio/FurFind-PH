require('dotenv').config();

const nodemailer = require('nodemailer');

const sendEmailFlagged = async (req, res) => {
    const { emailReceiver, subject, body } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
            user: process.env.EMAIL_SENDER,
            pass: process.env.EMAIL_PASSWORD
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_SENDER,
        to: emailReceiver,
        subject: subject,
        text: body,
    }

    try {
        await transporter.sendMail(mailOptions);
        // res.json({ message: 'Email sent succesfully!' });
        console.log('Successful')
    } catch (error) {
        // res.json({ error: `Failed to send email: ${error}`});
        console.log(error)
    }
}

module.exports = {
    sendEmailFlagged,
}