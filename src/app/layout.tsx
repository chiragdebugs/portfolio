import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chirag Tapre | Full Stack Developer",
  description: "Aspiring Full Stack Developer & AI Enthusiast specializing in Python, React, and Modern Web Applications.",
  keywords: ["Chirag Tapre", "Full Stack Developer", "Python Developer", "React Developer", "Software Engineer", "Portfolio"],
  authors: [{ name: "Chirag Tapre" }],
  creator: "Chirag Tapre",
  metadataBase: new URL("https://chiragtapre.com"),
  openGraph: {
    title: "Chirag Tapre | Full Stack Developer",
    description: "Aspiring Full Stack Developer & AI Enthusiast specializing in Python, React, and Modern Web Applications.",
    url: "https://chiragtapre.com",
    siteName: "Chirag Tapre Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chirag Tapre | Full Stack Developer",
    description: "Aspiring Full Stack Developer & AI Enthusiast specializing in Python, React, and Modern Web Applications.",
  },
};

import ScrollProgress from "@/components/ui/ScrollProgress";
import MouseGlow from "@/components/ui/MouseGlow";
import CommandPalette from "@/components/ui/CommandPalette";
import BackToTop from "@/components/ui/BackToTop";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Chirag Tapre",
    url: "https://chiragtapre.com",
    jobTitle: "Full Stack Developer",
    sameAs: [
      "https://github.com/chiragdebugs",
      "https://linkedin.com/in/chirag-tapre-47a426192"
    ]
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollProgress />
        <MouseGlow />
        <CommandPalette />
        <BackToTop />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
