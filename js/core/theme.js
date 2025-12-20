export function initTheme() {
  const switchEl = document.getElementById('themeSwitch');

  // Load saved theme from localStorage, else use document attribute or system preference
  let theme = null;
  try { theme = localStorage.getItem('theme'); } catch(e) { theme = null; }
  if (!theme) {
    theme = document.documentElement.getAttribute('data-theme') || (
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    );
  }
  document.documentElement.setAttribute('data-theme', theme);
  if (switchEl) switchEl.checked = theme === 'dark';

  // Expose a single global toggleTheme for inline handlers; it also persists the choice
  window.toggleTheme = function(elOrValue) {
    let t;
    if (elOrValue && typeof elOrValue === 'object' && 'checked' in elOrValue) t = elOrValue.checked ? 'dark' : 'light';
    else if (typeof elOrValue === 'string') t = elOrValue === 'dark' ? 'dark' : 'light';
    else t = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', t);
    try { localStorage.setItem('theme', t); } catch (e) {}
    if (switchEl) switchEl.checked = t === 'dark';
  };

  // Keep switch in sync
  if (switchEl) {
    switchEl.addEventListener('change', (e) => window.toggleTheme(e.target));
  }
}
