// Load papers dynamically from configuration
(function() {
    'use strict';
  
    let currentSortOrder = 'year-desc'; // Default sort order
  
    function normalizeTag(tag) {
      return String(tag || '').trim().toLowerCase().replace(/\s+/g, ' ');
    }
  
    function escapeHtml(value) {
      return String(value || '')
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;');
    }

    function getPaperHref(paper) {
      return paper.detailUrl || paper.url || '#';
    }

    function createPaperCard(paper) {
      const card = document.createElement('a');
      const href = getPaperHref(paper);
      const isExternal = /^https?:\/\//i.test(href);
      card.href = href;
      if (isExternal) {
        card.target = '_blank';
        card.rel = 'noopener';
      }
      card.className = 'pub-card reveal';
      
      // 添加 title 属性，悬停时显示链接地址
      if (href && href !== '#') {
        card.title = href;
      }
  
      const tags = Array.isArray(paper.tags) ? paper.tags : [];
      const normTags = tags.map(normalizeTag).filter(Boolean);
      card.setAttribute('data-tags', normTags.join(','));
      card.setAttribute(
        'data-search',
        [paper.title, paper.venue, paper.year, tags.join(' ')]
          .filter(Boolean)
          .join(' ')
          .toLowerCase()
      );

      const title = paper.title || 'Untitled paper';
      const venue = paper.venue || '';
      const imageUrl = paper.imageUrl || '';
      const thumb = imageUrl
        ? `<img src="${escapeHtml(imageUrl)}" alt="${escapeHtml(title)} thumbnail" loading="lazy">`
        : `<span>${escapeHtml(String(paper.year || '').slice(-2) || 'AI')}</span>`;
  
      card.innerHTML = `
        <div class="pub-thumb${imageUrl ? ' has-image' : ''}">${thumb}</div>
        <div class="pub-info">
          <div class="pub-meta">
            <span class="pub-venue">${escapeHtml(venue)}</span>
          </div>
          <div class="pub-title">${escapeHtml(title)}</div>
          <div class="pub-tags">
            ${tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}
          </div>
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
      if (Array.isArray(PAPERS_CONFIG)) {
        return [...PAPERS_CONFIG];
      }

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

    function groupPapersByYear(papers) {
      const groups = new Map();
      for (const paper of papers) {
        const year = String(paper.year || 'Other');
        if (!groups.has(year)) groups.set(year, []);
        groups.get(year).push(paper);
      }
      return Array.from(groups.entries());
    }
  
    function loadPapers() {
      const waterfall = document.querySelector('.pub-waterfall');
      if (!waterfall) return;
  
      waterfall.innerHTML = '';
  
      const allPapers = flattenAllPapers();
      const sortedPapers = sortPapers(allPapers, currentSortOrder);

      for (const [year, papers] of groupPapersByYear(sortedPapers)) {
        const group = document.createElement('section');
        group.className = 'pub-year-group';
        group.setAttribute('data-year-group', year);

        const heading = document.createElement('h3');
        heading.className = 'pub-year-title';
        heading.textContent = year;

        const grid = document.createElement('div');
        grid.className = 'pub-grid';
        grid.setAttribute('aria-label', `${year} papers`);

        for (const paper of papers) {
          grid.appendChild(createPaperCard(paper));
        }

        group.appendChild(heading);
        group.appendChild(grid);
        waterfall.appendChild(group);
      }
  
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
