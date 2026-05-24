import type { Metadata, Viewport } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} — AI Websites, Agents & Chatbots`,
  description: site.description,
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "AI agency",
    "AI website",
    "AI agents",
    "AI chatbots",
    "business automation",
  ],
  openGraph: {
    title: site.name,
    description: site.description,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${merriweather.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">{children}</body>
    </html>
  );
}
