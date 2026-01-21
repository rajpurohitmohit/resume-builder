# 📄 Resume Builder

A modern, full-stack resume builder application that allows users to create, customize, and share professional resumes with AI-powered content suggestions.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Express%205-339933?style=flat&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose%209-47A248?style=flat&logo=mongodb&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1-06B6D4?style=flat&logo=tailwindcss&logoColor=white)

## ✨ Features

- **Multiple Resume Templates** - Choose from Classic, Modern, Minimal, and Minimal Image templates
- **AI-Powered Suggestions** - Get intelligent content suggestions powered by OpenAI
- **Real-time Preview** - See changes instantly as you edit your resume
- **Custom Accent Colors** - Personalize your resume with custom color schemes
- **PDF Resume Import** - Extract content from existing PDF resumes
- **Image Upload** - Add profile photos with ImageKit integration
- **User Authentication** - Secure JWT-based authentication
- **Cloud Storage** - Save and access your resumes from anywhere
- **Shareable Links** - Make your resume public and share with recruiters

## 🛠️ Tech Stack

### Frontend

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS 4** - Styling
- **Redux Toolkit** - State management
- **React Router 7** - Navigation
- **Axios** - HTTP client
- **Lucide React** - Icons

### Backend

- **Node.js** - Runtime
- **Express 5** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **OpenAI API** - AI features
- **ImageKit** - Image storage
- **Multer** - File uploads

## 📁 Project Structure

```
resume-builder/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── app/           # Redux store & slices
│   │   ├── assets/        # Static assets
│   │   ├── components/    # Reusable components
│   │   │   ├── home/      # Landing page components
│   │   │   └── templates/ # Resume templates
│   │   ├── configs/       # API configuration
│   │   ├── lib/           # Utility functions
│   │   └── pages/         # Page components
│   └── public/            # Public assets
│
└── server/                 # Backend Node.js application
    └── src/
        ├── configs/       # Database, AI, ImageKit configs
        ├── controller/    # Route controllers
        ├── middlewares/   # Auth middleware
        ├── model/         # Mongoose models
        ├── routes/        # API routes
        └── types/         # TypeScript types
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB database
- OpenAI API key
- ImageKit account (for image uploads)

### Environment Variables

#### Client (`client/.env`)

```env
VITE_API_URL=http://localhost:3000
```

#### Server (`server/.env`)

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

# OpenAI
OPENAI_API_KEY=your_openai_api_key

# ImageKit
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
```

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/resume-builder.git
   cd resume-builder
   ```

2. **Install server dependencies**

   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**

   ```bash
   cd ../client
   npm install
   ```

4. **Set up environment variables**
   - Create `.env` files in both `client` and `server` directories
   - Add the required environment variables as shown above

5. **Start the development servers**

   In the server directory:

   ```bash
   npm run dev
   ```

   In the client directory:

   ```bash
   npm run dev
   ```

6. **Open your browser**
   - Frontend: `http://localhost:5173`
   - Backend: `http://localhost:3000`

## 📝 API Endpoints

### Authentication

| Method | Endpoint              | Description       |
| ------ | --------------------- | ----------------- |
| POST   | `/api/users/register` | Register new user |
| POST   | `/api/users/login`    | User login        |
| GET    | `/api/users/data`     | Get user data     |

### Resumes

| Method | Endpoint           | Description          |
| ------ | ------------------ | -------------------- |
| GET    | `/api/resumes`     | Get all user resumes |
| GET    | `/api/resumes/:id` | Get resume by ID     |
| POST   | `/api/resumes`     | Create new resume    |
| PUT    | `/api/resumes/:id` | Update resume        |
| DELETE | `/api/resumes/:id` | Delete resume        |

### AI Features

| Method | Endpoint          | Description                |
| ------ | ----------------- | -------------------------- |
| POST   | `/api/ai/suggest` | Get AI content suggestions |

## 🎨 Available Templates

1. **Classic** - Traditional professional layout
2. **Modern** - Contemporary design with accent colors
3. **Minimal** - Clean and simple design
4. **Minimal Image** - Minimal design with profile photo

## 🔧 Scripts

### Client

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Server

```bash
npm run dev      # Start development server with nodemon
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [OpenAI](https://openai.com/)
- [ImageKit](https://imagekit.io/)

---

<p align="center">Made with by Mohit Rajpurohit</p>
