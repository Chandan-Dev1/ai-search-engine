import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: 'OAuth2',
        user: process.env.GOOGLE_USER,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
        clientId: process.env.GOOGLE_CLIENT_ID
    }
})

transport.verify()
    .then(() => { console.log("email transporter is ready to send email ") })
    .catch((err) => { console.error("email transporter verification is failed") })


export async function sendEmail({ to, subject, html, text }) {
    const mailoption = {
        from: process.env.GOOGLE_USER,
        to,
        subject,
        html,
        text
    };

    const details = await transport.sendMail(mailoption);
    console.log("Email Send:", details)

}   