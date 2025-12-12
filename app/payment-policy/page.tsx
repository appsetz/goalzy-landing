import Link from "next/link";
import Image from "next/image";

export default function PaymentPolicy() {
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
          Payment & Refund Policy
        </h1>
        <p className="text-[#BDC3C7] mb-8">Last updated: December 12, 2025</p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#6C63FF]">1. Payment Methods</h2>
            <p className="text-[#BDC3C7] leading-relaxed mb-4">
              Goalzy accepts payments through Razorpay payment gateway. You can pay using:
            </p>
            <ul className="list-disc list-inside text-[#BDC3C7] space-y-2 ml-4">
              <li>Credit and Debit Cards (Visa, Mastercard, RuPay)</li>
              <li>UPI (Unified Payments Interface)</li>
              <li>Net Banking</li>
              <li>Digital Wallets (Paytm, PhonePe, Google Pay, etc.)</li>
              <li>Other payment methods supported by Razorpay</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#6C63FF]">2. Token Purchase Plans</h2>
            <p className="text-[#BDC3C7] leading-relaxed mb-4">
              We offer the following token purchase plans:
            </p>
            
            <div className="bg-[#16213E]/50 rounded-xl p-6 mb-4 border border-white/10">
              <h3 className="text-xl font-semibold mb-3 text-[#4ECDC4]">Starter Pack</h3>
              <p className="text-[#BDC3C7] mb-2"><strong className="text-[#F0F0F0]">Price:</strong> ₹39 (one-time payment)</p>
              <p className="text-[#BDC3C7] mb-2"><strong className="text-[#F0F0F0]">Tokens:</strong> 500 AI tokens</p>
              <p className="text-[#BDC3C7]"><strong className="text-[#F0F0F0]">Features:</strong> Basic AI features access</p>
            </div>

            <div className="bg-[#16213E]/50 rounded-xl p-6 mb-4 border border-[#6C63FF]/50">
              <h3 className="text-xl font-semibold mb-3 text-[#4ECDC4]">Power Pack</h3>
              <p className="text-[#BDC3C7] mb-2"><strong className="text-[#F0F0F0]">Price:</strong> ₹69 (one-time payment)</p>
              <p className="text-[#BDC3C7] mb-2"><strong className="text-[#F0F0F0]">Tokens:</strong> 1000 AI tokens</p>
              <p className="text-[#BDC3C7]"><strong className="text-[#F0F0F0]">Features:</strong> Advanced AI features + Priority Support</p>
            </div>

            <div className="bg-[#16213E]/50 rounded-xl p-6 mb-4 border border-white/10">
              <h3 className="text-xl font-semibold mb-3 text-[#4ECDC4]">Value Pack</h3>
              <p className="text-[#BDC3C7] mb-2"><strong className="text-[#F0F0F0]">Price:</strong> ₹99 (one-time payment)</p>
              <p className="text-[#BDC3C7] mb-2"><strong className="text-[#F0F0F0]">Tokens:</strong> 1500 AI tokens</p>
              <p className="text-[#BDC3C7]"><strong className="text-[#F0F0F0]">Features:</strong> Premium AI features + 24/7 Support</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#6C63FF]">3. Payment Processing</h2>
            <h3 className="text-xl font-semibold mb-3 mt-6">3.1 Payment Gateway</h3>
            <p className="text-[#BDC3C7] leading-relaxed mb-4">
              All payments are processed securely through Razorpay, a PCI-DSS compliant payment gateway. We do not store your credit card or payment information on our servers.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">3.2 Payment Confirmation</h3>
            <p className="text-[#BDC3C7] leading-relaxed mb-4">
              Upon successful payment:
            </p>
            <ul className="list-disc list-inside text-[#BDC3C7] space-y-2 ml-4">
              <li>Tokens are immediately credited to your account</li>
              <li>You will receive a payment confirmation</li>
              <li>A transaction record will be saved in your account</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">3.3 Failed Payments</h3>
            <p className="text-[#BDC3C7] leading-relaxed">
              If a payment fails, no tokens will be credited. Please check your payment method and try again. If the amount was debited but tokens were not credited, contact our support team with your payment transaction ID.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#6C63FF]">4. Currency and Pricing</h2>
            <p className="text-[#BDC3C7] leading-relaxed mb-4">
              All prices are displayed in Indian Rupees (₹). Prices are subject to change, but any changes will not affect purchases already completed.
            </p>
            <p className="text-[#BDC3C7] leading-relaxed">
              We reserve the right to modify token prices at any time. However, you will always be notified of the current price before completing a purchase.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#6C63FF]">5. Token Usage and Expiration</h2>
            <h3 className="text-xl font-semibold mb-3 mt-6">5.1 Token Consumption</h3>
            <p className="text-[#BDC3C7] leading-relaxed mb-4">
              Tokens are consumed when you use AI features:
            </p>
            <ul className="list-disc list-inside text-[#BDC3C7] space-y-2 ml-4">
              <li>AI Habit Coach chat interactions</li>
              <li>AI Insights generation</li>
              <li>AI Smart Setup</li>
              <li>Goal Breakdown features</li>
            </ul>
            <p className="text-[#BDC3C7] leading-relaxed mt-4">
              Token consumption rates vary based on the complexity and length of AI requests.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">5.2 Token Expiration</h3>
            <p className="text-[#BDC3C7] leading-relaxed">
              Purchased tokens do not expire. You can use them at any time. However, tokens are non-transferable between accounts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#6C63FF]">6. Refund Policy</h2>
            <h3 className="text-xl font-semibold mb-3 mt-6">6.1 General Refund Policy</h3>
            <p className="text-[#BDC3C7] leading-relaxed mb-4">
              Due to the digital nature of our token-based service, all purchases are final and non-refundable. Tokens are immediately credited to your account upon successful payment and cannot be returned.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">6.2 Exception Cases</h3>
            <p className="text-[#BDC3C7] leading-relaxed mb-4">
              Refunds may be considered in the following exceptional circumstances:
            </p>
            <ul className="list-disc list-inside text-[#BDC3C7] space-y-2 ml-4">
              <li>Duplicate payments for the same transaction</li>
              <li>Payment made by mistake (contact us within 24 hours)</li>
              <li>Technical errors preventing token credit (with proof)</li>
              <li>Unauthorized transactions (subject to verification)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">6.3 Refund Process</h3>
            <p className="text-[#BDC3C7] leading-relaxed mb-4">
              To request a refund:
            </p>
            <ol className="list-decimal list-inside text-[#BDC3C7] space-y-2 ml-4">
              <li>Contact our support team at info.appsetz@gmail.com</li>
              <li>Provide your payment transaction ID and account details</li>
              <li>Explain the reason for the refund request</li>
              <li>We will review your request within 5-7 business days</li>
            </ol>
            <p className="text-[#BDC3C7] leading-relaxed mt-4">
              If approved, refunds will be processed to the original payment method within 7-14 business days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#6C63FF]">7. Chargebacks and Disputes</h2>
            <p className="text-[#BDC3C7] leading-relaxed mb-4">
              If you initiate a chargeback or dispute a payment:
            </p>
            <ul className="list-disc list-inside text-[#BDC3C7] space-y-2 ml-4">
              <li>Your account may be suspended pending investigation</li>
              <li>Tokens associated with the disputed payment may be revoked</li>
              <li>We will work with you and the payment processor to resolve the issue</li>
            </ul>
            <p className="text-[#BDC3C7] leading-relaxed mt-4">
              We encourage you to contact our support team first to resolve any payment issues before initiating a chargeback.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#6C63FF]">8. Taxes</h2>
            <p className="text-[#BDC3C7] leading-relaxed">
              All prices displayed are inclusive of applicable taxes (GST) as per Indian tax regulations. You are responsible for any additional taxes that may apply in your jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#6C63FF]">9. Payment Security</h2>
            <p className="text-[#BDC3C7] leading-relaxed mb-4">
              We take payment security seriously:
            </p>
            <ul className="list-disc list-inside text-[#BDC3C7] space-y-2 ml-4">
              <li>All payments are processed through PCI-DSS compliant payment gateways</li>
              <li>We do not store your payment card information</li>
              <li>All transactions are encrypted using industry-standard SSL/TLS</li>
              <li>We comply with applicable data protection regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#6C63FF]">10. Contact for Payment Issues</h2>
            <p className="text-[#BDC3C7] leading-relaxed mb-4">
              For payment-related queries or issues, please contact:
            </p>
            <ul className="list-none text-[#BDC3C7] space-y-2">
              <li><strong className="text-[#F0F0F0]">Email:</strong> info.appsetz@gmail.com</li>
              <li><strong className="text-[#F0F0F0]">Response Time:</strong> Within 24-48 hours</li>
            </ul>
            <p className="text-[#BDC3C7] leading-relaxed mt-4">
              Please include your payment transaction ID and account email when contacting support.
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

