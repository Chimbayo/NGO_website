# EmailJS Setup Guide

This guide will help you set up EmailJS to enable real email functionality in the contact form.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the instructions to connect your Gmail account
5. Copy the **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template content:

**Subject:**
```
New Contact Form Message: {{subject}}
```

**Body:**
```
You have received a new message from CAD Malawi website contact form.

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from the CAD Malawi website contact form.
```

4. Save the template and copy the **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `abcdefghijklmnop`)

## Step 5: Update Environment Variables

1. Open the `.env` file in your project root
2. Replace the placeholder values:

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=abcdefghijklmnop
```

3. Save the file
4. Restart your development server: `npm run dev`

## Step 6: Test the Contact Form

1. Open your website
2. Navigate to the Contact section
3. Fill out the form and click "Send Message"
4. Check your email (hanifamakunganya252@gmail.com) for the message

## Troubleshooting

- **Error: Email service not configured** - Check that all three environment variables are set correctly
- **Error: Failed to send message** - Verify your EmailJS service is active and the template exists
- **No email received** - Check spam folder and verify the email address in Contact.jsx (line 74)

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- 2 email templates
- 1 email service

For higher limits, consider upgrading to a paid plan.
