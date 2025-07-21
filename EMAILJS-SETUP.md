# EmailJS Setup Guide

To enable the contact form to send emails to `vspatel360@gmail.com`, you need to set up EmailJS. Follow these steps:

## 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions to connect your Gmail account
5. Note down the **Service ID**

## 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Message: {{subject}}

From: {{from_name}}
Email: {{from_email}}

Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and note down the **Template ID**

## 4. Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key**

## 5. Configure Environment Variables
Create a `.env.local` file in the `portfolio-website` folder with:

```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace the placeholder values with your actual EmailJS credentials.

## 6. Test the Contact Form
1. Restart your development server: `npm start`
2. Fill out the contact form on your website
3. Check your email (vspatel360@gmail.com) for the message

## Security Notes
- The `.env.local` file should not be committed to version control
- EmailJS free plan allows 200 emails per month
- Consider upgrading for production use

## Troubleshooting
- Make sure environment variables start with `REACT_APP_`
- Restart the development server after adding environment variables
- Check browser console for any error messages
- Verify your EmailJS service is active and properly configured 