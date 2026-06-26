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

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mark A. Singh",
  url: "https://www.markasingh.com",
  sameAs: [
    "https://www.linkedin.com/in/markasingh",
    "https://github.com/masingh882",
    "https://www.gallivantingtravel.com",
    "https://www.mrscleaninc.com",
  ],
  jobTitle: [
    "Solutions Engineering Leader",
    "Enterprise Solutions Engineer",
    "Customer Technology Advisor",
    "Technical Leadership Professional",
  ],
  knowsAbout: [
    "Solutions Engineering",
    "Technical Leadership",
    "Customer Success",
    "Technology Adoption",
    "Cybersecurity",
    "Zero Trust",
    "SASE",
    "Observability",
    "AI-Assisted Workflows",
    "Guided Intelligence",
    "Digital Professional Identity",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.markasingh.com"),

  title: {
    default: "Mark A. Singh | Helping Organizations Navigate Technology Change",
    template: "%s | Mark A. Singh",
  },

  description:
    "Senior Solutions Engineer helping organizations navigate technology change through customer understanding, technical leadership, enterprise software experience, and business alignment.",

  applicationName: "Mark A. Singh",
  authors: [{ name: "Mark A. Singh" }],
  creator: "Mark A. Singh",
  publisher: "Mark A. Singh",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Mark A. Singh | Helping Organizations Navigate Technology Change",
    description:
      "Professional portfolio of Mark A. Singh, Senior Solutions Engineer focused on connecting customers, technology teams, and business outcomes.",
    url: "https://www.markasingh.com",
    siteName: "Mark A. Singh",
    type: "website",
    images: [
      {
        url: "/images/og/markasingh-og.jpg",
        width: 1200,
        height: 630,
        alt: "Mark A. Singh | Helping Organizations Navigate Technology Change",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mark A. Singh | Helping Organizations Navigate Technology Change",
    description:
      "Senior Solutions Engineer focused on connecting customers, technology teams, and business outcomes.",
    images: ["/images/og/markasingh-og.jpg"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
        {children}
        <BackToTopButton />
        <Analytics />
      </body>
    </html>
  );
}