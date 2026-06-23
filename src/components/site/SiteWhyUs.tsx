import { Check } from "lucide-react";
import { whyMHDigital } from "@/content/mh-digital";
import { FadeIn } from "@/components/sections/FadeIn";

export function SiteWhyUs() {
  return (
    <section className="border-y border-border/50 bg-secondary/40 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <FadeIn className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">Varför MH Digital?</h2>
          <p className="mt-4 text-muted-foreground">
            Vi bygger hemsidor för företag som vill växa — inte för tech-startups.
          </p>
        </FadeIn>
        <ul className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          {whyMHDigital.map((item, index) => (
            <FadeIn key={item} delay={index * 0.06}>
              <li className="flex items-start gap-3 rounded-2xl border border-border/50 bg-card p-5">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-3.5 w-3.5 text-primary" strokeWidth={2.5} />
                </span>
                <span className="text-sm font-medium leading-snug md:text-base">{item}</span>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
