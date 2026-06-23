export interface ContactInfo {
  email: string;
  phone: string;
  address?: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface MenuCategory {
  name: string;
  items: MenuItem[];
}

export interface PortfolioProject {
  slug: string;
  title: string;
  industry: string;
  description: string;
  href: string;
  tags: string[];
  accent: string;
  goal: string;
  priorities: string[];
  designRationale: string;
  previewImage: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  text: string;
  role: string;
  stars: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  tag?: string;
}

export interface OpeningHours {
  days: string;
  hours: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface BeforeAfter {
  before: string;
  after: string;
  caption: string;
}

export interface InstagramPost {
  image: string;
  alt: string;
}
