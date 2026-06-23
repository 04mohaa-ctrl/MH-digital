# System Memory & Context 🧠
<!--
AGENTS: Update this file after every major milestone, structural change, or resolved bug.
DO NOT delete historical context if it is still relevant. Compress older completed items.
-->

## 🏗️ Active Phase & Goal
**Current Phase:** Phase 1 — Foundation / Polish & Pre-Deployment
**Current Task:** Review completed improvements, prepare for Git commit, then deploy to Vercel.
**Next Steps:**
1. Commit today's work to Git (awaiting user confirmation).
2. Replace placeholder contact information (`hej@mhdigital.se`, phone number).
3. Configure `RESEND_API_KEY` in `.env.local` for production contact form.
4. Deploy to Vercel and connect custom domain.
5. Run Lighthouse audit (target 90+).
6. Address polish items in `docs/TODO.md` (spacing, case studies, FAQ, etc.).

### Today's Summary (2026-06-23)
- Scaffolded full Next.js 16 MVP (TypeScript, Tailwind, App Router).
- Built MH Digital marketing site in Swedish (`/`, `/tjanster`, `/portfolio`, `/kontakt`).
- Redesigned with Scandinavian warm palette, Fraunces display typography, navy primary.
- Homepage restructured: hero → Så går det till → Varför MH Digital → portfolio preview → CTA.
- Created three industry-specific demo sites with unique layouts, colors, and content.
- Research-based UX pass: visible restaurant menus, café kaffe/bageri split, salon beauty-brand feel.
- Rich portfolio cards with goals, priorities, and design rationale.
- Added branding assets (`icon.svg`, `apple-icon.svg`, `og-image.svg`).
- Established documentation system (`docs/CHANGELOG.md`, `PROMPT_LOG.md`, `DECISIONS.md`, `TODO.md`).
- `npm run build` and TypeScript pass; `npm run lint` still broken on Next.js 16.

## 🎯 Business Context

MH Digital helps Swedish local businesses establish a professional online presence.

Target customers:

- Restaurants
- Cafés
- Hair salons
- Auto repair shops
- Other local businesses

Main goals:

1. Build a strong portfolio.
2. Acquire first clients.
3. Create reusable systems.
4. Generate side income.
5. Learn modern technologies.

## 🎨 Brand Philosophy

Websites should feel:

- Modern
- Premium
- Scandinavian
- Warm
- Trustworthy
- Local-business focused

Avoid:

- Generic SaaS feeling
- Pure black-and-white design
- Corporate language
- Overly complex animations
- Placeholder content

Every industry template should feel unique and adapted to its target business.

## 🧩 Reusability Principles

Target:

80–90% component reuse.

Hierarchy:

UI Components
↓
Sections
↓
Pages
↓
Templates
↓
Customer Websites

Rules:

- Never create separate components for each industry unless necessary.
- Prefer reusable props.
- Reuse layout patterns, but do not make every demo look identical.
- Industry templates should share building blocks but have different visual direction, content priorities and section order.

## 🤖 AI Workflow

Planner:
ChatGPT / Claude

Builder:
Cursor

Reviewer:
ChatGPT / Claude

Rules:

- AI-generated code must always be reviewed.
- Do not optimize prematurely.
- Keep solutions simple.
- Update project documentation after major changes.
- Log important prompts in `docs/PROMPT_LOG.md`.
- Log meaningful implementation changes in `docs/CHANGELOG.md`.
- Log important product, design and technical decisions in `docs/DECISIONS.md`.

## 🚫 Anti-Patterns

Avoid:

- Overengineering
- Premature optimization
- Complex architectures
- Duplicated code
- Generic AI-generated content
- Identical layouts across all demos
- Placeholder content in production
- Unnecessary dependencies
- English customer-facing copy on the Swedish MH Digital site
- Pure black-and-white design unless intentionally used

## 📂 Architectural Decisions
*(Log specific choices made during the build here so future agents respect them)*
- 2026-06-23 — **Stack chosen:** Next.js + TypeScript + Tailwind + shadcn/ui + Framer Motion. Deployment on Vercel. Forms via Resend. Supabase optional (no DB for static MVP sites).
- 2026-06-23 — **Content strategy:** Static content in `src/content/` as TypeScript objects — no database for Level 1 customer sites.
- 2026-06-23 — **Component philosophy:** Lego-block hierarchy (UI → Sections → Pages → Templates). Target 80–90% reuse across projects.
- 2026-06-23 — **AI workflow:** Planner (Claude/ChatGPT) → Builder (Cursor) → Reviewer (Claude/ChatGPT).
- 2026-06-23 — **Route groups:** `(site)/` for MH Digital marketing pages; `demos/[slug]/` for portfolio demos with per-industry layouts and fonts.
- 2026-06-23 — **Contact form:** Works without Resend key (logs to server console in dev); set `RESEND_API_KEY` for production emails.
- 2026-06-23 — **Swedish-first copy:** All customer-facing MH Digital and demo content in Swedish.
- 2026-06-23 — **Industry-specific demos:** Restaurant, café, and salon each have unique layout, color palette, typography, and section order (`src/components/demos/`).
- 2026-06-23 — **Documentation system:** `MEMORY.md`, `docs/CHANGELOG.md`, `docs/PROMPT_LOG.md`, `docs/DECISIONS.md`, `docs/TODO.md` for AI continuity.
- 2026-06-23 — **Typography:** Fraunces (display) + Inter (body) for MH Digital site; per-demo fonts via `src/lib/demo-fonts.ts`.

## 🐛 Known Issues & Quirks
*(Log current bugs or weird workarounds here)*
- `create-next-app` failed due to folder name `MH-digital` (capital letters) — project scaffolded manually with `package.json` name `mh-digital`.
- shadcn CLI failed on Windows path validation — UI components added manually.
- `npm run lint` fails on Next.js 16 (`Invalid project directory .../lint`) — use `npm run build` and `npx tsc --noEmit` instead. No `npm run type-check` script exists.
- Contact email and phone in content files are placeholders until real business details are set.
- Some demo pages may have excessive vertical spacing — flagged in `docs/TODO.md`.
- University studies remain top priority; keep scope tight for MVP.

## 📜 Completed Phases
- [x] Research and market validation
- [x] PRD completed (`docs/PRD-MH Digital-MVP.md`)
- [x] Technical Design completed (`docs/TechDesign-MH Digital-MVP.md`)
- [x] Agent configuration files generated (AGENTS.md, agent_docs/, Cursor rules)
- [x] Initial Next.js scaffold
- [x] MH Digital website (Home, Tjänster, Portfolio, Kontakt) — Swedish URLs
- [x] Three industry-specific demo websites (`/demos/restaurant`, `/demos/cafe`, `/demos/hair-salon`)
- [x] Scandinavian design refresh — warm palette, unique per-demo layouts
- [x] Research-based UX polish — homepage structure, portfolio case studies, demo industry priorities
- [x] Branding assets (favicon, apple icon, OG image)
- [x] Contact form API (`/api/contact`)
- [x] Outreach strategy doc (`docs/OUTREACH_STRATEGY.md`)
- [x] Project documentation system (`docs/CHANGELOG.md`, `PROMPT_LOG.md`, `DECISIONS.md`, `TODO.md`)
- [ ] Git commit of Phase 1 work
- [ ] Vercel deployment
- [ ] Lighthouse audit pass
- [ ] Resend configured for production
