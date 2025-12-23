import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Footer from '@/components/Footer';
import FloatingChatbot from '@/components/FloatingChatbot';

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GSBG | Salesforce Partner",
  description: "GSBG - Expert Salesforce solutions to drive growth, efficiency, and innovation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-secondary text-text selection:bg-accent selection:text-white">
        {children}
        <Footer />
        <FloatingChatbot />
      </body>
    </html>
  );
}