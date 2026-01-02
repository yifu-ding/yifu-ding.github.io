// Load papers dynamically from configuration
(function() {
    'use strict';
  
    function normalizeTag(tag) {
      return String(tag || '').trim().toLowerCase().replace(/\s+/g, ' ');
    }
  
    function createPaperCard(paper) {
      const card = document.createElement('a');
      card.href = paper.url;
      card.target = '_blank';
      card.rel = 'noopener';
      card.className = 'pub-card reveal';
      
      // 添加 title 属性，悬停时显示链接地址
      if (paper.url) {
        card.title = paper.url;
      }
  
      const tags = Array.isArray(paper.tags) ? paper.tags : [];
      const normTags = tags.map(normalizeTag).filter(Boolean);
      card.setAttribute('data-tags', normTags.join(','));
  
      card.innerHTML = `
        <div class="pub-meta">
          <span class="pub-venue">${paper.venue}</span>
        </div>
        <div class="pub-title">${paper.title}</div>
        <div class="pub-tags">
          ${tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
      `;
      return card;
    }
  
    function initRevealAnimation() {
      const reveals = document.querySelectorAll('.reveal');
      if (reveals.length === 0) return;
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
  
      reveals.forEach(el => observer.observe(el));
    }
  
    function flattenAllPapers() {
      const all = [];
      Object.keys(PAPERS_CONFIG).forEach(categoryKey => {
        const category = PAPERS_CONFIG[categoryKey];
        const papers = (category && Array.isArray(category.papers)) ? category.papers : [];
        for (const p of papers) all.push(p);
      });
      return all;
    }
  
    function loadPapers() {
      const waterfall = document.querySelector('.pub-waterfall');
      if (!waterfall) return;
  
      waterfall.innerHTML = '';
  
      // One unified grid, no category sections
      const grid = document.createElement('div');
      grid.className = 'pub-grid';
      grid.setAttribute('aria-label', 'All papers');
  
      const allPapers = flattenAllPapers();
  
      // Optional: sort by year desc if you have paper.year (otherwise keeps stable order)
      allPapers.sort((a, b) => {
        const ay = Number(a && a.year) || 0;
        const by = Number(b && b.year) || 0;
        return by - ay;
      });
  
      for (const paper of allPapers) {
        grid.appendChild(createPaperCard(paper));
      }
  
      waterfall.appendChild(grid);
  
      setTimeout(initRevealAnimation, 50);
  
      document.dispatchEvent(new CustomEvent('papers:rendered'));
    }
  
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', loadPapers);
    } else {
      loadPapers();
    }
  })();
  