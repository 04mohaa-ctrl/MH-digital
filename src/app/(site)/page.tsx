import { SiteHero } from "@/components/site/SiteHero";
import { SiteHomeProcess } from "@/components/site/SiteHomeProcess";
import { SiteWhyUs } from "@/components/site/SiteWhyUs";
import { SitePortfolio } from "@/components/site/SitePortfolio";
import { SiteCta } from "@/components/site/SiteCta";
import { portfolioProjects } from "@/content/mh-digital";

export default function HomePage() {
  return (
    <>
      <SiteHero />
      <SiteHomeProcess />
      <SiteWhyUs />
      <SitePortfolio
        title="Se hur det kan se ut"
        subtitle="Tre branscher, tre olika upplägg. Klicka in och upplev hur en riktig kundhemsida kan kännas."
        projects={portfolioProjects}
        compact
      />
      <SiteCta />
    </>
  );
}
