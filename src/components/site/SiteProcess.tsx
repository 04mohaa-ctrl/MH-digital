import type { ProcessStep } from "@/types";
import { FadeIn } from "@/components/sections/FadeIn";

interface SiteProcessProps {
  title?: string;
  subtitle?: string;
  steps: ProcessStep[];
}

export function SiteProcess({
  title = "Så jobbar vi",
  subtitle = "En tydlig process från första samtalet till lansering.",
  steps,
}: SiteProcessProps) {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <FadeIn className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
          <p className="mt-4 text-muted-foreground">{subtitle}</p>
        </FadeIn>

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute bottom-0 left-6 top-0 w-px bg-border md:left-1/2 md:-translate-x-px" />
          {steps.map((step, index) => (
            <FadeIn key={step.step} delay={index * 0.08}>
              <div
                className={`relative mb-10 flex gap-6 md:mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden flex-1 md:block" />
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background text-sm font-bold text-primary">
                  {step.step}
                </div>
                <div className="flex-1 rounded-2xl border border-border/60 bg-card p-6">
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
