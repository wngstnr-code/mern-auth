# 🔐 MERN Authentication System

Aplikasi full-stack authentication modern menggunakan **MongoDB**, **Express**, **React**, dan **Node.js** dengan fitur lengkap untuk manajemen user authentication.

## ✨ Features

- ✅ **User Registration** - Daftar akun dengan validasi email
- ✅ **User Login** - Login dengan email dan password
- ✅ **Email Verification** - Verifikasi email menggunakan OTP (One-Time Password)
- ✅ **Password Reset** - Reset password melalui email
- ✅ **JWT Authentication** - Token-based authentication dengan secure cookies
- ✅ **Protected Routes** - Middleware untuk protect endpoints
- ✅ **User Profile** - Lihat data user yang sedang login
- ✅ **Logout** - Secure logout dengan cookie clear
- ✅ **Responsive Design** - Mobile-friendly UI dengan Tailwind CSS

## 🎯 Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **Bcryptjs** - Password hashing
- **Nodemailer** - Email service

### Frontend
- **React 18** - UI library
- **Vite** - Build tool
- **React Router** - Navigation
- **Axios** - HTTP client
- **Tailwind CSS** - Styling
- **React Toastify** - Notifications

## 📋 Prerequisites

- Node.js v14 atau lebih
- npm atau yarn
- MongoDB Atlas account
- Gmail account (untuk email service)
- Git

## 🚀 Installation

### 1. Clone Repository

```bash
git clone https://github.com/username/mern-auth.git
cd mern-auth
```

### 2. Setup Server

```bash
cd server
npm install
```

**Buat file `.env` di folder server:**

```plaintext
PORT=4000
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/mern_auth?retryWrites=true&w=majority
JWT_SECRET=your-super-secret-key-minimum-32-characters
NODE_ENV=development
GMAIL_USER=your-email@gmail.com
GMAIL_PASS=your-app-specific-password
```

### 3. Setup Client

```bash
cd ../client
npm install
```

**Buat file `.env` di folder client:**

```plaintext
VITE_BACKEND_URL=http://localhost:4000/
```

## 🏃 Running Locally

**Terminal 1 - Start Backend Server:**

```bash
cd server
npm run server
```

Server akan running di `http://localhost:4000`

**Terminal 2 - Start Frontend Client:**

```bash
cd client
npm run dev
```

Client akan running di `http://localhost:5173`

## 📁 Project Structure

```
mern-auth/
├── server/
│   ├── config/
│   │   ├── mongodb.js          # Database connection
│   │   └── nodemailer.js       # Email configuration
│   ├── controllers/
│   │   ├── authController.js   # Authentication logic
│   │   └── userController.js   # User operations
│   ├── middleware/
│   │   └── userAuth.js         # JWT verification middleware
│   ├── models/
│   │   └── userModel.js        # User schema
│   ├── routes/
│   │   ├── authRoutes.js       # Auth endpoints
│   │   └── userRoutes.js       # User endpoints
│   ├── .env                    # Environment variables
│   ├── .gitignore
│   ├── package.json
│   └── server.js               # Entry point
│
├── client/
│   ├── src/
│   │   ├── assets/
│   │   │   ├── assets.js       # Image imports
│   │   │   └── emailTemplates.js
│   │   ├── components/
│   │   │   ├── Header.jsx      # Welcome header
│   │   │   └── Navbar.jsx      # Navigation bar
│   │   ├── context/
│   │   │   └── AppContext.jsx  # Global state management
│   │   ├── pages/
│   │   │   ├── Home.jsx        # Home page
│   │   │   ├── Login.jsx       # Login & Register page
│   │   │   ├── EmailVerify.jsx # Email verification page
│   │   │   └── ResetPassword.jsx # Password reset page
│   │   ├── App.jsx             # Main app component
│   │   ├── main.jsx            # React entry point
│   │   └── index.css           # Global styles
│   ├── .env                    # Environment variables
│   ├── .gitignore
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
│
└── README.md
```

## 🔐 API Endpoints

### Authentication Routes (`/api/auth`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|----------------|
| `POST` | `/register` | Register user baru | ❌ No |
| `POST` | `/login` | Login dengan email & password | ❌ No |
| `POST` | `/logout` | Logout user | ✅ Yes |
| `GET` | `/is-auth` | Check authentication status | ✅ Yes |
| `POST` | `/send-verify-otp` | Kirim OTP verifikasi email | ✅ Yes |
| `POST` | `/verify-account` | Verify email dengan OTP | ✅ Yes |
| `POST` | `/send-reset-otp` | Kirim OTP reset password | ❌ No |
| `POST` | `/reset-password` | Reset password dengan OTP | ❌ No |

