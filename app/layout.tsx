import BackToTopButton from "./components/BackToTopButton";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mark A. Singh",
  description:
    "Helping organizations navigate technology change through customer understanding, technical leadership, and business alignment.",

  openGraph: {
    title: "Mark A. Singh",
    description:
      "Helping organizations navigate technology change through customer understanding, technical leadership, and business alignment.",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <BackToTopButton />
         <Analytics />
      </body>
    </html>
  );
}