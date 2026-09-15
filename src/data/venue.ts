/** Texto mostrado en la web (con Nº). */
export const VENUE_ADDRESS = "Calle La Moraleja Nº14, 41020, Sevilla" as const;

/** Consulta para servicios de mapas (sin símbolos raros en la URL). */
const VENUE_MAPS_QUERY = "Calle La Moraleja 14, 41020 Sevilla, España";
const encodedMapsQuery = encodeURIComponent(VENUE_MAPS_QUERY);

/** Escritorio y navegadores que no reconocen `geo:` bien. */
export const VENUE_GOOGLE_MAPS_SEARCH_HREF =
  `https://www.google.com/maps/search/?api=1&query=${encodedMapsQuery}`;

/** Android: suele abrir el selector “Abrir con…” entre apps de mapas. */
export const VENUE_GEO_HREF = `geo:0,0?q=${encodedMapsQuery}`;

/** iOS / iPadOS: abre la app Mapas. */
export const VENUE_APPLE_MAPS_HREF = `https://maps.apple.com/?q=${encodedMapsQuery}`;
