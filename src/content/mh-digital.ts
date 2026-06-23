import type { ContactInfo, FaqItem, PortfolioProject, ProcessStep, ServiceItem } from "@/types";

export const siteConfig = {
  name: "MH Digital",
  tagline: "Moderna hemsidor för lokala företag",
  description:
    "MH Digital hjälper svenska lokala företag med professionella hemsidor som bygger förtroende och gör det enkelt för kunder att hitta rätt.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
};

export const navLinks = [
  { href: "/", label: "Hem" },
  { href: "/tjanster", label: "Tjänster" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/kontakt", label: "Kontakt" },
];

export const contactInfo: ContactInfo = {
  email: "hej@mhdigital.se",
  phone: "+46 70 000 00 00",
  address: "Stockholm, Sverige",
};

export const homeContent = {
  badge: "Webbbyrå för lokala företag i Sverige",
  title: "Moderna hemsidor för lokala företag",
  subtitle:
    "Vi hjälper restauranger, caféer, salonger och andra lokala företag att få professionella hemsidor som bygger förtroende och gör det enkelt för kunder att hitta rätt.",
  cta: "Boka ett kostnadsfritt möte",
  ctaHref: "/kontakt",
  secondaryCta: "Se våra exempel",
  secondaryCtaHref: "/portfolio",
};

export const homeProcessSteps = [
  "Vi lär känna din verksamhet.",
  "Vi tar fram ett designförslag.",
  "Vi bygger hemsidan.",
  "Vi gör justeringar tillsammans.",
  "Vi lanserar.",
];

export const whyMHDigital = [
  "Personlig kontakt",
  "Snabb process",
  "Modern design",
  "Anpassat efter din verksamhet",
  "Ingen färdig standardmall",
  "Byggt för lokala företag",
];

export const services: ServiceItem[] = [
  {
    title: "Skräddarsydda hemsidor",
    description:
      "Mobilanpassade sidor som speglar ditt företag — med tydlig meny, kontakt och det som kunderna faktiskt letar efter.",
    icon: "Globe",
  },
  {
    title: "Branschanpassad design",
    description:
      "En restaurang behöver inte samma sida som en salong. Vi utgår från hur kunder i din bransch beter sig online.",
    icon: "Palette",
  },
  {
    title: "Kontakt & bokning",
    description:
      "Telefonnummer, formulär och tydliga knappar — så att intresserade kunder vet exakt hur de tar nästa steg.",
    icon: "Mail",
  },
  {
    title: "Personlig service",
    description:
      "Du pratar med samma person från första samtalet till lansering. Inga långa kedjor eller byråkrati.",
    icon: "HeartHandshake",
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Första samtalet",
    description: "Vi går igenom din verksamhet, dina kunder och vad du vill att hemsidan ska uppnå.",
  },
  {
    step: 2,
    title: "Designförslag",
    description: "Du får se en riktning som passar din bransch — innan vi bygger något.",
  },
  {
    step: 3,
    title: "Offert & plan",
    description: "Tydlig omfattning, tidsplan och pris. Inga överraskningar längs vägen.",
  },
  {
    step: 4,
    title: "Bygge & feedback",
    description: "Vi bygger steg för steg och justerar tillsammans tills det känns rätt.",
  },
  {
    step: 5,
    title: "Lansering",
    description: "Din sida går live — testad på mobil och dator, redo att ta emot kunder.",
  },
];

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "restaurant",
    title: "Bella Vista",
    industry: "Restaurang",
    description: "Italiensk restaurang på Södermalm som vill fylla bord och visa upp sin mat.",
    href: "/demos/restaurant",
    tags: ["Meny synlig", "Bokning", "Matfoto"],
    accent: "bg-restaurant-wine",
    previewImage:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    goal: "Få fler bordsbokningar och ge besökare en känsla av kvalitet innan de kliver innanför dörren.",
    priorities: [
      "Synlig meny med priser — inte gömd i PDF",
      "Starka matbilder och signaturrätter",
      "Tydliga öppettider, adress och telefon",
      "Enkel väg till bordsbokning",
    ],
    designRationale:
      "Restauranggäster vill snabbt se mat, priser och hur man bokar. Varm färgpalett och elegant typografi skapar en premiumkänsla som passar en italiensk kvällsrestaurang.",
  },
  {
    slug: "cafe",
    title: "Morning Brew",
    industry: "Café",
    description: "Grannskapskafé med fokus på kaffe, bakverk och en lugn atmosfär.",
    href: "/demos/cafe",
    tags: ["Atmosfär", "Produkter", "Öppettider"],
    accent: "bg-cafe-sage",
    previewImage:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
    goal: "Locka stamgäster och nya besökare genom att förmedla kaféets personlighet och sortiment.",
    priorities: [
      "Berätta kaféets historia och värderingar",
      "Lyfta kaffe och bakverk med tydliga priser",
      "Visa atmosfär genom bilder",
      "Göra det lätt att hitta adress och öppettider",
    ],
    designRationale:
      "Cafékunder väljer ofta med känsla. Mjuka jordtoner, gott om luft och en avslappnad layout speglar en skandinavisk kafémiljö där man trivs och stannar länge.",
  },
  {
    slug: "hair-salon",
    title: "Studio Lumière",
    industry: "Frisörsalong",
    description: "Premiumsalong på Östermalm som vill bygga förtroende innan första bokningen.",
    href: "/demos/hair-salon",
    tags: ["Tjänster", "Team", "Före/efter"],
    accent: "bg-salon-rose",
    previewImage:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
    goal: "Få besökare att känna sig trygga nog att boka en tid — särskilt inför färgning eller större förändringar.",
    priorities: [
      "Tydliga tjänster och priser",
      "Presentera teamet — vem klipper mig?",
      "Visa resultat med före/efter-bilder",
      "Svara på vanliga frågor om bokning",
    ],
    designRationale:
      "Salongkunder köper förtroende. Ljus, elegant design med fokus på resultat och team skapar en beauty-brand-känsla snarare än en generisk företagssida.",
  },
];

export const servicesPageFaq: FaqItem[] = [
  {
    question: "Hur lång tid tar en hemsida?",
    answer:
      "De flesta sidor för lokala företag levereras inom 2–4 veckor, beroende på hur snabbt vi får in texter och bilder från dig.",
  },
  {
    question: "Vad ingår?",
    answer:
      "Skräddarsydd design, mobilanpassning, kontaktformulär, grundläggande SEO och lansering på snabb hosting.",
  },
  {
    question: "Behöver jag skriva all text själv?",
    answer:
      "Nej. Vi utgår från det du redan har — meny, öppettider, bilder — och hjälper till med formuleringar. Du godkänner alltid slutresultatet.",
  },
  {
    question: "Kan ni uppdatera sidan senare?",
    answer: "Ja. Vi hjälper gärna till med ändringar när verksamheten växer eller sortimentet uppdateras.",
  },
];

export const servicesIncluded = [
  "Design anpassad till din bransch — inte en färdig mall",
  "Mobilanpassad layout som fungerar på telefon",
  "Kontaktformulär med notis till din e-post",
  "Grundläggande SEO så att Google förstår vad du erbjuder",
  "Snabb hosting med HTTPS",
  "Testning på mobil, surfplatta och dator innan lansering",
];
