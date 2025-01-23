import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AetherMind - Web3 AI Companion for DeFi Optimization",
  description: "Experience the future of decentralized AI with AetherMind. Seamlessly integrate intelligent decision-making into your Web3 ecosystem.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} min-h-screen bg-black antialiased`}>
        {children}
      </body>
    </html>
  );
}
