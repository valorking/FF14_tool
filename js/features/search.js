import { showToast } from '../core/toast.js';

let converter;

export function initSearch() {
  if (typeof OpenCC !== 'undefined') {
    converter = OpenCC.Converter({ from: 'tw', to: 'cn' });
  }
}

export function quickSearch(type) {
  const inputId = type === '物品' ? 'itemInput' : 'questInput';
  const text = document.getElementById(inputId).value.trim();
  if (!text) {
    showToast('請輸入搜尋內容');
    return;
  }

  const converted = converter ? converter(text) : text;
  window.open(
    `https://ff14.huijiwiki.com/wiki/${type}:${encodeURIComponent(converted)}`,
    '_blank'
  );
}
