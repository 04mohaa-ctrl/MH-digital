import type { Metadata } from "next";
import { SitePortfolio } from "@/components/site/SitePortfolio";
import { SiteCta } from "@/components/site/SiteCta";
import { portfolioProjects } from "@/content/mh-digital";
import { FadeIn } from "@/components/sections/FadeIn";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Demosajter som visar hur MH Digital designar hemsidor för restauranger, caféer och salonger.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="border-b border-border/50 py-20 md:py-24">
        <div className="container mx-auto px-4">
          <FadeIn className="max-w-2xl">
            <h1 className="font-display text-4xl font-semibold md:text-5xl">Portfolio</h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Det här är demonstrationsprojekt — inte riktiga kundcase ännu. Varje exempel visar hur vi
              tänker kring en specifik bransch: vad besökaren behöver se, i vilken ordning, och varför
              designen ser ut som den gör.
            </p>
          </FadeIn>
        </div>
      </section>
      <SitePortfolio projects={portfolioProjects} showViewAll={false} />
      <SiteCta
        title="Vill du ha en hemsida anpassad för ditt företag?"
        subtitle="Boka ett kostnadsfritt möte så berättar vi hur vi kan hjälpa dig — utan säljsnack."
      />
    </>
  );
}
