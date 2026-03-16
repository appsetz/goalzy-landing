# Google reCAPTCHA v3 Integration Guide

This guide walks you through setting up and using Google reCAPTCHA v3 on your Goalzy landing page.

## What is reCAPTCHA v3?

reCAPTCHA v3 is an invisible bot protection service that:
- Runs in the background without requiring user interaction
- Provides a score (0.0 to 1.0) indicating the likelihood of genuine user interaction
- Helps protect your site from spam, abuse, and malicious attacks
- Does not show a widget or require CAPTCHA solving

## Setup Instructions

### Step 1: Get Your reCAPTCHA Keys

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Sign in with your Google account (create one if needed)
3. Click **Create** or **+** button
4. Fill in the form:
   - **Label**: "Goalzy Landing Page" (or any name you prefer)
   - **reCAPTCHA type**: Select **reCAPTCHA v3**
   - **Domains**: Add your domain(s)
     - For production: `goalzy.app`
     - For local development: `localhost`
5. Accept the reCAPTCHA Terms of Service
6. Click **Create**

You'll receive:
- **Site Key** (public key - safe to share)
- **Secret Key** (keep this private!)

### Step 2: Configure Environment Variables

Edit `.env.local` in the project root:

```env
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here
RECAPTCHA_SECRET_KEY=your_secret_key_here
```

Replace:
- `your_site_key_here` with your Site Key
- `your_secret_key_here` with your Secret Key

**Important**: Never commit `.env.local` to version control. Add it to `.gitignore`.

### Step 3: Using reCAPTCHA in Your Components

#### Option 1: Using the Form Component

The `ContactFormWithRecaptcha` component is ready to use:

```tsx
import { ContactFormWithRecaptcha } from '@/app/components/ContactFormWithRecaptcha';

export default function ContactPage() {
  return <ContactFormWithRecaptcha />;
}
```

#### Option 2: Using the Custom Hook

Use the `useRecaptcha` hook in any client component:

```tsx
'use client';

import { useRecaptcha } from '@/app/hooks/useRecaptcha';
import { verifyRecaptchaToken } from '@/app/lib/recaptcha';

export function MyComponent() {
  const { getToken } = useRecaptcha();

  const handleAction = async () => {
    const token = await getToken('my_action_name');
    if (!token) return;

    const result = await verifyRecaptchaToken(token);
    if (result.success) {
      console.log('Verification passed! Score:', result.score);
      // Proceed with your action
    }
  };

  return <button onClick={handleAction}>Click Me</button>;
}
```

## File Structure

The reCAPTCHA setup includes:

```
app/
├── api/
│   └── recaptcha/
│       └── verify/
│           └── route.ts          # Token verification endpoint
├── components/
│   └── ContactFormWithRecaptcha.tsx  # Example form component
├── hooks/
│   └── useRecaptcha.ts            # Custom hook for reCAPTCHA
├── lib/
│   └── recaptcha.ts               # Utility functions
├── providers.tsx                   # reCAPTCHA provider
└── layout.tsx                      # Updated with provider
```

## API Endpoint: `/api/recaptcha/verify`

**POST** `/api/recaptcha/verify`

Request:
```json
{
  "token": "recaptcha_token_from_client"
}
```

Response (Success):
```json
{
  "success": true,
  "score": 0.95,
  "action": "contact_form"
}
```

Response (Failure):
```json
{
  "success": false,
  "error": "reCAPTCHA verification failed",
  "errors": ["timeout-or-duplicate"]
}
```

## Score Interpretation

The `score` value ranges from 0.0 to 1.0:

- **1.0**: Very likely a legitimate interaction
- **0.9 - 0.7**: Probably legitimate
- **0.5 - 0.7**: May need additional verification
- **0.3 - 0.5**: Suspicious activity
- **0.0 - 0.3**: Very likely a bot

The verify endpoint uses a default threshold of **0.5**. You can adjust this in `app/api/recaptcha/verify/route.ts`:

```typescript
const threshold = 0.5; // Adjust based on your needs
```

## Implementation Strategies

### Strategy 1: Form Protection
Protect contact forms or signup forms from spam bots.

### Strategy 2: Page-Wide Protection
Execute reCAPTCHA on every action:

```tsx
'use client';

import { useEffect } from 'react';
import { useRecaptcha } from '@/app/hooks/useRecaptcha';

export function PageProtection() {
  const { getToken } = useRecaptcha();

  useEffect(() => {
    // Get token on page load
    getToken('page_view');
  }, [getToken]);

  return null; // Invisible
}
```

### Strategy 3: Specific Actions
Protect specific actions like downloads or email subscriptions.

## Best Practices

1. **Always verify on the server**: Never trust the client-side reCAPTCHA score alone
2. **Keep your Secret Key private**: Never expose it to the client
3. **Use meaningful action names**: e.g., `contact_form`, `signup`, `comment`
4. **Monitor reCAPTCHA analytics**: Check your Admin Console for metrics
5. **Test locally first**: Use `localhost` as a domain during development
6. **Adjust score threshold**: Fine-tune based on your legitimate traffic patterns

## Testing

### Local Development

1. Add `localhost` to your reCAPTCHA domains in the Admin Console
2. Run: `npm run dev`
3. Visit `http://localhost:3000`
4. Test the form or actions that use reCAPTCHA

### Testing with Score Values

reCAPTCHA v3 provides different scores based on actual user interaction patterns. You can:
- Test with real user interactions (mouse, keyboard, scrolling)
- Simulate bot behavior to see lower scores
- Check the Admin Console for detailed analytics

## Troubleshooting

### "reCAPTCHA is not initialized"

**Solution**: Make sure your root layout includes the `ReCaptchaProvider`.

### "Invalid site key"

**Solution**: Verify that:
- The Site Key is correct in `.env.local`
- It starts with `NEXT_PUBLIC_RECAPTCHA_SITE_KEY=`
- Your domain is added to the reCAPTCHA console

### "Secret key is not set"

**Solution**: Make sure `RECAPTCHA_SECRET_KEY` is in `.env.local` and the app is restarted.

### Token verification fails

**Solution**: Check:
- The Secret Key is correct (verify in Admin Console)
- The token hasn't expired (tokens expire after a few minutes)
- Your domain matches the one in reCAPTCHA settings

## References

- [Google reCAPTCHA Documentation](https://developers.google.com/recaptcha/docs/v3)
- [reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
- [react-google-recaptcha-v3 NPM Package](https://www.npmjs.com/package/react-google-recaptcha-v3)

## Next Steps

1. Add your reCAPTCHA keys to `.env.local`
2. Update the contact page or add the form component where needed
3. Test locally with `npm run dev`
4. Deploy and monitor in the reCAPTCHA Admin Console
5. Adjust the threshold score based on your legitimate traffic
