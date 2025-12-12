import Link from "next/link";
import Image from "next/image";

export default function TermsOfService() {
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
          Terms of Service
        </h1>
        <p className="text-[#BDC3C7] mb-8">Last updated: December 12, 2025</p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#6C63FF]">1. Acceptance of Terms</h2>
            <p className="text-[#BDC3C7] leading-relaxed">
              By accessing and using Goalzy ("the App"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#6C63FF]">2. Description of Service</h2>
            <p className="text-[#BDC3C7] leading-relaxed mb-4">
              Goalzy is a habit tracking application that provides:
            </p>
            <ul className="list-disc list-inside text-[#BDC3C7] space-y-2 ml-4">
              <li>Habit creation and tracking features</li>
              <li>AI-powered coaching and insights</li>
              <li>Analytics and progress visualization</li>
              <li>Token-based AI feature access</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#6C63FF]">3. User Accounts</h2>
            <h3 className="text-xl font-semibold mb-3 mt-6">3.1 Account Creation</h3>
            <p className="text-[#BDC3C7] leading-relaxed mb-4">
              To use certain features of the App, you must create an account. You agree to:
            </p>
            <ul className="list-disc list-inside text-[#BDC3C7] space-y-2 ml-4">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and update your information to keep it accurate</li>
              <li>Maintain the security of your password</li>
              <li>Accept responsibility for all activities under your account</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">3.2 Account Termination</h3>
            <p className="text-[#BDC3C7] leading-relaxed">
              We reserve the right to suspend or terminate your account if you violate these Terms or engage in fraudulent, abusive, or illegal activity.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#6C63FF]">4. Free Tier Limitations</h2>
            <p className="text-[#BDC3C7] leading-relaxed mb-4">
              The free tier of Goalzy includes:
            </p>
            <ul className="list-disc list-inside text-[#BDC3C7] space-y-2 ml-4">
              <li>Up to 10 habits</li>
              <li>Basic habit tracking features</li>
              <li>Limited AI features (requires token purchase)</li>
            </ul>
            <p className="text-[#BDC3C7] leading-relaxed mt-4">
              To access additional features, you may purchase AI tokens through in-app purchases.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#6C63FF]">5. AI Features and Tokens</h2>
            <h3 className="text-xl font-semibold mb-3 mt-6">5.1 Token System</h3>
            <p className="text-[#BDC3C7] leading-relaxed mb-4">
              AI features are accessed through a token-based system. Tokens are consumed when you use:
            </p>
            <ul className="list-disc list-inside text-[#BDC3C7] space-y-2 ml-4">
              <li>AI Habit Coach chat</li>
              <li>AI Insights generation</li>
              <li>AI Smart Setup</li>
              <li>Goal Breakdown features</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">5.2 Token Purchases</h3>
            <p className="text-[#BDC3C7] leading-relaxed mb-4">
              Tokens can be purchased through in-app purchases. Available plans:
            </p>
            <ul className="list-disc list-inside text-[#BDC3C7] space-y-2 ml-4">
              <li>Starter Pack: ₹39 for 500 tokens</li>
              <li>Power Pack: ₹69 for 1000 tokens</li>
              <li>Value Pack: ₹99 for 1500 tokens</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">5.3 Token Usage</h3>
            <p className="text-[#BDC3C7] leading-relaxed">
              Tokens are non-refundable and non-transferable. Unused tokens do not expire. Token consumption rates may vary based on the complexity of AI requests.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#6C63FF]">6. User Content</h2>
            <p className="text-[#BDC3C7] leading-relaxed mb-4">
              You retain ownership of all content you create or upload to the App, including:
            </p>
            <ul className="list-disc list-inside text-[#BDC3C7] space-y-2 ml-4">
              <li>Habit data and descriptions</li>
              <li>Completion records</li>
              <li>Profile information</li>
            </ul>
            <p className="text-[#BDC3C7] leading-relaxed mt-4">
              By using the App, you grant us a license to store, process, and display your content solely for the purpose of providing the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#6C63FF]">7. Prohibited Uses</h2>
            <p className="text-[#BDC3C7] leading-relaxed mb-4">
              You agree not to:
            </p>
            <ul className="list-disc list-inside text-[#BDC3C7] space-y-2 ml-4">
              <li>Use the App for any illegal purpose</li>
              <li>Attempt to gain unauthorized access to the App or its systems</li>
              <li>Interfere with or disrupt the App or servers</li>
              <li>Reverse engineer, decompile, or disassemble the App</li>
              <li>Use automated systems to access the App without permission</li>
              <li>Share your account credentials with others</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#6C63FF]">8. Intellectual Property</h2>
            <p className="text-[#BDC3C7] leading-relaxed">
              The App and its original content, features, and functionality are owned by Goalzy and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#6C63FF]">9. Disclaimer of Warranties</h2>
            <p className="text-[#BDC3C7] leading-relaxed">
              The App is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that the App will be uninterrupted, error-free, or completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#6C63FF]">10. Limitation of Liability</h2>
            <p className="text-[#BDC3C7] leading-relaxed">
              To the maximum extent permitted by law, Goalzy shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#6C63FF]">11. Changes to Terms</h2>
            <p className="text-[#BDC3C7] leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify users of any material changes by updating the "Last updated" date. Your continued use of the App after such changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#6C63FF]">12. Contact Information</h2>
            <p className="text-[#BDC3C7] leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-[#BDC3C7] leading-relaxed mt-2">
              Email: support@goalzy.app
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
      </div>
    </div>
  );
}

