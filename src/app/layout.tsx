import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Code Crafted Digital | Enterprise Web Development & Digital Marketing in Michigan",
  description:
    "Michigan-based web development and digital marketing agency. Custom Next.js applications, WordPress solutions, and data-driven SEO strategies that deliver results.",

  metadataBase: new URL("https://codecrafteddigital.com"),

  openGraph: {
    title: "Code Crafted Digital",
    description: "Enterprise Software Engineering for Michigan",
    url: "https://codecrafteddigital.com",
    siteName: "Code Crafted Digital",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Code Crafted Digital",
    description: "Enterprise Software Engineering for Michigan",
  },

  keywords: [
    "web development Michigan",
    "custom software development",
    "SEO Michigan",
    "enterprise web applications",
    "Next.js development",
    "Grand Blanc web developer",
  ],
  authors: [{ name: "Andrew Nichols" }],
  creator: "Code Crafted Digital",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`flex flex-col min-h-screen ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className='flex-1'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
