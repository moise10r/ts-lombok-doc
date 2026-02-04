import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "lombokx-ts - TypeScript Lombok-style Decorators",
  description: "TypeScript library providing Lombok-style decorators via compile-time AST transformers. Zero runtime cost, full type safety.",
  keywords: ["typescript", "lombok", "decorators", "compile-time", "ast", "transformer", "boilerplate"],
  openGraph: {
    title: "lombokx-ts - TypeScript Lombok-style Decorators",
    description: "Eliminate boilerplate code with compile-time TypeScript decorators",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}



