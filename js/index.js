let converter;

document.addEventListener('DOMContentLoaded', () => {
  if (typeof OpenCC !== 'undefined') {
    converter = OpenCC.Converter({ from: 'tw', to: 'cn' });
  }
});

function toggleTheme(el) {
  document.documentElement.setAttribute(
    'data-theme',
    el.checked ? 'dark' : 'light'
  );
}

function openLink(url) {
  window.open(url, '_blank');
}

function quickSearch(type) {
  const inputId = type === '物品' ? 'itemInput' : 'questInput';
  const text = document.getElementById(inputId).value.trim();
  if (!text) return;

  const converted = converter ? converter(text) : text;
  window.open(
    `https://ff14.huijiwiki.com/wiki/${type}:${encodeURIComponent(converted)}`,
    '_blank'
  );
}
