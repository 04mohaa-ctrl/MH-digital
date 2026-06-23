import type { ContactInfo, MenuCategory, OpeningHours, Testimonial } from "@/types";

export const restaurantContent = {
  name: "Bella Vista",
  tagline: "Italiensk restaurang · Södermalm",
  hero: {
    title: "Smaker som stannar kvar",
    subtitle:
      "Autentisk italiensk mat i en varm miljö — boka bord eller titta på menyn innan du kommer.",
    cta: "Boka bord",
    ctaHref: "#boka",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80",
    imageAlt: "Vackert upplagd pastarätt på restaurangbord",
  },
  signatureDishes: [
    {
      name: "Lammstek från Gotland",
      description: "Rostad med rosmarin, potatisgratäng och säsongens grönsaker.",
      price: "345 kr",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
    },
    {
      name: "Husets risotto",
      description: "Saffransrisotto med pilgrimsmusslor och parmesan.",
      price: "265 kr",
      image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=800&q=80",
    },
    {
      name: "Tiramisu",
      description: "Klassisk italiensk dessert, husets eget recept.",
      price: "115 kr",
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80",
    },
  ],
  menuCategories: [
    {
      name: "Förrätter",
      items: [
        { name: "Bruschetta al pomodoro", description: "Surdegsbröd, tomater, basilika", price: "95 kr" },
        { name: "Burrata", description: "Med grillad persika och balsamico", price: "145 kr", tag: "Populär" },
        { name: "Carpaccio di manzo", description: "Tunt skivad oxfilé, rucola, parmesan", price: "165 kr" },
      ],
    },
    {
      name: "Huvudrätter",
      items: [
        { name: "Cacio e pepe", description: "Klassisk romansk pasta", price: "195 kr", tag: "Populär" },
        { name: "Osso buco", description: "Långkokt kalvlägg med gremolata", price: "285 kr" },
        { name: "Färsk fångst", description: "Dagens fisk — fråga servitören", price: "295 kr" },
        { name: "Lammstek", description: "Från Gotland, rosmarin och grönsaker", price: "345 kr" },
      ],
    },
    {
      name: "Dessert",
      items: [
        { name: "Tiramisu", description: "Husets egen", price: "115 kr" },
        { name: "Panna cotta", description: "Vanilj och bärsås", price: "105 kr" },
        { name: "Sorbet", description: "Två kulor, säsongens smak", price: "85 kr" },
      ],
    },
  ] satisfies MenuCategory[],
  gallery: [
    { src: "https://images.unsplash.com/photo-1550966841-3edb2a4d0f4f?w=600&q=80", alt: "Kock i köket" },
    { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80", alt: "Restaurangmiljö" },
    { src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=600&q=80", alt: "Dessert" },
    { src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&q=80", alt: "Bord för två" },
    { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80", alt: "Vinkällare" },
    { src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&q=80", alt: "Färska ingredienser" },
  ],
  testimonials: [
    {
      name: "Maria Lindström",
      role: "Stamgäst",
      text: "Bästa pastan i Stockholm. Vi kommer hit varannan fredag — personalen känner oss vid namn.",
      stars: 5,
    },
    {
      name: "Erik Johansson",
      role: "Google-recension",
      text: "Äntligen en restaurang där menyn finns på hemsidan med priser. Lätt att boka och maten höll måttet.",
      stars: 5,
    },
  ] satisfies Testimonial[],
  hours: [
    { days: "Måndag", hours: "Stängt" },
    { days: "Tis–Tor", hours: "17:00 – 22:00" },
    { days: "Fre–Lör", hours: "17:00 – 23:00" },
    { days: "Söndag", hours: "12:00 – 21:00" },
  ] satisfies OpeningHours[],
  location: {
    address: "Hornsgatan 78, 118 21 Stockholm",
    description: "5 minuter från Mariatorget (tunnelbana röda linjen). Parkering i närheten kvällstid.",
  },
  contact: {
    email: "boka@bellavista.se",
    phone: "+46 8 123 45 67",
  } satisfies ContactInfo,
  nav: [
    { href: "#signatur", label: "Signatur" },
    { href: "#meny", label: "Meny" },
    { href: "#galleri", label: "Galleri" },
    { href: "#boka", label: "Boka" },
  ],
};
