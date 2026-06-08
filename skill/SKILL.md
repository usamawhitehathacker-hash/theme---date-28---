---
name: shopify-horizon-developer
description: Use this skill for Shopify Horizon theme development, architecture planning, debugging, teaching, code review, and implementation work involving Liquid, Shopify 2.0 JSON templates, sections, blocks, snippets, assets, config, locales, customizer schema, product/collection/cart/search/header/footer features, and the local Horizon theme source.
metadata:
  short-description: Expert Shopify Horizon theme development
---

# Shopify Horizon Developer

## Purpose

Use this skill as the operating manual for expert Shopify Horizon theme work. It is designed for the local theme at `horizon-source/new1-premium-announcement-bar`, based on Shopify Horizon 3.5.1, plus the raw knowledge documents preserved under `references/source/`.

Match the user's language. If the user writes Roman Urdu or Hinglish, respond in the same style while keeping code, file paths, and technical terms precise.

## Reference Router

Load only what the task needs:

- `references/horizon-source-map.md`: current source-derived inventory, folder counts, file lists, Liquid render references, asset references, JS imports, and custom elements. Read this first when mapping files.
- `references/shopify-horizon-architecture.md`: render flow, folder roles, Horizon-specific architecture, and local theme facts.
- `references/agent-code-execution-protocol.md`: mandatory agent behavior before writing code, including context loading, private analysis, tricky-problem solving, error recovery, and final self-audit.
- `references/development-workflow.md`: task intake, dependency scan, build order, QA checklist, debugging, review, and teaching workflow.
- `references/code-patterns.md`: Liquid section patterns, block rules, schema rules, JS component pattern, images, translations, accessibility, and performance.
- `references/feature-file-routing.md`: quick feature-to-file maps for header, product, collection, cart, search, footer, and global systems.
- `references/source/shopify-developer-mega-prompt.raw.md`: original expert prompt with full workflow and examples.
- `references/source/horizon-content-overview.raw.txt`: original file overview and teaching material.
- `references/source/content-2.raw.txt`: original mentor-style architecture and sections/blocks notes.
- `references/source/content-3.raw.txt`: original deep feature notes and IF/THEN scenarios.

For deep lookup, search the raw source docs instead of loading them fully:

```bash
rg -n "product-information|variant-picker|facets|header-group|announcement|range rule" skill/references/source
```

## Non-Negotiable Rules

1. Never think in one file. Every Shopify feature crosses templates, sections, blocks, snippets, assets, config, locales, and merchant settings.
2. Verify the real local code before editing. Treat older prompt notes as guidance, not authority.
3. Map files before coding: create, modify, read-only, affected downstream risk.
4. Before writing code, run the behavior in `references/agent-code-execution-protocol.md`.
5. Search usages before editing shared files such as `snippets/product-card.liquid`, `snippets/image.liquid`, `snippets/button.liquid`, `sections/_blocks.liquid`, `assets/product-form.js`, `assets/variant-picker.js`, and `assets/facets.js`.
6. Follow Shopify render order: `layout -> section group/template -> section -> block -> snippet -> asset -> config/settings -> locale`.
7. Keep CSS scoped to section/component selectors. Prefer `#shopify-section-{{ section.id }}` or existing Horizon section classes.
8. Use Horizon's ES module/custom element style. Prefer imports from import maps such as `@theme/component` and avoid global JS state.
9. Validate schema carefully: valid JSON, no trailing commas, range `(max - min) / step <= 100`, and defaults on the step grid.
10. Use translations for user-facing and customizer text when the theme pattern expects `t:` keys.
11. Preserve merchant settings and user changes. Do not overwrite `settings_data.json` casually.
12. Accessibility and performance are part of done: alt text, keyboard behavior, ARIA where needed, lazy images, responsive layout, no unnecessary blocking assets.
13. If implementing in the shared workspace, do the work end to end and verify. If the user is asking for guided learning or snippet-only help, present the plan and proceed step by step.

## Standard Workflow

For every task:

1. Understand: identify goal, affected page area, merchant/customer experience, and whether this is a build, bugfix, review, or teaching task.
2. Prime context: read `references/agent-code-execution-protocol.md`, then `references/horizon-source-map.md`, then task-specific references.
3. Inspect: read relevant source files; use `rg` for renders, asset URLs, block types, IDs, and translation keys.
4. Map: list create/modify/read/affected files and file dependencies.
5. Sequence: schema/settings first, then Liquid structure, snippets/blocks, assets, styles, templates/groups, locales, then verification.
6. Implement: follow existing Horizon patterns and keep edits scoped.
7. Verify: run available validation commands, syntax checks, searches for missing references, and browser/customizer checks when possible.
8. Report: summarize changed files, verification performed, and any residual risk.

## Useful Local Commands

```bash
rg -n "{% render '|asset_url|content_for 'block'|sections '" horizon-source/new1-premium-announcement-bar
rg -n "schema|settings|blocks|presets" horizon-source/new1-premium-announcement-bar/sections
rg -n "customElements.define|from '@theme/" horizon-source/new1-premium-announcement-bar/assets
rg -n "product-card|variant-picker|facets|cart-items" horizon-source/new1-premium-announcement-bar
```

## Response Style

Be direct and architectural. Explain why a file is involved, not only what to change. For Roman Urdu/Hinglish users, use clear wording like:

- "Pehle file map banate hain."
- "Yeh shared snippet hai, is liye pehle usages search karna zaroori hai."
- "Schema valid rakhna hai warna customizer crash karega."

When reviewing code, lead with findings and file/line references. When teaching, show the big picture, then a real example, file connections, IF/THEN impact, common mistakes, and a small practice step.
