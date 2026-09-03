const emailBase = require("./emailBase");

/**
 * Modern Interactive Password Reset Email Template
 * @param {string} resetUrl - Password reset target URL
 * @param {string} [name] - User's name or fallback
 * @returns {string} Fully formatted responsive HTML email
 */
const resetPasswordTemplate = (resetUrl, name = "Learner") => {
  const contentHtml = `
    <!-- Top Icon Badge -->
    <div style="text-align: center; margin-bottom: 24px;">
      <div style="display: inline-block; width: 64px; height: 64px; border-radius: 50%; background: rgba(255, 214, 10, 0.12); border: 1px solid rgba(255, 214, 10, 0.35); text-align: center; line-height: 64px;">
        <span style="font-size: 30px;">🔑</span>
      </div>
    </div>

    <!-- Title & Greeting -->
    <div style="text-align: center; margin-bottom: 24px;">
      <h1 style="margin: 0 0 10px 0; font-size: 24px; font-weight: 700; color: #FFFFFF; letter-spacing: -0.5px;">
        Reset Your Password
      </h1>
      <p style="margin: 0; font-size: 15px; color: #DBDDEA; line-height: 1.5;">
        Hello <strong style="color: #FFD60A;">${name}</strong>,
      </p>
      <p style="margin: 8px 0 0 0; font-size: 14px; color: #999DAA; line-height: 1.6;">
        We received a request to reset your password for your CourseHub account. Click the button below to set up a new password.
      </p>
    </div>

    <!-- Interactive CTA Button -->
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin: 32px 0;">
      <tr>
        <td align="center">
          <table role="presentation" border="0" cellpadding="0" cellspacing="0">
            <tr>
              <td align="center" style="border-radius: 10px; background: linear-gradient(135deg, #FFD60A 0%, #FFA200 100%); box-shadow: 0 4px 18px rgba(255, 214, 10, 0.35);">
                <a href="${resetUrl}" target="_blank" style="display: inline-block; padding: 15px 36px; font-size: 16px; font-weight: 700; color: #000814; text-decoration: none; border-radius: 10px; letter-spacing: 0.2px;">
                  Reset My Password &rarr;
                </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>

    <!-- Expiration Pill -->
    <div style="background-color: #1F2937; border-radius: 8px; padding: 12px 16px; margin-bottom: 24px; text-align: center;">
      <span style="font-size: 13px; color: #DBDDEA; font-weight: 500;">
        ⏳ This reset link will automatically expire in <strong>1 hour</strong>.
      </span>
    </div>

    <!-- Direct URL Fallback Card -->
    <div style="background-color: #000814; border: 1px solid #2C333F; border-radius: 10px; padding: 16px; margin-bottom: 24px;">
      <p style="margin: 0 0 8px 0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; color: #838894;">
        Trouble clicking? Paste this link in your browser:
      </p>
      <p style="margin: 0; word-break: break-all; font-family: monospace; font-size: 12px; color: #118AB2; line-height: 1.4;">
        <a href="${resetUrl}" target="_blank" style="color: #44E4BF; text-decoration: underline;">
          ${resetUrl}
        </a>
      </p>
    </div>

    <!-- Security Warning Alert Box -->
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: rgba(239, 71, 111, 0.08); border-left: 4px solid #EF476F; border-radius: 6px; margin-bottom: 20px;">
      <tr>
        <td style="padding: 14px 16px;">
          <p style="margin: 0; font-size: 13px; color: #FBC7D1; line-height: 1.5;">
            <strong style="color: #FFFFFF;">Didn't request this?</strong> If you didn't initiate this request, you can safely ignore this email. Your current password remains secure and will not change until you click the link and set a new one.
          </p>
        </td>
      </tr>
    </table>
  `;

  return emailBase({
    title: "CourseHub - Reset Your Password",
    preheader: "Instructions for resetting your CourseHub account password.",
    contentHtml,
  });
};

module.exports = resetPasswordTemplate;
