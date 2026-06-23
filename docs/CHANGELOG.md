# Changelog

This file tracks meaningful changes made to the MH Digital project.

## 2026-06-23 — Phase 1 wrap-up (polish, demos, docs)

### Added

- Full Next.js 16 MVP: marketing site, three demo sites, contact API, agent config.
- Swedish-first customer-facing copy across MH Digital site and all demos.
- Homepage sections: **Så går det till**, **Varför MH Digital?**, portfolio preview.
- Rich portfolio cards with business goal, design priorities, and design rationale.
- Industry-specific demo components (`src/components/demos/restaurant`, `cafe`, `salon`).
- Restaurant: visible categorized menu (förrätter/huvudrätter/dessert), signaturrätter, phone in nav.
- Café: separate kaffe and bageri sections, story, Instagram grid, testimonials.
- Salon: beauty-brand styling, services/team/before-after/FAQ/booking flow.
- Branding: `public/icon.svg`, `public/apple-icon.svg`, `public/og-image.svg`.
- Documentation system: `docs/CHANGELOG.md`, `PROMPT_LOG.md`, `DECISIONS.md`, `TODO.md`.
- Outreach strategy (`docs/OUTREACH_STRATEGY.md`).
- Swedish URL routes `/tjanster`, `/kontakt` with redirects from `/services`, `/contact`.

### Changed

- MH Digital design: warm Scandinavian palette, navy primary, Fraunces display typography.
- Replaced generic black-and-white SaaS template feel with human, local-business tone.
- Portfolio page explains demos as industry case-study examples, not just screenshots.
- `MEMORY.md` expanded with business context, brand philosophy, reusability, AI workflow, anti-patterns.
- `README.md` updated with MH Digital overview and documentation system rules.
- Site components reorganized under `src/components/site/` (hero, process, why-us, portfolio, CTA).

### Fixed

- `create-next-app` failure (npm naming restriction on `MH-digital` folder) — manual scaffold.
- shadcn CLI init failure on Windows — UI components added manually.
- Generic identical demo layouts — each industry now has unique structure and palette.
- `metadataBase` added for correct Open Graph image resolution.

### Notes

- `npm run build` and `npx tsc --noEmit` pass.
- `npm run lint` fails on Next.js 16 (known issue — ESLint CLI path bug).
- No `npm run type-check` script in `package.json`.
- Placeholder contact info remains — update before production launch.
- Ready for Git commit; not yet deployed to Vercel.

---

## 2026-06-23 — Documentation system

### Added

- Project documentation system files and expanded `MEMORY.md` sections.

### Changed

- Improved `MEMORY.md` structure while preserving build history.

---

## 2026-06-23 — Initial MVP scaffold

### Added

- Next.js project, contact form API, agent configuration files.

### Notes

- Project scaffolded manually due to npm naming restriction on folder `MH-digital`.
