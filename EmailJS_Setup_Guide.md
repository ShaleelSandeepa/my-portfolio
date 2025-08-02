# Contact Form Setup Guide

## Option 1: Formspree (Recommended - Easiest Setup)

### What is Formspree?
Formspree is a simple form backend service that sends form submissions directly to your email.

### Setup Steps:
1. Go to https://formspree.io/
2. Sign up for a free account (allows 50 submissions/month)
3. Create a new form
4. Use your email: `shaleelsandeepa@gmail.com`
5. Copy your form endpoint URL (looks like: `https://formspree.io/f/xyzabc123`)
6. In your `index.html` file, replace `YOUR_FORM_ID` with your actual form ID:

```javascript
fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

That's it! Your contact form will now send emails directly to your Gmail.

## Option 2: EmailJS (More Advanced)

### What is EmailJS?
EmailJS allows you to send emails directly from client-side JavaScript without needing a backend server.

### Setup Steps:

#### 1. Create EmailJS Account
- Go to https://www.emailjs.com/
- Sign up for a free account

#### 2. Create an Email Service
- After logging in, go to "Email Services"
- Click "Add New Service"
- Choose your email provider (Gmail recommended)
- Follow the setup instructions to connect your Gmail account
- Note down your **Service ID**

#### 3. Create an Email Template
- Go to "Email Templates"
- Click "Create New Template"
- Use this template structure:

```
Subject: New Contact Form Message - {{subject}}

From: {{user_name}} <{{user_email}}>
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
Sender: {{user_name}}
Email: {{user_email}}
```

- Note down your **Template ID**

#### 4. Get Your Public Key
- Go to "Integration" section
- Copy your **Public Key**

#### 5. Update Your Website
Replace the Formspree code with EmailJS code and update these placeholders:

```javascript
emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual public key
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
```

## Option 3: Simple Mailto (No Setup Required)

If you prefer no external service, the current form has a fallback that opens the user's email client. This happens automatically if Formspree fails.

## Current Features of Your Enhanced Contact Form:
- ✅ Modern floating label design with smooth animations
- ✅ Professional gradient styling with your theme colors (#ffbd39, #2c98f0)
- ✅ Form validation with visual feedback
- ✅ Loading states and success/error messages
- ✅ Responsive design for all devices
- ✅ Fallback to mailto if service fails
- ✅ Auto-clearing form after successful submission
- ✅ Accessibility features (proper labels, focus states)

## Recommended: Formspree Setup
Formspree is recommended because it:
- ✅ Takes 2 minutes to setup
- ✅ Works reliably
- ✅ No coding required
- ✅ Professional email delivery
- ✅ Free tier available
- ✅ Spam protection included

## Next Steps:
1. Sign up for Formspree at https://formspree.io/
2. Create a form with your email address
3. Replace `YOUR_FORM_ID` in index.html with your actual Formspree form ID
4. Test your contact form
5. Enjoy receiving professional contact form submissions!

Your enhanced contact form is now ready with modern UI and reliable email functionality!
