import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

const display = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
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
  title: "THE THAJU — Mhd Thaju, AI Web Developer & Digital Experience Builder",
  description:
    "AI Web Developer, Frontend Developer, and Digital Experience Builder based in Dubai, UAE. I help startups, businesses, and founders build fast, scalable, and visually impressive websites using AI-assisted workflows and modern technologies.",
  keywords: [
    "AI Web Developer",
    "Frontend Developer",
    "Digital Experience Builder",
    "Mhd Thaju",
    "THE THAJU",
    "Dubai web developer",
    "Next.js developer",
    "premium website design",
  ],
  authors: [{ name: "Mhd Thaju" }],
  openGraph: {
    title: "THE THAJU — AI Web Developer & Digital Experience Builder",
    description:
      "I help startups, businesses, and founders build fast, scalable, and visually impressive websites using AI-assisted workflows and modern technologies.",
    url: "https://thethajuu.vercel.app",
    siteName: "THE THAJU",
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