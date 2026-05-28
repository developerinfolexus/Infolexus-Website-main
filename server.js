import express from 'express';
import nodemailer from 'nodemailer';
import multer from 'multer';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import os from 'os';

dotenv.config();

/* ------------------ BASIC SETUP ------------------ */

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

/* ------------------ SAFETY ------------------ */

process.on('uncaughtException', err => {
    console.error('Uncaught Exception:', err);
});

process.on('unhandledRejection', err => {
    console.error('Unhandled Rejection:', err);
});

/* ------------------ MIDDLEWARE ------------------ */

app.use(cors({
    origin: ["https://infolexus.com", "http://localhost:5173", "http://localhost:4173"],
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '50mb' }));


// --- Request Sanitizer & Logger ---
app.use((req, res, next) => {
    // Remove invisible characters (newlines/spaces) from end of URL causing 404s
    // This fixes issues where copy-pasting URLs into tools like Postman adds a newline (%0A)
    req.url = req.url.trim().replace(/[\r\n]+$/, '');
    console.log(`[GLOBAL] Method: ${req.method} | URL: ${req.originalUrl} | Sanitized: ${req.url}`);
    next();
});

/* ------------------ UPLOAD DIRECTORY ------------------ */

const uploadDir = path.join(os.tmpdir(), 'infolexus_uploads');

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

app.use('/uploads', express.static(uploadDir));

/* ------------------ MULTER ------------------ */

const storage = multer.diskStorage({
    destination: uploadDir,
    filename: (req, file, cb) => {
        const safeName = file.originalname.replace(/[^a-zA-Z0-9.-]/g, '_');
        cb(null, `${Date.now()}-${safeName}`);
    }
});

const upload = multer({
    storage,
    limits: { fileSize: 10 * 1024 * 1024 } // 10MB
});

/* ------------------ DATA STORE ------------------ */

const DB_PATH = path.join(__dirname, 'applications.json');

const saveApplication = (data) => {
    let list = [];
    if (fs.existsSync(DB_PATH)) {
        list = JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));
    }
    list.push(data);
    fs.writeFileSync(DB_PATH, JSON.stringify(list, null, 2));
};


/* ------------------ API ROUTER ------------------ */

const api = express.Router();


// Debug Middleware for API
api.use((req, res, next) => {
    console.log(`[API] Received request: ${req.method} ${req.url}`);
    console.log(`[API] Content-Type: ${req.headers['content-type']}`);
    next();
});

/* -------- SUBMIT APPLICATION -------- */


