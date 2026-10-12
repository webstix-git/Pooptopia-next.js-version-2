import type { Metadata } from "next";
import { DM_Sans, Hanken_Grotesk, Outfit, Titan_One } from "next/font/google";
import { BackToTop } from "@/components/BackToTop";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
});

const titan = Titan_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-titan",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Pooptopia - Premium Dog Waste Removal & Yard Sanitation · Kenosha, WI",
  description:
    "Family-run dog waste removal and yard sanitation in Kenosha, Wisconsin. A two-person team details your yard, sanitizes as they go, and confirms your gate is secured.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${hanken.variable} ${titan.variable} ${dmSans.variable} ${outfit.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
