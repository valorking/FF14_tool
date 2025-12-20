export function initTheme() {
  const switchEl = document.getElementById('themeSwitch');
  switchEl.addEventListener('change', (e)=>{
    document.documentElement.setAttribute('data-theme', e.target.checked ? 'dark' : 'light');
  });
}
