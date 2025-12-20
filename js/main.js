import { initTheme } from './core/theme.js';
import { initSearch, quickSearch } from './features/search.js';
import { renderCards } from './features/cards.js';
import { tools } from './data/tools.js';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initSearch();
  renderCards('cards-container', tools);
});

// 暴露到全局作用域供 HTML onclick 使用
window.toggleTheme = function(el) {
  document.documentElement.setAttribute(
    'data-theme',
    el.checked ? 'dark' : 'light'
  );
};

window.quickSearch = quickSearch;
