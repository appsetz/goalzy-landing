import Link from "next/link";
import Image from "next/image";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-[#1A1A2E] text-[#F0F0F0]">
      {/* Navigation */}
      <nav className="bg-[#16213E]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/images/Goalzy-logo.png"
                alt="Goalzy Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-2xl font-bold" style={{ fontFamily: 'var(--font-poppins)' }}>Goalzy</span>
            </Link>
            <Link
              href="/"
              className="text-[#BDC3C7] hover:text-[#6C63FF] transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>
          Contact Us
        </h1>
        <p className="text-[#BDC3C7] mb-12 text-lg">
          We're here to help! Get in touch with us for any questions, support, or feedback.
        </p>

        <div className="space-y-12">
          {/* Contact Information */}
          <section className="bg-[#16213E]/50 rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold mb-6 text-[#6C63FF]">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#6C63FF] to-[#4ECDC4] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📧</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Email</h3>
                  <a 
                    href="mailto:info.appsetz@gmail.com" 
                    className="text-[#4ECDC4] hover:text-[#6C63FF] transition-colors break-all"
                  >
                    info.appsetz@gmail.com
                  </a>
                  <p className="text-[#BDC3C7] mt-2">We typically respond within 24-48 hours</p>
                </div>
              </div>
            </div>
          </section>

          {/* Support Categories */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-[#6C63FF]">How Can We Help?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#16213E]/50 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="mr-3">💳</span>
                  Payment & Billing
                </h3>
                <p className="text-[#BDC3C7] mb-4">
                  Questions about payments, refunds, or billing issues? We're here to help.
                </p>
                <p className="text-sm text-[#BDC3C7]">
                  Include your transaction ID for faster resolution
                </p>
              </div>

              <div className="bg-[#16213E]/50 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="mr-3">🤖</span>
                  Technical Support
                </h3>
                <p className="text-[#BDC3C7] mb-4">
                  Experiencing technical issues or bugs? Let us know and we'll fix it.
                </p>
                <p className="text-sm text-[#BDC3C7]">
                  Please describe the issue in detail
                </p>
              </div>

              <div className="bg-[#16213E]/50 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="mr-3">💡</span>
                  Feature Requests
                </h3>
                <p className="text-[#BDC3C7] mb-4">
                  Have an idea for a new feature? We'd love to hear from you!
                </p>
                <p className="text-sm text-[#BDC3C7]">
                  Your feedback helps us improve
                </p>
              </div>

              <div className="bg-[#16213E]/50 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="mr-3">📱</span>
                  Account Issues
                </h3>
                <p className="text-[#BDC3C7] mb-4">
                  Need help with your account, login, or data? We can assist.
                </p>
                <p className="text-sm text-[#BDC3C7]">
                  Include your account email
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-[#6C63FF]">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-[#16213E]/50 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold mb-2">How do I purchase tokens?</h3>
                <p className="text-[#BDC3C7]">
                  You can purchase tokens directly from the app. Go to the AI section and tap on "Buy Tokens" to see available plans.
                </p>
              </div>

              <div className="bg-[#16213E]/50 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold mb-2">Do tokens expire?</h3>
                <p className="text-[#BDC3C7]">
                  No, purchased tokens do not expire. You can use them at any time.
                </p>
              </div>

              <div className="bg-[#16213E]/50 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold mb-2">Can I get a refund?</h3>
                <p className="text-[#BDC3C7]">
                  Refunds are considered on a case-by-case basis for exceptional circumstances. Please see our <Link href="/payment-policy" className="text-[#4ECDC4] hover:text-[#6C63FF] transition-colors">Payment Policy</Link> for details.
                </p>
              </div>

              <div className="bg-[#16213E]/50 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold mb-2">How do I delete my account?</h3>
                <p className="text-[#BDC3C7]">
                  You can delete your account from the Profile settings in the app. All your data will be permanently deleted.
                </p>
              </div>
            </div>
          </section>

          {/* Response Time */}
          <section className="bg-gradient-to-r from-[#6C63FF]/20 to-[#4ECDC4]/20 rounded-2xl p-8 border border-[#6C63FF]/30">
            <h2 className="text-2xl font-bold mb-4 text-[#6C63FF]">Response Time</h2>
            <p className="text-[#BDC3C7] leading-relaxed">
              We aim to respond to all inquiries within <strong className="text-[#F0F0F0]">24-48 hours</strong> during business days. 
              For urgent payment or account issues, please mention "URGENT" in your subject line.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <Link
            href="/"
            className="text-[#6C63FF] hover:text-[#4ECDC4] transition-colors"
          >
            ← Back to Home
          </Link>
        </div>

        <div className="mt-8 text-center text-xs text-[#BDC3C7]">
          <p>
            This page is protected by reCAPTCHA and the Google{' '}
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
        </div>
      </div>
    </div>
  );
}

