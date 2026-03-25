import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google"; // 1. Import new font
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

// 2. Configure the font
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta", // Changed variable name
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://getoutapp.pt'),
  title: "GET OUT | Because Life Doesn't Happen Offline",
  description: "Discover the best events and parties near you.",
  openGraph: {
    title: "GET OUT | Because Life Doesn't Happen Offline",
    description: "Discover the best events and parties near you.",
    url: "https://getoutapp.pt",
    siteName: "GetOut",
    images: [
      {
        url: "/assets/logo.png",
        width: 1200,
        height: 630,
        alt: "GetOut Logo",
      },
    ],
    locale: "pt_PT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GET OUT | Because Life Doesn't Happen Offline",
    description: "Discover the best events and parties near you.",
    images: ["/assets/logo.png"],
  },
  verification: {
    other: {
      "facebook-domain-verification": ["rjg3w4uqjn1ds37cm6rkw4xn38z4ee"],
    },
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 3. Apply the variable and class name */}
      <body className={jakarta.className}>
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            {children}
            <Footer />
            <CookieConsent />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}