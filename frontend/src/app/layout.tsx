import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="scrolling-bg">{children}</body>
    </html>
  );
}
