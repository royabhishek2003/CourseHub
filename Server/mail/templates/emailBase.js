/**
 * CourseHub Base Email Layout
 * Provides a responsive, modern, dark-themed email container
 * compatible with Gmail, Apple Mail, Outlook, and mobile clients.
 */

const getFrontendUrl = () => {
  return process.env.FRONTEND_URL || "https://coursehub-frontend-rdtd.onrender.com";
};

const emailBase = ({ title, preheader, contentHtml }) => {
  const frontendUrl = getFrontendUrl();
  const currentYear = new Date().getFullYear();

  return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="x-apple-disable-message-reformatting">
  <title>${title}</title>
  <!--[if mso]>
  <style>
    * { font-family: 'Segoe UI', sans-serif !important; }
  </style>
  <![endif]-->
  <style>
    /* Reset styles */
    html, body {
      margin: 0 !important;
      padding: 0 !important;
      height: 100% !important;
      width: 100% !important;
      background-color: #000814;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    table, td {
      border-collapse: collapse !important;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
    }
    img {
      border: 0;
      line-height: 100%;
      outline: none;
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
    }
    a {
      text-decoration: none;
    }
    /* Mobile responsive */
    @media only screen and (max-width: 620px) {
      .email-container {
        width: 100% !important;
        margin: auto !important;
      }
      .content-cell {
        padding: 24px 16px !important;
      }
      .otp-code {
        font-size: 28px !important;
        letter-spacing: 6px !important;
      }
      .mobile-stack {
        display: block !important;
        width: 100% !important;
      }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #000814; color: #F1F2FF;">
  <!-- Hidden Preheader Preview Text -->
  <div style="display: none; font-size: 1px; color: #000814; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
    ${preheader || title} &#847; &zwnj; &nbsp; &zwnj; &nbsp; &zwnj; &nbsp; &zwnj; &nbsp; &zwnj; &nbsp; &zwnj; &nbsp;
  </div>

  <!-- Outer Canvas Table -->
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #000814; table-layout: fixed;">
    <tr>
      <td align="center" style="padding: 30px 12px;">
        
        <!-- Main Email Container Box -->
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" class="email-container" style="max-width: 600px; margin: 0 auto; background-color: #161D29; border-radius: 16px; border: 1px solid #2C333F; overflow: hidden; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);">
          
          <!-- Top Accent Rainbow Border -->
          <tr>
            <td height="4" style="background: linear-gradient(90deg, #FFD60A 0%, #06D6A0 50%, #118AB2 100%); font-size: 0; line-height: 0;">&nbsp;</td>
          </tr>

          <!-- Header / Brand Section -->
          <tr>
            <td align="center" style="padding: 32px 24px 20px 24px; border-bottom: 1px solid rgba(255, 255, 255, 0.06);">
              <a href="${frontendUrl}" target="_blank" style="display: inline-flex; align-items: center; text-decoration: none;">
                <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="vertical-align: middle; padding-right: 10px;">
                      <!-- Styled Brand Insignia Icon -->
                      <div style="width: 38px; height: 38px; border-radius: 10px; background: linear-gradient(135deg, #FFD60A 0%, #FFA200 100%); display: inline-block; text-align: center; line-height: 38px; box-shadow: 0 4px 12px rgba(255, 214, 10, 0.3);">
                        <span style="font-size: 20px; font-weight: 900; color: #000814;">C</span>
                      </div>
                    </td>
                    <td style="vertical-align: middle;">
                      <span style="font-size: 24px; font-weight: 800; letter-spacing: -0.5px; color: #FFFFFF; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                        Course<span style="color: #FFD60A;">Hub</span>
                      </span>
                    </td>
                  </tr>
                </table>
              </a>
              <div style="font-size: 12px; font-weight: 500; color: #838894; margin-top: 6px; letter-spacing: 0.5px; text-transform: uppercase;">
                Empower Your Tech Future
              </div>
            </td>
          </tr>

          <!-- Main Body Content -->
          <tr>
            <td class="content-cell" style="padding: 36px 32px 32px 32px; font-size: 15px; line-height: 1.6; color: #DBDDEA;">
              ${contentHtml}
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding: 0 32px;">
              <div style="height: 1px; background-color: #2C333F; width: 100%;"></div>
            </td>
          </tr>

          <!-- Footer Section -->
          <tr>
            <td style="padding: 28px 32px 32px 32px; text-align: center; font-size: 13px; color: #6E727F; line-height: 1.6;">
              <!-- Quick Navigation Links -->
              <div style="margin-bottom: 16px;">
                <a href="${frontendUrl}/dashboard" target="_blank" style="color: #999DAA; margin: 0 10px; font-weight: 500; font-size: 13px; text-decoration: none;">Dashboard</a>
                <span style="color: #424854;">&bull;</span>
                <a href="${frontendUrl}/about" target="_blank" style="color: #999DAA; margin: 0 10px; font-weight: 500; font-size: 13px; text-decoration: none;">About Us</a>
                <span style="color: #424854;">&bull;</span>
                <a href="${frontendUrl}/contact" target="_blank" style="color: #999DAA; margin: 0 10px; font-weight: 500; font-size: 13px; text-decoration: none;">Contact Support</a>
              </div>

              <!-- Security Reminder -->
              <p style="margin: 0 0 12px 0; font-size: 12px; color: #585D69;">
                This email was sent to notify you about your CourseHub account activities. CourseHub will never ask for your confidential password or private security keys.
              </p>

              <!-- Copyright -->
              <p style="margin: 0; font-size: 12px; color: #424854;">
                &copy; ${currentYear} CourseHub EdTech Platform. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
        <!-- End Email Container Box -->

      </td>
    </tr>
  </table>
  <!-- End Outer Canvas Table -->
</body>
</html>`;
};

module.exports = emailBase;
