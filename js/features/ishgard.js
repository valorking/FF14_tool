import { showToast } from '../core/toast.js';
import { macros } from '../data/ishgard-macros.js';

export function renderMacros(containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  
  macros.forEach(macro => {
    const block = document.createElement('div');
    block.className = 'block';
    
    const tagsHtml = macro.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    
    block.innerHTML = `
      <div class="header">
        <div>
          <div class="title">${macro.title}</div>
          <div class="tags">${tagsHtml}</div>
          <div class="req">${macro.req}</div>
        </div>
        <button class="copy-btn" onclick="copyMacro('${macro.id}','${macro.title}')">一鍵複製</button>
      </div>
      <pre id="${macro.id}">${macro.code}</pre>
    `;
    
    container.appendChild(block);
  });
}

export function copyMacro(id, name) {
  const text = document.getElementById(id).textContent.trim();
  navigator.clipboard.writeText(text).then(() => {
    showToast(`${name} 已複製`);
  });
}
