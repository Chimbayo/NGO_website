# Production Logging Guide

## Overview
This project is now configured to preserve console logs in production builds, making debugging easier on deployed systems.

## Changes Made

### 1. Vite Configuration (`vite.config.js`)
- **Source maps enabled**: Helps trace errors back to original source code
- **Console logs preserved**: `drop_console: false` keeps all console statements in production
- **Debugger statements preserved**: `drop_debugger: false` keeps debugger statements

### 2. Enhanced Error Logging (`Contact.jsx`)

#### Configuration Logging
When the contact form is submitted, the following is logged:
```
EmailJS Configuration Check:
Service ID present: true/false
Template ID present: true/false
Public Key present: true/false
```

#### Success Logging
When an email sends successfully:
```
Attempting to send email via EmailJS...
✓ Email sent successfully!
Response: [response object]
Timestamp: [ISO timestamp]
```

#### Error Logging
When an error occurs:
```
=== EMAIL SEND ERROR ===
Error Type: [error name]
Error Message: [error message]
Error Status: [HTTP status if available]
Error Text: [error text if available]
Full Error Object: [complete error]
Timestamp: [ISO timestamp]
========================
```

## How to View Logs on Deployed System

1. **Open Browser Developer Tools**:
   - Chrome/Edge: Press `F12` or `Ctrl+Shift+I` (Windows)
   - Firefox: Press `F12` or `Ctrl+Shift+K` (Windows)
   - Safari: Enable Developer menu first, then press `Cmd+Option+C`

2. **Navigate to Console Tab**

3. **Test the contact form** - All logs will appear in the console

4. **Filter logs**:
   - Type "EmailJS" to see configuration checks
   - Type "ERROR" to see only errors
   - Type "✓" to see only successes

## Deployment Steps

After making these changes, you need to rebuild and redeploy:

```bash
# Install dependencies (if needed)
npm install

# Build for production
npm run build

# Deploy the dist folder to your hosting service
```

## Environment Variables

Ensure these are set in your deployment platform:
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

The logs will show which variables are missing if configuration fails.

## User-Visible Error Messages

Users will now see more detailed error messages when email sending fails, including:
- The specific error text from EmailJS
- Configuration issues
- Network errors

This helps both users and administrators understand what went wrong.

## Security Note

The logging does NOT expose sensitive data:
- Only checks if keys are present (true/false), not their values
- Error messages are sanitized
- No email content is logged
