export const VENUE = {
  email: "circulomusicaldesevilla@gmail.com",
  phones: [
    { display: "691 196 341", href: "tel:+34691196341" },
    { display: "630 876 239", href: "tel:+34630876239" },
  ],
  address: {
    street: "Calle La Moraleja Nº14",
    postalCode: "41020",
    city: "Sevilla",
    full: "Calle La Moraleja Nº14, 41020, Sevilla",
  },
  schedule: {
    weekdays: "De lunes a jueves, de 10:00 a 13:30 y de 16:00 a 20:30",
    friday: "Viernes de 10:00 a 13:30 y de 16:00 a 19:00",
  },
  social: {
    instagram: "https://www.instagram.com/circulomusicaldesevilla",
    whatsapp: "https://wa.me/34691196341",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Calle+La+Moraleja+14,+41020+Sevilla",
} as const;
