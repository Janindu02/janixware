# Contact Form Setup Guide

This guide will help you set up email and WhatsApp notifications for the contact form.

## Features

- ✅ Email notifications sent to `janixware@gmail.com`
- ✅ WhatsApp notifications sent to `+94 713 974 674`
- ✅ Form validation and error handling
- ✅ Success/error messages displayed to users

## Setup Instructions

### 1. Email Setup (Resend)

1. **Create a Resend account:**
   - Go to https://resend.com
   - Sign up for a free account (100 emails/day free tier)

2. **Get your API key:**
   - Navigate to https://resend.com/api-keys
   - Click "Create API Key"
   - Copy your API key

3. **Add API key to environment variables:**
   - Create a `.env.local` file in the root directory
   - Add: `RESEND_API_KEY=re_your_api_key_here`
   - Replace `re_your_api_key_here` with your actual API key

4. **Update sender email (optional):**
   - In `app/api/contact/route.ts`, update the `from` field
   - Default: `onboarding@resend.dev` (works for testing)
   - For production: Use your verified domain email

### 2. WhatsApp Setup (Choose one method)

#### Method 1: WhatsApp Webhook (Recommended - Free)

You can use a free webhook service like:
- **Zapier** (free tier available)
- **Make.com** (formerly Integromat)
- **n8n** (self-hosted, free)

**Steps:**
1. Create a webhook in your chosen service
2. Connect it to WhatsApp Business API or a WhatsApp sending service
3. Add the webhook URL to `.env.local`:
   ```
   WHATSAPP_WEBHOOK_URL=https://your-webhook-url.com/webhook
   ```

#### Method 2: Twilio WhatsApp API (Paid)

1. **Sign up for Twilio:**
   - Go to https://www.twilio.com
   - Create an account and get your Account SID and Auth Token

2. **Set up WhatsApp:**
   - Follow Twilio's WhatsApp setup guide
   - Get your WhatsApp sender number

3. **Install Twilio SDK:**
   ```bash
   npm install twilio
   ```

4. **Add to `.env.local`:**
   ```
   TWILIO_ACCOUNT_SID=your_account_sid
   TWILIO_AUTH_TOKEN=your_auth_token
   TWILIO_WHATSAPP_FROM=whatsapp:+14155238886
   TWILIO_WHATSAPP_TO=whatsapp:+94713974674
   ```

5. **Update the API route:**
   - Uncomment the Twilio code in `app/api/contact/route.ts`

#### Method 3: Manual WhatsApp Link (Fallback)

If you don't set up automatic WhatsApp sending, the system will generate a WhatsApp link with the pre-filled message. You can manually click it to send the message.

### 3. Environment Variables

Create a `.env.local` file in the root directory:

```env
# Required for Email
RESEND_API_KEY=re_your_api_key_here

# Optional for WhatsApp (choose one method)
WHATSAPP_WEBHOOK_URL=https://your-webhook-url.com/webhook

# OR use Twilio (requires npm install twilio)
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_WHATSAPP_FROM=whatsapp:+14155238886
TWILIO_WHATSAPP_TO=whatsapp:+94713974674
```

### 4. Test the Form

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to `/contact` page

3. Fill out and submit the form

4. Check:
   - Email inbox at `janixware@gmail.com`
   - WhatsApp at `+94 713 974 674`

## Troubleshooting

### Email not sending?
- Check your `RESEND_API_KEY` is correct
- Verify the API key is active in Resend dashboard
- Check server logs for error messages

### WhatsApp not sending?
- Verify webhook URL is correct (if using Method 1)
- Check Twilio credentials (if using Method 2)
- Check server logs for error messages
- WhatsApp messages will still work via the generated link (Method 3)

### Form not submitting?
- Check browser console for errors
- Verify API route is accessible at `/api/contact`
- Check server logs for detailed error messages

## Production Deployment

1. **Add environment variables to your hosting platform:**
   - Vercel: Project Settings → Environment Variables
   - Netlify: Site Settings → Environment Variables
   - Other platforms: Check their documentation

2. **Update email sender:**
   - Verify your domain in Resend
   - Update the `from` field in `app/api/contact/route.ts`

3. **Test thoroughly:**
   - Test email delivery
   - Test WhatsApp notifications
   - Test form validation

## Support

If you encounter any issues, check:
- Server logs for detailed error messages
- Resend dashboard for email delivery status
- Your webhook service logs (if using webhooks)

