'use client';

import { useState } from 'react';
import { useRecaptcha } from '@/app/hooks/useRecaptcha';
import { verifyRecaptchaToken } from '@/app/lib/recaptcha';

export function ContactFormWithRecaptcha() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  const { getToken } = useRecaptcha();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus(null);

    try {
      // Get reCAPTCHA token
      const token = await getToken('contact_form');
      if (!token) {
        throw new Error('Failed to get reCAPTCHA token');
      }

      // Verify token with your backend
      const result = await verifyRecaptchaToken(token);
      if (!result.success) {
        throw new Error(result.error || 'reCAPTCHA verification failed');
      }

      // If verification passed, you can submit the form
      // This is where you would typically send the form data to your backend
      console.log('Form verified! Score:', result.score);
      console.log('Form data:', formData);

      // Example: Submit to your backend
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     ...formData,
      //     recaptchaScore: result.score,
      //   }),
      // });

      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message! We will get back to you soon.',
      });

      // Clear form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'An error occurred';
      setSubmitStatus({
        type: 'error',
        message: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-[#F0F0F0] mb-2">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-2 bg-[#16213E] border border-white/20 rounded-lg text-[#F0F0F0] placeholder-[#BDC3C7] focus:outline-none focus:border-[#6C63FF]"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#F0F0F0] mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-2 bg-[#16213E] border border-white/20 rounded-lg text-[#F0F0F0] placeholder-[#BDC3C7] focus:outline-none focus:border-[#6C63FF]"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#F0F0F0] mb-2">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-2 bg-[#16213E] border border-white/20 rounded-lg text-[#F0F0F0] placeholder-[#BDC3C7] focus:outline-none focus:border-[#6C63FF]"
          placeholder="Subject of your message"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#F0F0F0] mb-2">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          rows={5}
          className="w-full px-4 py-2 bg-[#16213E] border border-white/20 rounded-lg text-[#F0F0F0] placeholder-[#BDC3C7] focus:outline-none focus:border-[#6C63FF] resize-none"
          placeholder="Your message..."
        ></textarea>
      </div>

      {submitStatus && (
        <div
          className={`p-4 rounded-lg ${
            submitStatus.type === 'success'
              ? 'bg-green-500/20 border border-green-500 text-green-400'
              : 'bg-red-500/20 border border-red-500 text-red-400'
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full px-6 py-3 bg-gradient-to-r from-[#6C63FF] to-[#4ECDC4] text-white rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Sending...' : 'Send Message'}
      </button>

      <p className="text-xs text-[#BDC3C7] text-center">
        This site is protected by reCAPTCHA and the Google{' '}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#6C63FF] hover:underline"
        >
          Privacy Policy
        </a>{' '}
        and{' '}
        <a
          href="https://policies.google.com/terms"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#6C63FF] hover:underline"
        >
          Terms of Service
        </a>{' '}
        apply.
      </p>
    </form>
  );
}
