import Link from "next/link";
import Image from "next/image";

export default function CancellationsRefunds() {
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
          Cancellations and Refunds Policy
        </h1>
        <p className="text-[#BDC3C7] mb-8">Last updated: December 12, 2025</p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#6C63FF]">1. General Refund Policy</h2>
            <p className="text-[#BDC3C7] leading-relaxed mb-4">
              Due to the digital nature of Goalzy's token-based service, all purchases are generally <strong className="text-[#F0F0F0]">final and non-refundable</strong>. Tokens are immediately credited to your account upon successful payment and cannot be returned or refunded under normal circumstances.
            </p>
            <p className="text-[#BDC3C7] leading-relaxed">
              This policy applies to all token purchases, including:
            </p>
            <ul className="list-disc list-inside text-[#BDC3C7] space-y-2 ml-4 mt-4">
              <li>Starter Pack (₹39 - 500 tokens)</li>
              <li>Power Pack (₹69 - 1000 tokens)</li>
              <li>Value Pack (₹99 - 1500 tokens)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#6C63FF]">2. Exception Cases for Refunds</h2>
            <p className="text-[#BDC3C7] leading-relaxed mb-4">
              Refunds may be considered in the following exceptional circumstances:
            </p>

            <div className="space-y-4">
              <div className="bg-[#16213E]/50 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-3 text-[#4ECDC4]">2.1 Duplicate Payments</h3>
                <p className="text-[#BDC3C7] leading-relaxed">
                  If you were charged multiple times for the same transaction due to a technical error, we will refund the duplicate charges. Please provide proof of duplicate transactions.
                </p>
              </div>

              <div className="bg-[#16213E]/50 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-3 text-[#4ECDC4]">2.2 Accidental Purchases</h3>
                <p className="text-[#BDC3C7] leading-relaxed">
                  If you made a purchase by mistake, contact us within <strong className="text-[#F0F0F0]">24 hours</strong> of the transaction. Refunds for accidental purchases are subject to review and approval. Tokens must not have been used.
                </p>
              </div>

              <div className="bg-[#16213E]/50 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-3 text-[#4ECDC4]">2.3 Technical Errors</h3>
                <p className="text-[#BDC3C7] leading-relaxed">
                  If payment was successfully processed but tokens were not credited to your account due to a technical error, we will either credit the tokens or process a full refund. Please provide your payment transaction ID.
                </p>
              </div>

              <div className="bg-[#16213E]/50 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-3 text-[#4ECDC4]">2.4 Unauthorized Transactions</h3>
                <p className="text-[#BDC3C7] leading-relaxed">
                  If you believe a transaction was made without your authorization, contact us immediately. We will investigate and may issue a refund if the transaction is confirmed to be unauthorized. This is subject to verification with the payment processor.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#6C63FF]">3. Non-Refundable Situations</h2>
            <p className="text-[#BDC3C7] leading-relaxed mb-4">
              The following situations are <strong className="text-[#F0F0F0]">not eligible</strong> for refunds:
            </p>
            <ul className="list-disc list-inside text-[#BDC3C7] space-y-2 ml-4">
              <li>Change of mind after purchase</li>
              <li>Dissatisfaction with AI feature responses</li>
              <li>Tokens have been partially or fully used</li>
              <li>Request made more than 7 days after purchase</li>
              <li>Account suspension or termination due to violation of Terms of Service</li>
              <li>Refund requests without valid reason or proof</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#6C63FF]">4. Cancellation Policy</h2>
            <h3 className="text-xl font-semibold mb-3 mt-6">4.1 Token Purchases</h3>
            <p className="text-[#BDC3C7] leading-relaxed mb-4">
              Token purchases cannot be cancelled once the payment is processed and tokens are credited to your account. However, you can request a refund within the exception cases mentioned above.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">4.2 Account Cancellation</h3>
            <p className="text-[#BDC3C7] leading-relaxed mb-4">
              You can cancel your Goalzy account at any time by:
            </p>
            <ol className="list-decimal list-inside text-[#BDC3C7] space-y-2 ml-4">
              <li>Going to Profile Settings in the app</li>
              <li>Selecting "Delete Account"</li>
              <li>Confirming the deletion</li>
            </ol>
            <p className="text-[#BDC3C7] leading-relaxed mt-4">
              <strong className="text-[#F0F0F0]">Note:</strong> Account cancellation is permanent and cannot be undone. All your data, including unused tokens, will be permanently deleted. Unused tokens are not refundable upon account cancellation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#6C63FF]">5. Refund Request Process</h2>
            <p className="text-[#BDC3C7] leading-relaxed mb-4">
              To request a refund, follow these steps:
            </p>
            <ol className="list-decimal list-inside text-[#BDC3C7] space-y-3 ml-4">
              <li>
                <strong className="text-[#F0F0F0]">Contact Support:</strong> Email us at{" "}
                <a href="mailto:info.appsetz@gmail.com" className="text-[#4ECDC4] hover:text-[#6C63FF] transition-colors">
                  info.appsetz@gmail.com
                </a>
              </li>
              <li>
                <strong className="text-[#F0F0F0]">Provide Information:</strong>
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Payment transaction ID (from Razorpay receipt)</li>
                  <li>Date and time of purchase</li>
                  <li>Amount paid</li>
                  <li>Your account email</li>
                  <li>Reason for refund request</li>
                </ul>
              </li>
              <li>
                <strong className="text-[#F0F0F0]">Review Process:</strong> We will review your request within 5-7 business days
              </li>
              <li>
                <strong className="text-[#F0F0F0]">Decision Notification:</strong> You will be notified via email about the decision
              </li>
              <li>
                <strong className="text-[#F0F0F0]">Refund Processing:</strong> If approved, refunds will be processed to the original payment method within 7-14 business days
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#6C63FF]">6. Refund Processing Time</h2>
            <div className="bg-[#16213E]/50 rounded-xl p-6 border border-white/10">
              <ul className="list-none text-[#BDC3C7] space-y-3">
                <li className="flex items-start">
                  <span className="text-[#4ECDC4] mr-3">⏱️</span>
                  <div>
                    <strong className="text-[#F0F0F0]">Review Time:</strong> 5-7 business days
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4ECDC4] mr-3">💳</span>
                  <div>
                    <strong className="text-[#F0F0F0]">Processing Time:</strong> 7-14 business days after approval
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4ECDC4] mr-3">🏦</span>
                  <div>
                    <strong className="text-[#F0F0F0]">Bank Processing:</strong> Additional 3-5 business days may be required by your bank
                  </div>
                </li>
              </ul>
            </div>
            <p className="text-[#BDC3C7] leading-relaxed mt-4">
              Total time from request to refund appearing in your account: <strong className="text-[#F0F0F0]">15-26 business days</strong>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#6C63FF]">7. Chargebacks and Disputes</h2>
            <p className="text-[#BDC3C7] leading-relaxed mb-4">
              If you initiate a chargeback or dispute a payment with your bank or payment provider:
            </p>
            <ul className="list-disc list-inside text-[#BDC3C7] space-y-2 ml-4">
              <li>Your account may be temporarily suspended pending investigation</li>
              <li>Tokens associated with the disputed payment may be revoked</li>
              <li>We will work with you and the payment processor to resolve the issue</li>
              <li>If the chargeback is found to be invalid, your account may be permanently terminated</li>
            </ul>
            <p className="text-[#BDC3C7] leading-relaxed mt-4">
              <strong className="text-[#F0F0F0]">Important:</strong> We strongly encourage you to contact our support team first to resolve any payment issues before initiating a chargeback. This helps us resolve issues faster and maintain a positive relationship.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#6C63FF]">8. Token Revocation</h2>
            <p className="text-[#BDC3C7] leading-relaxed mb-4">
              In the following cases, we reserve the right to revoke tokens without refund:
            </p>
            <ul className="list-disc list-inside text-[#BDC3C7] space-y-2 ml-4">
              <li>Fraudulent payment methods</li>
              <li>Violation of Terms of Service</li>
              <li>Abuse of the refund policy</li>
              <li>Chargeback disputes found to be invalid</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#6C63FF]">9. Contact for Refund Requests</h2>
            <div className="bg-gradient-to-r from-[#6C63FF]/20 to-[#4ECDC4]/20 rounded-xl p-6 border border-[#6C63FF]/30">
              <p className="text-[#BDC3C7] leading-relaxed mb-4">
                For refund requests or questions about cancellations, please contact:
              </p>
              <p className="text-lg">
                <strong className="text-[#F0F0F0]">Email:</strong>{" "}
                <a href="mailto:info.appsetz@gmail.com" className="text-[#4ECDC4] hover:text-[#6C63FF] transition-colors">
                  info.appsetz@gmail.com
                </a>
              </p>
              <p className="text-[#BDC3C7] mt-2">
                <strong>Response Time:</strong> Within 24-48 hours
              </p>
              <p className="text-[#BDC3C7] mt-4 text-sm">
                Please include "REFUND REQUEST" in your email subject line for faster processing.
              </p>
            </div>
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