### User Routes (`/api/user`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|----------------|
| `GET` | `/data` | Get user data | ✅ Yes |

## 🔑 Environment Variables

### Server `.env`

```plaintext
# Server Configuration
PORT=4000
NODE_ENV=development

# Database
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/mern_auth?retryWrites=true&w=majority

# JWT
JWT_SECRET=your-super-secret-key-minimum-32-characters

# Email Service
GMAIL_USER=your-email@gmail.com
GMAIL_PASS=your-app-specific-password
```

### Client `.env`

```plaintext
# Backend URL
VITE_BACKEND_URL=http://localhost:4000/
```

## 📧 Gmail Setup untuk Email Service

### 1. Enable 2-Step Verification

- Buka https://myaccount.google.com/security
- Scroll ke bawah dan enable "2-Step Verification"
- Follow the steps

### 2. Generate App Password

- Buka https://myaccount.google.com/apppasswords
- Select "Mail" untuk app
- Select "Windows Computer" untuk device
- Click "Generate"
- Copy 16-character password

### 3. Update `.env`

```plaintext
GMAIL_USER=your-email@gmail.com
GMAIL_PASS=xxxx xxxx xxxx xxxx
```

## 🧪 Testing dengan Postman

### Register User

```
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "Password123!@#"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User created successfully"
}
```

### Login

```
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "Password123!@#"
}
```

**Response:**
```json
{
  "success": true
}
```

### Send Verify OTP

```
POST /api/auth/send-verify-otp
(Requires auth token in cookies)
```

### Verify Email

```
POST /api/auth/verify-account
Content-Type: application/json

{
  "otp": "123456"
}
```

### Send Reset OTP

```
POST /api/auth/send-reset-otp
Content-Type: application/json

{
  "email": "john@example.com"
}
```

### Reset Password

```
POST /api/auth/reset-password
Content-Type: application/json

{
  "email": "john@example.com",
  "otp": "123456",
  "newPassword": "NewPassword123!@#"
}
```

### Get User Data

```
GET /api/user/data
(Requires auth token in cookies)
```

## 🚀 Deployment

### Deploy Server ke Render

1. Push code ke GitHub
2. Buka https://render.com
3. Click "New +" → "Web Service"
4. Connect GitHub repository
5. Set Build Command: `npm install`
6. Set Start Command: `node server.js`
7. Add environment variables
8. Click "Create Web Service"
9. Copy backend URL

### Deploy Client ke Vercel

1. Buka https://vercel.com
2. Click "Add New" → "Project"
3. Import GitHub repository
4. Add environment variable: `VITE_BACKEND_URL=<your-backend-url>`
5. Click "Deploy"

## 🌐 Live Website

| Platform | Link |
|----------|------|
| **Frontend (Vercel)** | Coming soon... |
| **Backend API (Render)** | Coming soon... |

## 🐛 Troubleshooting

### Error: "Could not connect to any servers in MongoDB Atlas"

**Solution:**
- Pastikan IP address di-whitelist di MongoDB Atlas
- Buka https://cloud.mongodb.com → Network Access
- Click "ADD IP ADDRESS" → "Allow Access from Anywhere"
- Verifikasi MONGODB_URI di `.env`

### Error: "Email not sending"

**Solution:**
- Verify Gmail credentials
- Pastikan app password sudah di-generate
- Check GMAIL_USER dan GMAIL_PASS di `.env`
- Ensure "Less secure app access" is enabled

### Error: "Invalid token" or "Unauthorized"

**Solution:**
- Clear browser cookies
- Login ulang
- Check console untuk error messages
- Pastikan JWT_SECRET sama di development dan production

### Error: "CORS error"

**Solution:**
- Update `allowedOrigins` di server dengan client URL
- Pastikan `credentials: true` di CORS configuration
- Restart server

### Build Failed di Vercel

**Solution:**
- Check "Build Logs" di Vercel dashboard
- Run `npm install` lokal
- Clear cache: `npm run build` dengan `npm cache clean --force`
- Push ulang ke GitHub

## 📚 Learn More

- [Express Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Wangsit Nursyahada**
- GitHub: [@wngstnr-code](https://github.com/wngstnr-code)
- Email: wangsitsada1234@gmail.com

## 📞 Support

Jika ada pertanyaan atau mengalami issue, silakan buat GitHub issue di repository ini.

---

Made with ❤️ by Wangsit Nursyahada

**Last Updated:** November 2025