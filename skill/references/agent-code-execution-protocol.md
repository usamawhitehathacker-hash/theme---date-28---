# Agent Code Execution Protocol

This file is mandatory whenever the agent is asked to write, modify, debug, or review Shopify Horizon code. Its purpose is to force a strong context pass, independent reasoning, and strict self-debugging before code is delivered.

## Core Behavior

The agent must act like the owner of this Horizon codebase:

- Read the relevant skill knowledge before coding.
- Build a private mental model of the current task, files, dependencies, and risks.
- Solve tricky problems by tracing the actual theme flow instead of guessing.
- Prefer source evidence over assumptions.
- Keep the user's requested scope tight.
- Verify the implementation before saying it is done.

Do not expose hidden chain-of-thought. Summarize decisions, risks, and reasons clearly for the user.

## Mandatory Context Pass

Before writing code, load context in this order:

1. `skill/SKILL.md`
2. `skill/references/agent-code-execution-protocol.md`
3. `skill/references/horizon-source-map.md`
4. One or more task-specific references:
   - Architecture/system question: `skill/references/shopify-horizon-architecture.md`
   - Coding pattern/schema/JS/CSS/media question: `skill/references/code-patterns.md`
   - Feature-to-file map question: `skill/references/feature-file-routing.md`
   - Workflow/debug/review question: `skill/references/development-workflow.md`
5. Raw source docs only when needed:
   - Search `skill/references/source/` with `rg` for the task keywords.
   - Read matching passages, not entire huge files, unless the task is broad architecture training.

Use the local source as final authority:

```bash
rg -n "keyword|file-name|setting-id|block-type" horizon-source/new1-premium-announcement-bar skill/references
```

## Code Task Thinking Model

For every implementation, privately build this model:

```text
Goal:
- What exact customer or merchant outcome is required?

Surface:
- Which page, section group, section, block, snippet, asset, config, and locale areas are involved?

Current system:
- How does the existing Horizon code already solve similar problems?

Dependency graph:
- Upstream callers
- Files to modify
- Downstream files/components that can break

Risk:
- Runtime errors
- Customizer schema errors
- Merchant setting loss
- Product/cart/search/filter behavior regressions
- Accessibility and mobile layout risk
- Performance risk

Solution:
- Smallest coherent implementation
- Why this path fits Horizon patterns
- What alternatives were rejected and why

Verification:
- Static checks
- Usage searches
- Browser/customizer checks when possible
```

Only show the user a short version when useful.

## Strict File Mapping

Before edits, make a file map:

```text
Read:
- files needed to understand the existing pattern

Create:
- new files and why they are necessary

Modify:
- exact files and exact responsibility

Do not touch:
- related files that are risky or outside scope

Affected:
- shared files/components that may change behavior indirectly
```

If the task touches header, footer, product cards, cart, search, filters, variant picker, media, global CSS/JS, or config, search references first.

## Tricky Problem Solver

When behavior is unclear or a bug is tricky:

1. Trace render flow from `layout/theme.liquid`.
2. Identify the template or section group.
3. Open the section.
4. Follow block rendering.
5. Follow snippet renders.
6. Follow asset loading and JS imports.
7. Check config/settings and locale keys.
8. Search exact class names, setting IDs, custom element names, and event names.
9. Form 2-3 possible causes.
10. Eliminate causes using source evidence.
11. Patch the smallest confirmed cause.
12. Re-run searches/checks to confirm no new missing dependency.

Never solve a Horizon problem by only changing the first file that looks relevant.

## Self-Debug Loop

After editing, run this loop:

```text
Pass 1: Syntax
- JSON valid?
- Liquid tags balanced?
- Schema valid?

Pass 2: Dependencies
- All render targets exist?
- All asset_url files exist?
- Block types match?
- Translation keys exist?

Pass 3: Behavior
- Does the feature degrade gracefully when data/settings are blank?
- Does JS initialize once and clean up?
- Does section re-render/customizer behavior remain safe?

Pass 4: UX
- Mobile layout safe?
- Keyboard/focus behavior safe?
- Images/media accessible?
- Text not hardcoded where translations are expected?

Pass 5: Risk
- Shared snippet/global asset changed?
- Product/cart/variant/search/filter path affected?
- Merchant data preserved?
```

If a pass fails, fix the issue before final response.

## Error Recovery Rules

When an error appears:

- Missing snippet: search `{% render 'name' %}`, create or correct the render target.
- Missing asset: search `'file' | asset_url`, create file or remove/load correctly.
- Schema error: validate JSON, range math, duplicate IDs, invalid setting type, invalid `visible_if`.
- Customizer block issue: check block type, block schema, block root `{{ block.shopify_attributes }}`.
- JS not running: check asset loading, `type="module"`, import map alias, custom element tag name, `customElements.define`.
- Header layout shift: check `layout/theme.liquid`, `assets/header.js`, `assets/utilities.js`, and header group height variables.
- Product add-to-cart failure: check `assets/product-form.js`, buy/add-to-cart block markup, variant picker, quantity selector, and form attributes.
- Variant mismatch: check `assets/variant-picker.js`, variant picker snippet/block, product form hidden inputs.
- Filter failure: check `assets/facets.js`, filter snippets, section rendering/pagination.

## Strict Coding Standards

- Use existing Horizon patterns first.
- Keep edits scoped to the requested feature.
- Do not rewrite whole files unless necessary.
- Do not delete shared snippets/assets unless every usage is handled.
- Do not reset `config/settings_data.json` without explicit user request.
- Do not add broad CSS selectors for local problems.
- Do not add global JS variables.
- Do not invent schema setting types.
- Do not leave placeholder code.
- Do not say done without verification.

## Final Response Contract

When code work is complete, report:

- What changed.
- Key files changed.
- Verification performed.
- Any remaining risk or thing not tested.

For Roman Urdu/Hinglish users, keep it direct:

```text
Kaam ho gaya. Maine pehle skill/source map se file dependency trace ki, phir sirf required files touch ki.
Verification: JSON/schema/reference checks pass.
Risk: browser customizer live test nahi hua agar dev server/store access available nahi tha.
```
