import { showToast } from '../core/toast.js';

export function renderCards(containerId, tools) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  tools.forEach(tool=>{
    const card = document.createElement('div');
    card.className = 'card';
    
    // 點擊行為
    card.onclick = async () => {
      try {
        // If this is the Ishgard tool, open modal and render macros inline
        if (tool.url && tool.url.includes('ishgard-craft.html')) {
          const modal = document.getElementById('ishgardModal');
          const containerId = 'macros-modal-container';
          if (!modal) {
            window.open(tool.url, '_blank');
            showToast(`${tool.title} 已開啟`);
            return;
          }
          // dynamic import of ishgard feature
          const mod = await import('../features/ishgard.js');
          // expose copyMacro globally for onclick handlers inside rendered HTML
          window.copyMacro = mod.copyMacro;
          mod.renderMacros(containerId);
          modal.classList.add('open');
          modal.setAttribute('aria-hidden','false');

          // Setup close handlers only (replace previous handlers to avoid duplicates)
          const closeBtn = document.getElementById('modalClose');
          const escHandler = (e) => { if (e.key === 'Escape') closeModal(); };
          function closeModal() {
            modal.classList.remove('open');
            modal.setAttribute('aria-hidden','true');
            if (closeBtn) closeBtn.onclick = null;
            modal.onclick = null;
            document.removeEventListener('keydown', escHandler);
          }
          if (closeBtn) closeBtn.onclick = () => closeModal();
          modal.onclick = (e) => { if (e.target === modal) closeModal(); };
          document.addEventListener('keydown', escHandler);

          showToast(`${tool.title} 已開啟`);
        } else {
          if(tool.url) window.open(tool.url,'_blank');
          showToast(`${tool.title} 已開啟`);
        }
      } catch (err) {
        console.error(err);
        showToast('開啟失敗');
      }
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
