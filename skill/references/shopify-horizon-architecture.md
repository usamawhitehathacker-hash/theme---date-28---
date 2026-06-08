# Shopify Horizon Architecture

## Local Theme Facts

- Theme root: `horizon-source/new1-premium-announcement-bar`
- Theme identity: `config/settings_schema.json` declares Horizon `theme_version` `3.5.1`.
- Current source inventory: 419 files across Shopify theme folders.
- Folder counts from local source:
  - `layout/`: 2
  - `templates/`: 13
  - `sections/`: 42
  - `blocks/`: 93
  - `snippets/`: 103
  - `assets/`: 113
  - `config/`: 2
  - `locales/`: 51

Use `references/horizon-source-map.md` for exact file names and generated dependency scans.

## Render Flow

```text
Browser request
  -> layout/theme.liquid
     -> snippets/meta-tags.liquid
     -> snippets/stylesheets.liquid
     -> snippets/fonts.liquid
     -> snippets/scripts.liquid
     -> snippets/theme-styles-variables.liquid
     -> snippets/color-schemes.liquid
     -> content_for_header
     -> sections/header-group.json
        -> sections/custom.liquid
        -> sections/header-announcements.liquid
        -> sections/header.liquid
     -> main#MainContent
        -> content_for_layout
           -> templates/[page].json
              -> sections/[section].liquid
                 -> blocks/[block].liquid
                    -> snippets/[helper].liquid
     -> sections/footer-group.json
     -> snippets/search-modal.liquid
     -> snippets/quick-add-modal.liquid when enabled
```

## Folder Roles

| Folder | Role | Risk profile |
|---|---|---|
| `layout/` | Global page wrappers and header/footer mounting | Very high; every page can be affected |
| `templates/` | JSON page composition and section order | Medium to high; affects page-level layout |
| `sections/` | Major visual components and section groups | Medium to high; customizer-facing |
| `blocks/` | Horizon block files used by sections and customizer | Medium; block IDs/types must match schema |
| `snippets/` | Reusable Liquid helpers and UI primitives | High when shared across product grids, cards, media, buttons |
| `assets/` | CSS, JS modules, SVG icons, component logic | High for interactivity and performance |
| `config/` | Theme settings schema and saved merchant data | Very high; schema errors can break customizer |
| `locales/` | Storefront and schema translations | Medium; missing keys show raw translation keys |

## Horizon-Specific Design

Horizon uses Shopify 2.0 JSON templates, section groups, standalone block files, reusable snippets, import maps, ES modules, and Web Components. Existing JavaScript imports from aliases defined in `snippets/scripts.liquid`, especially `@theme/component`, `@theme/utilities`, `@theme/events`, `@theme/dialog`, `@theme/variant-picker`, and related modules.

Blocks are a major Horizon pattern:

- Files beginning with `_` are usually private/internal block files for specific parent sections.
- Public block files without `_` can be exposed more broadly in customizer contexts.
- `content_for 'block'` is used by some sections to render static or typed blocks.
- App blocks must be handled where supported with `{% render block %}` or equivalent existing pattern.

## Current Header System

`layout/theme.liquid` mounts:

```liquid
<div id="header-group">
  {% sections 'header-group' %}
</div>
```

The local `sections/header-group.json` currently includes:

- `custom_NTWnLC`: type `custom`, named `Premium Announcement Bar`, with three `message` blocks and SAB settings.
- `header_announcements_9jGBFp`: type `header-announcements`, disabled.
- `header_section`: type `header`, with static `_header-logo` and `_header-menu` blocks.

This means announcement-bar work should usually inspect `sections/custom.liquid`, `sections/header-group.json`, `assets/announcement-bar.js`, and locale keys before changing header layout behavior.

## High-Risk Shared Files

Treat these as shared infrastructure and search usages before editing:

- `layout/theme.liquid`
- `sections/header-group.json`
- `sections/footer-group.json`
- `sections/_blocks.liquid`
- `snippets/product-card.liquid`
- `snippets/image.liquid`
- `snippets/button.liquid`
- `snippets/price.liquid`
- `snippets/product-grid.liquid`
- `snippets/search-modal.liquid`
- `snippets/scripts.liquid`
- `snippets/stylesheets.liquid`
- `assets/product-form.js`
- `assets/variant-picker.js`
- `assets/facets.js`
- `assets/component-cart-items.js`
- `config/settings_schema.json`
- `config/settings_data.json`
- `locales/en.default.json`
- `locales/en.default.schema.json`

## Mental Model

Shopify theme work is dependency work. A section is not just a `.liquid` file; it is a customizer schema, blocks, snippets, assets, settings data, translations, and frontend behavior. A senior implementation starts by identifying all connections, then makes the smallest coherent change.
