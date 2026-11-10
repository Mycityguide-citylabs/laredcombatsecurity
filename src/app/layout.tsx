import type { Metadata, Viewport } from "next";
import { Inter, EB_Garamond } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "La\'Red Combat Security | Professional Security Services Zimbabwe",
  description: "La\'Red Combat Security (PVT) LTD \u2014 Professional security services across Zimbabwe. Armed guards, CCTV, rapid response, K9 patrols, event security. Registered under Act Chapter 24:31.",
  keywords: ["security Zimbabwe", "armed guards Harare", "CCTV installation", "rapid response", "K9 patrols", "cash in transit", "private investigations"],
  authors: [{ name: "La\'Red Combat Security" }],
  creator: "La\'Red Combat Security",
  publisher: "La\'Red Combat Security",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_ZW",
    url: "https://laredcombatsecurity.co.zw",
    title: "La\'Red Combat Security | Professional Security Services Zimbabwe",
    description: "Professional security services across Zimbabwe. Armed guards, CCTV, rapid response, K9 patrols. Registered under Act Chapter 24:31.",
    siteName: "La\'Red Combat Security",
  },
  twitter: {
    card: "summary_large_image",
    title: "La\'Red Combat Security | Professional Security Services Zimbabwe",
    description: "Professional security services across Zimbabwe. Armed guards, CCTV, rapid response, K9 patrols.",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export const viewport: Viewport = {
  themeColor: "#1E3A8A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-ZW" className={`${inter.variable} ${ebGaramond.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className="min-h-screen bg-background font-body text-foreground">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}