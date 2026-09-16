import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { HerouiProviders } from "@/providers";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { CLASES } from "@/data";
import { buildRootMetadata } from "@/lib/seo/metadata";
import { buildLocalBusinessJsonLd } from "@/lib/seo/json-ld";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = buildRootMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="light" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLd data={buildLocalBusinessJsonLd()} />
        <HerouiProviders>
          <Header clases={CLASES} />
          <main className="min-h-screen flex flex-col">{children}</main>
          <Footer />
        </HerouiProviders>
        <Analytics />
      </body>
    </html>
  );
}
