import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "NovelVerse - AI-Powered Cinematic Storytelling Universe",
    template: "%s | NovelVerse",
  },
  description:
    "Experience the future of entertainment where Chinese cultivation novels transform into immersive English narratives through cutting-edge AI, featuring cinematic videos, interactive storytelling, and blockchain-powered digital collectibles.",
  keywords: [
    "AI storytelling",
    "Chinese novels",
    "blockchain",
    "NFT",
    "entertainment",
    "cultivation novels",
  ],
  authors: [{ name: "NovelVerse Team" }],
  creator: "NovelVerse",
  publisher: "NovelVerse",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://novelverse.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://novelverse.app",
    title: "NovelVerse - AI-Powered Cinematic Storytelling Universe",
    description:
      "Experience the future of entertainment where Chinese cultivation novels transform into immersive English narratives through cutting-edge AI.",
    siteName: "NovelVerse",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "NovelVerse Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NovelVerse - AI-Powered Cinematic Storytelling Universe",
    description:
      "Experience the future of entertainment where Chinese cultivation novels transform into immersive English narratives through cutting-edge AI.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
        <link rel="shortcut icon" href="/logo.png" type="image/png" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body
        className={`${inter.className} antialiased bg-dark-900 text-white font-sans overflow-x-hidden`}
      >
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
