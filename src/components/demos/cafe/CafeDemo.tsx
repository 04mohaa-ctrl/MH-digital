"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AtSign, Clock, MapPin, Menu, Phone, Star, X } from "lucide-react";
import { cafeContent as c } from "@/content/demos/cafe";
import { FadeIn } from "@/components/sections/FadeIn";
import { cn } from "@/lib/utils";

export function CafeDemo() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-cafe-bg font-cafe text-cafe-brown">
      <header className="sticky top-0 z-50 border-b border-cafe-sand/80 bg-cafe-bg/95 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/portfolio" className="text-lg font-semibold tracking-tight">
            {c.name}
          </Link>
          <nav className="hidden items-center gap-7 md:flex">
            {c.nav.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-cafe-brown/65 hover:text-cafe-brown">
                {link.label}
              </a>
            ))}
          </nav>
          <button type="button" className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Meny">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-cafe-sand px-4 py-3 md:hidden">
            {c.nav.map((link) => (
              <a key={link.href} href={link.href} className="block py-2 text-sm" onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Hero — avslappnad split */}
      <section className="container mx-auto grid items-center gap-12 px-4 py-16 md:grid-cols-2 md:gap-16 md:py-24">
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-cafe-sage">{c.tagline}</p>
          <h1 className="mt-6 whitespace-pre-line text-4xl font-semibold leading-[1.12] md:text-5xl lg:text-[3.25rem]">
            {c.hero.title}
          </h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-cafe-brown/70">{c.hero.subtitle}</p>
          <a href={c.hero.ctaHref} className="mt-10 inline-block rounded-full bg-cafe-brown px-7 py-3.5 text-sm font-medium text-cafe-bg">
            {c.hero.cta}
          </a>
        </FadeIn>
        <FadeIn delay={0.12}>
          <div className="relative aspect-[5/6] overflow-hidden rounded-3xl shadow-lg shadow-cafe-brown/10">
            <Image src={c.hero.image} alt={c.hero.imageAlt} fill priority className="object-cover" sizes="50vw" />
          </div>
        </FadeIn>
      </section>

      {/* Berättelse */}
      <section id="om-oss" className="bg-cafe-cream/80 py-24 md:py-32">
        <div className="container mx-auto max-w-2xl px-4 text-center">
          <FadeIn>
            <blockquote className="text-2xl font-light italic leading-relaxed text-cafe-brown md:text-3xl">
              &ldquo;{c.story.quote}&rdquo;
            </blockquote>
            <p className="mt-10 text-base leading-relaxed text-cafe-brown/65">{c.story.text}</p>
          </FadeIn>
        </div>
      </section>

      {/* Kaffe */}
      <section id="kaffe" className="py-24 md:py-32">
        <div className="container mx-auto max-w-3xl px-4">
          <FadeIn className="mb-12 text-center">
            <h2 className="text-3xl font-semibold">Kaffe</h2>
            <p className="mt-3 text-cafe-brown/60">Egenrostade bönor, nybryggt varje dag.</p>
          </FadeIn>
          <ul className="divide-y divide-cafe-sand">
            {c.coffee.map((item, i) => (
              <FadeIn key={item.name} delay={i * 0.05}>
                <li className="flex items-start justify-between gap-4 py-6">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{item.name}</span>
                      {item.tag && (
                        <span className="rounded-full bg-cafe-sage/15 px-2 py-0.5 text-xs text-cafe-sage">{item.tag}</span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-cafe-brown/55">{item.description}</p>
                  </div>
                  <span className="shrink-0 font-medium tabular-nums text-cafe-sage">{item.price}</span>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>

      {/* Bageri */}
      <section id="bageri" className="bg-cafe-sand/50 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <FadeIn className="mb-12 max-w-lg">
            <h2 className="text-3xl font-semibold">Bageri</h2>
            <p className="mt-3 text-cafe-brown/60">Bakat från grunden varje morgon.</p>
          </FadeIn>
          <div className="grid gap-8 md:grid-cols-3">
            {c.bakery.map((item, i) => (
              <FadeIn key={item.name} delay={i * 0.08}>
                <div className="overflow-hidden rounded-2xl bg-cafe-bg shadow-sm">
                  <div className="relative aspect-square">
                    <Image src={item.image} alt={item.name} fill className="object-cover" sizes="300px" />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between gap-2">
                      <h3 className="font-medium">{item.name}</h3>
                      <span className="shrink-0 text-sm font-medium text-cafe-sage">{item.price}</span>
                    </div>
                    <p className="mt-2 text-sm text-cafe-brown/55">{item.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Galleri */}
      <section id="galleri" className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <FadeIn className="mb-10">
            <h2 className="text-3xl font-semibold">Stämningen hos oss</h2>
          </FadeIn>
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {c.gallery.map((src, i) => (
              <FadeIn key={src} delay={i * 0.05}>
                <div className={cn("relative overflow-hidden rounded-2xl", i === 0 && "col-span-2 aspect-[2/1]", i !== 0 && "aspect-square")}>
                  <Image src={src} alt="" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section className="border-y border-cafe-sand py-20">
        <div className="container mx-auto px-4">
          <FadeIn className="mb-8 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Följ oss</h2>
            <span className="inline-flex items-center gap-2 text-sm text-cafe-sage">
              <AtSign className="h-4 w-4" />
              {c.instagram.handle}
            </span>
          </FadeIn>
          <div className="grid grid-cols-3 gap-1.5 md:gap-2">
            {c.instagram.posts.map((post, i) => (
              <FadeIn key={post.alt} delay={i * 0.03}>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image src={post.image} alt={post.alt} fill className="object-cover" sizes="200px" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Omdömen */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto grid max-w-4xl gap-8 px-4 md:grid-cols-2">
          {c.testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1}>
              <blockquote className="rounded-2xl border border-cafe-sand bg-cafe-bg p-8">
                <div className="mb-3 flex gap-1">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-cafe-latte text-cafe-latte" />
                  ))}
                </div>
                <p className="leading-relaxed text-cafe-brown/80">&ldquo;{t.text}&rdquo;</p>
                <footer className="mt-5 text-sm">
                  <span className="font-medium">{t.name}</span>
                  <span className="text-cafe-brown/50"> — {t.role}</span>
                </footer>
              </blockquote>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Öppettider & hitta hit */}
      <section id="hitta" className="bg-cafe-brown py-24 text-cafe-bg md:py-32">
        <div className="container mx-auto grid gap-16 px-4 md:grid-cols-2">
          <FadeIn>
            <h2 className="flex items-center gap-2 text-2xl font-semibold">
              <Clock className="h-5 w-5" />
              Öppettider
            </h2>
            <ul className="mt-8 space-y-3">
              {c.hours.map((h) => (
                <li key={h.days} className="flex justify-between text-sm text-cafe-bg/85">
                  <span>{h.days}</span>
                  <span>{h.hours}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="flex items-center gap-2 text-2xl font-semibold">
              <MapPin className="h-5 w-5" />
              Hitta hit
            </h2>
            <p className="mt-8 font-medium">{c.location.address}</p>
            <p className="mt-2 text-sm leading-relaxed text-cafe-bg/70">{c.location.description}</p>
            <a href={`tel:${c.contact.phone.replace(/\s/g, "")}`} className="mt-6 inline-flex items-center gap-2 text-sm underline">
              <Phone className="h-4 w-4" />
              {c.contact.phone}
            </a>
          </FadeIn>
        </div>
      </section>

      <footer className="py-8 text-center text-xs text-cafe-brown/45">
        <p>
          Demosajt av <Link href="/" className="underline hover:text-cafe-brown">MH Digital</Link>
        </p>
      </footer>
    </div>
  );
}
