// const nodemailer = require("nodemailer");

// const mailSender = async (email, title, body) => {
//   try {
//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 465,
//       secure: true, // REQUIRED
//       auth: {
//         user: process.env.MAIL_USER,
//         pass: process.env.MAIL_PASS,
//       },
//     });

//     const info = await transporter.sendMail({
//       from: `"Studynotion" <${process.env.MAIL_USER}>`,
//       to: email,
//       subject: title,
//       html: body,
//     });

//     console.log("Email sent:", info.messageId);
//     return info;
//   } catch (error) {
//     console.error("Mail error:", error);
//     throw error;
//   }
// };

// module.exports = mailSender;


const SibApiV3Sdk = require("sib-api-v3-sdk");

const mailSender = async (email, title, body) => {
  try {
    const client = SibApiV3Sdk.ApiClient.instance;
    client.authentications["api-key"].apiKey = process.env.BREVO_API_KEY;

    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

    const sendSmtpEmail = {
      to: [{ email }],
      sender: { email: "noreply@brevo.com", name: "CourseHub" },
      subject: title,
      htmlContent: body,
    };

    const result = await apiInstance.sendTransacEmail(sendSmtpEmail);

    console.log("Email sent:", result.messageId);
    return result;
  } catch (error) {
    console.error("Brevo error:", error.response?.text || error);
    throw error;
  }
};

module.exports = mailSender;
