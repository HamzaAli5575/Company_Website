import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import WhatsAppFloat from "./components/layout/WhatsAppFloat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Horizon Tech Services - Leading Cybersecurity Solutions",
  description:
    "Ensuring Security, Inspiring Innovation, Driving Trust. Professional cybersecurity and technology solutions since 2005.",
  icons: {
    icon: "/images/logo1.png",
    shortcut: "/images/logo1.png",
    apple: "/images/logo1.png",
  },
  openGraph: {
    title: "Horizon Tech Services - Leading Cybersecurity Solutions",
    description: "Professional cybersecurity and technology solutions since 2005.",
    images: ["/images/logo1.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload important images for speed */}
        <link rel="preload" as="image" href="/images/logo1.png" />
        <link rel="preload" as="image" href="/images/HeroSection2.jpeg" />

        {/* Icons */}
        <link rel="icon" href="/images/logo1.png" type="image/png" />
        <link rel="shortcut icon" href="/images/logo1.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo1.png" />

        {/* Global styles injected */}
        <style>{`
          html {
            background: #0a0a0a;
          }
          .hero-fallback {
            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2d0000 100%);
          }
          .cta-primary {
            background: linear-gradient(90deg, #dc2626, #991b1b);
            color: #fff;
          }
          .cta-primary:focus {
            outline: none;
            box-shadow: 0 0 0 4px rgba(220, 38, 38, 0.18);
          }
        `}</style>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <Navbar />

        <main>{children}</main>

        <Footer />
        <WhatsAppFloat phoneNumber="+923155024936" />
      </body>
    </html>
  );
}
