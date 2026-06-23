import { homeProcessSteps } from "@/content/mh-digital";
import { FadeIn } from "@/components/sections/FadeIn";

export function SiteHomeProcess() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <FadeIn className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">Så går det till</h2>
          <p className="mt-4 text-muted-foreground">
            En tydlig process utan krångel — du vet alltid vad som händer härnäst.
          </p>
        </FadeIn>
        <ol className="mx-auto grid max-w-4xl gap-6 md:grid-cols-5 md:gap-4">
          {homeProcessSteps.map((step, index) => (
            <FadeIn key={step} delay={index * 0.08}>
              <li className="relative flex flex-col items-center text-center md:items-start md:text-left">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {index + 1}
                </span>
                <p className="mt-4 text-sm leading-relaxed md:text-base">{step}</p>
              </li>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}
