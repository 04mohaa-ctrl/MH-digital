import type {
  BeforeAfter,
  ContactInfo,
  FaqItem,
  TeamMember,
  Testimonial,
} from "@/types";

export const salonContent = {
  name: "Studio Lumière",
  tagline: "Hår & skönhet",
  hero: {
    title: "Din look,\n vår passion",
    subtitle:
      "En premiumsalong på Östermalm där varje besök börjar med att vi lyssnar — och slutar med att du känner dig fantastisk.",
    cta: "Boka tid",
    ctaHref: "#boka",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80",
    imageAlt: "Elegant frisörsalong med naturligt ljus",
  },
  services: [
    { name: "Klippning & styling", price: "från 650 kr", duration: "60 min" },
    { name: "Balayage / slingor", price: "från 1 800 kr", duration: "2–3 tim" },
    { name: "Färgning", price: "från 1 200 kr", duration: "90 min" },
    { name: "Behandling & inpackning", price: "från 450 kr", duration: "30 min" },
    { name: "Bruduppsättning", price: "från 2 500 kr", duration: "Efter konsultation" },
  ],
  team: [
    {
      name: "Sofia Andersson",
      role: "Grundare & colorist",
      image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&q=80",
    },
    {
      name: "Elin Nyström",
      role: "Senior stylist",
      image: "https://images.unsplash.com/photo-1633681926022-84c23e8cb04d?w=400&q=80",
    },
    {
      name: "Maja Holm",
      role: "Stylist & barberare",
      image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=400&q=80",
    },
  ] satisfies TeamMember[],
  beforeAfter: [
    {
      before: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&q=80",
      after: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=500&q=80",
      caption: "Balayage med varma toner",
    },
    {
      before: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=500&q=80",
      after: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&q=80",
      caption: "Precisionklippning & volym",
    },
  ] satisfies BeforeAfter[],
  testimonials: [
    {
      name: "Anna Karlsson",
      role: "Kund sedan 2022",
      text: "Äntligen en salong som förstår mitt lockiga hår. Sofia är en magiker — jag går alltid härifrån med självförtroende.",
      stars: 5,
    },
    {
      name: "Lisa Ekman",
      role: "Brudkund",
      text: "Min bruduppsättning höll hela dagen och natten. Professionellt, varmt och otroligt duktiga.",
      stars: 5,
    },
  ] satisfies Testimonial[],
  faq: [
    {
      question: "Hur bokar jag tid?",
      answer: "Ring oss, skicka ett mejl eller fyll i formuläret längst ner på sidan. Vi återkommer inom ett dygn.",
    },
    {
      question: "Vad gäller vid avbokning?",
      answer: "Vi ber om minst 24 timmars varsel vid avbokning, annars debiteras 50 % av behandlingskostnaden.",
    },
    {
      question: "Erbjuder ni konsultation?",
      answer: "Ja, en kort konsultation ingår alltid i din första behandling hos oss.",
    },
  ] satisfies FaqItem[],
  contact: {
    email: "boka@studiolumiere.se",
    phone: "+46 8 345 67 89",
    address: "Strandvägen 12, 114 56 Stockholm",
  } satisfies ContactInfo,
  nav: [
    { href: "#tjanster", label: "Tjänster" },
    { href: "#team", label: "Team" },
    { href: "#resultat", label: "Resultat" },
    { href: "#boka", label: "Boka" },
  ],
};
