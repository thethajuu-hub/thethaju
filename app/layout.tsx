import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

// General Sans isn't distributed on Google Fonts (Fontshare-only, would need
// self-hosting), and Geist isn't available via next/font/google in this
// Next.js version either (confirmed — it throws "Unknown font" at build).
// Manrope is the closest reliable match: same geometric, humanist character,
// and it's the only one of the three that actually loads. Weight goes up to
// 800 (Manrope's heaviest cut — it has no true 900) to cover both the
// "Extra Bold" section-title weight and the hero's "Black" request.
const display = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thethajuu.vercel.app"),
  title: "THE THAJUU — Muhammed Thajudheen, AI Web Developer",
  description:
    "AI Web Developer based in Dubai, UAE. Building premium, AI-powered websites with modern web technology — from concept to cinematic, production-grade launch.",
  keywords: [
    "AI Web Developer",
    "Muhammed Thajudheen",
    "THE THAJUU",
    "Dubai web developer",
    "Next.js developer",
    "premium website design",
  ],
  authors: [{ name: "Muhammed Thajudheen" }],
  openGraph: {
    title: "THE THAJUU — AI Web Developer",
    description:
      "Building premium AI-powered websites with modern web technologies.",
    url: "https://thethajuu.vercel.app",
    siteName: "THE THAJUU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@thethajuu",
    creator: "@thethajuu",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <div className="grid-field" />
        <div className="noise-overlay" />
        <CustomCursor />
        <ScrollProgress />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
