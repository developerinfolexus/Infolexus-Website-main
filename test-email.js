import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

console.log('Testing email configuration...');
console.log('Email:', process.env.MANI_EMAIL);
console.log('Password Length:', process.env.MANI_EMAIL_PASS ? process.env.MANI_EMAIL_PASS.length : 'NOT SET');
console.log('SMTP Host:', process.env.SMTP_HOST);
console.log('SMTP Port:', process.env.SMTP_PORT);
console.log('Email Disabled:', process.env.DISABLE_EMAIL);

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT) || 465,
    secure: parseInt(process.env.SMTP_PORT) === 465,
    auth: {
        user: process.env.MANI_EMAIL,
        pass: process.env.MANI_EMAIL_PASS
    }
});

console.log('\nAttempting to send test email...');

const mailOptions = {
    from: `"Test" <${process.env.MANI_EMAIL}>`,
    to: process.env.MANI_EMAIL,
    subject: 'Test Email from Infolexus',
    text: 'This is a test email to verify SMTP configuration.',
    html: '<h1>Test Email</h1><p>If you receive this, your email configuration is working!</p>'
};

transporter.sendMail(mailOptions)
    .then(info => {
        console.log('✅ Email sent successfully!');
        console.log('Message ID:', info.messageId);
        console.log('Response:', info.response);
    })
    .catch(error => {
        console.error('❌ Email sending failed:');
        console.error('Error:', error.message);
        console.error('Code:', error.code);
        console.error('Response:', error.response);
    });
