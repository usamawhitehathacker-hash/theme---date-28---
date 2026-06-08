# Code Patterns

## Standard Section Shape

Use existing section patterns first. A safe baseline:

```liquid
{%- liquid
  assign section_id = section.id
  assign color_scheme = section.settings.color_scheme
-%}

<div
  id="section-{{ section_id }}"
  class="section section-example color-{{ color_scheme }}"
  {{ section.shopify_attributes }}
>
  {%- for block in section.blocks -%}
    {%- case block.type -%}
      {%- when 'text' -%}
        <div class="section-example__text" {{ block.shopify_attributes }}>
          {{ block.settings.text }}
        </div>
      {%- when '@app' -%}
        {% render block %}
    {%- endcase -%}
  {%- endfor -%}
</div>

{% stylesheet %}
  .section-example {
    display: block;
  }
{% endstylesheet %}

{% schema %}
{
  "name": "t:names.example",
  "tag": "section",
  "class": "section-example",
  "settings": [
    {
      "type": "color_scheme",
      "id": "color_scheme",
      "label": "t:settings.color_scheme",
      "default": "scheme-1"
    }
  ],
  "blocks": [
    {
      "type": "text",
      "name": "t:names.text",
      "settings": [
        {
          "type": "text",
          "id": "text",
          "label": "t:settings.text",
          "default": "Example"
        }
      ]
    },
    {
      "type": "@app"
    }
  ],
  "presets": [
    {
      "name": "Example"
    }
  ]
}
{% endschema %}
```

## CSS Scoping

Prefer existing Horizon classes. For unique section CSS:

```liquid
<style>
  #shopify-section-{{ section.id }} .feature {
    display: grid;
  }
</style>
```

Do not add broad selectors like `.button`, `.product-card`, `.header`, or `.mega-menu` unless the requested change is intentionally global and all usages were checked.

## JavaScript Pattern

Horizon uses ES modules and import maps from `snippets/scripts.liquid`. Prefer this pattern:

```javascript
import { Component } from '@theme/component';

class ExampleComponent extends Component {
  connectedCallback() {
    super.connectedCallback();
    this.init();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  init() {
    // Component setup.
  }
}

if (!customElements.get('example-component')) {
  customElements.define('example-component', ExampleComponent);
}
```

Use `ref` attributes and `this.refs` when matching existing component style. Clean up event listeners and timers in `disconnectedCallback`.

## Schema Rules

Use valid Shopify setting types and existing translation patterns. Important rules:

- `range`: `(max - min) / step <= 100`.
- `range` default must be on the step grid: `default = min + (n * step)`.
- `color` settings should not be treated as blank. Use a checkbox such as `use_custom_color` when the merchant needs an optional override.
- `image_picker`, `video`, `product`, `collection`, `blog`, `article`, `page`, and menu/link settings should have graceful blank states.
- Avoid duplicate IDs inside the same settings array.
- Use `visible_if` only after checking existing theme syntax.

## Liquid Safety

- Use `{%- liquid -%}` for assignments and derived values.
- Escape user-provided text in attributes with `escape`.
- For rich text, output the rich text value directly only where HTML is expected.
- Guard optional objects: product, collection, image, video, link, block settings.
- Check existing snippets for expected parameters before rendering.

Snippet render pattern:

```liquid
{%- render 'product-card',
  product: product,
  show_price: true,
  show_swatches: false
-%}
```

## Images

Use Shopify image filters with responsive widths:

```liquid
{%- if image != blank -%}
  {{
    image
    | image_url: width: 1200
    | image_tag:
      loading: 'lazy',
      alt: image.alt | default: heading | escape,
      widths: '300, 600, 900, 1200',
      sizes: '(min-width: 990px) 50vw, 100vw'
  }}
{%- endif -%}
```

For above-the-fold hero images, consider `fetchpriority: 'high'` or eager loading only when justified.

## Translations

Storefront text usually belongs in `locales/en.default.json`; schema labels often use `locales/en.default.schema.json`.

```liquid
{{ 'products.product.add_to_cart' | t }}
```

Schema example:

```json
{
  "type": "text",
  "id": "heading",
  "label": "t:settings.heading",
  "default": "t:content.heading"
}
```

Before adding keys, check existing key namespaces with `rg -n "\"announcement_bar\"|\"products\"|\"sections\" locales`.

## Cart And Product Safety

- Do not break `assets/product-form.js`; add-to-cart depends on it.
- Do not break `assets/variant-picker.js`; wrong variant selection can cause wrong cart items.
- Quantity selectors usually rely on `snippets/quantity-selector.liquid` and `assets/component-quantity-selector.js`.
- Product cards are reused in collections, search, recommendations, and product lists.

## Accessibility

- Buttons need real `<button>` elements when triggering UI.
- Links need valid `href` when navigating.
- Icon-only controls need `aria-label`.
- Drawers, dialogs, and popovers should follow existing `dialog.js`, `floating-panel.js`, or header patterns.
- Interactive components need keyboard support and focus management.
- Announcement or countdown changes should use appropriate `aria-live` only when useful.

## Performance

- Avoid global CSS and JS for one section.
- Avoid synchronous layout-heavy JS in scroll handlers; use existing utility patterns.
- Use modulepreload or global script loading only for shared infrastructure.
- Keep autoplay/video/media behavior lazy and muted when required.
- Do not remove `widths`, `sizes`, lazy loading, or media aspect-ratio safeguards from shared media snippets.
