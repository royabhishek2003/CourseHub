const emailBase = require("./emailBase");

/**
 * Modern Interactive OTP Verification Template
 * @param {string} otp - 6-digit verification code
 * @returns {string} Fully formatted responsive HTML email
 */
const otpTemplate = (otp) => {
  const contentHtml = `
    <!-- Top Icon Badge -->
    <div style="text-align: center; margin-bottom: 24px;">
      <div style="display: inline-block; width: 64px; height: 64px; border-radius: 50%; background: rgba(255, 214, 10, 0.12); border: 1px solid rgba(255, 214, 10, 0.35); text-align: center; line-height: 64px;">
        <span style="font-size: 30px;">🔐</span>
      </div>
    </div>

    <!-- Title & Greeting -->
    <div style="text-align: center; margin-bottom: 24px;">
      <h1 style="margin: 0 0 10px 0; font-size: 24px; font-weight: 700; color: #FFFFFF; letter-spacing: -0.5px;">
        Verify Your Email Address
      </h1>
      <p style="margin: 0; font-size: 15px; color: #999DAA; line-height: 1.5;">
        Thank you for joining <strong style="color: #F1F2FF;">CourseHub</strong>. Please use the verification code below to activate your account and access your courses.
      </p>
    </div>

    <!-- OTP Code Container Box -->
    <div style="background-color: #000814; border: 2px dashed rgba(255, 214, 10, 0.4); border-radius: 12px; padding: 24px; text-align: center; margin: 28px 0; box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.6);">
      <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: #FFD60A; margin-bottom: 12px;">
        Your One-Time Passcode
      </div>
      <div class="otp-code" style="font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 38px; font-weight: 800; letter-spacing: 12px; color: #FFFFFF; padding: 6px 0; text-shadow: 0 0 12px rgba(255, 214, 10, 0.25); user-select: all;">
        ${otp}
      </div>
      <div style="font-size: 12px; color: #838894; margin-top: 10px;">
        Tap and hold or double click to select &amp; copy
      </div>
    </div>

    <!-- Expiration & Security Info Pill -->
    <div style="background-color: #1F2937; border-radius: 8px; padding: 12px 16px; margin-bottom: 28px; text-align: center;">
      <span style="font-size: 13px; color: #DBDDEA; font-weight: 500;">
        ⏳ Valid for <strong>5 minutes</strong> &bull; Single-use verification only
      </span>
    </div>

    <!-- Security Warning Alert Box -->
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: rgba(239, 71, 111, 0.08); border-left: 4px solid #EF476F; border-radius: 6px; margin-bottom: 24px;">
      <tr>
        <td style="padding: 14px 16px;">
          <p style="margin: 0; font-size: 13px; color: #FBC7D1; line-height: 1.5;">
            <strong style="color: #FFFFFF;">Security Advisory:</strong> Never share this verification code with anyone. CourseHub staff will never ask for your password or OTP.
          </p>
        </td>
      </tr>
    </table>

    <!-- Help note -->
    <p style="margin: 0; font-size: 13px; color: #838894; text-align: center; line-height: 1.5;">
      If you did not attempt to sign up or request this code, you can safely ignore this email. No changes will be made to your information.
    </p>
  `;

  return emailBase({
    title: "CourseHub - Email Verification Passcode",
    preheader: `Your CourseHub verification code is ${otp}. Valid for 5 minutes.`,
    contentHtml,
  });
};

module.exports = otpTemplate;
