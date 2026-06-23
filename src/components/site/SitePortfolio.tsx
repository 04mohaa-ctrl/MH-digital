import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { PortfolioProject } from "@/types";
import { FadeIn } from "@/components/sections/FadeIn";

interface SitePortfolioProps {
  title?: string;
  subtitle?: string;
  projects: PortfolioProject[];
  showViewAll?: boolean;
  compact?: boolean;
}

export function SitePortfolio({
  title = "Exempel på vad vi bygger",
  subtitle = "Demonstrationsprojekt som visar hur en branschanpassad hemsida kan se ut. Varje exempel har egen design och struktur.",
  projects,
  showViewAll = true,
  compact = false,
}: SitePortfolioProps) {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <FadeIn className="mb-14 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold md:text-4xl">{title}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{subtitle}</p>
          </div>
          {showViewAll && (
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              Alla exempel
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          )}
        </FadeIn>

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <FadeIn key={project.slug} delay={index * 0.1}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-shadow hover:shadow-md">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.previewImage}
                    alt={`Förhandsvisning av ${project.title}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className={`absolute bottom-0 left-0 right-0 h-1 ${project.accent}`} />
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {project.industry} · Demosajt
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  {!compact && (
                    <>
                      <div className="mt-6 space-y-4 border-t border-border/50 pt-6 text-sm">
                        <div>
                          <p className="font-medium text-foreground">Mål</p>
                          <p className="mt-1 text-muted-foreground">{project.goal}</p>
                        </div>
                        <div>
                          <p className="font-medium text-foreground">Designprioriteringar</p>
                          <ul className="mt-2 space-y-1.5">
                            {project.priorities.map((p) => (
                              <li key={p} className="flex gap-2 text-muted-foreground">
                                <span className="text-primary">·</span>
                                {p}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="font-medium text-foreground">Varför den här designen?</p>
                          <p className="mt-1 text-muted-foreground">{project.designRationale}</p>
                        </div>
                      </div>
                    </>
                  )}

                  <Link
                    href={project.href}
                    className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:underline"
                  >
                    Besök demosajten
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
