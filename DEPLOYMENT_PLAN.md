# Deployment Plan for Production Fix

To permanently fix the **HTTP2 Protocol Error** and **Failed to Fetch** errors on your live site, you must update the files on your hosting server to match the fixes we made locally.

## Step 1: Upload Environment Config
1. Open your cPanel File Manager.
2. Go to the root of your application (where `server.js` is).
3. Upload the `.env` file from your local computer to the server.
   * **Important:** Ensure this file contains the `MANI_EMAIL`, `SUPPORT_EMAIL`, and `passwords`. Without this, the server will crash when trying to send emails.

## Step 2: Update Server.js
1. Upload the updated `server.js` file (which now listens on `/api/send-application`) to your server, replacing the old one.
2. **Verify permissions**: Ensure the `uploads` folder exists on the server. If not, create it manually and set permissions to `755`.

## Step 3: Rebuild and Upload Frontend
1. Run this command locally to create a fresh production build:
   ```powershell
   npm run build
   ```
2. This creates a `dist` folder.
3. **Delete** the old `dist` folder on your server.
4. **Upload** the new `dist` folder to your server.

## Step 4: Restart the Node.js Server (CRITICAL)
Changes to `server.js` or `.env` will **NOT** take effect until you restart the Node.js process.
1. In cPanel, go to **Setup Node.js App**.
2. Click the **Restart** button for your application.
   * Alternatively, if you have SSH access, run: `touch tmp/restart.txt` or `pm2 restart all`.

## Verification
1. Go to `https://infolexus.com`.
2. Open the Network Tab (F12).
3. Submit the form.
4. You should see a request to `https://infolexus.com/api/send-application` returning status `200 OK`.
