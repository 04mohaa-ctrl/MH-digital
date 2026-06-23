# Decisions

This file tracks important product, technical, design and business decisions.

## 2026-06-23 — Documentation-first AI workflow

### Decision

All meaningful work must be logged in project documentation: `MEMORY.md` for context, `docs/CHANGELOG.md` for changes, `docs/PROMPT_LOG.md` for prompts, `docs/DECISIONS.md` for rationale, `docs/TODO.md` for next steps.

### Reason

MH Digital is an AI-first project. Prompts, changes, and decisions must be tracked so future AI agents keep context across sessions and avoid repeating mistakes.

### Alternatives Considered

- Chat history only.
- README only.
- Git commits only.

### Trade-offs

Pros: Better continuity, professional workflow, easier handoffs between AI sessions.

Cons: Requires discipline to keep files updated after each session.

---

## 2026-06-23 — Industry-specific demo strategy

### Decision

Each portfolio demo (restaurant, café, hair salon) uses its own layout component, color palette, typography, section order, and content priorities. Shared building blocks (`FadeIn`, `ContactForm`, UI primitives) are reused; identical page structures are not.

### Reason

Restaurant, café, and hair salon demos should not look identical. Real customers in each industry have different needs (menu vs. atmosphere vs. trust/booking). Portfolio credibility depends on showing tailored design thinking.

### Alternatives Considered

- Single `DemoPage` with swapped text (rejected — too generic).
- Fully separate codebases per demo (rejected — poor reuse).

### Trade-offs

Pros: Demos feel custom-designed; still 80–90% component reuse at UI level.

Cons: More content and layout files per industry.

---

## 2026-06-23 — Swedish-first customer-facing copy

### Decision

All MH Digital customer-facing copy — marketing site, demos, CTAs, forms — must be in Swedish.

### Reason

MH Digital targets Swedish local business owners aged 30–60. Swedish copy builds trust and feels relevant; English SaaS language undermines the local-agency positioning.

### Trade-offs

Pros: More relevant, trustworthy, approachable for target audience.

Cons: Internal technical docs and code comments may remain in English for AI/tool compatibility.

---

## 2026-06-23 — Documentation system (file structure)

### Decision

Use separate documentation files for project memory, prompts, changelog, decisions, and tasks.

### Reason

MH Digital is an AI-driven project. Future agents need stable, file-based context.

### Trade-offs

Pros: Better continuity, easier AI collaboration, professional history.

Cons: Requires discipline to maintain.

---

## 2026-06-23 — Static-first content strategy

### Decision

Use static TypeScript content objects in `src/content/` for Level 1 brochure websites.

### Reason

Most local business websites do not need a database.

### Trade-offs

Pros: Faster, simpler, lower cost.

Cons: CMS may be needed later for non-technical editing.

---

## 2026-06-23 — Tech stack (Next.js + Vercel + Resend)

### Decision

Next.js (App Router) + TypeScript + Tailwind + Vercel + Resend. Supabase deferred.

### Reason

Aligns with Tech Design: SEO, AI-friendly, low cost, fast deployment.

### Trade-offs

Pros: Production-ready, excellent DX, free tiers.

Cons: Next.js learning curve; Vercel ecosystem coupling (acceptable for MVP).
