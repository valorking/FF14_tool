import { showToast } from '../core/toast.js';
import { macros } from '../data/ishgard-macros.js';

function getNumericLevel(macro) {
  // 優先使用 minLevel，再用 maxLevel，再解析 tags 中的數字，最後回退為 1
  if (typeof macro.minLevel === 'number' && !isNaN(macro.minLevel)) return macro.minLevel;
  if (typeof macro.maxLevel === 'number' && !isNaN(macro.maxLevel)) return macro.maxLevel;
  if (macro.tags && Array.isArray(macro.tags)) {
    for (const t of macro.tags) {
      const m = t.match(/(\d{1,3})/);
      if (m) return parseInt(m[1], 10);
    }
  }
  // 若 title 中包含等級範圍也嘗試解析
  if (macro.title) {
    const mt = macro.title.match(/(\d{1,3})/);
    if (mt) return parseInt(mt[1], 10);
  }
  return 1;
}

function mapLevelToCategory(level) {
  if (level <= 30) return '1-30';
  if (level <= 60) return '30-60';
  if (level <= 90) return '60-90';
  return '90+';
}

export function renderMacros(containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';

  // 建立分頁按鈕（四個等級區間）
  const tabs = document.createElement('div');
  tabs.className = 'ishgard-tabs';
  tabs.innerHTML = `
    <button class="tab-btn active" data-cat="1-30">等級 1-30</button>
    <button class="tab-btn" data-cat="30-60">等級 30-60</button>
    <button class="tab-btn" data-cat="60-90">等級 60-90</button>
    <button class="tab-btn" data-cat="90+">等級 90+</button>
  `;
  container.appendChild(tabs);

  const lists = {
    '1-30': document.createElement('div'),
    '30-60': document.createElement('div'),
    '60-90': document.createElement('div'),
    '90+': document.createElement('div')
  };
  Object.keys(lists).forEach(k => {
    lists[k].id = `macros-${k}`;
    lists[k].className = k === '1-30' ? 'macros-list' : 'macros-list hidden';
  });

  // 依類別渲染巨集（優先使用資料檔的 category；若資料檔的 category 非預期則依 level 重新映射）
  macros.forEach(macro => {
    let cat = '1-30';
    if (macro.category && ['1-30','30-60','60-90','90+'].includes(macro.category)) {
      cat = macro.category;
    } else if (macro.category && typeof macro.category === 'string') {
      // 若舊有 category（例如 '1-63'）則用數字映射到新區間
      const lvl = getNumericLevel(macro);
      cat = mapLevelToCategory(lvl);
    } else {
      const lvl = getNumericLevel(macro);
      cat = mapLevelToCategory(lvl);
    }
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
    `;
    const preEl = document.createElement('pre');
    preEl.id = macro.id;
    preEl.textContent = macro.code;
    block.appendChild(preEl);
    if (lists[cat]) lists[cat].appendChild(block);
  });

  Object.keys(lists).forEach(k => container.appendChild(lists[k]));

  // 分頁切換
  tabs.addEventListener('click', (e) => {
    if (!e.target.matches('.tab-btn')) return;
    const btns = tabs.querySelectorAll('.tab-btn');
    btns.forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    const cat = e.target.getAttribute('data-cat');
    Object.keys(lists).forEach(k => {
      if (k === cat) lists[k].classList.remove('hidden');
      else lists[k].classList.add('hidden');
    });
  });
}

export function copyMacro(id, name) {
  const text = document.getElementById(id).textContent.trim();
  navigator.clipboard.writeText(text).then(() => {
    showToast(`${name} 已複製`);
  });
}
