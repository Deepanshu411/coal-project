import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

import { AnalyticsTracker } from "@/components/analytics-tracker";

export const metadata: Metadata = {
  title: "Shree Aadinath Coal Resources LLP",
  description: "Powering Progress from the Earth. Driven by Reliability. Fuelled by Service.",
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
          <AnalyticsTracker />
        </ThemeProvider>
      </body>
    </html>
  );
}
