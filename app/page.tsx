import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1A1A2E] text-[#F0F0F0]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#16213E]/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/Goalzy-logo.png"
                alt="Goalzy Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-2xl font-bold" style={{ fontFamily: 'var(--font-poppins)' }}>Goalzy</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="hover:text-[#6C63FF] transition-colors">Features</a>
              <a href="#screenshots" className="hover:text-[#6C63FF] transition-colors">Screenshots</a>
              <a href="#pricing" className="hover:text-[#6C63FF] transition-colors">Pricing</a>
              <a href="#download" className="bg-gradient-to-r from-[#6C63FF] to-[#4ECDC4] px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-[#6C63FF]/50 transition-all">
                Download
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E] via-[#16213E] to-[#0F3460] opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6" style={{ fontFamily: 'var(--font-poppins)' }}>
                Build Better Habits with
                <span className="block mt-2 gradient-text">AI-Powered Coaching</span>
              </h1>
              <p className="text-xl md:text-2xl text-[#BDC3C7] mb-12 max-w-2xl mx-auto md:mx-0">
                Track your progress, get personalized insights, and achieve your goals with Goalzy.
                Your intelligent companion for building lasting habits.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="#download"
                  className="bg-gradient-to-r from-[#6C63FF] to-[#4ECDC4] px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-[#6C63FF]/50 transition-all transform hover:scale-105"
                >
                  Get Started Free
                </a>
                <a
                  href="#features"
                  className="border-2 border-[#6C63FF] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#6C63FF]/10 transition-all"
                >
                  Learn More
                </a>
              </div>
            </div>
            
            {/* Right Side - Image */}
            <div className="flex justify-center md:justify-end">
              <div className="relative max-w-sm w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[#6C63FF]/20 to-[#4ECDC4]/20 rounded-3xl blur-3xl transform rotate-6"></div>
                <div className="relative">
                  <Image
                    src="/images/ChatGPT Image Dec 12, 2025, 02_35_30 PM.png"
                    alt="Goalzy App Screenshot"
                    width={400}
                    height={800}
                    className="w-full h-auto rounded-3xl shadow-2xl shadow-[#6C63FF]/30"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-[#16213E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>
              Powerful Features to
              <span className="gradient-text"> Transform Your Life</span>
            </h2>
            <p className="text-xl text-[#BDC3C7] max-w-2xl mx-auto">
              Everything you need to build and maintain healthy habits
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "🤖", title: "AI Habit Coach", desc: "Get personalized coaching and motivation from your AI companion." },
              { icon: "📊", title: "Smart Analytics", desc: "Track your progress with detailed analytics and beautiful visualizations." },
              { icon: "🎯", title: "Goal Breakdown", desc: "Turn big goals into achievable steps with AI-powered planning." },
              { icon: "💡", title: "AI Insights", desc: "Discover patterns in your behavior and get intelligent suggestions." },
              { icon: "🔥", title: "Streak Tracking", desc: "Build momentum with visual streak indicators and progress tracking." },
              { icon: "✨", title: "AI Smart Setup", desc: "Let AI create your perfect habit plan tailored to your goals." },
            ].map((feature, i) => (
              <div key={i} className="bg-[#16213E]/70 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-[#6C63FF]/50 transition-all hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-[#6C63FF] to-[#4ECDC4] rounded-xl flex items-center justify-center mb-6">
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'var(--font-poppins)' }}>{feature.title}</h3>
                <p className="text-[#BDC3C7] leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="py-24 bg-[#1A1A2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>
              Beautiful Design,
              <span className="gradient-text"> Intuitive Experience</span>
            </h2>
            <p className="text-xl text-[#BDC3C7] max-w-2xl mx-auto">
              See Goalzy in action with our stunning interface
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                image: "/images/WhatsApp Image 2025-12-12 at 2.29.08 PM.jpeg",
                title: "Home Dashboard", 
                desc: "Beautiful dark-themed interface with today's habits" 
              },
              { 
                image: "/images/WhatsApp Image 2025-12-12 at 2.29.08 PM (1).jpeg",
                title: "AI Coach Chat", 
                desc: "Interactive AI coach ready to help you anytime" 
              },
              { 
                image: "/images/WhatsApp Image 2025-12-12 at 2.29.08 PM (2).jpeg",
                title: "Analytics View", 
                desc: "Comprehensive analytics and statistics" 
              },
              { 
                image: "/images/WhatsApp Image 2025-12-12 at 2.29.09 PM.jpeg",
                title: "Profile & Settings", 
                desc: "Manage your profile and customize experience" 
              },
              { 
                image: "/images/WhatsApp Image 2025-12-12 at 2.29.09 PM (1).jpeg",
                title: "Habit Management", 
                desc: "Create and organize habits with color coding" 
              },
              { 
                image: "/images/WhatsApp Image 2025-12-12 at 2.29.09 PM (2).jpeg",
                title: "Quick Actions", 
                desc: "Fast access to AI features and smart setup" 
              },
            ].map((screenshot, i) => (
              <div key={i} className="bg-[#16213E]/70 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-[#6C63FF]/50 transition-all hover:transform hover:scale-105">
                <div className="rounded-xl overflow-hidden mb-4 shadow-2xl">
                  <Image
                    src={screenshot.image}
                    alt={screenshot.title}
                    width={400}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>{screenshot.title}</h3>
                <p className="text-[#BDC3C7]">{screenshot.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-[#16213E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>
              Simple,
              <span className="gradient-text"> Transparent Pricing</span>
            </h2>
            <p className="text-xl text-[#BDC3C7] max-w-2xl mx-auto">
              Choose the perfect plan for your AI-powered habit journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Starter Pack", price: "39", features: ["500 AI Tokens", "Basic Analytics", "Habit Tracking", "Email Support"], popular: false },
              { name: "Power Pack", price: "69", features: ["1000 AI Tokens", "Advanced Analytics", "AI Smart Setup", "Priority Support", "All Starter Features"], popular: true },
              { name: "Value Pack", price: "99", features: ["1500 AI Tokens", "Premium Analytics", "Unlimited AI Features", "24/7 Support", "All Power Pack Features"], popular: false },
            ].map((plan, i) => (
              <div
                key={i}
                className={`bg-[#16213E]/70 backdrop-blur-sm p-8 rounded-2xl border ${
                  plan.popular
                    ? "border-[#6C63FF] shadow-xl shadow-[#6C63FF]/20 scale-105"
                    : "border-white/10"
                } hover:transform hover:scale-105 transition-all`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-[#6C63FF] to-[#4ECDC4] text-white text-center py-2 rounded-full mb-4 font-semibold">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">₹{plan.price}</span>
                  <span className="text-[#BDC3C7]"> / one-time</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-[#4ECDC4] mr-2">✓</span>
                      <span className="text-[#BDC3C7]">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-[#6C63FF] to-[#4ECDC4] py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-[#6C63FF]/50 transition-all">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="py-24 bg-gradient-to-br from-[#1A1A2E] via-[#16213E] to-[#0F3460]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-poppins)' }}>
            Ready to Transform Your Habits?
          </h2>
          <p className="text-xl text-[#BDC3C7] mb-12">
            Join thousands of users building better habits with Goalzy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="bg-gradient-to-r from-[#6C63FF] to-[#4ECDC4] px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-[#6C63FF]/50 transition-all transform hover:scale-105"
            >
              Download for Android
            </a>
            <a
              href="#"
              className="border-2 border-[#6C63FF] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#6C63FF]/10 transition-all"
            >
              Download for iOS
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F3460] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Image
                src="/images/Goalzy-logo.png"
                alt="Goalzy Logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-xl font-bold" style={{ fontFamily: 'var(--font-poppins)' }}>Goalzy</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-[#BDC3C7]">
              <Link href="/privacy" className="hover:text-[#6C63FF] transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-[#6C63FF] transition-colors">Terms of Service</Link>
              <Link href="/payment-policy" className="hover:text-[#6C63FF] transition-colors">Payment Policy</Link>
              <a href="mailto:support@goalzy.app" className="hover:text-[#6C63FF] transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-8 text-center text-[#BDC3C7]">
            <p>© 2025 Goalzy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
