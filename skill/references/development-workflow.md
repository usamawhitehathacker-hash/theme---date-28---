# Development Workflow

## Task Intake

Before code, identify:

```text
Task: what to build, modify, fix, review, or explain
Scope: header, footer, product, collection, cart, search, blog, page, global
User goal: merchant control, customer UX, conversion, performance, accessibility
Theme surface: template, section group, section, block, snippet, asset, config, locale
```

If the user is asking for one feature, stay focused on that feature. Do not bundle unrelated sections or refactors.

## File Map

Create a concise file map:

```text
Create:
- path - why it is needed

Modify:
- path - exact responsibility

Read only:
- path - pattern/dependency reference

Affected:
- path - what could break downstream
```

Use `references/horizon-source-map.md` and `rg` to verify actual file names.

## Dependency Scan

Common searches:

```bash
rg -n "{% render 'product-card'|render 'product-card'" horizon-source/new1-premium-announcement-bar
rg -n "'variant-picker.js' \\| asset_url|@theme/variant-picker" horizon-source/new1-premium-announcement-bar
rg -n "type: '_header-menu'|_header-menu|header-menu" horizon-source/new1-premium-announcement-bar
rg -n "sections 'header-group'|sections 'footer-group'" horizon-source/new1-premium-announcement-bar
rg -n "\"type\": \"range\"|\"min\"|\"max\"|\"step\"" horizon-source/new1-premium-announcement-bar/sections horizon-source/new1-premium-announcement-bar/config
```

For snippets/assets:

```text
IF a snippet is renamed or removed -> every `{% render 'name' %}` breaks.
IF an asset URL is added but the file does not exist -> browser 404 and feature may not run.
IF a shared asset breaks -> all components importing/using it are affected.
```

## Build Sequence

Use this order unless the existing code requires a different one:

1. Reference existing pattern files.
2. Define schema/settings and block types.
3. Add or update Liquid structure.
4. Add or update block/snippet files.
5. Add or update CSS scoped to section/component.
6. Add or update JS module/custom element.
7. Wire asset loading only where needed.
8. Update templates or section groups if the feature must appear by default.
9. Add locale keys.
10. Run validation and usage searches.

## Implementation Rules

- Preserve existing merchant data unless the user explicitly wants a reset.
- Prefer existing snippets and blocks over duplicating UI.
- Add abstractions only when they reduce real repeated complexity.
- Keep Liquid readable: assign derived values in `{% liquid %}` blocks, then render markup.
- Keep custom CSS local unless the design token belongs in global settings.
- Use existing class naming and CSS custom properties where possible.
- Do not guess DOM selectors for complex header/menu/search behavior. Inspect the relevant Liquid output and JS expectations.

## Verification Checklist

Run as much as the environment allows:

- Liquid render references point to existing `snippets/*.liquid`.
- `asset_url` references point to existing `assets/*`.
- JSON is valid for templates, section groups, config, and locales.
- Schema has no trailing commas and valid setting types.
- Range settings pass `(max - min) / step <= 100`.
- Range defaults satisfy `default = min + n * step`.
- Block `type` names match rendered block cases and block files.
- Block root elements include `{{ block.shopify_attributes }}` where customizer selection matters.
- CSS is scoped and responsive.
- JS is loaded as module and does not leak global state.
- Custom elements are defined once with `customElements.get` guard when appropriate.
- Images have `alt`, dimensions where possible, lazy loading unless above-the-fold.
- Videos using autoplay are muted.
- User-facing strings use locale keys where the theme pattern expects translations.
- No console errors or layout overlap when browser testing is possible.

## Debugging Workflow

1. Reproduce or identify the failing surface.
2. Search exact error text, missing snippet name, missing asset name, or schema setting ID.
3. Trace from layout/template/section to block/snippet/asset.
4. Inspect recent changes without reverting unrelated user work.
5. Fix the smallest broken dependency.
6. Verify affected upstream and downstream files.

## Code Review Workflow

Lead with findings, ordered by severity. Include exact file and line references. Prioritize:

- Runtime crashes or missing file references.
- Broken customizer schema.
- Lost merchant data.
- Cart/checkout/product selection regressions.
- Accessibility blockers.
- Performance regressions on global files.
- Missing tests or missing manual verification.

If no issues are found, say so and mention residual test gaps.

## Teaching Workflow

When the user asks to learn, explain in this order:

1. Big picture.
2. Real local file example.
3. Connection diagram or file map.
4. IF/THEN impact.
5. Common mistakes.
6. Small practice task or next check.

Keep examples tied to the local Horizon source.
