const nodemailer = require("nodemailer");

export default async function send(req,res){
  // Async function enables allows handling of promises with await
  const {email, subject, message} = JSON.parse(JSON.stringify(req.body));
  // First, define send settings by creating a new transporter: 
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // SMTP server address (usually mail.your-domain.com)
    port: 465, // Port for SMTP (usually 465)
    secure: true, // Usually true if connecting to port 465
    auth: {
      user: "matthewmcculley9@gmail.com", // Your email address
      pass: process.env.PASSWORD, // Password (for gmail, your app password)
      // ⚠️ For better security, use environment variables set on the server for these values when deploying
    },
  });

  // Define and send message inside transporter.sendEmail() and await info about send from promise:
  let info = await transporter.sendMail({
    from: email,
    to: "matthewmcculley9@gmail.com",
    subject: subject,
    html: message,
  }).catch((error) => {
    return res.status(400).json(error)
  });

  res.status(200).json(info.messageId);
}
