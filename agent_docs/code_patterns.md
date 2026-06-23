# Code Patterns

## Purpose
This file defines the implementation patterns the agent should follow for MH Digital.
Prefer these patterns over inventing new ones.

## Architecture Pattern
- **Primary pattern:** Component hierarchy (UI → Sections → Pages → Templates → Customer Sites)
- **Rule:** Static content in `content/` — components receive data via typed props, not hardcoded strings
- **Rule:** Reuse existing modules before creating new abstractions. One `Hero.tsx` with props, not per-industry duplicates
- **Rule:** Keep page components thin — compose from section components

```text
components/ui/          → Button, Input, Card (shadcn/ui)
components/sections/    → Hero, About, Services, FAQ, CTA, Contact, Footer
components/cards/       → ProjectCard, ServiceCard
components/forms/       → ContactForm
components/layouts/     → PageLayout, MainLayout
components/navigation/  → Navbar, MobileMenu
app/                    → Page routes that compose sections
content/                → Static data objects per industry
```

## Data Fetching
- **Primary approach:** Static content from `content/` directory + React Server Components (RSC) for MVP
- **Rule:** No client-side data fetching for static marketing pages
- **Rule:** Contact form uses API route (`app/api/contact/route.ts`) with server-side Resend call
- **Rule:** If Supabase is added later, all DB access goes through `lib/supabase.ts` — never from page components directly

```typescript
// content/restaurant/index.ts — static content pattern
import type { RestaurantContent } from "@/types";

export const restaurantContent: RestaurantContent = {
  hero: {
    title: "Authentic Somali Cuisine",
    subtitle: "Fresh ingredients and traditional flavors.",
    ctaText: "View Menu",
    ctaHref: "#menu",
    image: "/images/restaurant-hero.jpg",
  },
  // ...more sections
};
```

## State Management
- **Server state:** Static — imported from `content/` at build time
- **Client state:** React `useState` / `useReducer` for UI interactions (mobile menu, form state)
- **Forms:** React Hook Form + Zod validation (or controlled inputs with Zod on submit for MVP simplicity)
- **Rule:** No state library (Redux, Zustand) unless complexity demands it — not needed for MVP

## Error Handling
- Normalize errors at API route boundaries — never let raw exceptions reach the UI
- Always implement loading, empty, and error states for dynamic features
- Return user-safe messages in the UI; log developer context server-side
- Use consistent error shape: `{ error: string, details?: unknown }`

```typescript
// Pattern: API route error handling
try {
  const data = schema.parse(await request.json());
  await sendEmail(data);
  return NextResponse.json({ success: true });
} catch (error) {
  if (error instanceof z.ZodError) {
    return NextResponse.json({ error: "Validation failed", details: error.flatten() }, { status: 400 });
  }
  console.error("[route-name]", error);
  return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
}
```

## Validation
- **Tool:** Zod for all external inputs (contact forms, API payloads)
- Validate at system boundaries (API routes, form submission)
- Trust internal TypeScript types inside validated boundaries
- Keep schemas co-located with the API route or form component

## File and Naming Conventions
- **Components:** PascalCase — `Hero.tsx`, `ContactSection.tsx`
- **Hooks:** camelCase with `use` prefix — `useTheme.ts`
- **Interfaces:** PascalCase with descriptive suffix — `HeroProps`, `Testimonial`
- **Content dirs:** kebab-case — `content/hair-salon/`
- **API routes:** kebab-case — `app/api/contact/route.ts`
- **Constants:** UPPER_SNAKE_CASE

## Component Pattern
```typescript
// types/index.ts
export interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  image?: string;
}

// components/sections/Hero.tsx
import type { HeroProps } from "@/types";

export function Hero({ title, subtitle, ctaText, ctaHref, image }: HeroProps) {
  // Implementation — target 100-200 lines max
}
```

## Animation Pattern
- Use Framer Motion for subtle entrance animations and hover effects
- Avoid over-animated websites — premium feel comes from restraint
- Prefer CSS transitions via Tailwind for simple hover/focus states

```tsx
import { motion } from "framer-motion";

export function FadeIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
```

## SEO Pattern
Every page must export metadata:
```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MH Digital — Modern Websites for Local Businesses",
  description: "We build modern websites that work as hard as you do.",
  openGraph: { title: "...", description: "...", images: ["/og-image.jpg"] },
};
```

## Testing Pattern
- Manual browser testing for Phase 1 (see `testing.md`)
- Lighthouse audit on every page before completion
- Future: Vitest for `lib/` utilities, Playwright for contact form E2E
- Run `npm run lint` and `tsc --noEmit` after every feature

## Change Discipline
- Prefer focused, minimal edits over large rewrites
- Check `package.json` before adding dependencies
- Do not change Vercel config, Supabase migrations, or Resend setup without approval
- One feature at a time — update `MEMORY.md` after each milestone
- Component target: 100–200 lines; split when exceeded
