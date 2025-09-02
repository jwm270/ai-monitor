# AI Monitor – Startup & Shutdown Guide

This document explains how to start and stop the **AI Monitor** project servers (backend and frontend).

---

## ✅ Startup Checklist

1. Open a terminal (PowerShell or WebStorm terminal).
2. Navigate to the **server** folder:
   ```powershell
   cd C:\dev\ai-monitor\server
   ```
3. Start the backend server:
   ```powershell
   npm run dev
   ```
   Wait until you see:
   ```
   Server listening on http://localhost:4000
   ```
4. Open a second terminal.
5. Navigate to the **web** folder:
   ```powershell
   cd C:\dev\ai-monitor\web
   ```
6. Start the frontend server:
   ```powershell
   npm run dev
   ```
   Wait until you see:
   ```
   VITE ready... Local: http://localhost:5173
   ```
7. Open your browser and go to: [http://localhost:5173](http://localhost:5173)
8. Log in with demo credentials:
   - **Email:** `admin@demo.local`
   - **Password:** `demo1234`
9. Verify both servers are running smoothly before beginning work.

---

## 🛑 Shutdown Checklist

1. Go to the terminal running the **backend server**.
2. Press `Ctrl + C` to stop the server.
3. Confirm with `Y` if prompted.
4. Go to the terminal running the **frontend server**.
5. Press `Ctrl + C` to stop the server.
6. Confirm with `Y` if prompted.
7. Verify that both terminals return to a normal PowerShell prompt.

---

## ⚡ Quick Reference

### Startup
```powershell
cd C:\dev\ai-monitor\server
npm run dev   # Backend

cd C:\dev\ai-monitor\web
npm run dev   # Frontend

# Browser: http://localhost:5173
# Login: admin@demo.local / demo1234
```

### Shutdown
```text
Backend terminal → Ctrl + C
Frontend terminal → Ctrl + C
```

---

## 🛠 Troubleshooting

### Port 4000 Already in Use (`EADDRINUSE`)
Error:
```
Error: listen EADDRINUSE: address already in use :::4000
```
Fix:
```powershell
taskkill /F /IM node.exe
npm run dev
```

---

### OneDrive File Lock Issues (`EPERM: operation not permitted`)
Cause: OneDrive sometimes locks files inside `C:\Users\<you>\OneDrive\...`.

Fix: Move your project to a non-OneDrive folder (e.g., `C:\dev\ai-monitor`).

---

### Execution Policy Blocks `npm` / `npx`
Error:
```
npm.ps1 cannot be loaded because running scripts is disabled on this system
```
Fix (temporary for current session):
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```
Or permanent (safer scope):
```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned -Force
```

---

### Prisma Errors: Missing Relations
Error:
```
The relation field ... is missing an opposite relation field
```
Fix: Update `prisma/schema.prisma` so every relation has an opposite side. Run:
```powershell
npx prisma format
npx prisma generate
```

---

### Seed Data Not Appearing
If login fails with demo users:
```powershell
node prisma/seed.js
```
This reseeds demo accounts like:
- `admin@demo.local / demo1234`
- `manager@demo.local / demo1234`
- `client@demo.local / demo1234`
- `victim@demo.local / demo1234`

---

### Stopping Servers
- Backend terminal → `Ctrl + C`
- Frontend terminal → `Ctrl + C`

---

Keep this guide handy when working locally with AI Monitor 🚀
