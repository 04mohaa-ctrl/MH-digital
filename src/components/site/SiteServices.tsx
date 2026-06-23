import {
  Globe,
  HeartHandshake,
  Mail,
  Palette,
  type LucideIcon,
} from "lucide-react";
import type { ServiceItem } from "@/types";
import { FadeIn } from "@/components/sections/FadeIn";

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Palette,
  Mail,
  HeartHandshake,
};

interface SiteServicesProps {
  title?: string;
  subtitle?: string;
  items: ServiceItem[];
}

export function SiteServices({
  title = "Det här får du",
  subtitle = "Allt du behöver för en professionell närvaro online — utan krångel.",
  items,
}: SiteServicesProps) {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <FadeIn className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
          <p className="mt-4 text-muted-foreground">{subtitle}</p>
        </FadeIn>

        <div className="grid gap-5 md:grid-cols-2">
          {items.map((item, index) => {
            const Icon = iconMap[item.icon] ?? Globe;
            const isLarge = index === 0;
            return (
              <FadeIn
                key={item.title}
                delay={index * 0.08}
                className={isLarge ? "md:col-span-2" : ""}
              >
                <div
                  className={`group h-full rounded-2xl border border-border/60 bg-card p-8 transition-shadow hover:shadow-md ${
                    isLarge ? "md:flex md:items-start md:gap-8" : ""
                  }`}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground md:mb-0 md:shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-2 text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
