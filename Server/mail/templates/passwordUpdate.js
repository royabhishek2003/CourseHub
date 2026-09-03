const emailBase = require("./emailBase");

/**
 * Modern Interactive Password Update Confirmation Template
 * @param {string} email - User's account email address
 * @param {string} name - User's full name or status message
 * @returns {string} Fully formatted responsive HTML email
 */
exports.passwordUpdated = (email, name) => {
  // Extract clean name if caller passed a phrase
  const cleanName = name && name.includes("for ")
    ? name.split("for ").pop()
    : name || "Learner";

  const frontendUrl =
    process.env.FRONTEND_URL || "https://coursehub-frontend-rdtd.onrender.com";

  const contentHtml = `
    <!-- Top Icon Badge -->
    <div style="text-align: center; margin-bottom: 24px;">
      <div style="display: inline-block; width: 64px; height: 64px; border-radius: 50%; background: rgba(6, 214, 160, 0.12); border: 1px solid rgba(6, 214, 160, 0.35); text-align: center; line-height: 64px;">
        <span style="font-size: 30px;">🛡️</span>
      </div>
    </div>

    <!-- Title & Greeting -->
    <div style="text-align: center; margin-bottom: 24px;">
      <h1 style="margin: 0 0 10px 0; font-size: 24px; font-weight: 700; color: #FFFFFF; letter-spacing: -0.5px;">
        Password Updated Successfully
      </h1>
      <p style="margin: 0; font-size: 15px; color: #DBDDEA; line-height: 1.5;">
        Hello <strong style="color: #06D6A0;">${cleanName}</strong>,
      </p>
      <p style="margin: 8px 0 0 0; font-size: 14px; color: #999DAA; line-height: 1.6;">
        The password for your CourseHub account linked to <strong style="color: #FFFFFF;">${email}</strong> was recently changed.
      </p>
    </div>

    <!-- Status Confirmation Card -->
    <div style="background-color: #000814; border: 1px solid #2C333F; border-radius: 12px; padding: 20px; margin: 24px 0;">
      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
          <td style="padding: 6px 0; font-size: 13px; color: #838894; width: 140px;">Status:</td>
          <td style="padding: 6px 0; font-size: 13px; color: #06D6A0; font-weight: 700;">&bull; Updated &amp; Active</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; font-size: 13px; color: #838894;">Associated Email:</td>
          <td style="padding: 6px 0; font-size: 13px; color: #DBDDEA; font-weight: 600;">${email}</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; font-size: 13px; color: #838894;">Platform:</td>
          <td style="padding: 6px 0; font-size: 13px; color: #DBDDEA;">CourseHub Web App</td>
        </tr>
      </table>
    </div>

    <!-- Interactive CTA Button -->
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin: 28px 0;">
      <tr>
        <td align="center">
          <table role="presentation" border="0" cellpadding="0" cellspacing="0">
            <tr>
              <td align="center" style="border-radius: 10px; background: linear-gradient(135deg, #FFD60A 0%, #FFA200 100%); box-shadow: 0 4px 18px rgba(255, 214, 10, 0.35);">
                <a href="${frontendUrl}/login" target="_blank" style="display: inline-block; padding: 14px 34px; font-size: 15px; font-weight: 700; color: #000814; text-decoration: none; border-radius: 10px; letter-spacing: 0.2px;">
                  Log In to Your Account &rarr;
                </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>

    <!-- Security Warning Alert Box -->
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: rgba(239, 71, 111, 0.08); border-left: 4px solid #EF476F; border-radius: 6px; margin-bottom: 20px;">
      <tr>
        <td style="padding: 14px 16px;">
          <p style="margin: 0 0 6px 0; font-size: 13px; font-weight: 700; color: #FFFFFF;">
            Did not request this change?
          </p>
          <p style="margin: 0; font-size: 13px; color: #FBC7D1; line-height: 1.5;">
            If you did not perform this update, someone else may have accessed your account. Please <a href="${frontendUrl}/forgot-password" style="color: #FFD60A; text-decoration: underline; font-weight: 600;">reset your password immediately</a> or contact our security team at <a href="mailto:royabhishek8483@gmail.com" style="color: #FFD60A; text-decoration: underline;">royabhishek8483@gmail.com</a>.
          </p>
        </td>
      </tr>
    </table>
  `;

  return emailBase({
    title: "CourseHub - Password Updated",
    preheader: "Your CourseHub account password has been successfully updated.",
    contentHtml,
  });
};
