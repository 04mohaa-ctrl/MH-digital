import { cormorant, dmSans, jost } from "@/lib/demo-fonts";
import type { DemoSlug } from "@/content/demos";

const fontMap: Record<DemoSlug, string> = {
  restaurant: cormorant.variable,
  cafe: dmSans.variable,
  "hair-salon": jost.variable,
};

interface DemoLayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

export default async function DemoLayout({ children, params }: DemoLayoutProps) {
  const { slug } = await params;
  const fontClass = fontMap[slug as DemoSlug] ?? "";

  return <div className={fontClass}>{children}</div>;
}
