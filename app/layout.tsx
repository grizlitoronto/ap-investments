import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "A.P.G Investments — Capital & Digital Execution for High-Potential Businesses",
  description:
    "A.P.G Investments backs pre-seed and seed businesses with $25K–$100K in capital, plus hands-on digital and AI operational support. Toronto-based. Fast decisions.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "A.P.G Investments — Capital & Digital Execution",
    description:
      "We back high-potential businesses with decisive capital and hands-on digital and AI operational support. Toronto. Fast and selective.",
    url: "https://www.apginvests.com",
    siteName: "A.P.G Investments Ltd.",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "A.P.G Investments — Capital & Digital Execution",
    description:
      "Pre-seed and seed capital ($25K–$100K) plus digital and AI operational support. Toronto. Fast and selective.",
  },
  alternates: {
    canonical: "https://www.apginvests.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}<Analytics /></body>
    </html>
  );
}