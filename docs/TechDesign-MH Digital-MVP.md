# Technical Design Document: MH Digital MVP

## Executive Summary

**System:** MH Digital

**Version:** MVP 1.0

**Architecture Pattern:** Full-Stack Monolithic with AI-Assisted Development

**Estimated Effort:** 4–6 weeks

**Development Approach:** Hybrid Low-Code + AI

**Primary Goal:**
Build a reusable website factory capable of delivering premium websites quickly while maximizing learning and maintaining low operational costs.

---

# Architecture Overview

## High-Level Architecture

```text
                        Client
                           │
                           ▼
                  Next.js Frontend
                           │
         ┌─────────────────┼─────────────────┐
         ▼                 ▼                 ▼
     Static Pages      Contact Forms      Portfolio
                           │
                           ▼
                        Resend
                           │
                           ▼
                       Supabase
                    (Optional DB)
                           │
                           ▼
                        Vercel
                        Deployment
```

---

# Architecture Philosophy

MH Digital is designed around four principles:

1. Simplicity
2. Reusability
3. AI-assisted development
4. Scalability

The goal is not to optimize for thousands of users.

The goal is to optimize for:

- Fast delivery
- High quality
- Reusable systems
- Easy maintenance

---

# Technology Stack Decision

## Frontend

### Primary Recommendation

Next.js + TypeScript

### Why

- Excellent SEO
- AI tools know it extremely well
- Large ecosystem
- Production ready
- Great for marketing websites

### Alternatives

| Option | Pros | Cons |
|----------|------|------|
| Next.js | Best overall | Learning curve |
| React + Vite | Simpler | Less SEO |
| Framer | Extremely fast | Less flexible |
| WordPress | Familiar to many | Technical debt |

### Recommendation

✅ Next.js

---

## Styling

### Primary Recommendation

Tailwind CSS

### Why

- AI-friendly
- Fast development
- Reusable
- Industry standard

Alternatives:

- CSS Modules
- Styled Components

Recommendation:

✅ Tailwind

---

## Component Library

### Primary Recommendation

shadcn/ui

### Why

- Full ownership
- Premium components
- Easy to customize
- AI understands it well

Alternatives:

- Material UI
- Chakra UI
- Mantine

Recommendation:

✅ shadcn/ui

---

## Backend

### Primary Recommendation

Supabase

Provides:

- PostgreSQL
- Storage
- Authentication
- APIs

### Alternatives

#### No Backend

Pros

- Simpler

Cons

- Limited

#### Firebase

Pros

- Easy

Cons

- Vendor lock-in

#### Custom Backend

Pros

- Maximum control

Cons

- Too much complexity

Recommendation:

✅ Supabase

---

## Deployment

### Primary Recommendation

Vercel

### Why

- Git push = deploy
- Great free tier
- Perfect for Next.js

Alternatives

Cloudflare Pages

Recommendation:

✅ Vercel

---

# Project Structure

```text
mh-digital/

src/

app/
components/
hooks/
lib/
types/
utils/
constants/
content/
assets/
styles/

public/

docs/

PRD-MH-Digital-MVP.md
TechDesign-MH-Digital-MVP.md
AGENTS.md
AI_WORKFLOWS.md
COMPONENT_LIBRARY.md
ROADMAP.md
OUTREACH_STRATEGY.md
BRAND_GUIDELINES.md
STACK_DECISIONS.md
```

---

# Source Structure

```text
src/

app/

components/
│
├── ui/
├── sections/
├── cards/
├── forms/
├── layouts/
└── navigation/

lib/

hooks/

types/

content/

styles/

assets/

utils/
```

---

# Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

RESEND_API_KEY=

NEXT_PUBLIC_SITE_URL=

