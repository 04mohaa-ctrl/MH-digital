# Testing Strategy

## Frameworks by Phase

### Phase 1 — Manual Testing (Current)
Primary verification method for MVP launch.

**Checklist (run after every feature):**
- [ ] Mobile responsiveness (phone viewport)
- [ ] Desktop layout (1280px+ viewport)
- [ ] Tablet layout (768px viewport)
- [ ] All navigation links work
- [ ] Contact form submits and email arrives via Resend
- [ ] Images load correctly (Next.js Image)
- [ ] No console errors in browser DevTools
- [ ] CTAs link to correct destinations
- [ ] No placeholder or lorem ipsum content

### Phase 2 — Lighthouse Audits
- **Tool:** Chrome DevTools Lighthouse (or `npx lighthouse`)
- **Target:** Score 90+ across Performance, Accessibility, Best Practices, SEO
- **Stretch goal:** 95+ (per Tech Design)
- **Run on:** Every page before marking complete

### Phase 3 — Automated E2E (Future)
- **Tool:** Playwright
- **Scope:** Top user journeys — contact form submission, navigation, portfolio browsing
- **When:** After MVP launch, during standardization phase

## Unit Tests
- **Tool:** Not required for Phase 1 MVP
- **Future:** Vitest for utility functions in `lib/` and `utils/`
- **Rule:** Add unit tests when reusable logic grows beyond trivial helpers

## Rules & Requirements
- **Before marking complete:** Run manual checklist + Lighthouse on affected pages
- **Before commit:** Run `npm run lint` and `npx tsc --noEmit`
- **Failures:** NEVER skip verification or mock out checks to pass. Fix issues before moving on.
- **Browser testing:** Required for all frontend changes before marking tasks complete

## Pre-Commit Hooks
Configure when project scaffold exists:
- ESLint (`npm run lint`)
- TypeScript type check (`tsc --noEmit`)
- Prettier formatting (if configured)

## Verification Loop
```text
Implement feature
    ↓
npm run lint && npx tsc --noEmit
    ↓
npm run dev → browser test (mobile + desktop)
    ↓
Lighthouse audit on affected pages
    ↓
Update MEMORY.md if architectural decisions made
    ↓
Check REVIEW-CHECKLIST.md
    ↓
Mark complete / commit
```

## Execution Commands
```bash
# Lint
npm run lint

# Type check
npx tsc --noEmit

# Build (catches compile errors)
npm run build

# Lighthouse (after deploy or local production build)
npx lighthouse http://localhost:3000 --view

# Future: Playwright
npx playwright test
npx playwright test tests/contact-form.spec.ts
```

## Performance Verification
| Metric | Target |
|--------|--------|
| Lighthouse Performance | 90+ (target 95+) |
| LCP | Under 2.5s |
| CLS | Under 0.1 |
| INP | Under 200ms |
| Page load | Under 3 seconds |

## Security Checks (Before Deployment)
- [ ] No API keys or secrets in source code
- [ ] `.env.local` in `.gitignore`
- [ ] Contact form input validated with Zod
- [ ] HTTPS enforced (Vercel default)
- [ ] Run dedicated security pass before production launch
