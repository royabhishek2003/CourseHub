# CourseHub – Full Stack EdTech Platform

CourseHub is a full-stack EdTech platform that enables instructors to create structured video courses and students to securely purchase and access learning content. The platform integrates authentication, payments, and course management into a unified system.

##  Features

- Instructor & Student role-based access control
- Structured course builder (sections → video subsections)
- Secure authentication with bcrypt + JWT
- JWT stored in HTTP-only cookies
- Password reset via email token flow
- Protected routes & authorization middleware
- Razorpay payment integration
- Ratings & reviews system
- Category-based course discovery
- Trending & top-rated recommendations
- Responsive UI for smooth learning experience
- cloudinary for 

## 🛠 Tech Stack

**Frontend**
- React (Vite)
- Tailwind / CSS
- Axios

**Backend**
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcrypt password hashing

**Payments & Media**
- Razorpay API
- Cloudinary (media storage)
- Nodemailer (email service)

##  Architecture

- React frontend communicates with Express REST APIs
- MongoDB stores users, courses, and reviews
- JWT sessions managed via HTTP-only cookies
- Modular backend with routes, controllers, middleware
- Secure environment variable management

##  Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/coursehub.git
cd coursehub
```

---

### 2. Frontend setup

Create a `.env` file inside `/client`

```
VITE_BASE_URL=http://localhost:4000/api/v1
VITE_RAZORPAY_KEY=your_razorpay_key
```

Run frontend:

```bash
cd client
npm install
npm run dev
```

---

### 3. Backend setup

Create a `.env` file inside `/server`

```
MONGODB_URL=your_mongodb_uri
PORT=4000

MAIL_HOST=smtp.gmail.com
MAIL_USER=your_email
MAIL_PASS=your_app_password
MAIL_PORT=587

JWT_SECRET=your_jwt_secret

RAZORPAY_KEY_ID=your_key
RAZORPAY_SECRET=your_secret
RAZORPAY_WEBHOOK_SECRET=your_webhook_secret

CLOUD_NAME=your_cloud_name
API_KEY=your_api_key
API_SECRET=your_api_secret
```

Run backend:

```bash
cd server
npm install
npm run dev
```

---

##  Security Notes

- Never commit `.env` files to GitHub
- Store secrets in environment variables
- Rotate credentials if exposed
- Use HTTP-only cookies for session security

##  Future Improvements

- Course progress tracking
- Instructor analytics dashboard
- CDN video streaming
- Subscription model
- Mobile app support

##  Contributing

Contributions are welcome. Open an issue first for major changes.