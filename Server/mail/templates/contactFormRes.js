const emailBase = require("./emailBase");

/**
 * Modern Interactive Contact Form Response Template
 * @param {string} email - Sender email
 * @param {string} firstname - First name
 * @param {string} lastname - Last name
 * @param {string} message - User query message
 * @param {string} [phoneNo] - Contact phone number
 * @param {string} [countrycode] - Phone country code
 * @returns {string} Fully formatted responsive HTML email
 */
exports.contactUsEmail = (
  email,
  firstname,
  lastname,
  message,
  phoneNo = "Not provided",
  countrycode = ""
) => {
  const frontendUrl =
    process.env.FRONTEND_URL || "https://coursehub-frontend-rdtd.onrender.com";

  const fullPhone = phoneNo && phoneNo !== "Not provided"
    ? `${countrycode ? countrycode + " " : ""}${phoneNo}`
    : "Not provided";

  const contentHtml = `
    <!-- Top Icon Badge -->
    <div style="text-align: center; margin-bottom: 24px;">
      <div style="display: inline-block; width: 64px; height: 64px; border-radius: 50%; background: rgba(17, 138, 178, 0.12); border: 1px solid rgba(17, 138, 178, 0.35); text-align: center; line-height: 64px;">
        <span style="font-size: 30px;">✉️</span>
      </div>
    </div>

    <!-- Title & Greeting -->
    <div style="text-align: center; margin-bottom: 24px;">
      <h1 style="margin: 0 0 10px 0; font-size: 24px; font-weight: 700; color: #FFFFFF; letter-spacing: -0.5px;">
        Message Received
      </h1>
      <p style="margin: 0; font-size: 15px; color: #DBDDEA; line-height: 1.5;">
        Dear <strong style="color: #44E4BF;">${firstname} ${lastname}</strong>,
      </p>
      <p style="margin: 8px 0 0 0; font-size: 14px; color: #999DAA; line-height: 1.6;">
        Thank you for reaching out to the CourseHub support and inquiry team. We have logged your request and a specialist will get back to you shortly.
      </p>
    </div>

    <!-- SLA Guarantee Banner -->
    <div style="background-color: rgba(6, 214, 160, 0.08); border-left: 4px solid #06D6A0; border-radius: 6px; padding: 12px 16px; margin-bottom: 24px;">
      <span style="font-size: 13px; color: #83F1DE; font-weight: 500;">
        ⚡ <strong>Typical Response Time:</strong> Within <strong>24 business hours</strong>.
      </span>
    </div>

    <!-- Submitted Inquiry Details Card -->
    <div style="background-color: #000814; border: 1px solid #2C333F; border-radius: 12px; padding: 20px; margin-bottom: 28px;">
      <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #838894; margin-bottom: 12px; border-bottom: 1px solid rgba(255, 255, 255, 0.08); padding-bottom: 8px;">
        Summary of Your Inquiry
      </div>
      
      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
          <td style="padding: 6px 0; font-size: 13px; color: #838894; width: 120px;">Name:</td>
          <td style="padding: 6px 0; font-size: 13px; color: #FFFFFF; font-weight: 500;">${firstname} ${lastname}</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; font-size: 13px; color: #838894;">Email:</td>
          <td style="padding: 6px 0; font-size: 13px; color: #FFFFFF; font-weight: 500;">${email}</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; font-size: 13px; color: #838894;">Phone:</td>
          <td style="padding: 6px 0; font-size: 13px; color: #FFFFFF; font-weight: 500;">${fullPhone}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0 4px 0; font-size: 13px; color: #838894;" colspan="2">Message:</td>
        </tr>
        <tr>
          <td colspan="2" style="background-color: #161D29; border-radius: 8px; padding: 12px; font-size: 13px; color: #DBDDEA; line-height: 1.5; font-style: italic;">
            &ldquo;${message}&rdquo;
          </td>
        </tr>
      </table>
    </div>

    <!-- Interactive CTA Button -->
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin: 24px 0;">
      <tr>
        <td align="center">
          <table role="presentation" border="0" cellpadding="0" cellspacing="0">
            <tr>
              <td align="center" style="border-radius: 10px; background: linear-gradient(135deg, #FFD60A 0%, #FFA200 100%); box-shadow: 0 4px 18px rgba(255, 214, 10, 0.35);">
                <a href="${frontendUrl}" target="_blank" style="display: inline-block; padding: 14px 34px; font-size: 15px; font-weight: 700; color: #000814; text-decoration: none; border-radius: 10px; letter-spacing: 0.2px;">
                  Explore CourseHub &rarr;
                </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `;

  return emailBase({
    title: "CourseHub - We Received Your Message",
    preheader: `Thank you for contacting CourseHub, ${firstname}. We will respond to your message shortly.`,
    contentHtml,
  });
};