GOOGLE_ANALYTICS_ID=
```

---

# Folder Philosophy

app/

Routes and pages

components/

Reusable UI

content/

Static content

lib/

External services

hooks/

Custom hooks

types/

Typescript interfaces

styles/

Global styles

utils/

Helper functions

assets/

Images and icons
# Component Architecture

## Philosophy

MH Digital should be built like a collection of Lego blocks.

Every website should reuse as many components as possible.

Goals:

- Faster delivery
- Better consistency
- Easier maintenance
- Higher quality

---

# Component Hierarchy

```text
UI Components
↓
Section Components
↓
Page Components
↓
Website Templates
↓
Customer Websites
```

---

# UI Components

These are the lowest-level reusable components.

Examples:

```text
Button
Input
Textarea
Badge
Card
Dialog
Tabs
Accordion
Sheet
Avatar
Carousel
Separator
```

Location:

```text
components/ui/
```

Powered by:

- shadcn/ui

---

# Section Components

These are reusable website sections.

Location:

```text
components/sections/
```

Examples:

## Hero Section

Contains:

- Headline
- Description
- CTA
- Image

---

## About Section

Contains:

- Story
- Features
- Images

---

## Services Section

Contains:

- Cards
- Icons
- Descriptions

---

## Testimonials

Contains:

- Customer reviews
- Ratings

---

## Gallery

Contains:

- Images
- Masonry layouts

---

## FAQ

Contains:

- Accordion

---

## CTA Section

Contains:

- Button
- Headline

---

## Contact Section

Contains:

- Form
- Phone number
- Email

---

## Footer

Contains:

- Links
- Socials

---

# Page Components

Location

```text
app/
```

Pages:

```text
/
about
services
portfolio
contact
```

---

# Website Templates

Location:

```text
templates/
```

---

## Restaurant Template

Sections:

Hero

About

Menu Preview

Gallery

Testimonials

FAQ

CTA

Contact

Footer

---

## Café Template

Hero

Story

Products

Gallery

FAQ

Contact

Footer

---

## Hair Salon Template

Hero

Services

Team

Gallery

Testimonials

Contact

Footer

---

## Auto Repair Template

Hero

Services

Why Choose Us

Testimonials

FAQ

Contact

Footer

---

# Website Factory Architecture

```text
Client
    │
    ▼
Industry Type
    │
    ▼
Template Selection
    │
    ▼
Content Collection
    │
    ▼
AI Content Generation
    │
    ▼
Reusable Components
    │
    ▼
Website Assembly
    │
    ▼
Review
    │
    ▼
Deploy
    │
    ▼
Customer Delivery
```

---

# Content System

Location:

```text
content/
```

Example:

```text
content/

restaurant/
hair-salon/
cafe/
auto-repair/
```

---

# Type Definitions

Location:

```text
types/
```

Example:

```ts
export interface HeroProps {
    title: string;
    subtitle: string;
    ctaText: string;
    image: string;
}

export interface Testimonial {
    name: string;
    text: string;
    stars: number;
}
```

---

# Assets

Location

```text
assets/

images/
icons/
logos/
```

---

# Design System

## Typography

Headings

Geist

Body

Inter

---

## Colors

Primary

Neutral

Accent

Defined inside:

```text
tailwind.config.ts
```

---

# Responsiveness

Breakpoints

```css
sm
md
lg
xl
2xl
```

Mobile-first philosophy.

---

# Animation Philosophy

Subtle animations only.

Tools:

- Framer Motion
- Tailwind

Avoid:

- Over-animated websites
- Excessive effects

Focus:

- Premium feel
- Speed
- Simplicity

---

# Reusability Goals

Target:

80-90% of components reused between projects.

Only:

10-20% custom per customer.

This is the foundation of the MH Digital Website Factory.

# AI Workflow

## Development Philosophy

MH Digital is an AI-first business.

AI should accelerate development, not replace understanding.

The goal is to create systems that are:

- Fast
- Maintainable
- Reusable
- Scalable

---

# Planner → Builder → Reviewer Pattern

All work follows the PER loop:

```text
Planner
    ↓
Builder
    ↓
Reviewer
```

---

## Planner

Tools:

- ChatGPT
- Claude

Purpose:

- Architecture
- Feature breakdown
- Folder structure
- Technical decisions

Example Prompt

```text
Design a reusable Hero section for restaurant websites using Next.js, Tailwind and shadcn/ui.

Requirements:

- Mobile first
- Premium feel
- Reusable props
- SEO friendly
```

---

## Builder

Primary Tool:

Cursor

Purpose:

- Generate components
- Implement features
- Refactor code
- Create sections

Example Prompt

```text
Create a Hero component using TypeScript and Tailwind.

Requirements:

