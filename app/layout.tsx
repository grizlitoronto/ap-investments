import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A.P.G Investments Ltd.",
  description: "Private Investment Firm",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}