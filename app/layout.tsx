import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Goalzy - AI-Powered Habit Tracker App",
    template: "%s | Goalzy"
  },
  description: "Build better habits with Goalzy. Track your progress, get AI-powered insights, personalized coaching, and achieve your goals. Download the free habit tracker app for Android.",
  keywords: [
    "habit tracker",
    "AI habit coach",
    "goal tracking",
    "habit building app",
    "productivity app",
    "personal development",
    "streak tracker",
    "habit analytics",
    "Android habit app",
    "goal achievement",
    "daily habits",
    "self improvement"
  ],
  authors: [{ name: "Goalzy Team" }],
  creator: "Goalzy",
  publisher: "Goalzy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://goalzy.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Goalzy",
    title: "Goalzy - AI-Powered Habit Tracker App",
    description: "Build better habits with AI-powered coaching. Track progress, get personalized insights, and achieve your goals with Goalzy.",
    images: [
      {
        url: "/images/Goalzy-logo.png",
        width: 1200,
        height: 630,
        alt: "Goalzy - AI-Powered Habit Tracker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Goalzy - AI-Powered Habit Tracker App",
    description: "Build better habits with AI-powered coaching. Track progress and achieve your goals.",
    images: ["/images/Goalzy-logo.png"],
    creator: "@goalzy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  category: "productivity",
  icons: {
    icon: [
      { url: "/images/Goalzy-logo.png", sizes: "32x32", type: "image/png" },
      { url: "/images/Goalzy-logo.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/images/Goalzy-logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  themeColor: "#6C63FF",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Goalzy",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
