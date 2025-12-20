import { showToast } from '../core/toast.js';
import { macros } from '../data/ishgard-macros.js';

function detectCategory(macro) {
  // 檢查 tags 中是否有數字等級，若有且 >=63 則歸類為 '63+'，否則 '1-63'
  if (!macro.tags || !Array.isArray(macro.tags)) return '1-63';
  for (const t of macro.tags) {
    const m = t.match(/(\d{1,3})/);
    if (m) {
      const lvl = parseInt(m[1], 10);
      if (lvl >= 63) return '63+';
      return '1-63';
    }
  }
  return '1-63';
}

export function renderMacros(containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';

  // 建立分頁按鈕
  const tabs = document.createElement('div');
  tabs.className = 'ishgard-tabs';
  tabs.innerHTML = `
    <button class="tab-btn active" data-cat="1-63">等級 1-63</button>
    <button class="tab-btn" data-cat="63+">等級 63+</button>
  `;
  container.appendChild(tabs);

  const list1 = document.createElement('div');
  list1.id = 'macros-1-63';
  list1.className = 'macros-list';

  const list2 = document.createElement('div');
  list2.id = 'macros-63+';
  list2.className = 'macros-list hidden';

  // 依類別渲染巨集（優先使用資料檔的 category，若無則回退至 tags 偵測）
  macros.forEach(macro => {
    const cat = macro.category ? macro.category : detectCategory(macro);
    const block = document.createElement('div');
    block.className = 'block';
    const tagsHtml = (macro.tags || []).map(tag => `<span class="tag">${tag}</span>`).join('');
    block.innerHTML = `
      <div class="header">
        <div>
          <div class="title">${macro.title}</div>
          <div class="tags">${tagsHtml}</div>
          <div class="req">${macro.req || ''}</div>
        </div>
        <button class="copy-btn" onclick="copyMacro('${macro.id}','${macro.title}')">一鍵複製</button>
      </div>
      <pre id="${macro.id}">${macro.code}</pre>
    `;
    if (cat === '63+') list2.appendChild(block);
    else list1.appendChild(block);
  });

  container.appendChild(list1);
  container.appendChild(list2);

  // 分頁切換
  tabs.addEventListener('click', (e) => {
    if (!e.target.matches('.tab-btn')) return;
    const btns = tabs.querySelectorAll('.tab-btn');
    btns.forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    const cat = e.target.getAttribute('data-cat');
    if (cat === '63+') {
      list1.classList.add('hidden');
      list2.classList.remove('hidden');
    } else {
      list1.classList.remove('hidden');
      list2.classList.add('hidden');
    }
  });
}

export function copyMacro(id, name) {
  const text = document.getElementById(id).textContent.trim();
  navigator.clipboard.writeText(text).then(() => {
    showToast(`${name} 已複製`);
  });
}
