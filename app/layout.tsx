import type { Metadata } from "next";
import localFont from "next/font/local";

import "./preflight.css";
import "./globals.css";

const switzer = localFont({
  src: [
    {
      path: "./fonts/Switzer-Regular.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Switzer-Semibold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Tool Compass: Your Smart Guide to Cardano Blockchain Data",
  description:
    "Tool Compass is your go-to assistant for navigating the diverse and often overwhelming ecosystem of Cardano blockchain data solutions.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={switzer.className}>
      <body>{children}</body>
    </html>
  );
}
