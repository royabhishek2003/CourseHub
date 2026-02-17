const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // REQUIRED for port 465
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"Studynotion | CodeHelp" <${process.env.MAIL_USER}>`,
      to: email,
      subject: title,
      html: body,
    });

    console.log("Mail response:", info.response);
    return info;
  } catch (error) {
    console.log("Mail error:", error.message);
    throw error; // important: don't silently swallow
  }
};

module.exports = mailSender;
