import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Footer from '@/components/Footer';
import FloatingChatbot from '@/components/FloatingChatbot';
import { ChatbotProvider } from "@/context/ChatbotContext";

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
    <html lang="en" className={`${outfit.variable} scroll-smooth`} data-scroll-behavior="smooth">
      <body className="font-sans antialiased bg-secondary text-text selection:bg-accent selection:text-white">
        <ChatbotProvider>
          {children}
          <Footer />
          <FloatingChatbot />
        </ChatbotProvider>
      </body>
    </html>
  );
}