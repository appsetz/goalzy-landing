# reCAPTCHA v3 Setup - Quick Start

## ✅ Installation Complete

Your Goalzy landing page now has Google reCAPTCHA v3 integrated. Here's what was set up:

## Files Created/Modified

### Configuration
- **`.env.local`** - Environment variables (add your keys here)

### Core Files
- **`app/providers.tsx`** - reCAPTCHA provider wrapper
- **`app/layout.tsx`** - Updated with ReCaptchaProvider
- **`app/api/recaptcha/verify/route.ts`** - Token verification API
- **`app/hooks/useRecaptcha.ts`** - Custom hook for reCAPTCHA
- **`app/lib/recaptcha.ts`** - Utility functions
- **`app/components/ContactFormWithRecaptcha.tsx`** - Example form component

### Documentation
- **`RECAPTCHA_SETUP.md`** - Complete setup and usage guide

## 🚀 Next Steps

### 1. Get Your reCAPTCHA Keys (5 minutes)
Visit: [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)

- Create a new reCAPTCHA v3 key
- Add your domain (`localhost` for testing)
- Copy the **Site Key** and **Secret Key**

### 2. Configure Environment Variables
Edit `.env.local` in your project root:

```env
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here
RECAPTCHA_SECRET_KEY=your_secret_key_here
```

### 3. Test Locally
```bash
npm run dev
```

Visit `http://localhost:3000` to test

### 4. Use in Your Pages

**Option A: Use the example contact form**
```tsx
import { ContactFormWithRecaptcha } from '@/app/components/ContactFormWithRecaptcha';

export default function ContactPage() {
  return <ContactFormWithRecaptcha />;
}
```

**Option B: Use the hook in any component**
```tsx
'use client';
import { useRecaptcha } from '@/app/hooks/useRecaptcha';
import { verifyRecaptchaToken } from '@/app/lib/recaptcha';

const { getToken } = useRecaptcha();
const token = await getToken('action_name');
const result = await verifyRecaptchaToken(token);
```

## 📋 Package Added
- `react-google-recaptcha-v3@^1` - reCAPTCHA v3 React wrapper

## 🔐 Security Notes
- The **Site Key** is public (visible in frontend code)
- The **Secret Key** must NEVER be exposed (keep in `.env.local`)
- Always verify tokens on the backend before processing

## 📚 Full Documentation
See `RECAPTCHA_SETUP.md` for:
- API endpoint documentation
- Score interpretation guide
- Different implementation strategies
- Troubleshooting tips

## ✨ Features Included

✅ **Invisible Protection** - No user interaction required  
✅ **Bot Detection** - Automatic bot scoring (0.0 to 1.0)  
✅ **Server Validation** - Verify tokens on backend  
✅ **Example Component** - Ready-to-use contact form  
✅ **Custom Hook** - Easy integration in any component  
✅ **API Route** - Token verification endpoint  

---

**Build Status**: ✅ Successful - Ready for deployment!

Need help? Check `RECAPTCHA_SETUP.md` for detailed documentation.
