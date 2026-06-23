import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RestaurantDemo } from "@/components/demos/restaurant/RestaurantDemo";
import { CafeDemo } from "@/components/demos/cafe/CafeDemo";
import { SalonDemo } from "@/components/demos/salon/SalonDemo";
import { demoSites, type DemoSlug } from "@/content/demos";
import { restaurantContent } from "@/content/demos/restaurant";
import { cafeContent } from "@/content/demos/cafe";
import { salonContent } from "@/content/demos/hair-salon";

interface DemoRouteProps {
  params: Promise<{ slug: string }>;
}

const metaMap = {
  restaurant: restaurantContent,
  cafe: cafeContent,
  "hair-salon": salonContent,
};

export async function generateStaticParams() {
  return Object.keys(demoSites).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: DemoRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const content = metaMap[slug as DemoSlug];
  if (!content) return { title: "Demo" };
  return {
    title: content.name,
    description: "name" in content && "hero" in content ? content.hero.subtitle : "",
  };
}

export default async function DemoRoutePage({ params }: DemoRouteProps) {
  const { slug } = await params;
  if (!(slug in demoSites)) notFound();

  switch (slug as DemoSlug) {
    case "restaurant":
      return <RestaurantDemo />;
    case "cafe":
      return <CafeDemo />;
    case "hair-salon":
      return <SalonDemo />;
    default:
      notFound();
  }
}
