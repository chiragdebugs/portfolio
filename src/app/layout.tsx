import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const kanit = Kanit({
  variable: "--font-kanit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chirag Tapre – 3D Creator",
  description: "A 3D creator driven by crafting striking and unforgettable projects.",
  keywords: ["Chirag Tapre", "3D Creator", "3D Modeling", "Motion Design", "Full Stack Developer", "Portfolio"],
  authors: [{ name: "Chirag Tapre" }],
  creator: "Chirag Tapre",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${kanit.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#0C0C0C] text-[#D7E2EA] font-sans overflow-x-clip">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
