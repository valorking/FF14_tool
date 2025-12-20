import { initTheme } from './core/theme.js';
import { renderMacros } from './features/ishgard.js';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderMacros('macros-container');
});

// 暴露到全局作用域供 HTML onclick 使用
window.toggleTheme = function(el) {
  document.documentElement.setAttribute(
    'data-theme',
    el.checked ? 'dark' : 'light'
  );
};

window.copyMacro = async function(id, name) {
  const { showToast } = await import('./core/toast.js');
  const text = document.getElementById(id).textContent.trim();
  navigator.clipboard.writeText(text).then(() => {
    showToast(`${name} 已複製`);
  });
};
