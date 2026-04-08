import type { Metadata } from "next";
import { Cabin_Condensed, Calistoga } from "next/font/google";
import "./globals.css";
import Header from "./components/ui/header";
import PromoBar from "./components/ui/promo-bar";

const calistoga = Calistoga({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-calistoga",
});

const cabinCondensed = Cabin_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cabin-condensed",
});

export const metadata: Metadata = {
  title: "Focus Brew Café",
  description: "kawiarnia z kawą i deserami",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cabinCondensed.variable}  ${calistoga.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}
