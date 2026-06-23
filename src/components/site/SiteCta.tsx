import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/sections/FadeIn";

interface SiteCtaProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
}

export function SiteCta({
  title = "Redo att ta nästa steg?",
  subtitle = "Boka ett kostnadsfritt möte — vi lyssnar på din verksamhet och berättar hur vi kan hjälpa.",
  ctaText = "Boka ett kostnadsfritt möte",
  ctaHref = "/kontakt",
}: SiteCtaProps) {
  return (
    <section className="pb-20 md:pb-28">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground md:px-16 md:py-20">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
            <div className="relative mx-auto max-w-xl">
              <h2 className="text-balance font-display text-3xl font-semibold md:text-4xl">{title}</h2>
              <p className="mx-auto mt-5 leading-relaxed text-primary-foreground/80">{subtitle}</p>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="mt-10 h-12 rounded-full px-8"
              >
                <Link href={ctaHref}>
                  {ctaText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
