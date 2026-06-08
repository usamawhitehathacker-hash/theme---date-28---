# Feature File Routing

Use this as a starting map, then verify exact files with `references/horizon-source-map.md` and `rg`.

## Header

| Feature | Primary files |
|---|---|
| Header group order | `sections/header-group.json`, `layout/theme.liquid` |
| Premium/custom announcement bar | `sections/custom.liquid`, `sections/header-group.json`, `assets/announcement-bar.js`, `locales/en.default.json` |
| Default announcement bar | `sections/header-announcements.liquid`, `blocks/_announcement.liquid`, `assets/announcement-bar.js` |
| Main header | `sections/header.liquid`, `blocks/_header-logo.liquid`, `blocks/_header-menu.liquid`, `snippets/header-actions.liquid`, `snippets/header-drawer.liquid`, `snippets/header-row.liquid`, `snippets/mega-menu-list.liquid`, `snippets/search.liquid`, `assets/header.js`, `assets/header-menu.js`, `assets/header-drawer.js`, `assets/header-actions.js` |
| Mega menu | `blocks/_header-menu.liquid`, `snippets/mega-menu-list.liquid`, `snippets/menu-font-styles.liquid`, `snippets/submenu-font-styles.liquid`, `assets/header-menu.js` |
| Search modal in header | `snippets/search.liquid`, `snippets/search-modal.liquid`, `sections/predictive-search.liquid`, `sections/predictive-search-empty.liquid`, `assets/predictive-search.js` |
| Cart bubble/icon | `snippets/cart-bubble.liquid`, `assets/cart-icon.js`, `snippets/header-actions.liquid` |

## Product

| Feature | Primary files |
|---|---|
| Product page main section | `templates/product.json`, `sections/product-information.liquid`, `snippets/product-information-content.liquid`, `snippets/product-media-gallery-content.liquid` |
| Media gallery | `blocks/_product-media-gallery.liquid`, `snippets/product-media.liquid`, `assets/media-gallery.js`, `assets/zoom-dialog.js`, `assets/drag-zoom-wrapper.js` |
| Product title | `blocks/product-title.liquid`, `assets/product-title-truncation.js` |
| Price | `blocks/price.liquid`, `snippets/price.liquid`, `snippets/format-price.liquid`, `assets/product-price.js` |
| Variant picker | `blocks/variant-picker.liquid`, `snippets/variant-main-picker.liquid`, `snippets/variant-swatches.liquid`, `snippets/swatch.liquid`, `assets/variant-picker.js` |
| Add to cart / buy buttons | `blocks/add-to-cart.liquid`, `blocks/buy-buttons.liquid`, `snippets/add-to-cart-button.liquid`, `snippets/buy-buttons-styles.liquid`, `assets/product-form.js` |
| Quantity | `blocks/quantity.liquid`, `snippets/quantity-selector.liquid`, `assets/component-quantity-selector.js` |
| Inventory | `blocks/product-inventory.liquid`, `assets/product-inventory.js` |
| Recommendations | `sections/product-recommendations.liquid`, `blocks/product-recommendations.liquid`, `assets/product-recommendations.js`, `snippets/product-card.liquid` |
| Product cards and grids | `snippets/product-card.liquid`, `snippets/product-grid.liquid`, `snippets/card-gallery.liquid`, `snippets/quick-add.liquid`, `assets/product-card.js`, `assets/quick-add.js`, `blocks/_product-card.liquid`, `blocks/_product-card-gallery.liquid` |

## Collection

| Feature | Primary files |
|---|---|
| Collection page | `templates/collection.json`, `sections/main-collection.liquid`, `blocks/filters.liquid`, `snippets/product-grid.liquid`, `snippets/sorting.liquid`, `snippets/pagination-controls.liquid` |
| Filtering | `blocks/filters.liquid`, `snippets/list-filter.liquid`, `snippets/price-filter.liquid`, `snippets/filter-remove-buttons.liquid`, `assets/facets.js` |
| Pagination | `snippets/pagination-controls.liquid`, `assets/paginated-list.js`, `assets/paginated-list-aspect-ratio.js` |
| Collection list page | `templates/list-collections.json`, `sections/main-collection-list.liquid`, `snippets/collection-card.liquid`, `snippets/editorial-collection-grid.liquid` |
| Collection list section | `sections/collection-list.liquid`, `blocks/_collection-card.liquid`, `blocks/_collection-card-image.liquid`, `snippets/collection-card.liquid` |
| Collection links | `sections/collection-links.liquid`, `blocks/_collection-link.liquid`, `assets/collection-links.js` |

## Cart

