import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Manrope } from "next/font/google";

import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Jay Deepthi Interiors",
  description:
    "Premium UPVC Windows, Mesh Doors, PVC Interiors & Aluminium Partitions",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`
        ${playfair.variable}
        ${manrope.variable}
        ${geistSans.variable}
        ${geistMono.variable}
      `}
    >
      <body className="bg-[#FAF8F5] text-[#222] antialiased">
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
