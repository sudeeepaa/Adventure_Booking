# Email Setup Guide

## Setting Up Nodemailer for Adventure Tours

### 1. Install Dependencies
```bash
npm install nodemailer @types/nodemailer
```

### 2. Create Environment File
Create a `.env.local` file in your project root with:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### 3. Get Gmail App Password
1. Go to your Google Account settings
2. Enable 2-factor authentication
3. Go to Security → App passwords
4. Generate a new app password for "Mail"
5. Use this app password in your `.env.local` file

### 4. Test the Setup
1. Start your development server: `npm run dev`
2. Go to the Book page
3. Fill out the booking form
4. Submit and check if the email is sent

### 5. Troubleshooting
- Make sure `.env.local` is in the project root
- Verify your Gmail app password is correct
- Check the console for any error messages
- Ensure your Gmail account allows "less secure app access" or use app passwords

### 6. Alternative Email Services
If you prefer not to use Gmail, you can modify the transporter in `/src/app/api/send-email/route.ts`:

**For Outlook:**
```typescript
const transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});
```

**For custom SMTP:**
```typescript
const transporter = nodemailer.createTransport({
  host: 'smtp.your-provider.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});
```

## Security Notes
- Never commit `.env.local` to version control
- Use environment variables for sensitive information
- Consider using email services like SendGrid for production
