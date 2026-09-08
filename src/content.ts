// Única fuente de verdad del negocio. Todo el sitio lee de aquí — no
// repetir estos datos a mano en los componentes.

export const content = {
  name: "La Taula de Xuan",
  shortName: "La Taula de Xuan",
  tagline:
    "Esmorzars y bocadillos de toda la vida en el Cabanyal, Valencia",
  description:
    "En La Taula de Xuan seguimos la tradición del esmorzaret valencià: bocadillos con pan de horno tradicional del Cabanyal, ingredientes frescos y raciones generosas, a un precio de barrio de toda la vida. Un bar de almuerzos en Poblats Marítims donde se come bien, se paga poco y el trato es cercano — con terraza, menú infantil y sitio para toda la familia, perros incluidos.",
  metaDescription:
    "Bar de esmorzars y bocadillos en Poblats Marítims, Valencia. Pan de horno tradicional del Cabanyal, ingredientes frescos y precios de barrio. Terraza y reservas.",
  keywords: [
    "La Taula de Xuan",
    "esmorzars Valencia",
    "bocadillos Poblats Marítims",
    "bar de almuerzos Cabanyal",
    "esmorzaret valencià",
    "restaurante económico Valencia",
    "bar de tapas Valencia",
    "brunch Valencia",
  ],
  priceRange: "1 € – 10 €",
  priceRangeDisplay: "Económico · 1 € – 10 € por persona",
  cuisine: "Cocina valenciana",

  rating: { value: 4.5, count: 494, countDisplay: "494 reseñas en Google" },
  highlights: [
    "Pan de horno tradicional del Cabanyal, cada mañana.",
    "Bocadillos con ingredientes frescos y raciones generosas.",
    "Ambiente familiar y trato cercano, sin postureo.",
    "Terraza, menú infantil y se admiten perros.",
  ],

  address: {
    streetAddress: "Carrer del Doctor Álvaro López, 41",
    addressLocality: "València",
    addressRegion: "Valencia",
    postalCode: "46011",
    addressCountry: "ES",
    full: "C/ del Dr. Álvaro López, 41, Poblats Marítims, 46011 València, Valencia",
  },
  geo: { lat: 39.4797894, lng: -0.3312934 },

  phone: "+34622051121",
  phoneDisplay: "622 05 11 21",
  whatsappNumber: "34622051121",
  email: "",

  siteUrl: "https://samuelfagundez.github.io/la-taula-de-xuan/",

  social: {
    instagram: "https://www.instagram.com/latauladexuan/",
    facebook: "",
    tiktok: "",
    whatsapp: "",
  },

  hours: [
    { day: "Lunes", hours: "8:00 – 14:30" },
    { day: "Martes", hours: "8:00 – 14:30" },
    { day: "Miércoles", hours: "8:00 – 17:00" },
    { day: "Jueves", hours: "8:00 – 14:30" },
    { day: "Viernes", hours: "8:00 – 14:30" },
    { day: "Sábado", hours: "8:30 – 14:00" },
    { day: "Domingo", hours: "Cerrado" },
  ],
  openingHoursSchema: [
    {
      dayOfWeek: ["Monday", "Tuesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "14:30",
    },
    { dayOfWeek: ["Wednesday"], opens: "08:00", closes: "17:00" },
    { dayOfWeek: ["Saturday"], opens: "08:30", closes: "14:00" },
  ],

  gallery: [
    {
      src: "/gallery/taula-de-xuan-bocadillo-jamon.jpg",
      alt: "Bocadillos de jamón con pan de horno tradicional en La Taula de Xuan",
    },
    {
      src: "/gallery/taula-de-xuan-fideua-marisco.jpg",
      alt: "Fideuà de marisco recién hecha en La Taula de Xuan",
    },
    {
      src: "/gallery/taula-de-xuan-fachada.jpg",
      alt: "Fachada de La Taula de Xuan en el barrio del Cabanyal, Valencia",
    },
    {
      src: "/gallery/taula-de-xuan-arroz-pollo.jpg",
      alt: "Arroz al horno con pollo y judías de La Taula de Xuan",
    },
    {
      src: "/gallery/taula-de-xuan-bocadillo-pollo-huevo.jpg",
      alt: "Bocadillo de pollo, huevo y bacon en La Taula de Xuan",
    },
    {
      src: "/gallery/taula-de-xuan-tortilla-patata.jpg",
      alt: "Tortilla de patata jugosa de La Taula de Xuan",
    },
    {
      src: "/gallery/taula-de-xuan-tortilla-boniato.jpg",
      alt: "Tortilla rellena con cebolla crujiente en La Taula de Xuan",
    },
    {
      src: "/gallery/taula-de-xuan-churros.jpg",
      alt: "Porras recién hechas para desayunar en La Taula de Xuan",
    },
    {
      src: "/gallery/taula-de-xuan-cafe-bombon.jpg",
      alt: "Café bombón servido en La Taula de Xuan",
    },
    {
      src: "/gallery/taula-de-xuan-sandwich-chocolate.jpg",
      alt: "Sandwich dulce de chocolate y plátano en La Taula de Xuan",
    },
  ],

  mapEmbedSrc:
    "https://www.google.com/maps?q=" +
    encodeURIComponent(
      "La Taula de Xuan, Carrer del Doctor Álvaro López 41, 46011 València",
    ) +
    "&hl=es&z=16&output=embed",
  mapLinkUrl: "https://maps.app.goo.gl/zky2huJKYirTgAiQ6",
};

export function whatsappLink(message: string): string {
  return `https://wa.me/${content.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_CONTACT_MESSAGE =
  "¡Hola! Vengo de la página web de La Taula de Xuan y tengo una consulta.";
export const WHATSAPP_RESERVE_MESSAGE =
  "¡Hola! Vengo de la página web de La Taula de Xuan y me gustaría hacer una reserva.";
export const reservationLink = "";

export function contactHref(): string {
  return whatsappLink(WHATSAPP_CONTACT_MESSAGE);
}
export function reservationHref(): string {
  return reservationLink || whatsappLink(WHATSAPP_RESERVE_MESSAGE);
}