// Use upload.none() as the current frontend form does not include file inputs.
// This handles multipart/form-data appropriately for text fields.
// Handle /send-application and /send-application/
// Handle /send-application and /send-application/
// allowing one file with field name 'attachment'
// Handle /send-application and /send-application/
// allowing flexible file uploads (robustness)
const processFormSubmission = async (req, res) => {
    const routePath = req.route ? req.route.path : 'unknown';
    console.log(`[API] ${routePath} hit`);

    try {
        const body = req.body || {};
        console.log('[API] Processing body:', JSON.stringify(body));
        // req.files is undefined for upload.none()
        console.log('[API] Files:', req.files ? req.files.map(f => `${f.fieldname}: ${f.originalname}`) : 'None');

        let { name, email, phone, position, message, recipientType, ...extra } = body;

        // Validation
        const isContactForm = routePath && routePath.includes('send-contact');

        if (!name || !email) {
            const missing = [];
            if (!name) missing.push('name');
            if (!email) missing.push('email');

            console.warn('[API] Missing required fields:', missing);
            return res.status(400).json({ success: false, message: `Missing required fields: ${missing.join(', ')}` });
        }

        // Default phone if missing (for ALL forms)
        if (!phone) phone = 'Not Provided';

        // Find attachment in req.files (only present if upload.any() was used)
        const attachmentFile = req.files ? req.files.find(f => f.fieldname === 'attachment') : null;
        const resumePath = attachmentFile ? `/uploads/${attachmentFile.filename}` : null;

        const record = {
            id: Date.now(),
            name,
            email,
            phone,
            position: position || 'N/A',
            message,
            ...extra,
            resume: resumePath,
            createdAt: new Date().toISOString()
        };

        try {
            saveApplication(record);
            console.log('[API] Application saved to DB');
        } catch (dbErr) {
            console.error('[API] Failed to save application:', dbErr);
        }

        /* ✅ SEND RESPONSE IMMEDIATELY */
        res.status(200).json({ success: true, message: 'Application submitted successfully' });

        /* -------- EMAIL (ASYNC) -------- */
        if (process.env.DISABLE_EMAIL === 'true') {
            console.log('Skipping email (DISABLE_EMAIL=true)');
            return;
        }

        // Email logic...
        const isMani = recipientType === 'mani';
        const authUser = isMani ? process.env.MANI_EMAIL : process.env.SUPPORT_EMAIL;
        const authPass = isMani ? process.env.MANI_EMAIL_PASS : process.env.SUPPORT_EMAIL_PASS;

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: Number(process.env.SMTP_PORT) || 465,
            secure: Number(process.env.SMTP_PORT) === 465,
            auth: { user: authUser, pass: authPass }
        });

        const mailAttachments = [];
        if (attachmentFile) {
            mailAttachments.push({
                filename: attachmentFile.originalname,
                path: attachmentFile.path
            });
        }

        const mailOptions = {
            from: `"Infolexus" <${authUser}>`,
            to: isMani ? process.env.MANI_EMAIL : process.env.SUPPORT_EMAIL,
            replyTo: email,
            subject: `New Inquiry - ${name}`,
            html: `
        <h3>New Inquiry</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Location:</b> ${extra.location || 'Not provided'}</p>
        <p><b>Subject:</b> ${extra.subject || 'No subject'}</p>
        <p><b>Position/Type:</b> ${position}</p>
        <hr/>
        <p><b>Message:</b></p>
        <p>${message ? message.replace(/\n/g, '<br>') : '-'}</p>
        <hr/>
        ${resumePath ? `<p><b>Attachment:</b> <a href="${req.protocol}://${req.get('host')}${resumePath}">Download</a></p>` : ''}
      `,
            attachments: mailAttachments
        };

        transporter.sendMail(mailOptions)
            .then(() => console.log('✅ Email sent successfully!'))
            .catch(err => console.error('❌ Email failed:', err.message));

    } catch (err) {
        console.error('Application Error:', err);
        if (!res.headersSent) {
            res.status(500).json({ success: false, message: 'Server error' });
        }
    }
};

// Route 1: Contact Form (Text only)
api.post('/send-contact', upload.none(), processFormSubmission);

// Route 2: Application Form (Files allowed) 
// Supporting exact path and trailing slash via regex to imply both if needed, 
// but standard express routing usually handles trailing slashes strictly or loosely depending on settings.
// Let's stick to simple definition for now.
api.post('/send-application', upload.any(), processFormSubmission);

// Debug: Log all unhandled API requests before 404
api.use((req, res, next) => {
    console.log(`[API-DEBUG] Unhandled request falling to 404. Method: ${req.method} | Path: ${req.path}`);
    next();
});

api.get('/applications', (req, res) => {
    if (fs.existsSync(DB_PATH)) {
        try {
            res.json(JSON.parse(fs.readFileSync(DB_PATH, 'utf8')));
        } catch (e) { res.json([]); }
    } else {
        res.json([]);
    }
});

// API Error Handler
api.use((err, req, res, next) => {
    console.error('[API Error]', err);
    res.status(500).json({ success: false, message: 'Internal API Error', error: err.message });
});

// API 404 Handler - DEBUGGED
api.use((req, res) => {
    console.warn(`[API - 404] Method: ${req.method}, URL: ${req.originalUrl}, BaseUrl: ${req.baseUrl}, Path: ${req.path}`);
    res.status(404).json({ success: false, message: `Route ${req.originalUrl} not found in API. Path seen: ${req.path}` });
});

/* ------------------ API ROUTER MOUNT ------------------ */

// ONLY mount at /api. DO NOT mount at / because the API router catch-all blocks static files.
app.use('/api', api);

/* ------------------ REACT BUILD ------------------ */

app.use(express.static(path.join(__dirname, 'dist')));

// Express 5 / path-to-regexp v3+ requires (.*) for wildcard or regex
app.get(/(.*)/, (req, res) => {
    const indexPath = path.join(__dirname, 'dist', 'index.html');
    if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
    } else {
        res.status(404).send("Build not found. Please run 'npm run build' locally and upload the 'dist' folder.");
    }
});

/* ------------------ START SERVER ------------------ */

app.listen(PORT, () => {
    console.log('--------------------------------------------------');
    console.log(`✅ Server running on http://localhost:${PORT}`);
    console.log(`📁 Upload dir: ${uploadDir}`);
    console.log('--------------------------------------------------');
});
