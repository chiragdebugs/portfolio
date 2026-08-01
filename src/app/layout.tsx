import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chirag Tapre | Full Stack Developer",
  description: "Full Stack Developer building scalable web applications, AI-powered products and exploring DevOps and cloud technologies.",
  keywords: [
    "Chirag Tapre",
    "Full Stack Developer",
    "DevOps",
    "Software Engineer",
    "React",
    "FastAPI",
    "PostgreSQL",
    "Next.js",
    "Portfolio"
  ],
  authors: [{ name: "Chirag Tapre" }],
  creator: "Chirag Tapre",
  openGraph: {
    title: "Chirag Tapre | Full Stack Developer",
    description: "Full Stack Developer building scalable web applications, AI-powered products and exploring DevOps and cloud technologies.",
    url: "https://chiragtapre.com",
    siteName: "Chirag Tapre Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chirag Tapre | Full Stack Developer",
    description: "Full Stack Developer building scalable web applications, AI-powered products and exploring DevOps and cloud technologies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#08090A] text-[#F5F7FA] font-sans antialiased overflow-x-hidden selection:bg-[#00F0FF]/20 selection:text-[#00F0FF]">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
