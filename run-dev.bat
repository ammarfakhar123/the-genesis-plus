@echo off
echo ===================================================
echo Starting The Genesis Plus - Amazon Catalog Website
echo ===================================================
cd /d "%~dp0"
echo Starting Vite Dev Server on http://localhost:5173...
start http://localhost:5173
call npm run dev
pause
