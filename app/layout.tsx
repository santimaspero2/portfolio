import type { Metadata } from "next";
import { Sora } from 'next/font/google';
import "./globals.css";
import { Providers } from "@/components/Providers";
import { LanguageToggle } from "@/components/LanguageToggle";
import { Analytics } from "@vercel/analytics/react";

const sora = Sora({ 
  subsets: ['latin'],
  variable: '--font-sora',
});

const SITE_URL = "https://santimaspero.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Santiago Maspero — Fullstack Developer",
    template: "%s | Santiago Maspero",
  },
  description:
    "Desarrollador Fullstack especializado en Python y TypeScript. Sistemas en producción para más de 300 organizaciones. Management Analytics · Django · React Native · GCP.",
  authors: [{ name: "Santiago Maspero", url: SITE_URL }],
  creator: "Santiago Maspero",
  keywords: [
    "Santiago Maspero",
    "Fullstack Developer",
    "Django",
    "TypeScript",
    "React Native",
    "PostgreSQL",
    "Google Cloud",
    "Portfolio",
    "Software Developer Argentina",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Santiago Maspero",
    title: "Santiago Maspero — Fullstack Developer",
    description:
      "Sistemas en producción para más de 300 organizaciones. Django · TypeScript · React Native · GCP.",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Santiago Maspero — Fullstack Developer Portfolio",
      },
    ],
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Santiago Maspero — Fullstack Developer",
    description:
      "Sistemas en producción para más de 300 organizaciones. Django · TypeScript · React Native · GCP.",
    images: ["/preview.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${sora.variable}`}>
      <body className="font-sans bg-app text-body">
        <Providers>
          <LanguageToggle />
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
