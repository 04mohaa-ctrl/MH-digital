import type { Metadata } from "next";
import { SiteServices } from "@/components/site/SiteServices";
import { SiteProcess } from "@/components/site/SiteProcess";
import { SiteFaq } from "@/components/site/SiteFaq";
import { SiteCta } from "@/components/site/SiteCta";
import { services, processSteps, servicesPageFaq, servicesIncluded } from "@/content/mh-digital";
import { FadeIn } from "@/components/sections/FadeIn";

export const metadata: Metadata = {
  title: "Tjänster",
  description: "Moderna hemsidor för lokala företag — vad som ingår och hur vi arbetar.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-border/60 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <FadeIn className="max-w-2xl">
            <p className="text-sm font-medium text-primary">Våra tjänster</p>
            <h1 className="mt-3 text-4xl font-bold md:text-5xl">
              Hemsidor som fungerar för ditt företag
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Från första skiss till lansering — vi tar hand om tekniken så du kan fokusera på
              verksamheten.
            </p>
          </FadeIn>
        </div>
      </section>
      <SiteServices
        title="Vad vi erbjuder"
        subtitle="Allt du behöver för en professionell närvaro online."
        items={services}
      />
      <section className="border-y border-border/60 bg-secondary/30 py-20 md:py-28">
        <div className="container mx-auto max-w-3xl px-4">
          <FadeIn className="text-center">
            <h2 className="text-3xl font-bold">Det här ingår</h2>
          </FadeIn>
          <ul className="mt-10 space-y-4">
            {servicesIncluded.map((item, i) => (
              <FadeIn key={item} delay={i * 0.05}>
                <li className="flex items-start gap-3 rounded-xl border border-border/60 bg-card p-4 text-sm">
                  <span className="text-primary">✓</span>
                  {item}
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>
      <SiteProcess steps={processSteps} />
      <SiteFaq items={servicesPageFaq} />
      <SiteCta />
    </>
  );
}
