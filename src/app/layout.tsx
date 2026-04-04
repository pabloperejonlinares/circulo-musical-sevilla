import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { HerouiProviders } from "@/providers";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CLASES } from "@/data";
import "./globals.css";
// Sustituir por la URL pública del sitio cuando esté definida
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tu-dominio.com";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Círculo Musical de Sevilla | Escuela de música en Sevilla";
const description =
  "Escuela de música en Sevilla. Clases de música para todas las edades: clases de música para niños, lenguaje musical, violín, piano y más. Primera clase de prueba sin compromiso.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/",
    locale: "es_ES",
    type: "website",
    images: [
      { url: "/images/cabecera.jpg", width: 1200, height: 630, alt: "Círculo Musical de Sevilla, escuela de música en Sevilla" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/cabecera.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MusicSchool",
  name: "Círculo Musical de Sevilla",
  description,
  url: SITE_URL,
  image: `${SITE_URL}/images/cabecera.jpg`,
  areaServed: { "@type": "City" as const, name: "Sevilla" },
  email: "circulomusicaldesevilla@gmail.com",
  telephone: "691 196 341",
};

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <HerouiProviders>
          <Header clases={CLASES}/>
            <main className="min-h-screen flex flex-col">{children}</main>
          <Footer />
        </HerouiProviders>
      </body>
    </html>
  );
}
