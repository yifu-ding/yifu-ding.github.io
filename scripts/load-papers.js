// Load papers dynamically from configuration
(function() {
    'use strict';
  
    let currentSortOrder = 'year-desc'; // Default sort order
  
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
  
    function sortPapers(papers, sortOrder) {
      const sorted = [...papers];
      if (sortOrder === 'year-desc') {
        sorted.sort((a, b) => {
          const ay = Number(a && a.year) || 0;
          const by = Number(b && b.year) || 0;
          return by - ay;
        });
      } else if (sortOrder === 'year-asc') {
        sorted.sort((a, b) => {
          const ay = Number(a && a.year) || 0;
          const by = Number(b && b.year) || 0;
          return ay - by;
        });
      }
      return sorted;
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
      const sortedPapers = sortPapers(allPapers, currentSortOrder);
  
      for (const paper of sortedPapers) {
        grid.appendChild(createPaperCard(paper));
      }
  
      waterfall.appendChild(grid);
  
      setTimeout(initRevealAnimation, 50);
  
      document.dispatchEvent(new CustomEvent('papers:rendered'));
    }
  
    function initSortButtons() {
      const sortButtons = document.querySelectorAll('.sort-btn');
      sortButtons.forEach(btn => {
        btn.addEventListener('click', function() {
          const sortOrder = this.getAttribute('data-sort');
          if (sortOrder === currentSortOrder) return;
          
          currentSortOrder = sortOrder;
          
          // Update button states
          sortButtons.forEach(b => {
            b.classList.remove('is-active');
            b.setAttribute('aria-pressed', 'false');
          });
          this.classList.add('is-active');
          this.setAttribute('aria-pressed', 'true');
          
          // Reload papers with new sort order
          loadPapers();
          
          // Note: Filters will be re-applied automatically via papers:rendered event
        });
      });
    }
    
    // Export sort function for external use
    window.paperSorter = {
      getSortOrder: () => currentSortOrder,
      setSortOrder: (order) => {
        if (order !== 'year-desc' && order !== 'year-asc') return;
        currentSortOrder = order;
        loadPapers();
      }
    };
  
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        loadPapers();
        initSortButtons();
      });
    } else {
      loadPapers();
      initSortButtons();
    }
  })();
  