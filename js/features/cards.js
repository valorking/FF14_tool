import { showToast } from '../core/toast.js';

export function renderCards(containerId, tools) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  tools.forEach(tool=>{
    const card = document.createElement('div');
    card.className = 'card';
    
    // 點擊行為
    card.onclick = () => {
      if(tool.url) window.open(tool.url,'_blank');
      showToast(`${tool.title} 已開啟`);
    };
    
    // SVG Icon - 使用內聯 SVG
    card.innerHTML = `
      <svg class="icon" viewBox="0 0 24 24" fill="none" stroke-width="2">
        ${tool.icon}
      </svg>
      <div class="title">${tool.title}</div>
    `;
    
    container.appendChild(card);
  });
}
