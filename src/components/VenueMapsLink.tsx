"use client";

import { type ReactNode } from "react";
import {
  VENUE_ADDRESS,
  VENUE_APPLE_MAPS_HREF,
  VENUE_GEO_HREF,
  VENUE_GOOGLE_MAPS_SEARCH_HREF,
} from "@/data/venue";

type VenueMapsLinkProps = Readonly<{
  className?: string;
  children?: ReactNode;
}>;

function isLikelyIPadOS(ua: string): boolean {
  if (/iPad/i.test(ua)) return true;
  const maxTp =
    typeof navigator === "undefined" ? 0 : (navigator.maxTouchPoints ?? 0);
  // iPadOS 13+ puede declararse como Mac con pantalla táctil
  return maxTp > 1 && /Macintosh/i.test(ua);
}

function resolveVenueMapsHref(): string {
  if (typeof navigator === "undefined") {
    return VENUE_GOOGLE_MAPS_SEARCH_HREF;
  }
  const ua = navigator.userAgent;
  if (/Android/i.test(ua)) {
    return VENUE_GEO_HREF;
  }
  if (/iPhone|iPad|iPod/i.test(ua) || isLikelyIPadOS(ua)) {
    return VENUE_APPLE_MAPS_HREF;
  }
  return VENUE_GOOGLE_MAPS_SEARCH_HREF;
}

export function VenueMapsLink({
  className,
  children = VENUE_ADDRESS,
}: VenueMapsLinkProps) {
  const href = resolveVenueMapsHref();

  return (
    <a
      href={href}
      suppressHydrationWarning
      className={className}
      rel="nofollow noreferrer"
      aria-label={`Abrir la dirección en la aplicación de mapas: ${VENUE_ADDRESS}`}
    >
      {children}
    </a>
  );
}
