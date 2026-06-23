import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { homeContent } from "@/content/mh-digital";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/sections/FadeIn";

export function SiteHero() {
  return (
    <section className="relative overflow-hidden border-b border-border/50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,_hsl(var(--primary)/0.07),_transparent)]" />
      <div className="container relative mx-auto px-4 pb-24 pt-20 md:pb-32 md:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <p className="mb-8 text-sm font-medium tracking-wide text-muted-foreground">
              {homeContent.badge}
            </p>
            <h1 className="text-balance font-display text-4xl font-semibold leading-[1.08] md:text-6xl lg:text-[4.25rem]">
              {homeContent.title}
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              {homeContent.subtitle}
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="h-12 rounded-full px-8 text-base">
                <Link href={homeContent.ctaHref}>
                  {homeContent.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 rounded-full border-primary/20 px-8 text-base hover:bg-secondary"
              >
                <Link href={homeContent.secondaryCtaHref}>{homeContent.secondaryCta}</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
