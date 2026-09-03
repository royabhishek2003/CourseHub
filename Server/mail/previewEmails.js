const fs = require("fs");
const path = require("path");

const otpTemplate = require("./templates/emailVerificationTemplate");
const resetPasswordTemplate = require("./templates/resetPasswordTemplate");
const { passwordUpdated } = require("./templates/passwordUpdate");
const { courseEnrollmentEmail } = require("./templates/courseEnrollmentEmail");
const { paymentSuccessEmail } = require("./templates/paymentSuccessEmail");
const { contactUsEmail } = require("./templates/contactFormRes");

const outputDir = path.join(__dirname, "previews");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const templates = [
  {
    name: "01-otp-verification.html",
    title: "1. OTP Email Verification",
    html: otpTemplate("842193"),
  },
  {
    name: "02-reset-password.html",
    title: "2. Reset Password",
    html: resetPasswordTemplate(
      "https://coursehub-frontend-rdtd.onrender.com/update-password/a9f8b47e2c5d10948b81fa39281a0e",
      "Abhishek Roy"
    ),
  },
  {
    name: "03-password-updated.html",
    title: "3. Password Update Confirmation",
    html: passwordUpdated("abhishek@example.com", "Abhishek Roy"),
  },
  {
    name: "04-course-enrollment.html",
    title: "4. Course Enrollment",
    html: courseEnrollmentEmail(
      "Full-Stack Web Development Masterclass 2026",
      "Abhishek Roy"
    ),
  },
  {
    name: "05-payment-success.html",
    title: "5. Payment Success Receipt",
    html: paymentSuccessEmail(
      "Abhishek Roy",
      4999,
      "order_O9a8Kd18Zlx021",
      "pay_Pk83K10smv92Lk"
    ),
  },
  {
    name: "06-contact-us.html",
    title: "6. Contact Us Acknowledgment",
    html: contactUsEmail(
      "abhishek@example.com",
      "Abhishek",
      "Roy",
      "I am interested in corporate team access for 25 engineers. Could you share enterprise pricing options?",
      "9876543210",
      "+91"
    ),
  },
];

// Write individual HTML files
templates.forEach((tpl) => {
  const filePath = path.join(outputDir, tpl.name);
  fs.writeFileSync(filePath, tpl.html, "utf-8");
  console.log(`Generated preview: ${tpl.name}`);
});

// Write a master interactive gallery preview file
const galleryHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CourseHub - Interactive Email Templates Gallery</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      margin: 0;
      background: #000814;
      color: #F1F2FF;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      display: flex;
      flex-direction: column;
      height: 100vh;
      overflow: hidden;
    }
    header {
      background: #161D29;
      padding: 16px 24px;
      border-bottom: 1px solid #2C333F;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 12px;
    }
    .brand {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 20px;
      font-weight: 800;
    }
    .brand-badge {
      width: 34px;
      height: 34px;
      background: linear-gradient(135deg, #FFD60A, #FFA200);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #000814;
      font-weight: 900;
      font-size: 18px;
    }
    .tabs {
      display: flex;
      gap: 8px;
      overflow-x: auto;
      max-width: 100%;
    }
    .tab-btn {
      background: #2C333F;
      color: #AFB2BF;
      border: 1px solid transparent;
      padding: 8px 16px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
      white-space: nowrap;
    }
    .tab-btn:hover {
      background: #3a4352;
      color: #FFFFFF;
    }
    .tab-btn.active {
      background: #FFD60A;
      color: #000814;
      font-weight: 700;
      box-shadow: 0 2px 10px rgba(255, 214, 10, 0.4);
    }
    .viewport-controls {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .size-btn {
      background: transparent;
      border: 1px solid #424854;
      color: #DBDDEA;
      padding: 6px 12px;
      border-radius: 6px;
      font-size: 12px;
      cursor: pointer;
    }
    .size-btn.active {
      border-color: #06D6A0;
      color: #06D6A0;
    }
    main {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: stretch;
      background: #00040A;
      padding: 16px;
      overflow: hidden;
    }
    iframe {
      border: none;
      width: 100%;
      max-width: 680px;
      height: 100%;
      border-radius: 12px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.8);
      background: #000814;
      transition: max-width 0.3s ease;
    }
  </style>
</head>
<body>
  <header>
    <div class="brand">
      <div class="brand-badge">C</div>
      <div>Course<span style="color:#FFD60A;">Hub</span> Email Suite</div>
    </div>
    <div class="tabs" id="tabs">
      ${templates
        .map(
          (t, idx) =>
            `<button class="tab-btn ${idx === 0 ? "active" : ""}" onclick="switchTab('${t.name}', this)">${t.title}</button>`
        )
        .join("\n      ")}
    </div>
    <div class="viewport-controls">
      <button class="size-btn active" onclick="setSize('680px', this)">Desktop</button>
      <button class="size-btn" onclick="setSize('420px', this)">Mobile</button>
    </div>
  </header>
  <main>
    <iframe id="previewFrame" src="${templates[0].name}"></iframe>
  </main>
  <script>
    function switchTab(src, btn) {
      document.getElementById('previewFrame').src = src;
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    }
    function setSize(width, btn) {
      document.getElementById('previewFrame').style.maxWidth = width;
      document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    }
  </script>
</body>
</html>`;

fs.writeFileSync(path.join(outputDir, "index.html"), galleryHtml, "utf-8");
console.log("Generated master gallery preview: index.html");
