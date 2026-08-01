import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chirag Tapre — Software Engineer & Developer",
  description:
    "Portfolio of Chirag Tapre. Building modern digital products across software, AI, and cloud.",
  openGraph: {
    title: "Chirag Tapre — Software Engineer & Developer",
    description:
      "Portfolio of Chirag Tapre. Building modern digital products across software, AI, and cloud.",
    url: "https://github.com/chiragdebugs",
    siteName: "Chirag Tapre Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${figtree.variable} scroll-smooth`}>
      <body className="bg-[#0C0C0C] text-white font-sans antialiased selection:bg-[#F598F2] selection:text-black overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
