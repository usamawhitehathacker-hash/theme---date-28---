import { Component } from '@theme/component';

/**
 * Mobile bottom navigation bar component.
 * Handles search and menu drawer triggers from the bottom nav.
 *
 * @typedef {Object} Refs
 * @property {HTMLButtonElement} searchBtn - Search trigger button
 * @property {HTMLButtonElement} menuBtn - Menu drawer trigger button
 *
 * @extends {Component<Refs>}
 */
class MobileBottomNav extends Component {
  connectedCallback() {
    super.connectedCallback();
  }

  /**
   * Open the search modal by finding and clicking the header search trigger
   */
  openSearch() {
    const searchTrigger = document.querySelector('.search-action button, .search-action a, predictive-search-component button');
    if (searchTrigger) {
      searchTrigger.click();
    }
  }

  /**
   * Open the mobile menu drawer by finding and triggering the header drawer
   */
  openMenu() {
    const drawerTrigger = document.querySelector('.header__drawer details summary, .header__drawer button, [data-header-drawer-type] summary');
    if (drawerTrigger) {
      drawerTrigger.click();
    }
  }
}

if (!customElements.get('mobile-bottom-nav')) {
  customElements.define('mobile-bottom-nav', MobileBottomNav);
}
