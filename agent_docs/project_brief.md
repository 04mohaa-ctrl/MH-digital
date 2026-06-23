# Project Brief (Persistent)

- **Product vision:** MH Digital builds modern websites that work as hard as you do, build trust, and help local small businesses attract more customers — starting as an AI-driven agency with a reusable website factory.
- **Target audience:** Owners of local small businesses (restaurants, cafés, hair salons, auto repair shops) aged 30–60 with limited technical knowledge who want a professional online presence without managing technology themselves.
- **MVP timeline:** One month — MH Digital's own website and portfolio with three demo sites completed within that window.
- **Main constraint:** University studies remain the highest priority; MH Digital is a side project initially.

## Conventions
- **Naming:** PascalCase for React components (`Hero.tsx`), camelCase for hooks and utilities (`useTheme.ts`), kebab-case for content directories (`content/hair-salon/`)
- **File structure:** Feature-based under `src/` — `app/` for routes, `components/` for UI, `content/` for static data, `lib/` for external services
- **Component size:** 100–200 lines max; split when larger
- **Reusability:** One generic component with props beats three industry-specific duplicates

## Key Principles
- Ship the simplest solution that solves the user story — no database unless there is a real need
- Premium look and feel: fewer sections, higher quality (inspired by Stripe, Vercel, Linear, Apple, Framer)
- Mobile-first on every page and component
- AI accelerates development but all generated code must be reviewed before deployment
- Do one thing exceptionally well before expanding (websites only in V1)

## Quality Gates
- Lighthouse score above 90 before marking any page complete
- No placeholder content in production
- Cross-browser testing (Chrome, Safari, Firefox, Edge)
- Responsive verification on mobile, tablet, and desktop
- All CTAs and links must work
- Contact form must send real emails via Resend
- TypeScript strict mode — no `any` types
- Linter must pass (`npm run lint`) before commit

## Key Commands
```bash
npm run dev          # Start development server (localhost:3000)
npm run build        # Production build
npm run lint         # ESLint check
npx tsc --noEmit     # TypeScript type check
```

## Git Workflow
- **Branching:** `main` → `feature/*`, `fix/*`, `refactor/*`
- **Commit style:** Conventional commits — `feat: add hero section`, `fix: mobile navbar bug`
- **Deployment:** Push to GitHub → Vercel auto-deploys

## AI Workflow (Planner → Builder → Reviewer)
| Role | Tool | Purpose |
|------|------|---------|
| Planner | Claude / ChatGPT | Architecture, feature breakdown, decisions |
| Builder | Cursor | Generate components, implement features |
| Reviewer | Claude / ChatGPT | Code review, refactoring, bug finding |

## Update Cadence
- Update this brief when stack decisions change, new quality gates are added, or workflow conventions evolve
- Update `MEMORY.md` after every major milestone
- Update `AGENTS.md` roadmap checkboxes as phases complete

## What We Do Not Accept
- Generic AI-looking websites
- Poor mobile experiences
- Slow loading pages
- Inconsistent design systems
- Placeholder content in production
- Broken links or unfinished sections
