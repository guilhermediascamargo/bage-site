import type { Metadata } from "next";
import { Barlow_Condensed, Source_Sans_3 } from "next/font/google";
import type { ReactNode } from "react";
import SiteFooter from "@/components/site/site-footer";
import SiteHeader from "@/components/site/site-header";
import "@/styles/globals.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-barlow-condensed",
  fallback: ["Arial Narrow", "Arial", "sans-serif"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
  fallback: ["Arial", "Helvetica", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Grêmio Esportivo Bagé",
  description: "Site oficial do Grêmio Esportivo Bagé.",
  // Remover ao preparar as páginas públicas e sua política de indexação.
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${barlowCondensed.variable} ${sourceSans.variable}`}
    >
      <body className="flex min-h-screen flex-col">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
