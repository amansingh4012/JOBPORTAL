# Job Portal - Full Stack MERN Application

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://jobportal-eosin-two.vercel.app)
[![Backend API](https://img.shields.io/badge/Backend-API-blue)](https://jobportal-234t.onrender.com)

A comprehensive full-stack job portal application built with the MERN stack that connects job seekers with employers. This platform provides a complete solution for job searching, application management, and recruitment processes.

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📦 Installation](#-installation)
- [🔧 Configuration](#-configuration)
- [🚀 Running the Application](#-running-the-application)
- [📁 Project Structure](#-project-structure)
- [🔗 API Endpoints](#-api-endpoints)
- [� User Roles](#-user-roles)
- [📱 Screenshots](#-screenshots)
- [🚀 Deployment](#-deployment)
- [📄 License](#-license)

## ✨ Features

### 👤 For Job Seekers (Students)
- **User Authentication**: Secure registration and login with JWT
- **Profile Management**: Complete profile setup with resume upload
- **Job Search & Filter**: Advanced search with location, salary, and company filters
- **Job Applications**: Apply for jobs with one-click application
- **Application Tracking**: Monitor application status and history
- **Resume Management**: Upload and manage resume files via Cloudinary
- **Responsive Design**: Mobile-friendly interface

### 🏢 For Employers (Recruiters)
- **Company Registration**: Create and manage company profiles
- **Job Posting**: Post detailed job openings with requirements
- **Application Management**: Review and manage job applications
- **Candidate Profiles**: Access to applicant profiles and resumes
- **Admin Dashboard**: Comprehensive admin panel for job and company management
- **Analytics**: Track job posting performance

### 🔐 Authentication & Security
- JWT-based authentication system
- Password hashing with bcryptjs
- Protected routes for authenticated users
- Role-based access control (Student/Recruiter)
- Secure file upload handling

## 🛠️ Tech Stack

### Frontend
- **React.js 19.1.1** - UI Library
- **Redux Toolkit** - State Management
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/UI** - Modern UI components
- **Framer Motion** - Animations and transitions
- **Axios** - HTTP requests
- **Vite** - Build tool and development server

### Backend  
- **Node.js** - Runtime environment
- **Express.js 5.1.0** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **Multer** - File upload handling
- **Cloudinary** - Cloud storage for images/files
- **CORS** - Cross-origin resource sharing

### Development Tools
- **Nodemon** - Development server auto-restart
- **ESLint** - Code linting
- **dotenv** - Environment variable management

## � Installation

### Prerequisites
- Node.js (v16.0.0 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager
- Cloudinary account (for file uploads)

### Clone the Repository
```bash
git clone https://github.com/amansingh4012/JOBPORTAL.git
cd JOBPORTAL
```

### Backend Setup
```bash
cd BACKEND
npm install
```

### Frontend Setup
```bash
cd ../FRONTEND  
npm install
```

## 🔧 Configuration

### Backend Environment Variables
Create a `.env` file in the `BACKEND` directory:

```env
# Database
MONGO_URI=your_mongodb_connection_string

# JWT Secret
SECRET_KEY=your_jwt_secret_key

# Cloudinary Configuration
CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret

# Server Configuration
PORT=3000
NODE_ENV=development
```

### Frontend Environment Variables
Create a `.env` file in the `FRONTEND` directory:

```env
# API Base URL (for development)
VITE_API_BASE_URL=http://localhost:3000

# For production, this will be your deployed backend URL
# VITE_API_BASE_URL=https://your-backend-url.onrender.com
```

## 🚀 Running the Application

### Development Mode

1. **Start the Backend Server**:
```bash
cd BACKEND
npm run dev
```
The backend server will start on `http://localhost:3000`

2. **Start the Frontend Development Server**:
```bash
cd FRONTEND
npm run dev
```
The frontend will start on `http://localhost:5173`

### Production Mode

1. **Build the Frontend**:
```bash
cd FRONTEND
npm run build
```

2. **Start the Backend**:
```bash
cd BACKEND
npm start
```

## 📁 Project Structure

```
JOBPORTAL/
├── README.md
├── DEPLOY.md
├── BACKEND/
│   ├── controllers/           # Route controllers
│   │   ├── applicationController.js
│   │   ├── companyController.js
│   │   ├── jobController.js
│   │   └── userController.js
│   ├── middlewares/          # Custom middleware
│   │   ├── isAuthenticated.js
│   │   └── mutler.js
│   ├── models/               # Database models
│   │   ├── applicationModel.js
│   │   ├── companyModel.js
│   │   ├── jobModel.js
│   │   └── userModel.js
│   ├── routes/               # API routes
│   │   ├── applicationRoute.js
│   │   ├── companyRoute.js
│   │   ├── jobRoute.js
│   │   └── userRoute.js
│   ├── utils/                # Utility functions
│   │   ├── cloudinary.js
│   │   ├── datauri.js
│   │   └── db.js
│   ├── .env                  # Environment variables
│   ├── .env.sample          # Environment template
│   ├── index.js             # Server entry point
│   └── package.json         # Backend dependencies
└── FRONTEND/
    ├── src/
    │   ├── components/       # React components
    │   │   ├── admin/       # Admin panel components
    │   │   ├── auth/        # Authentication components
    │   │   ├── shared/      # Shared components
    │   │   └── ui/          # UI components (Shadcn)
    │   ├── hooks/           # Custom React hooks
    │   ├── redux/           # Redux store and slices
    │   ├── utils/           # Frontend utilities
    │   ├── App.jsx          # Main App component
    │   └── main.jsx         # Entry point
    ├── public/              # Static assets
    ├── .env                 # Frontend environment variables
    ├── .env.sample         # Environment template
    ├── index.html          # HTML template
    ├── package.json        # Frontend dependencies
    └── vite.config.js      # Vite configuration
```

## 🔗 API Endpoints

### Authentication
- `POST /api/v1/user/register` - User registration
- `POST /api/v1/user/login` - User login
- `POST /api/v1/user/logout` - User logout
- `PUT /api/v1/user/profile/update` - Update user profile

### Jobs
- `GET /api/v1/job/get` - Get all jobs
- `GET /api/v1/job/getadminjobs` - Get admin jobs
- `GET /api/v1/job/get/:id` - Get job by ID
- `POST /api/v1/job/post` - Post a new job (recruiter only)

### Companies
- `GET /api/v1/company/get` - Get all companies
- `GET /api/v1/company/get/:id` - Get company by ID
- `POST /api/v1/company/register` - Register company
- `PUT /api/v1/company/update/:id` - Update company

### Applications
- `GET /api/v1/application/get` - Get user applications
- `GET /api/v1/application/:id/applicants` - Get job applicants
- `POST /api/v1/application/apply/:id` - Apply for job
- `PUT /api/v1/application/status/:id/update` - Update application status

## 🎯 User Roles

### Student/Job Seeker
- Browse and search for jobs
- Apply to job postings
- Manage profile and resume
- Track application status

### Recruiter/Employer
- Post job openings
- Manage company profile
- Review job applications
- Update application status
- Access admin dashboard

## 📱 Screenshots

> **Note**: Add screenshots of your application here to showcase the UI and functionality.

## 🚀 Deployment

This application is deployed on:
- **Frontend**: Vercel ([Live Demo](https://jobportal-eosin-two.vercel.app))
- **Backend**: Render ([API](https://jobportal-234t.onrender.com))

For detailed deployment instructions, see [DEPLOY.md](./DEPLOY.md)

## 🔒 Security Features

- JWT token-based authentication
- Password hashing with bcryptjs
- Protected API routes
- File upload validation
- CORS configuration
- Environment variable security

## 🎨 UI/UX Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Modern UI**: Clean and intuitive interface using Shadcn/UI components
- **Smooth Animations**: Enhanced user experience with Framer Motion
- **Loading States**: Proper loading indicators for better UX
- **Error Handling**: User-friendly error messages and validation






## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Aman Singh**
- GitHub: [@amansingh4012](https://github.com/amansingh4012)
- LinkedIn: [Connect with me](https://linkedin.com/in/your-linkedin)

## 🙏 Acknowledgments

- Thanks to the open-source community for the amazing tools and libraries
- Special thanks to all contributors and testers
- Inspired by modern job portal platforms

---

⭐ If you find this project helpful, please give it a star on GitHub!

Made   by [Aman Singh](https://github.com/amansingh4012)
