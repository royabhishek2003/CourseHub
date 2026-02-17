const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS, // Gmail App Password (not real Gmail password)
      },
    });

    const info = await transporter.sendMail({
      from: `"Studynotion" <${process.env.MAIL_USER}>`,
      to: email,
      subject: title,
      html: body,
    });

    console.log("Email sent:", info.messageId);
    return info;
  } catch (error) {
    console.error("Mail error:", error);
    throw error;
  }
};

module.exports = mailSender;


const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const mailSender = async (email, title, body) => {
  try {
    const info = await resend.emails.send({
      from: "Studynotion | CodeHelp <onboarding@resend.dev>",
      to: email,
      subject: title,
      html: body,
    });

    console.log("Full mail info:", info);
    return info;
  } catch (error) {
    console.log("Mail error:", error.message);
    throw error; // important: don't silently swallow
  }
};

module.exports = mailSender;

