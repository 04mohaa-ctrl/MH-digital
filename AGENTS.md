# AGENTS.md — Master Plan for MH Digital

## Project Overview & Stack
**App:** MH Digital
**Overview:** MH Digital is an AI-driven digital agency that builds modern, premium websites for local small businesses (restaurants, cafés, hair salons, auto repair shops, and similar). The MVP focuses on launching MH Digital's own marketing site, a portfolio with at least three demo websites, clear contact channels, and a documented proposal-to-delivery process — establishing trust, acquiring first customers, and creating a reusable website factory workflow.
**Stack:** Next.js (App Router) + TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, Supabase (optional), Resend (contact forms), Vercel (deployment)
**Critical Constraints:** Mobile-first design, Lighthouse score 90+, load time under 3 seconds, low budget (~$20–30/month), one-month MVP timeline, university studies remain top priority, no database unless there is a real need

## Setup & Commands
Execute these commands for standard development workflows. Do not invent new package manager commands.
- **Setup:** `npx create-next-app@latest mh-digital --typescript --tailwind --eslint --app --src-dir` then `npx shadcn@latest init`
- **Development:** `npm run dev`
- **Testing:** Manual testing (Phase 1); Lighthouse audits (Phase 2); Playwright (Phase 3 — future)
- **Linting & Formatting:** `npm run lint`
- **Build:** `npm run build`
- **Type Check:** `npx tsc --noEmit`

## How I Should Think
1. **Understand Intent First**: Before answering, identify what the user actually needs
2. **Ask If Unsure**: If critical information is missing, ask before proceeding
3. **Plan Before Coding**: Propose a plan, ask for approval, then implement
4. **Verify After Changes**: Run tests/linters or manual checks after each change
5. **Explain Trade-offs**: When recommending something, mention alternatives

## Plan → Execute → Verify
1. **Plan:** Outline a brief approach and ask for approval before coding. Use Plan mode when available.
2. **Execute:** Implement one feature at a time.
3. **Verify:** Run linters, type checks, Lighthouse, and browser testing after each feature; fix before moving on.

## Context Files
Load only when needed:
- `agent_docs/tech_stack.md` — Tech details, setup commands, examples
- `agent_docs/code_patterns.md` — Architecture, naming, error handling
- `agent_docs/project_brief.md` — Persistent rules and quality gates
- `agent_docs/product_requirements.md` — Full PRD requirements
- `agent_docs/testing.md` — Test strategy and verification loop
- `MEMORY.md` — Active phase, decisions, known issues
- `REVIEW-CHECKLIST.md` — Pre-merge verification

## Protected Areas
Do NOT modify these areas without explicit human approval:
- **Infrastructure:** Deployment workflows (`.github/workflows/`), Vercel project settings
- **Database Migrations:** Any Supabase migration files (when added)
- **Third-Party Integrations:** Resend API configuration, Supabase auth setup
- **Documentation:** `docs/PRD-*.md`, `docs/TechDesign-*.md` (source of truth)

## Coding Conventions
- **Formatting:** Enforce ESLint/Prettier rules. No warnings in new code.
- **Architecture:** Component hierarchy — UI → Sections → Pages → Templates. Reusable props over duplicate components.
- **Testing Expectations:** Manual checklist for Phase 1; Lighthouse 90+ for Phase 2; Playwright for future automation.
- **Type Safety:** Strict TypeScript. The `any` type is forbidden — use `unknown` with type guards. All props typed via interfaces.

## Agent Behaviors
These rules apply across all AI coding assistants (Cursor, Copilot, Claude, Gemini):
1. **Plan Before Execution:** ALWAYS propose a brief step-by-step plan before changing more than one file.
2. **Refactor Over Rewrite:** Prefer refactoring existing functions incrementally rather than completely rewriting large blocks of code.
3. **Context Compaction:** Write states to `MEMORY.md` instead of filling context history during long sessions.
4. **Iterative Verification:** Run linters and manual/browser checks after each logical change. Fix errors before proceeding (see `REVIEW-CHECKLIST.md`).
5. **Reusability First:** One `Hero.tsx` with props — not `RestaurantHero.tsx`, `SalonHero.tsx`, etc.

## Current State
**Last Updated:** 2026-06-23
**Working On:** Phase 1 — Polish & deploy (scaffold and core pages complete)
**Recently Completed:** Next.js scaffold, MH Digital site, 3 demo sites, contact API, outreach doc
**Blocked By:** Resend API key needed for live email delivery

## Roadmap

### Phase 1: Foundation (Current)
- [x] Initialize Next.js project with TypeScript, Tailwind, shadcn/ui
- [x] Define branding and visual identity (Geist + Inter, premium neutral palette)
- [x] Build MH Digital website (Home, Services, Portfolio, Contact)
- [x] Implement contact form with Resend (API ready — add RESEND_API_KEY to .env.local)
- [x] Create three demo websites (restaurant, café, hair salon)
- [x] Document proposal and delivery process on site
- [x] Create outreach process documentation

### Phase 2: Customer Acquisition
- [ ] Start daily outreach to local businesses
- [ ] Gather feedback from prospects
- [ ] Land first five clients
- [ ] Improve sales process based on feedback

### Phase 3: Standardization
- [ ] Build reusable component library
- [ ] Create industry templates (restaurant, café, hair salon, auto repair)
- [ ] Develop AI workflows and prompt library
- [ ] Improve delivery speed (target 80–90% component reuse)

### Phase 4: Launch & Scale
- [ ] Deploy to Vercel with custom domain (Porkbun)
- [ ] Configure Google Analytics
- [ ] Run Lighthouse audits (target 95+)
- [ ] Security pass before production
- [ ] Semi-automated website factory (3–5 clients/month)

## What NOT To Do
- Do NOT delete files without explicit confirmation
- Do NOT modify database schemas without backup plan
- Do NOT add features not in the current phase
- Do NOT skip tests or verification for "simple" changes
- Do NOT bypass failing linters or pre-commit hooks
- Do NOT use deprecated libraries or patterns
- Do NOT add placeholder content to production pages
- Do NOT create duplicate components when reusable props suffice

## Engineering Constraints

### Type Safety (No Compromises)
- The `any` type is FORBIDDEN — use `unknown` with type guards
- All function parameters and returns must be typed
- Use Zod for runtime validation at form/API boundaries

### Architectural Sovereignty
- `app/` routes handle request/response and page composition ONLY
- Reusable logic goes in `lib/`, `hooks/`, `utils/`
- Static content lives in `content/` — not hardcoded in components
- No database calls from page components unless through `lib/` service functions

### Library Governance
- Check existing `package.json` before suggesting new dependencies
- Prefer native APIs (fetch over axios, Next.js Image over `<img>`)
- Follow the data-fetching approach in `agent_docs/tech_stack.md` (RSC + static content for MVP)

### Workflow Discipline
- Pre-commit hooks must pass before commits (or ask if they should be bypassed)
- If verification fails, fix issues before continuing
- One feature at a time — update `MEMORY.md` after milestones
