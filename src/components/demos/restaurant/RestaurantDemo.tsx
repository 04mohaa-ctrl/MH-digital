"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Clock, MapPin, Menu, Phone, Star, X } from "lucide-react";
import { restaurantContent as c } from "@/content/demos/restaurant";
import { FadeIn } from "@/components/sections/FadeIn";

export function RestaurantDemo() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-restaurant-bg font-serif text-restaurant-dark">
      <header className="absolute left-0 right-0 top-0 z-50">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <Link href="/portfolio" className="font-serif text-xl font-medium text-white">
            {c.name}
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            {c.nav.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-white/85 hover:text-white">
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${c.contact.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-sm text-white/90"
            >
              <Phone className="h-3.5 w-3.5" />
              {c.contact.phone}
            </a>
            <a
              href="#boka"
              className="rounded-full bg-restaurant-gold px-5 py-2.5 text-sm font-medium text-restaurant-dark"
            >
              {c.hero.cta}
            </a>
          </nav>
          <button type="button" className="text-white md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Meny">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav className="bg-restaurant-dark/95 px-4 py-4 md:hidden">
            {c.nav.map((link) => (
              <a key={link.href} href={link.href} className="block py-2 text-white" onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href={`tel:${c.contact.phone.replace(/\s/g, "")}`} className="mt-2 block py-2 text-restaurant-gold">
              {c.contact.phone}
            </a>
          </nav>
        )}
      </header>

      {/* Hero — matfoto */}
      <section className="relative flex min-h-[88vh] items-end">
        <Image src={c.hero.image} alt={c.hero.imageAlt} fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-restaurant-dark/95 via-restaurant-dark/50 to-restaurant-dark/25" />
        <div className="container relative mx-auto px-4 pb-16 pt-32 md:pb-24">
          <FadeIn className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.25em] text-restaurant-gold">{c.tagline}</p>
            <h1 className="mt-5 font-serif text-5xl font-light leading-[1.05] text-white md:text-7xl">
              {c.hero.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/85">{c.hero.subtitle}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={c.hero.ctaHref} className="rounded-full bg-restaurant-gold px-8 py-3.5 text-sm font-medium text-restaurant-dark">
                {c.hero.cta}
              </a>
              <a href="#meny" className="rounded-full border border-white/40 px-8 py-3.5 text-sm text-white hover:bg-white/10">
                Se menyn
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Signaturrätter */}
      <section id="signatur" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <FadeIn className="mb-12 max-w-lg">
            <h2 className="font-serif text-4xl font-light md:text-5xl">Signaturrätter</h2>
            <p className="mt-3 text-restaurant-dark/65">Det våra gäster kommer tillbaka för.</p>
          </FadeIn>
          <div className="grid gap-8 md:grid-cols-3">
            {c.signatureDishes.map((dish, i) => (
              <FadeIn key={dish.name} delay={i * 0.08}>
                <div className="group overflow-hidden rounded-2xl bg-white shadow-sm">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={dish.image} alt={dish.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="33vw" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="font-serif text-xl">{dish.name}</h3>
                      <span className="shrink-0 font-medium text-restaurant-wine">{dish.price}</span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-restaurant-dark/60">{dish.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Full meny — synlig, skannbar */}
      <section id="meny" className="bg-restaurant-cream py-20 md:py-28">
        <div className="container mx-auto px-4">
          <FadeIn className="mb-14 text-center">
            <h2 className="font-serif text-4xl font-light md:text-5xl">Meny</h2>
            <p className="mt-3 text-restaurant-dark/60">Alla rätter och priser — inga PDF:er att ladda ner.</p>
          </FadeIn>
          <div className="mx-auto grid max-w-4xl gap-16">
            {c.menuCategories.map((category, ci) => (
              <FadeIn key={category.name} delay={ci * 0.1}>
                <h3 className="border-b border-restaurant-wine/20 pb-3 font-serif text-2xl text-restaurant-wine">
                  {category.name}
                </h3>
                <ul className="mt-6 space-y-6">
                  {category.items.map((item) => (
                    <li key={item.name} className="flex items-start justify-between gap-6">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-medium">{item.name}</span>
                          {item.tag && (
                            <span className="rounded-full bg-restaurant-gold/25 px-2 py-0.5 text-xs text-restaurant-accent">
                              {item.tag}
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-sm text-restaurant-dark/55">{item.description}</p>
                      </div>
                      <span className="shrink-0 font-medium tabular-nums text-restaurant-wine">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Galleri */}
      <section id="galleri" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <FadeIn className="mb-10">
            <h2 className="font-serif text-4xl font-light">Från köket och salen</h2>
          </FadeIn>
          <div className="columns-2 gap-4 md:columns-3">
            {c.gallery.map((img, i) => (
              <FadeIn key={img.alt} delay={i * 0.04} className="mb-4 break-inside-avoid">
                <div className="relative overflow-hidden rounded-xl">
                  <Image src={img.src} alt={img.alt} width={600} height={i % 2 === 0 ? 400 : 520} className="w-full object-cover" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Omdömen */}
      <section className="bg-restaurant-dark py-20 text-white md:py-28">
        <div className="container mx-auto px-4">
          <FadeIn className="mb-12 text-center">
            <h2 className="font-serif text-3xl font-light md:text-4xl">Vad gästerna säger</h2>
          </FadeIn>
          <div className="grid gap-8 md:grid-cols-2">
            {c.testimonials.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.1}>
                <blockquote className="rounded-2xl border border-white/10 bg-white/5 p-8">
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-restaurant-gold text-restaurant-gold" />
                    ))}
                  </div>
                  <p className="text-lg font-light leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                  <footer className="mt-6 text-sm text-white/60">
                    <strong className="text-white">{t.name}</strong> — {t.role}
                  </footer>
                </blockquote>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Öppettider & plats */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto grid gap-16 px-4 md:grid-cols-2">
          <FadeIn>
            <h2 className="flex items-center gap-2 font-serif text-3xl font-light">
              <Clock className="h-5 w-5 text-restaurant-wine" />
              Öppettider
            </h2>
            <ul className="mt-8 space-y-3">
              {c.hours.map((h) => (
                <li key={h.days} className="flex justify-between border-b border-restaurant-dark/10 pb-3 text-sm">
                  <span>{h.days}</span>
                  <span className="text-restaurant-dark/55">{h.hours}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="flex items-center gap-2 font-serif text-3xl font-light">
              <MapPin className="h-5 w-5 text-restaurant-wine" />
              Hitta hit
            </h2>
            <p className="mt-8 font-medium">{c.location.address}</p>
            <p className="mt-2 text-sm leading-relaxed text-restaurant-dark/60">{c.location.description}</p>
            <a href={`tel:${c.contact.phone.replace(/\s/g, "")}`} className="mt-6 inline-flex items-center gap-2 text-restaurant-wine hover:underline">
              <Phone className="h-4 w-4" />
              {c.contact.phone}
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Bokning */}
      <section id="boka" className="bg-restaurant-wine py-20 text-white md:py-24">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="font-serif text-4xl font-light md:text-5xl">Boka ditt bord</h2>
            <p className="mx-auto mt-4 max-w-md text-white/80">
              Ring eller mejla — vi bekräftar så snart vi kan. Välkommen till kvällen.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href={`tel:${c.contact.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-medium text-restaurant-dark">
                <Phone className="h-4 w-4" />
                {c.contact.phone}
              </a>
              <a href={`mailto:${c.contact.email}`} className="rounded-full border border-white/35 px-8 py-3.5 text-sm hover:bg-white/10">
                {c.contact.email}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <footer className="border-t border-restaurant-dark/10 py-8 text-center text-xs text-restaurant-dark/45">
        <p>
          Demosajt av <Link href="/" className="underline hover:text-restaurant-dark">MH Digital</Link>
        </p>
      </footer>
    </div>
  );
}
