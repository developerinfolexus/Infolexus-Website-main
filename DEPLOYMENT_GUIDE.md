# cPanel Deployment Guide for Infolexus

Good news! Since cPanel servers have real hard drives (Persistent Storage), your current setup **WILL WORK PERFECTLY**. You do **NOT** need to change to Cloudinary or MongoDB.

## ✅ Why it works on cPanel
Unlike cloud services (like Heroku/Vercel) that delete files daily, cPanel accounts act like a normal computer.
*   Files uploaded to the `uploads/` folder **stay there**.
*   The `applications.json` file **is saved and kept safe**.

---

## 🚀 How to Deploy on cPanel
We have set up the server to "Serve" the frontend, making deployment very easy (Monolith Setup).

### Step 1: Build the Project Locally
Run this command in your VS Code terminal:
```bash
npm run build
```
This creates a `dist` folder containing your optimized website.

### Step 2: Prepare for Upload
1.  Create a zip file containing **ONLY** these files/folders:
    *   `dist` (folder)
    *   `uploads` (folder - if it exists, or create an empty one)
    *   `server.js`
    *   `package.json`
    *   `.env` (make sure your email password is in here and **DISABLE_EMAIL=false**)
    *   `applications.json` (if you have one, or let the server create it)

### Step 3: Upload to cPanel
1.  Log in to your **cPanel File Manager**.
2.  Go to the folder where you want the app (usually `public_html` or a subdomain folder).
3.  **Upload** and **Extract** your zip file.

### Step 4: Setup Node.js App (In cPanel)
1.  Look for **"Setup Node.js App"** in your cPanel dashboard.
2.  Click **"Create Application"**.
3.  **Node.js Version:** Select generic stable version (e.g., 18 or 20).
4.  **Application Mode:** Production.
5.  **Application Root:** The path to where you uploaded files (e.g., `public_html`).
6.  **Application Startup File:** Type `server.js`.
7.  Click **CREATE**.
8.  Once created, click **"Run NPM Install"** button (this installs dependencies on the server).
9.  **Restart** the application.

### 🎉 That's it!
Your website will now be live.
*   Frontend: Served automatically by `server.js`.
*   Backend: Handles emails and saves resumes to the `uploads/` folder on the server.

