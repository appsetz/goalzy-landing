import Link from "next/link";
import Image from "next/image";

export default function PrivacyPolicy() {
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
          Privacy Policy
        </h1>
        <p className="text-[#BDC3C7] mb-8">Last updated: December 12, 2025</p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#6C63FF]">1. Introduction</h2>
            <p className="text-[#BDC3C7] leading-relaxed">
              Welcome to Goalzy ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience on our app. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application Goalzy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#6C63FF]">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold mb-3 mt-6">2.1 Personal Information</h3>
            <p className="text-[#BDC3C7] leading-relaxed mb-4">
              We may collect personal information that you provide to us, including:
            </p>
            <ul className="list-disc list-inside text-[#BDC3C7] space-y-2 ml-4">
              <li>Name and email address when you create an account</li>
              <li>Profile photo (optional)</li>
              <li>Authentication credentials (email/password or Google Sign-In)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">2.2 Habit Data</h3>
            <p className="text-[#BDC3C7] leading-relaxed mb-4">
              We collect and store your habit-related data, including:
            </p>
            <ul className="list-disc list-inside text-[#BDC3C7] space-y-2 ml-4">
              <li>Habit names, descriptions, and categories</li>
              <li>Habit completion records and dates</li>
              <li>Streak information and statistics</li>
              <li>Analytics and progress data</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">2.3 Usage Data</h3>
            <p className="text-[#BDC3C7] leading-relaxed mb-4">
              We automatically collect certain information when you use our app:
            </p>
            <ul className="list-disc list-inside text-[#BDC3C7] space-y-2 ml-4">
              <li>Device information (device type, operating system)</li>
              <li>App usage patterns and interactions</li>
              <li>AI feature usage and token consumption</li>
              <li>Error logs and crash reports</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#6C63FF]">3. How We Use Your Information</h2>
            <p className="text-[#BDC3C7] leading-relaxed mb-4">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc list-inside text-[#BDC3C7] space-y-2 ml-4">
              <li>To provide and maintain our service</li>
              <li>To process payments and manage token purchases</li>
              <li>To provide AI-powered features and personalized coaching</li>
              <li>To generate analytics and insights about your habits</li>
              <li>To send you notifications and updates</li>
              <li>To improve our app and develop new features</li>
              <li>To detect and prevent fraud or abuse</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#6C63FF]">4. Data Storage and Security</h2>
            <p className="text-[#BDC3C7] leading-relaxed mb-4">
              Your data is stored securely using Firebase (Google Cloud Platform). We implement appropriate technical and organizational measures to protect your personal information, including:
            </p>
            <ul className="list-disc list-inside text-[#BDC3C7] space-y-2 ml-4">
              <li>Encryption of data in transit and at rest</li>
              <li>Secure authentication mechanisms</li>
              <li>Regular security audits and updates</li>
              <li>Access controls and user authentication</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#6C63FF]">5. Third-Party Services</h2>
            <p className="text-[#BDC3C7] leading-relaxed mb-4">
              We use the following third-party services:
            </p>
            <ul className="list-disc list-inside text-[#BDC3C7] space-y-2 ml-4">
              <li><strong>Firebase:</strong> For data storage, authentication, and cloud services</li>
              <li><strong>Google Sign-In:</strong> For authentication</li>
              <li><strong>OpenAI:</strong> For AI-powered features (your messages are processed but not stored)</li>
              <li><strong>Razorpay:</strong> For payment processing</li>
            </ul>
            <p className="text-[#BDC3C7] leading-relaxed mt-4">
              These services have their own privacy policies. We encourage you to review them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#6C63FF]">6. Your Rights</h2>
            <p className="text-[#BDC3C7] leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-[#BDC3C7] space-y-2 ml-4">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Delete your account and data</li>
              <li>Export your data</li>
              <li>Opt-out of certain data collection</li>
            </ul>
            <p className="text-[#BDC3C7] leading-relaxed mt-4">
              To exercise these rights, contact us at the email provided in the Contact section.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#6C63FF]">7. Children's Privacy</h2>
            <p className="text-[#BDC3C7] leading-relaxed">
              Our app is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#6C63FF]">8. Changes to This Policy</h2>
            <p className="text-[#BDC3C7] leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#6C63FF]">9. Contact Us</h2>
            <p className="text-[#BDC3C7] leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-[#BDC3C7] leading-relaxed mt-2">
              Email: info.appsetz@gmail.com
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

