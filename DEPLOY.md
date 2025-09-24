# 🚀 Deployment Guide - Job Portal

This guide provides step-by-step instructions for deploying the Job Portal application. The backend will be deployed on Render and the frontend on Vercel.

## 📋 Table of Contents

- [🔧 Pre-deployment Setup](#-pre-deployment-setup)
- [🏗️ Backend Deployment on Render](#️-backend-deployment-on-render)
- [🌐 Frontend Deployment on Vercel](#-frontend-deployment-on-vercel)
- [🔗 Post-deployment Configuration](#-post-deployment-configuration)
- [🐛 Troubleshooting](#-troubleshooting)
- [📝 Useful Commands](#-useful-commands)

## 🔧 Pre-deployment Setup

### Prerequisites
- GitHub account with your code repository
- Render account (free tier available)
- Vercel account (free tier available)
- MongoDB Atlas account (for cloud database)
- Cloudinary account (for file uploads)

### 1. Prepare Your Repository
Ensure your code is pushed to GitHub:
```bash
git add .
git commit -m "Prepare for deployment"
git push origin main
```

### 2. Set up MongoDB Atlas
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster (free tier available)
3. Create a database user
4. Get your connection string
5. Add your application to the IP Access List (0.0.0.0/0 for all IPs)

### 3. Set up Cloudinary
1. Go to [Cloudinary](https://cloudinary.com/)
2. Create an account
3. Get your cloud name, API key, and API secret from the dashboard

## 🏗️ Backend Deployment on Render

### Step 1: Create a New Web Service

1. **Login to Render**
   - Go to [render.com](https://render.com) and sign in
   - Click "New +" and select "Web Service"

2. **Connect Repository**
   - Connect your GitHub account
   - Select your job portal repository
   - Choose the `main` branch

### Step 2: Configure Build Settings

1. **Basic Settings**
   - **Name**: `jobportal-backend` (or your preferred name)
   - **Environment**: `Node`
   - **Region**: Choose the closest to your users
   - **Branch**: `main`

2. **Build & Deploy Settings**
   - **Root Directory**: `BACKEND`
   - **Build Command**: `npm install`
   - **Start Command**: `node index.js`

### Step 3: Environment Variables

Add the following environment variables in Render dashboard:

```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/jobportal
SECRET_KEY=your_super_secret_jwt_key_here
CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
PORT=10000
NODE_ENV=production
```

### Step 4: Deploy

1. Click "Create Web Service"
2. Wait for the build to complete (5-10 minutes)
3. Note your backend URL: `https://your-service-name.onrender.com`

### Step 5: Update CORS Configuration

After deployment, update your backend's CORS configuration in `BACKEND/index.js`:

```javascript
const corsOptions = {
    origin: ['https://your-frontend-domain.vercel.app', 'http://localhost:5173'],
    credentials: true
}
```

Commit and push this change to trigger a re-deployment.

## 🌐 Frontend Deployment on Vercel

### Step 1: Create New Project

1. **Login to Vercel**
   - Go to [vercel.com](https://vercel.com) and sign in
   - Click "New Project"

2. **Import Repository**
   - Select your GitHub repository
   - Choose the root directory (not FRONTEND)

### Step 2: Configure Build Settings

1. **Project Settings**
   - **Project Name**: `jobportal-frontend` (or your preferred name)
   - **Framework Preset**: `Vite`
   - **Root Directory**: `FRONTEND`

2. **Build Settings**
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### Step 3: Environment Variables

Add environment variables in Vercel dashboard:

```
VITE_API_BASE_URL=https://your-backend-url.onrender.com
VITE_APP_NAME=Job Portal
VITE_APP_VERSION=1.0.0
```

### Step 4: Deploy

1. Click "Deploy"
2. Wait for deployment to complete (2-3 minutes)
3. Note your frontend URL: `https://your-project-name.vercel.app`

## 🔗 Post-deployment Configuration

### 1. Update API Endpoints

Update `FRONTEND/src/utils/constant.js` with your deployed backend URL:

```javascript
export const USER_API_END_POINT="https://your-backend-url.onrender.com/api/v1/user";
export const JOB_API_END_POINT="https://your-backend-url.onrender.com/api/v1/job";
export const APPLICATION_API_END_POINT="https://your-backend-url.onrender.com/api/v1/application";
export const COMPANY_API_END_POINT="https://your-backend-url.onrender.com/api/v1/company";
```

### 2. Update Backend CORS

Update `BACKEND/index.js` with your frontend URL:

```javascript
const corsOptions = {
    origin: 'https://your-frontend-url.vercel.app',
    credentials: true
}
```

### 3. Test the Deployment

1. Visit your frontend URL
2. Test user registration/login
3. Test job posting (as recruiter)
4. Test job application (as student)
5. Verify file upload functionality

## 🐛 Troubleshooting

### Common Backend Issues

#### Build Fails
- **Issue**: Dependencies not installing
- **Solution**: Check if `package.json` is in the root directory specified
- **Command**: Verify build command is `npm install`

#### Server Won't Start
- **Issue**: Port configuration
- **Solution**: Ensure `PORT` environment variable is set
- **Code**: Use `process.env.PORT || 3000`

#### Database Connection Fails
- **Issue**: MongoDB connection string
- **Solution**: Check MongoDB Atlas IP whitelist and connection string format
- **Format**: `mongodb+srv://username:password@cluster.mongodb.net/database`

#### CORS Errors
- **Issue**: Frontend can't access backend APIs
- **Solution**: Update CORS origin in backend to match frontend URL

### Common Frontend Issues

#### Build Fails
- **Issue**: Environment variables not accessible
- **Solution**: Ensure all variables start with `VITE_`
- **Example**: `VITE_API_BASE_URL` not `API_BASE_URL`

#### API Calls Fail
- **Issue**: Incorrect API endpoint URLs
- **Solution**: Update `constant.js` with deployed backend URL

#### Environment Variables Not Working
- **Issue**: Variables not updating
- **Solution**: Redeploy after adding environment variables

### Performance Issues

#### Slow Loading
- **Backend**: Render free tier has cold starts
- **Solution**: Consider upgrading to paid plan or implementing keep-alive

#### Images Not Loading
- **Issue**: Cloudinary configuration
- **Solution**: Verify Cloudinary credentials and upload settings

## 📝 Useful Commands

### Deployment Commands

```bash
# Force redeploy on Render
git commit --allow-empty -m "Force redeploy"
git push origin main

# Check deployment logs on Render
# Go to your service dashboard and click "Logs"

# Redeploy on Vercel
vercel --prod

# Check Vercel deployment logs
vercel logs your-deployment-url
```

### Database Commands

```bash
# Connect to MongoDB Atlas
mongosh "mongodb+srv://cluster.mongodb.net/" --username your-username

# Backup database
mongodump --uri="mongodb+srv://username:password@cluster.mongodb.net/database"

# Restore database
mongorestore --uri="mongodb+srv://username:password@cluster.mongodb.net/database" dump/
```

### Local Testing Commands

```bash
# Test backend with production database
cd BACKEND
MONGO_URI=your_production_mongo_uri npm run dev

# Test frontend with production API
cd FRONTEND
VITE_API_BASE_URL=https://your-backend-url.onrender.com npm run dev
```

## 🔒 Security Checklist

- [ ] MongoDB Atlas IP whitelist configured
- [ ] Environment variables set correctly
- [ ] JWT secret is strong and unique
- [ ] Cloudinary credentials are secure
- [ ] CORS is configured for specific domains
- [ ] HTTPS is enabled (automatic on Render/Vercel)
- [ ] No sensitive data in client-side code

## 📊 Monitoring and Maintenance

### Render Monitoring
- Check service logs regularly
- Monitor service status
- Set up email notifications for deployments

### Vercel Monitoring
- Monitor function execution
- Check analytics dashboard
- Review deployment logs

### Database Monitoring
- Monitor MongoDB Atlas metrics
- Set up database alerts
- Regular backup verification

## 🚀 Performance Optimization

### Backend Optimization
- Implement database indexing
- Add response caching
- Optimize API queries
- Consider using CDN for assets

### Frontend Optimization
- Implement code splitting
- Optimize images and assets
- Use lazy loading
- Minimize bundle size

## 📱 Custom Domain Setup (Optional)

### For Vercel (Frontend)
1. Go to project settings
2. Click "Domains"
3. Add your custom domain
4. Configure DNS settings

### For Render (Backend)
1. Go to service settings
2. Click "Custom Domains"
3. Add your domain
4. Configure DNS settings

---

## 🎉 Congratulations!

Your Job Portal application is now deployed and accessible worldwide! 

**Live URLs:**
- Frontend: `https://your-project.vercel.app`
- Backend API: `https://your-service.onrender.com`

## 📞 Support

If you encounter any issues during deployment:

1. Check the troubleshooting section above
2. Review deployment logs
3. Verify environment variables
4. Test locally first

---

**Happy Deploying! 🚀**

Made  by [Aman Singh](https://github.com/amansingh4012)
