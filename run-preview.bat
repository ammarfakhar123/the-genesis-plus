@echo off
echo ===================================================
echo Starting The Genesis Plus Production Preview
echo ===================================================
cd /d "%~dp0"
echo Starting Preview Server on http://localhost:4173...
start http://localhost:4173
call npm run preview
pause
