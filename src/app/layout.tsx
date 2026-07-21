import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { MessageCircle } from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Shree Aadinath Coal Resources LLP",
  description:
    "Reliable Indigenous Coal Supply Solutions Across India. Backed by 35+ years of industry expertise, Shree Aadinath Coal Resources LLP delivers quality coal with dependable sourcing, efficient logistics, and customer-focused service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        {/* Global WhatsApp Floating Button */}
        <a
          href="https://wa.me/917083812435?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20coal%20supply%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-28 md:bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="h-7 w-7" />
        </a>
      </body>
    </html>
  );
}
