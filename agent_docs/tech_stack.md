# Tech Stack & Tools

## Core Stack
- **Frontend:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS + shadcn/ui
- **Animation:** Framer Motion (subtle animations only)
- **Forms & Email:** Resend (contact form → email inbox)
- **Backend / Database:** Supabase (PostgreSQL + Storage + Auth) — optional for MVP; static sites use `content/` instead
- **Analytics:** Google Analytics (Phase 1)
- **Deployment:** Vercel (Git push = deploy)
- **Domain:** Porkbun (~$1/month)
- **Fonts:** Geist (headings), Inter (body)
- **Image Optimization:** Next.js `<Image />` component

## Environment Variables
```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
RESEND_API_KEY=
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_GA_ID=
```

Store secrets in `.env.local` — never commit to git.

## Project Structure
```text
mh-digital/
├── src/
│   ├── app/              # Routes and pages (/, about, services, portfolio, contact)
│   ├── components/
│   │   ├── ui/           # shadcn/ui primitives (Button, Card, Input, etc.)
│   │   ├── sections/     # Reusable sections (Hero, About, Services, FAQ, CTA, Contact, Footer)
│   │   ├── cards/        # Project cards, service cards
│   │   ├── forms/        # Contact form components
│   │   ├── layouts/      # Page layouts, navbar wrappers
│   │   └── navigation/   # Navbar, mobile menu
│   ├── hooks/            # Custom hooks (useTheme, useWindowSize)
│   ├── lib/              # External service clients (Resend, Supabase)
│   ├── types/            # TypeScript interfaces (HeroProps, Testimonial, etc.)
│   ├── utils/            # Helper functions
│   ├── constants/        # App-wide constants
│   ├── content/          # Static content (restaurant/, cafe/, hair-salon/, auto-repair/)
│   ├── assets/           # images/, icons/, logos/
│   └── styles/           # Global styles
├── public/
├── docs/
├── agent_docs/
├── AGENTS.md
└── MEMORY.md
```

## Setup Commands
```bash
# 1. Create Next.js project
npx create-next-app@latest mh-digital --typescript --tailwind --eslint --app --src-dir

# 2. Navigate and install shadcn/ui
cd mh-digital
npx shadcn@latest init

# 3. Add common shadcn components
npx shadcn@latest add button card input textarea badge accordion tabs dialog sheet avatar carousel separator

# 4. Install additional dependencies
npm install framer-motion resend zod

# 5. Optional: Supabase (only when needed)
npm install @supabase/supabase-js

# 6. Development
npm run dev

# 7. Build and lint
npm run build
npm run lint
npx tsc --noEmit
```

## Typography & Design Tokens
Configure in `tailwind.config.ts`:
- **Headings:** Geist
- **Body:** Inter
- **Colors:** Primary, Neutral, Accent (premium feel — inspired by Stripe, Vercel, Linear)
- **Breakpoints:** `sm`, `md`, `lg`, `xl`, `2xl` (mobile-first)

## Error Handling Pattern
```typescript
// lib/errors.ts — normalize errors at service boundaries
export class AppError extends Error {
  constructor(
    message: string,
    public code: string,
    public statusCode: number = 500
  ) {
    super(message);
    this.name = "AppError";
  }
}

// app/api/contact/route.ts — API route with Zod validation
import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    // Send via Resend in lib/email.ts
    // await sendContactEmail(data);

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: error.flatten() },
        { status: 400 }
      );
    }
    console.error("[contact]", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
```

## Styling & Component Example
```tsx
// components/sections/Hero.tsx — reusable hero with typed props
import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { HeroProps } from "@/types";

export function Hero({ title, subtitle, ctaText, ctaHref, image }: HeroProps) {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      {image && (
        <Image
          src={image}
          alt=""
          fill
          className="object-cover -z-10"
          priority
        />
      )}
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{title}</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">{subtitle}</p>
        <Button asChild size="lg" className="mt-8">
          <a href={ctaHref}>{ctaText}</a>
        </Button>
      </div>
    </section>
  );
}
```

## Naming Conventions
- **Components:** PascalCase — `Hero.tsx`, `ContactSection.tsx`, `Navbar.tsx`
- **Hooks:** camelCase with `use` prefix — `useTheme.ts`, `useWindowSize.ts`
- **Interfaces:** PascalCase with `Props` suffix — `HeroProps`, `TestimonialProps`
- **Content files:** kebab-case directories — `content/restaurant/`, `content/hair-salon/`
- **Constants:** UPPER_SNAKE_CASE
- **Component size:** Target 100–200 lines max; split larger components

## Performance Targets
- Lighthouse score: 90+ (target 95+)
- Load time: under 3 seconds
- LCP: under 2.5s | CLS: under 0.1 | INP: under 200ms
- Always use Next.js `<Image />` — never raw `<img>` tags

## Deployment
```text
Cursor → GitHub → Vercel → Production
```
Git push to `main` triggers automatic Vercel deployment.

## Cost Budget
| Service | Cost |
|---------|------|
| Cursor | $20/month |
| Vercel | Free tier |
| Supabase | Free tier |
| Resend | Free tier |
| Domain (Porkbun) | ~$1/month |
| **Total** | ~$20–30/month |
