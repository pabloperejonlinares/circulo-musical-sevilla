export const SITE_NAME = "Círculo Musical de Sevilla";

export const DEFAULT_DESCRIPTION =
  "Escuela de música en Sevilla. Clases de música para todas las edades: clases de música para niños, lenguaje musical, violín, piano y más. Primera clase de prueba sin compromiso.";

export const DEFAULT_OG_IMAGE = "/images/cabecera.jpg";

export function getSiteUrl(): string {
  const url =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://circulomusicaldesevilla.com";
  return url.replace(/\/$/, "");
}

export function absoluteUrl(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalizedPath}`;
}
