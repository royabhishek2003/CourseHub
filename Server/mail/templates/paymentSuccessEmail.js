const emailBase = require("./emailBase");

/**
 * Modern Interactive Payment Success Receipt Email Template
 * @param {string} name - Student's full name
 * @param {number|string} amount - Paid amount in INR
 * @param {string} orderId - Razorpay order ID
 * @param {string} paymentId - Razorpay payment ID
 * @returns {string} Fully formatted responsive HTML email
 */
exports.paymentSuccessEmail = (name, amount, orderId, paymentId) => {
  const frontendUrl =
    process.env.FRONTEND_URL || "https://coursehub-frontend-rdtd.onrender.com";
  
  const formattedDate = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const contentHtml = `
    <!-- Top Icon Badge -->
    <div style="text-align: center; margin-bottom: 24px;">
      <div style="display: inline-block; width: 64px; height: 64px; border-radius: 50%; background: rgba(6, 214, 160, 0.12); border: 1px solid rgba(6, 214, 160, 0.35); text-align: center; line-height: 64px;">
        <span style="font-size: 30px;">💳</span>
      </div>
    </div>

    <!-- Title & Greeting -->
    <div style="text-align: center; margin-bottom: 24px;">
      <h1 style="margin: 0 0 10px 0; font-size: 24px; font-weight: 700; color: #FFFFFF; letter-spacing: -0.5px;">
        Payment Received!
      </h1>
      <p style="margin: 0; font-size: 15px; color: #DBDDEA; line-height: 1.5;">
        Thank you <strong style="color: #FFD60A;">${name}</strong>. Your transaction was processed successfully.
      </p>
    </div>

    <!-- Receipt Amount Card -->
    <div style="background-color: #000814; border: 1px solid #2C333F; border-radius: 14px; padding: 24px; margin: 24px 0; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);">
      
      <!-- Total Paid Box -->
      <div style="text-align: center; padding-bottom: 20px; border-bottom: 1px solid rgba(255, 255, 255, 0.08);">
        <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #838894; margin-bottom: 6px;">
          Amount Paid
        </div>
        <div style="font-size: 36px; font-weight: 800; color: #06D6A0; letter-spacing: -0.5px;">
          &#8377;${amount}
        </div>
        <div style="margin-top: 8px;">
          <span style="display: inline-block; background-color: rgba(6, 214, 160, 0.15); color: #06D6A0; font-size: 11px; font-weight: 700; padding: 4px 12px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.8px;">
            Payment Successful
          </span>
        </div>
      </div>

      <!-- Transaction Line Items -->
      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-top: 18px;">
        <tr>
          <td style="padding: 8px 0; font-size: 13px; color: #838894;">Date:</td>
          <td align="right" style="padding: 8px 0; font-size: 13px; color: #DBDDEA; font-weight: 500;">${formattedDate}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-size: 13px; color: #838894;">Payment ID:</td>
          <td align="right" style="padding: 8px 0; font-size: 13px; color: #DBDDEA; font-family: monospace; font-weight: 600;">${paymentId}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-size: 13px; color: #838894;">Order ID:</td>
          <td align="right" style="padding: 8px 0; font-size: 13px; color: #DBDDEA; font-family: monospace; font-weight: 600;">${orderId}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-size: 13px; color: #838894;">Processor:</td>
          <td align="right" style="padding: 8px 0; font-size: 13px; color: #DBDDEA;">Razorpay Secure Gateway</td>
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
                <a href="${frontendUrl}/dashboard/enrolled-courses" target="_blank" style="display: inline-block; padding: 15px 36px; font-size: 16px; font-weight: 700; color: #000814; text-decoration: none; border-radius: 10px; letter-spacing: 0.2px;">
                  Access Your Courses &rarr;
                </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>

    <!-- Need assistance note -->
    <p style="margin: 0; font-size: 13px; color: #838894; text-align: center; line-height: 1.5;">
      A copy of this digital invoice has been attached to your CourseHub student account. For billing questions, write to us anytime.
    </p>
  `;

  return emailBase({
    title: "CourseHub - Payment Confirmation",
    preheader: `Payment of ₹${amount} received successfully for CourseHub order #${orderId}.`,
    contentHtml,
  });
};
