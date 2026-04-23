import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-mu-six-30.vercel.app"),
  title: "Azhar Ud Din — Full-Stack Developer",
  description:
    "Full-stack developer building considered web applications. Python, TypeScript, React, Next.js, D3.",
  openGraph: {
    title: "Azhar Ud Din — Full-Stack Developer",
    description:
      "Full-stack developer building considered web applications. Python, TypeScript, React, Next.js, D3.",
    url: "https://portfolio-mu-six-30.vercel.app",
    siteName: "Azhar Ud Din",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Azhar Ud Din — Full-Stack Developer",
    description:
      "Full-stack developer building considered web applications. Python, TypeScript, React, Next.js, D3.",
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
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