| Feature | Primary files |
|---|---|
| Cart page | `templates/cart.json`, `sections/main-cart.liquid`, `blocks/_cart-title.liquid`, `blocks/_cart-products.liquid`, `blocks/_cart-summary.liquid` |
| Cart items | `snippets/cart-items-component.liquid`, `snippets/cart-products.liquid`, `assets/component-cart-items.js`, `assets/component-cart-quantity-selector.js` |
| Cart summary | `snippets/cart-summary.liquid`, `blocks/_cart-summary.liquid` |
| Cart note / discount | `assets/cart-note.js`, `assets/cart-discount.js`, `assets/cart-drawer.js`, `assets/cart-icon.js` |

## Search

| Feature | Primary files |
|---|---|
| Predictive search | `sections/predictive-search.liquid`, `sections/predictive-search-empty.liquid`, `snippets/predictive-search-products-list.liquid`, `snippets/predictive-search-resource-carousel.liquid`, `snippets/predictive-search-empty-state.liquid`, `snippets/predictive-search-styles.liquid`, `assets/predictive-search.js` |
| Search page | `templates/search.json`, `sections/search-header.liquid`, `sections/search-results.liquid`, `blocks/_search-input.liquid`, `assets/search-page-input.js` |
| Resource lists | `snippets/resource-list.liquid`, `snippets/resource-card.liquid`, `snippets/resource-image.liquid`, `snippets/resource-list-carousel.liquid` |

## Footer

| Feature | Primary files |
|---|---|
| Footer group | `sections/footer-group.json`, `layout/theme.liquid` |
| Main footer | `sections/footer.liquid`, `blocks/group.liquid`, `blocks/text.liquid`, `blocks/email-signup.liquid`, `blocks/menu.liquid`, `blocks/social-links.liquid` |
| Footer utilities | `sections/footer-utilities.liquid`, `blocks/footer-copyright.liquid`, `blocks/footer-policy-list.liquid`, `blocks/payment-icons.liquid`, `blocks/_footer-social-icons.liquid` |

## Content And Media

| Feature | Primary files |
|---|---|
| Hero | `sections/hero.liquid`, `blocks/text.liquid`, `blocks/button.liquid`, `blocks/_image.liquid`, `blocks/video.liquid`, `snippets/background-media.liquid`, `snippets/overlay.liquid` |
| Slideshow | `sections/slideshow.liquid`, `blocks/_slide.liquid`, `snippets/slideshow.liquid`, `snippets/slideshow-controls.liquid`, `snippets/slideshow-arrows.liquid`, `assets/slideshow.js` |
| Layered slideshow | `sections/layered-slideshow.liquid`, `blocks/_layered-slide.liquid`, `assets/layered-slideshow.js` |
| Media with content | `sections/media-with-content.liquid`, `blocks/_content.liquid`, `blocks/_image.liquid`, `blocks/video.liquid`, `blocks/text.liquid`, `blocks/button.liquid` |
| Carousel | `sections/carousel.liquid`, `blocks/_carousel-content.liquid`, `blocks/_card.liquid`, `snippets/slideshow.liquid`, `assets/slideshow.js` |
| Marquee | `sections/marquee.liquid`, `blocks/_marquee.liquid`, `assets/marquee.js` |
| Generic section | `sections/section.liquid`, `blocks/group.liquid`, `blocks/text.liquid`, `blocks/image.liquid`, `blocks/button.liquid`, `blocks/video.liquid` |

## Global

| Feature | Primary files |
|---|---|
| CSS loading | `snippets/stylesheets.liquid`, `assets/base.css`, `assets/overflow-list.css`, `assets/template-giftcard.css` |
| JS loading/import maps | `snippets/scripts.liquid`, many `assets/*.js` |
| Fonts | `snippets/fonts.liquid`, `snippets/typography-style.liquid` |
| Color schemes | `snippets/color-schemes.liquid`, `snippets/theme-styles-variables.liquid`, `config/settings_schema.json`, `config/settings_data.json` |
| SEO/meta | `snippets/meta-tags.liquid`, locale keys |
| Theme editor support | `snippets/theme-editor.liquid`, `assets/theme-editor.js` |

## IF/THEN Impact Reference

- IF `layout/theme.liquid` changes, THEN all pages can be affected.
- IF `sections/header-group.json` changes, THEN header composition changes on all pages.
- IF `sections/footer-group.json` changes, THEN footer composition changes on all pages.
- IF `snippets/product-card.liquid` changes, THEN collection pages, search results, product lists, recommendations, and quick-add contexts can change.
- IF `snippets/image.liquid` changes, THEN many images across the site can change.
- IF `snippets/button.liquid` changes, THEN CTAs across sections can change.
- IF `sections/_blocks.liquid` changes, THEN block rendering across many sections can break.
- IF `assets/product-form.js` breaks, THEN add-to-cart can fail.
- IF `assets/variant-picker.js` breaks, THEN customers can add the wrong variant.
- IF `assets/facets.js` breaks, THEN collection filters can fail.
- IF `config/settings_schema.json` is invalid, THEN the customizer can fail to load.
- IF locale keys are missing, THEN storefront or schema text can display raw keys.
