@echo off
echo ========================================
echo Connected Access Hubs - Interactive Setup
echo ========================================
echo.

echo Installing dependencies...
cd frontend
call npm install

echo.
echo Adding Framer Motion for animations...
call npm install framer-motion@^10.16.0

echo.
echo Building the project...
call npm run build

echo.
echo ========================================
echo Setup Complete! 
echo ========================================
echo.
echo Next steps:
echo 1. Create a new GitHub repository
echo 2. Push this code to your new repository
echo 3. Connect to Netlify for deployment
echo 4. Follow the DEPLOYMENT.md guide
echo.
echo To start development server:
echo   cd frontend
echo   npm start
echo.
echo Your enhanced interactive platform is ready!
echo ========================================

pause