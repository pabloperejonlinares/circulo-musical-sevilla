import type { Clase } from "@/data";
import { VENUE } from "@/data/venue";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  absoluteUrl,
  getSiteUrl,
} from "@/lib/site";

export type FaqItem = {
  question: string;
  answer: string;
};

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export function buildLocalBusinessJsonLd(description: string = DEFAULT_DESCRIPTION) {
  return {
    "@context": "https://schema.org",
    "@type": ["MusicSchool", "LocalBusiness"],
    name: SITE_NAME,
    description,
    url: getSiteUrl(),
    image: absoluteUrl(DEFAULT_OG_IMAGE),
    logo: absoluteUrl("/images/logo.png"),
    email: VENUE.email,
    telephone: VENUE.phones.map((phone) => phone.href.replace("tel:", "")),
    address: {
      "@type": "PostalAddress",
      streetAddress: VENUE.address.street,
      postalCode: VENUE.address.postalCode,
      addressLocality: VENUE.address.city,
      addressCountry: "ES",
    },
    areaServed: {
      "@type": "City",
      name: "Sevilla",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "10:00",
        closes: "20:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "10:00",
        closes: "19:00",
      },
    ],
    sameAs: [VENUE.social.instagram, VENUE.mapsUrl],
  };
}

export function buildCourseJsonLd(clase: Clase) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: clase.title,
    description: clase.description,
    provider: {
      "@type": "MusicSchool",
      name: SITE_NAME,
      url: getSiteUrl(),
    },
    url: absoluteUrl(clase.href),
    image: absoluteUrl(clase.image),
    areaServed: "Sevilla",
  };
}

export function buildFaqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
