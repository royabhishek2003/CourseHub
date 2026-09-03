const emailBase = require("./emailBase");

/**
 * Modern Interactive Course Enrollment Email Template
 * @param {string} courseName - Enrolled course title
 * @param {string} name - Student's full name
 * @returns {string} Fully formatted responsive HTML email
 */
exports.courseEnrollmentEmail = (courseName, name) => {
  const frontendUrl =
    process.env.FRONTEND_URL || "https://coursehub-frontend-rdtd.onrender.com";

  const contentHtml = `
    <!-- Top Icon Badge -->
    <div style="text-align: center; margin-bottom: 24px;">
      <div style="display: inline-block; width: 64px; height: 64px; border-radius: 50%; background: rgba(255, 214, 10, 0.12); border: 1px solid rgba(255, 214, 10, 0.35); text-align: center; line-height: 64px;">
        <span style="font-size: 30px;">🎓</span>
      </div>
    </div>

    <!-- Title & Greeting -->
    <div style="text-align: center; margin-bottom: 24px;">
      <h1 style="margin: 0 0 10px 0; font-size: 24px; font-weight: 700; color: #FFFFFF; letter-spacing: -0.5px;">
        You're Enrolled!
      </h1>
      <p style="margin: 0; font-size: 15px; color: #DBDDEA; line-height: 1.5;">
        Congratulations <strong style="color: #FFD60A;">${name}</strong>, your enrollment has been confirmed.
      </p>
      <p style="margin: 8px 0 0 0; font-size: 14px; color: #999DAA; line-height: 1.6;">
        You now have unlimited access to all lectures, coding exercises, and resources for this course.
      </p>
    </div>

    <!-- Course Highlight Card -->
    <div style="background-color: #000814; border: 1px solid #2C333F; border-radius: 14px; padding: 24px; margin: 28px 0; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);">
      <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #06D6A0; margin-bottom: 8px;">
        Enrolled Course
      </div>
      <h2 style="margin: 0 0 16px 0; font-size: 20px; font-weight: 700; color: #FFFFFF; line-height: 1.4;">
        ${courseName}
      </h2>
      
      <!-- Feature Pills -->
      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 16px;">
        <tr>
          <td style="padding: 6px 0; font-size: 13px; color: #AFB2BF;">
            <span style="color: #FFD60A; margin-right: 6px;">&#10004;</span> Full Lifetime Access
          </td>
        </tr>
        <tr>
          <td style="padding: 6px 0; font-size: 13px; color: #AFB2BF;">
            <span style="color: #FFD60A; margin-right: 6px;">&#10004;</span> Certificate of Completion Included
          </td>
        </tr>
        <tr>
          <td style="padding: 6px 0; font-size: 13px; color: #AFB2BF;">
            <span style="color: #FFD60A; margin-right: 6px;">&#10004;</span> Access on Mobile, Tablet &amp; Desktop
          </td>
        </tr>
        <tr>
          <td style="padding: 6px 0; font-size: 13px; color: #AFB2BF;">
            <span style="color: #FFD60A; margin-right: 6px;">&#10004;</span> Interactive Q&amp;A Discussion Forum
          </td>
        </tr>
      </table>
    </div>

    <!-- Interactive CTA Button -->
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin: 32px 0;">
      <tr>
        <td align="center">
          <table role="presentation" border="0" cellpadding="0" cellspacing="0">
            <tr>
              <td align="center" style="border-radius: 10px; background: linear-gradient(135deg, #FFD60A 0%, #FFA200 100%); box-shadow: 0 4px 18px rgba(255, 214, 10, 0.35);">
                <a href="${frontendUrl}/dashboard/enrolled-courses" target="_blank" style="display: inline-block; padding: 15px 36px; font-size: 16px; font-weight: 700; color: #000814; text-decoration: none; border-radius: 10px; letter-spacing: 0.2px;">
                  Start Learning Now &rarr;
                </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>

    <!-- Motivating Tip Box -->
    <div style="background-color: rgba(6, 214, 160, 0.06); border: 1px solid rgba(6, 214, 160, 0.25); border-radius: 10px; padding: 14px 18px; text-align: center; margin-bottom: 20px;">
      <p style="margin: 0; font-size: 13px; color: #83F1DE; line-height: 1.5;">
        💡 <strong>Pro-tip:</strong> Set aside 20-30 minutes daily to maintain momentum. Consistency is the key to mastering code!
      </p>
    </div>
  `;

  return emailBase({
    title: `CourseHub - Enrolled in ${courseName}`,
    preheader: `You're officially enrolled in ${courseName}! Start learning on CourseHub today.`,
    contentHtml,
  });
};
