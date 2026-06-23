import type { ContactInfo, OpeningHours, Testimonial } from "@/types";

export const cafeContent = {
  name: "Morning Brew",
  tagline: "Specialkaffe & hembakat · Södermalm",
  hero: {
    title: "Din morgon,\nförtjänar det bästa",
    subtitle:
      "Ett litet kafé där kaffet rostas på plats, bullarna bakas varje morgon och tempot är lagom långsamt.",
    cta: "Se menyn",
    ctaHref: "#kaffe",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80",
    imageAlt: "Latte art på träbord i mysigt kafé",
  },
  story: {
    quote: "Vi rostar bönorna själva och bakar allt från grunden — varje morgon klockan fem.",
    text: "Morning Brew öppnade 2019 när syskonen Emma och Lucas tröttnade på kedjekaffe. Idag är kaféet en samlingspunkt för grannar, frilansare och alla som vill börja dagen med något riktigt gott.",
  },
  coffee: [
    { name: "Espresso", description: "Dubbel shot, etiopiska bönor", price: "38 kr" },
    { name: "Flat white", description: "Silkeslen mjölk, stark espresso", price: "52 kr", tag: "Bästsäljare" },
    { name: "Filterkaffe", description: "Dagens rostning, påtår ingår", price: "42 kr" },
    { name: "Islatte", description: "Havremjölk, espresso, is", price: "58 kr" },
  ],
  bakery: [
    {
      name: "Kanelbulle",
      description: "Kardemumma och smör — bakas kl. 06 varje dag",
      price: "38 kr",
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=80",
    },
    {
      name: "Surdegsbröd",
      description: "Hela limpor, säljs tills det tar slut",
      price: "65 kr",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80",
    },
    {
      name: "Ägg- & avokadotoast",
      description: "Surdegsbröd, pocherat ägg, chiliolja",
      price: "95 kr",
      image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&q=80",
    },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1501339847305-ac691a81a2f2?w=500&q=80",
    "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=500&q=80",
    "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=500&q=80",
    "https://images.unsplash.com/photo-1453614512568-c1504db1ddfc?w=500&q=80",
  ],
  instagram: {
    handle: "@morningbrewsodermalm",
    posts: [
      { image: "https://images.unsplash.com/photo-1497935586351-b67b49dc4c90?w=400&q=80", alt: "Kaffekopp" },
      { image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80", alt: "Espresso" },
      { image: "https://images.unsplash.com/photo-1514434758858-da673cf3b9bb?w=400&q=80", alt: "Bullar" },
      { image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=400&q=80", alt: "Kaféinteriör" },
      { image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80", alt: "Pour over" },
      { image: "https://images.unsplash.com/photo-1517701603779-8e8b2e1ee989?w=400&q=80", alt: "Frukost" },
    ],
  },
  testimonials: [
    {
      name: "Linnea Persson",
      role: "Stamgäst",
      text: "Mitt kontor utan kontor. Kaffet är outstanding och personalen hälsar alltid.",
      stars: 5,
    },
    {
      name: "David Holm",
      role: "Granne",
      text: "Bästa kanelbullen på Söder. Mysig uteservering på sommaren.",
      stars: 5,
    },
  ] satisfies Testimonial[],
  hours: [
    { days: "Mån–Fre", hours: "07:00 – 18:00" },
    { days: "Lördag", hours: "08:00 – 17:00" },
    { days: "Söndag", hours: "09:00 – 16:00" },
  ] satisfies OpeningHours[],
  location: {
    address: "Åsögatan 124, 116 24 Stockholm",
    description: "Hörnet av Åsögatan och Bondegatan. Uteservering april–september.",
  },
  contact: {
    email: "hej@morningbrew.se",
    phone: "+46 8 234 56 78",
  } satisfies ContactInfo,
  nav: [
    { href: "#om-oss", label: "Om oss" },
    { href: "#kaffe", label: "Kaffe" },
    { href: "#bageri", label: "Bageri" },
    { href: "#hitta", label: "Hitta hit" },
  ],
};