- Responsive
- Reusable props
- Background image support
- CTA button
- Premium styling
```

---

## Reviewer

Tools:

- ChatGPT
- Claude

Purpose:

- Code review
- Improvements
- Refactoring
- Finding bugs

Example Prompt

```text
Review this component.

Focus on:

- Maintainability
- Reusability
- Type safety
- Performance
```

---

# AI Tool Strategy

| Task | Tool |
|--------|------|
| Architecture | Claude / ChatGPT |
| Coding | Cursor |
| UI Ideas | v0 |
| Debugging | ChatGPT |
| Refactoring | Cursor |
| Research | ChatGPT |
| Component Design | v0 |
| Documentation | ChatGPT |

---

# Development Workflow

```text
Idea
 ↓
PRD
 ↓
TDD
 ↓
ChatGPT Planning
 ↓
Cursor Implementation
 ↓
Review
 ↓
Git Commit
 ↓
Deploy to Vercel
```

---

# Git Workflow

Branching Strategy

```text
main
│
├── feature/*
├── fix/*
└── refactor/*
```

Examples

```text
feature/hero-section
feature/contact-form

fix/navbar-mobile

refactor/footer
```

---

# Commit Style

Examples

```bash
feat: add hero section

fix: mobile navbar bug

refactor: simplify footer component

style: improve button spacing
```

---

# Development Environment

## Local

Purpose

Daily development.

---

## Production

Purpose

Live websites.

---

# Deployment Workflow

```text
Code
 ↓
GitHub
 ↓
Vercel
 ↓
Production
```

Git push automatically deploys.

---

# Content Workflow

Client
↓
Information Gathering
↓
AI Content Draft
↓
Manual Review
↓
Implementation
↓
Delivery

---

# Asset Workflow

Client Assets

Logo

Images

Text

↓

Optimize

↓

Store

↓

Deploy

---

# Prompt Library

Location

```text
docs/prompts/
```

Examples

```text
hero-prompt.md

restaurant-prompt.md

faq-prompt.md

contact-section-prompt.md
```

---

# Coding Standards

## TypeScript First

Always use types.

Avoid:

```ts
any
```

Prefer:

```ts
interface
type
```

---

## Reusability First

Bad

```text
RestaurantHero.tsx
SalonHero.tsx
CafeHero.tsx
```

Good

```text
Hero.tsx
```

with props.

---

## Component Size

Target

100-200 lines max.

Split large components.

---

## Naming Conventions

Components

```text
Hero.tsx

ContactSection.tsx

Navbar.tsx
```

Hooks

```text
useTheme.ts

useWindowSize.ts
```

Interfaces

```ts
HeroProps

TestimonialProps
```

---

# Error Handling

Always:

- Loading states
- Empty states
- Error states

Never assume success.

---

# Logging

Development

```ts
console.log()
```

Production

Later:

- Sentry

---

# Testing Strategy

## Phase 1

Manual testing

Checklist:

- Mobile
- Desktop
- Links
- Forms

---

## Phase 2

Lighthouse

Target:

90+

---

## Phase 3

Playwright

Future:

Automated testing.

---

# Documentation Strategy

Every major decision gets documented.

Location:

```text
docs/
```

Examples

```text
STACK_DECISIONS.md

AI_WORKFLOWS.md

COMPONENT_LIBRARY.md
```

---

# Scaling Philosophy

Avoid complexity until necessary.

Principles:

- Start simple
- Optimize later
- Reuse everything
- Automate repetitive tasks
- Learn continuously

---

# Ultimate Goal

Create a semi-autonomous website factory capable of producing premium websites quickly while maintaining high quality and low complexity.
# Database Strategy

## Philosophy

Most customer websites should not require a database.

The simplest solution is usually the best solution.

Rule:

> No database unless there is a real need.

---

# Level 1 – Static Websites

Examples:

- Restaurants
- Cafés
- Hair salons
- Auto repair shops

Content:

- Text
- Images
- Contact forms

Database Required?

❌ No

Everything can live inside:

```text
content/
```

Example:

```ts
export const restaurantContent = {
    hero: {
        title: "Authentic Somali Cuisine",
        subtitle: "Fresh ingredients and traditional flavors."
    }
};
```

---

# Level 2 – Simple Dynamic Features

Examples:

- Contact forms
- Testimonials
- Portfolio entries

Database Required?

⚪ Optional

Recommendation

Supabase

---

# Level 3 – Customer Portal

Examples:

- Dashboard
- Login
- Orders

Database Required?

✅ Yes

Recommendation

Supabase PostgreSQL

---

# Supabase Architecture

```text
Next.js
     ↓
Supabase Client
     ↓
PostgreSQL
     ↓
Storage
```

---

# Storage

Use Supabase Storage for:

- Images
- PDFs
- Logos

Alternative:

Cloudinary

Recommendation:

Start with Supabase Storage.

---

# Form Handling

## Recommendation

Resend

Why:

- Beautiful emails
- Simple setup
- Great DX

Workflow

```text
Customer
 ↓
Form
 ↓
Resend
 ↓
Email
 ↓
Inbox
```

---

# Analytics

## Phase 1

Simple Analytics

Options

### Google Analytics

Pros

- Free
- Powerful

Cons

- More complex

---

### Plausible

Pros

- Simple
- Privacy friendly

Cons

- Paid

Recommendation

Google Analytics initially.

---

# Deployment

## Recommendation

Vercel

---

Workflow

```text
Cursor
 ↓
GitHub
 ↓
Vercel
 ↓
Live Website
```

---

## Domain

Providers

- Namecheap
- Porkbun

Recommendation

Porkbun

---

# Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL=

NEXT_PUBLIC_SUPABASE_ANON_KEY=

RESEND_API_KEY=

NEXT_PUBLIC_SITE_URL=

NEXT_PUBLIC_GA_ID=
```

---

# Security

## Basic Security Principles

Never expose:

- API keys
- Secrets

Use:

```env
.env.local
```

---

## Input Validation

Always validate:

- Contact forms
- Email addresses

---

## Spam Protection

Future:

- Turnstile
- reCAPTCHA

---

# Performance Goals

## Lighthouse

Target

95+

---

## Core Web Vitals

Focus on:

### LCP

Under 2.5 seconds

### CLS

Under 0.1

### INP

Under 200ms

---

# Image Optimization

Use

```tsx
<Image />
```

from Next.js.

Avoid

```html
<img>
```

---

# SEO

Every website should include:

## Metadata

```ts
title

description

keywords

openGraph
```

---

## Sitemap

Automatically generated.

---

## Robots

robots.txt

---

## Structured Data

JSON-LD

Examples:

- Restaurant
- Local Business

---

# Testing Strategy

## Phase 1

Manual

Checklist

- Mobile
- Desktop
- Contact form
- Navigation
- Images

---

## Phase 2

Lighthouse

Target

95+

---

## Phase 3

Playwright

Future automated tests.

---

# Monitoring

Phase 1

None

---

Phase 2

Vercel Analytics

---

Phase 3

Sentry

---

# Cost Analysis

## Development

| Service | Cost |
|-----------|------|
| Cursor | $20 |
| ChatGPT | Existing |
| Vercel | Free |
| Supabase | Free |
| Resend | Free |
| GitHub | Free |
| Domain | ~$1/month |
| Total | ~$20–30 |

---

# Scaling Roadmap

## Stage 1

0–5 clients

Tools:

- Cursor
- Vercel
- Supabase

---

## Stage 2

5–20 clients

Add:

- Component library
- Templates
- Better prompts

---

## Stage 3

20–50 clients

Add:

- Internal CMS
- Sentry
- Better analytics

---

## Stage 4

50+ clients

Add:

- Automation
- AI agents
- Customer dashboard

---

# Definition of Technical Success

MH Digital succeeds technically when:

✅ Websites can be delivered quickly.

✅ Components are reusable.

✅ AI speeds up development.

✅ Costs remain low.

✅ The codebase stays maintainable.

✅ Websites score above 90 Lighthouse.

✅ New projects become easier over time.

---

# Technical Philosophy

Optimize for:

- Simplicity
- Speed
- Reusability
- Learning

Avoid:

- Premature optimization
- Overengineering
- Complex architectures
- Unnecessary dependencies

---

# Document Information

Document Name

TechDesign-MH-Digital-MVP.md

Version

1.0

Status

Approved

Next Document

AGENTS.md

Created

2026-06-23