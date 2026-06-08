# AGENTS.md

This repository contains a Shopify Horizon theme project.

## Project Layout

- Git repository root: `/Users/apple/Projects/shopify-themes/horizon-theme`
- Active Shopify theme source: `horizon-source/new1-premium-announcement-bar`
- Theme CLI commands should be run from the active theme source folder.

## Working Rules

- Always inspect existing theme files before editing.
- Read `docs/project-brief.md` and the relevant `docs/features/*.md` file before major feature work.
- Do not copy paid Shopify theme code, assets, or exact proprietary layouts.
- Use premium themes only as UX and feature references.
- Keep implementation original and maintainable.
- Keep sections editable through Shopify Theme Editor schema.
- Use Shopify Liquid best practices.
- Keep CSS and JavaScript minimal, scoped, and readable.
- Build mobile-first responsive behavior.
- Preserve accessibility basics: labels, focus states, semantic markup, keyboard-friendly interactions.
- Work one feature at a time, but edit all related files needed for that feature.
- After changes, summarize changed files and testing steps.

## Common Commands

Run these from `horizon-source/new1-premium-announcement-bar`:

```bash
shopify theme dev --store=YOUR-STORE.myshopify.com
shopify theme check
```

Run Git commands from the repository root:

```bash
git status
git diff
git add .
git commit -m "Describe change"
git push
```
