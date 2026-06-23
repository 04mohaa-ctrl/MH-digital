"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, Phone, Star, X } from "lucide-react";
import { salonContent as c } from "@/content/demos/hair-salon";
import { ContactForm } from "@/components/forms/ContactForm";
import { FadeIn } from "@/components/sections/FadeIn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function SalonDemo() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-salon-pearl font-salon text-salon-charcoal">
      <header className="sticky top-0 z-50 border-b border-salon-champagne/60 bg-salon-pearl/95 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/portfolio" className="text-lg font-light tracking-[0.15em] uppercase">
            {c.name}
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            {c.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-widest text-salon-charcoal/60 transition-colors hover:text-salon-charcoal"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#boka"
              className="bg-salon-charcoal px-5 py-2 text-xs uppercase tracking-widest text-salon-bg"
            >
              Boka
            </a>
          </nav>
          <button type="button" className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Meny">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t px-4 py-3 md:hidden">
            {c.nav.map((link) => (
              <a key={link.href} href={link.href} className="block py-2 text-sm" onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Hero — typography-focused, light blush */}
      <section className="relative overflow-hidden bg-gradient-to-b from-salon-blush/80 via-salon-pearl to-salon-pearl">
        <div className="container relative mx-auto grid items-center gap-12 px-4 py-20 md:grid-cols-2 md:py-28">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.25em] text-salon-rose">{c.tagline}</p>
            <h1 className="mt-6 whitespace-pre-line text-5xl font-light leading-[1.1] md:text-6xl">
              {c.hero.title}
            </h1>
            <p className="mt-6 max-w-md text-salon-charcoal/70">{c.hero.subtitle}</p>
            <a
              href={c.hero.ctaHref}
              className="mt-8 inline-block border border-salon-charcoal px-8 py-3 text-xs uppercase tracking-widest transition-colors hover:bg-salon-charcoal hover:text-salon-bg"
            >
              {c.hero.cta}
            </a>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
              <Image
                src={c.hero.image}
                alt={c.hero.imageAlt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services — elegant price list (not card grid) */}
      <section id="tjanster" className="py-20 md:py-28">
        <div className="container mx-auto max-w-3xl px-4">
          <FadeIn className="mb-14 text-center">
            <h2 className="text-3xl font-light">Tjänster & priser</h2>
            <p className="mt-3 text-sm text-salon-charcoal/60">
              Alla behandlingar inkluderar konsultation
            </p>
          </FadeIn>
          <div className="divide-y divide-salon-champagne">
            {c.services.map((service, i) => (
              <FadeIn key={service.name} delay={i * 0.05}>
                <div className="flex items-baseline justify-between gap-4 py-6">
                  <div>
                    <h3 className="font-medium">{service.name}</h3>
                    <p className="mt-0.5 text-xs text-salon-charcoal/50">{service.duration}</p>
                  </div>
                  <span className="shrink-0 text-sm font-medium text-salon-rose">{service.price}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="bg-salon-blush/30 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <FadeIn className="mb-14 text-center">
            <h2 className="text-3xl font-light">Vårt team</h2>
          </FadeIn>
          <div className="grid gap-10 md:grid-cols-3">
            {c.team.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.1} className="text-center">
                <div className="relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden rounded-sm">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale transition-all duration-500 hover:grayscale-0"
                    sizes="300px"
                  />
                </div>
                <h3 className="mt-5 font-medium">{member.name}</h3>
                <p className="text-sm text-salon-charcoal/60">{member.role}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section id="resultat" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <FadeIn className="mb-14 text-center">
            <h2 className="text-3xl font-light">Före & efter</h2>
          </FadeIn>
          <div className="grid gap-12 md:grid-cols-2">
            {c.beforeAfter.map((item, i) => (
              <FadeIn key={item.caption} delay={i * 0.1}>
                <div className="grid grid-cols-2 gap-2">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                    <Image src={item.before} alt="Före" fill className="object-cover" sizes="250px" />
                    <span className="absolute bottom-2 left-2 bg-white/90 px-2 py-0.5 text-xs">Före</span>
                  </div>
                  <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                    <Image src={item.after} alt="Efter" fill className="object-cover" sizes="250px" />
                    <span className="absolute bottom-2 left-2 bg-salon-charcoal px-2 py-0.5 text-xs text-white">
                      Efter
                    </span>
                  </div>
                </div>
                <p className="mt-3 text-center text-sm text-salon-charcoal/60">{item.caption}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — side by side elegant */}
      <section className="border-y border-salon-champagne bg-white py-20 md:py-28">
        <div className="container mx-auto grid gap-8 px-4 md:grid-cols-2">
          {c.testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1}>
              <div className="p-4 md:p-8">
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-salon-rose text-salon-rose" />
                  ))}
                </div>
                <p className="text-lg font-light leading-relaxed text-salon-charcoal/80">
                  &ldquo;{t.text}&rdquo;
                </p>
                <p className="mt-6 text-sm">
                  <span className="font-medium">{t.name}</span>
                  <span className="text-salon-charcoal/50"> — {t.role}</span>
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto max-w-2xl px-4">
          <FadeIn className="mb-10 text-center">
            <h2 className="text-3xl font-light">Vanliga frågor</h2>
          </FadeIn>
          <FadeIn>
            <Accordion type="single" collapsible>
              {c.faq.map((item) => (
                <AccordionItem key={item.question} value={item.question}>
                  <AccordionTrigger className="text-left font-normal">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-salon-charcoal/70">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </section>

      {/* Booking */}
      <section id="boka" className="bg-salon-charcoal py-20 text-salon-bg md:py-28">
        <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-2">
          <FadeIn>
            <h2 className="text-4xl font-light">Boka din tid</h2>
            <p className="mt-4 text-salon-bg/70">
              Fyll i formuläret eller ring oss direkt. Vi återkommer inom ett dygn.
            </p>
            <a
              href={`tel:${c.contact.phone.replace(/\s/g, "")}`}
              className="mt-6 inline-flex items-center gap-2 text-sm underline"
            >
              <Phone className="h-4 w-4" />
              {c.contact.phone}
            </a>
            {c.contact.address && (
              <p className="mt-2 text-sm text-salon-bg/60">{c.contact.address}</p>
            )}
          </FadeIn>
          <FadeIn delay={0.1}>
            <ContactForm variant="minimal" className="rounded-sm bg-white p-6 text-salon-charcoal" />
          </FadeIn>
        </div>
      </section>

      <footer className="py-8 text-center text-xs text-salon-charcoal/40">
        <p>
          Demosajt av{" "}
          <Link href="/" className="underline hover:text-salon-charcoal">
            MH Digital
          </Link>
        </p>
      </footer>
    </div>
  );
}
