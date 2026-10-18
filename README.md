<div align="center">

<img src="https://img.shields.io/badge/resume-builder-4F46E5?style=for-the-badge&labelColor=0F0F0F" alt="Resume Builder" height="40"/>

# Resume Builder

**Create. Customize. Share. Land the job.**

A full-stack, AI-powered resume builder with real-time preview, multiple templates, PDF import, and shareable links — built for the modern job seeker.

<br/>

[![Live Demo](https://img.shields.io/badge/Live%20Demo-webresumebuilder.vercel.app-4F46E5?style=for-the-badge&logo=vercel&logoColor=white)](https://webresumebuilder.vercel.app)

<br/>

![React](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=flat-square&logo=tailwind-css&logoColor=white)
![Express](https://img.shields.io/badge/Express_5-000000?style=flat-square&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black)

</div>

---

## ✨ Features

| | Feature | Description |
|---|---|---|
| 🤖 | **AI Content Enhancement** | Enhance your professional summary and job descriptions with Gemini AI |
| 📄 | **PDF Resume Import** | Upload an existing PDF — AI extracts and populates your resume instantly |
| 🎨 | **4 Premium Templates** | Classic, Modern, Minimal, and Minimal Image templates to suit every style |
| 🎨 | **Custom Accent Colors** | Personalize any template with a full color picker |
| ⚡ | **Real-time Preview** | See every change rendered live as you type |
| 🔗 | **Shareable Public Links** | Toggle your resume public and share a permanent link with recruiters |
| 📥 | **PDF Download** | Download your polished resume as a PDF in one click |
| 🔐 | **Google & Email Auth** | Sign in with Google or create an account with email and password |
| ☁️ | **Cloud Storage** | Your resumes are saved and accessible from any device |

---

## 🛠️ Tech Stack

<table>
<tr>
<td valign="top" width="50%">

### Frontend
- **React 19** — UI library
- **TypeScript** — Type safety across the codebase
- **Vite 7** — Lightning-fast build tool
- **Tailwind CSS v4** — Utility-first styling
- **Redux Toolkit** — Predictable state management
- **React Router v7** — Client-side routing
- **Firebase SDK** — Google OAuth on the client
- **Axios** — HTTP client
- **react-pdftotext** — In-browser PDF parsing
- **Lucide React** — Icon library

</td>
<td valign="top" width="50%">

### Backend
- **Node.js + Express 5** — API server
- **TypeScript** — Type-safe server code
- **MongoDB + Mongoose** — Database & ODM
- **JWT** — Stateless authentication
- **Firebase Admin SDK** — Google ID token verification
- **Gemini API (OpenAI-compatible)** — AI enhancements & resume extraction
- **ImageKit** — Profile photo storage & CDN
- **Multer** — Multipart file uploads
- **bcrypt** — Password hashing

</td>
</tr>
</table>

---

## 📁 Project Structure

```
resume-builder/
├── client/                         # Vite + React frontend
│   ├── src/
│   │   ├── app/
│   │   │   └── features/
│   │   │       └── authSlice.ts    # Auth state (Redux)
│   │   ├── components/
│   │   │   ├── home/               # Landing page sections
│   │   │   └── templates/          # Resume template components
│   │   ├── configs/                # API client, Firebase, theme
│   │   ├── pages/                  # Route-level pages
│   │   │   ├── Home.tsx
│   │   │   ├── Dashboard.tsx
│   │   │   ├── ResumeBuilder.tsx
│   │   │   ├── Preview.tsx
│   │   │   └── Login.tsx
│   │   └── lib/                    # Utility functions
│   └── public/
│
└── server/                         # Express backend
    └── src/
        ├── configs/                # DB, AI, Firebase Admin, ImageKit, Multer
        ├── controller/             # aiController, resumeController, userController
        ├── middlewares/            # JWT auth middleware
        ├── model/                  # User & Resume Mongoose models
        ├── routes/                 # API route definitions
        └── types/                  # Express type augmentations
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18+
- **MongoDB** database (local or [Atlas](https://www.mongodb.com/atlas))
- **Firebase** project (for Google Auth)
- **Gemini API** key ([Google AI Studio](https://aistudio.google.com/))
- **ImageKit** account (for profile photo uploads)

---

### Environment Variables

#### `client/.env`

```env
VITE_BASE_URL=http://localhost:3000

# Firebase Web App Config
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

#### `server/.env`

```env
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

# Gemini AI
GEMINI_API_KEY=your_gemini_api_key
GEMINI_BASE_URL=https://generativelanguage.googleapis.com/v1beta/openai/
GEMINI_MODEL=gemini-2.5-flash

# ImageKit
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_id

# CORS — deployed frontend URL(s), comma-separated
CLIENT_URL=http://localhost:5173

# Firebase Admin SDK (for Google sign-in token verification)
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@your_project.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

---

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/rajpurohitmohit/resume-builder.git
cd resume-builder

# 2. Install server dependencies
cd server && npm install

# 3. Install client dependencies
cd ../client && npm install

# 4. Add environment files
#    — Create client/.env and server/.env using the templates above

# 5. Start both servers
#    Terminal 1 (server)
cd server && npm run dev

#    Terminal 2 (client)
cd client && npm run dev
```

Open **[http://localhost:5173](http://localhost:5173)** in your browser.

---

## 📡 API Reference

### Users — `/api/users`

| Method | Endpoint    | Auth | Description                          |
|--------|-------------|------|--------------------------------------|
| `POST` | `/register` | —    | Register with email & password       |
| `POST` | `/login`    | —    | Login with email & password          |
| `POST` | `/google`   | —    | Sign in / up with Google ID token    |
| `GET`  | `/data`     | ✅   | Get authenticated user's profile     |
| `GET`  | `/resumes`  | ✅   | Get all resumes for authenticated user |

### Resumes — `/api/resumes`

| Method   | Endpoint            | Auth | Description                          |
|----------|---------------------|------|--------------------------------------|
| `POST`   | `/create`           | ✅   | Create a new empty resume            |
| `PUT`    | `/update`           | ✅   | Update resume data + profile image   |
| `DELETE` | `/delete/:resumeId` | ✅   | Delete a resume                      |
| `GET`    | `/get/:resumeId`    | ✅   | Get a private resume (owner only)    |
| `GET`    | `/public/:resumeId` | —    | Get a public shareable resume        |

### AI — `/api/ai`

| Method | Endpoint          | Auth | Description                                      |
|--------|-------------------|------|--------------------------------------------------|
| `POST` | `/enhance-pro-sum`| ✅   | AI-enhance professional summary                  |
| `POST` | `/enhance-job-desc`| ✅  | AI-enhance job description                       |
| `POST` | `/upload-resume`  | ✅   | Parse PDF text → extract & create a new resume   |

---

## 🎨 Resume Templates

| Template | Style |
|---|---|
| **Classic** | Traditional two-column layout, timeless and ATS-friendly |
| **Modern** | Bold header with accent color, contemporary feel |
| **Minimal** | Clean single-column, distraction-free design |
| **Minimal Image** | Minimal layout with profile photo support |

---

## 🔧 Scripts

```bash
# Client
npm run dev       # Start Vite dev server
npm run build     # TypeScript check + production build
npm run preview   # Preview production build locally
npm run lint      # Run ESLint

# Server
npm run dev       # Start server with nodemon (hot reload)
npm run build     # Compile TypeScript to dist/
npm start         # Run compiled server (production)
```

---

## ☁️ Deployment

| Service | Platform | Notes |
|---|---|---|
| **Frontend** | [Vercel](https://vercel.com) | Set all `VITE_*` env variables in Vercel project settings. Redeploy after any env change. |
| **Backend** | [Render](https://render.com) | Set all server env variables. Set `CLIENT_URL` to your Vercel domain for CORS. |

> **Firebase Auth Note:** Add your Vercel production domain to **Firebase Console → Authentication → Settings → Authorized domains** to allow Google sign-in on the deployed site.

---

## 📄 License

This project is licensed under the **ISC License**.

---

<div align="center">

Built with 🤍 by **[Mohit Rajpurohit](https://github.com/rajpurohitmohit)**

</div>
