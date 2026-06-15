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

    function getPaperTarget(href) {
      return /^https?:\/\//i.test(href) ? '_blank' : '_self';
    }

    function createActionLink(label, href, className) {
      if (!href) return '';
      const target = getPaperTarget(href);
      const rel = target === '_blank' ? ' rel="noopener"' : '';
      return `<a class="pub-action ${className}" href="${escapeHtml(href)}" target="${target}"${rel}>${escapeHtml(label)}</a>`;
    }

    function createPaperCard(paper, isSelected) {
      const card = document.createElement('article');
      const href = getPaperHref(paper);
      card.className = `pub-card reveal${isSelected ? ' pub-card-selected' : ''}`;
      card.tabIndex = 0;
      card.setAttribute('role', 'link');
      
      // 添加 title 属性，悬停时显示链接地址
      if (href && href !== '#') {
        card.title = href;
      }
  
      const tags = Array.isArray(paper.tags) ? paper.tags : [];
      const normTags = tags.map(normalizeTag).filter(Boolean);
      card.setAttribute('data-tags', normTags.join(','));
      card.setAttribute(
        'data-search',
        [paper.title, paper.authors, paper.description, paper.venue, paper.year, tags.join(' ')]
          .filter(Boolean)
          .join(' ')
          .toLowerCase()
      );

      const title = paper.title || 'Untitled paper';
      const venue = paper.venue || '';
      const authors = paper.authors || '';
      const description = paper.description || paper.abstract || '';
      const imageUrl = paper.imageUrl || '';
      const pdfUrl = paper.pdfUrl || paper.url || '';
      const actions = [
        createActionLink('Details', paper.detailUrl, 'pub-action-detail'),
        createActionLink('PDF', pdfUrl, 'pub-action-pdf'),
        createActionLink('Code', paper.codeUrl, 'pub-action-code')
      ].filter(Boolean).join('');
      const thumb = imageUrl
        ? `<img src="${escapeHtml(imageUrl)}" alt="${escapeHtml(title)} thumbnail" loading="lazy">`
        : `<span>${escapeHtml(String(paper.year || '').slice(-2) || 'AI')}</span>`;
  
      card.innerHTML = `
        <div class="pub-thumb${imageUrl ? ' has-image' : ''}">${thumb}</div>
        <div class="pub-info">
          <div class="pub-title">${escapeHtml(title)}</div>
          ${authors && !isSelected ? `<div class="pub-authors">${escapeHtml(authors)}</div>` : ''}
          ${venue ? `<div class="pub-venue">${escapeHtml(venue)}</div>` : ''}
          ${description ? `<div class="pub-description">${escapeHtml(description)}</div>` : ''}
          <div class="pub-tags">
            ${tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}
          </div>
          ${actions ? `<div class="pub-card-actions">${actions}</div>` : ''}
        </div>
      `;

      card.addEventListener('click', (event) => {
        if (event.target.closest('a')) return;
        if (!href || href === '#') return;
        if (getPaperTarget(href) === '_blank') {
          window.open(href, '_blank', 'noopener');
        } else {
          window.location.href = href;
        }
      });

      card.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        if (!href || href === '#') return;
        event.preventDefault();
        if (getPaperTarget(href) === '_blank') {
          window.open(href, '_blank', 'noopener');
        } else {
          window.location.href = href;
        }
      });

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
  
    function renderPaperList(waterfall, papers) {
      if (!waterfall) return;
  
      waterfall.innerHTML = '';
      const isSelected = waterfall.getAttribute('data-paper-list') === 'selected';
  
      for (const [year, items] of groupPapersByYear(papers)) {
        const group = document.createElement('section');
        group.className = 'pub-year-group';
        group.setAttribute('data-year-group', year);

        const heading = document.createElement('h3');
        heading.className = 'pub-year-title';
        heading.textContent = year;

        const grid = document.createElement('div');
        grid.className = 'pub-grid';
        grid.setAttribute('aria-label', `${year} papers`);

        for (const paper of items) {
          grid.appendChild(createPaperCard(paper, isSelected));
        }

        group.appendChild(heading);
        group.appendChild(grid);
        waterfall.appendChild(group);
      }
    }

    function getSelectedPapers(sortedPapers) {
      const explicitlySelected = sortedPapers.filter(paper => paper && paper.selected);
      return explicitlySelected;
    }

    function loadPapers() {
      const allWaterfall = document.querySelector('[data-paper-list="all"]') || document.querySelector('.pub-waterfall');
      const selectedWaterfall = document.querySelector('[data-paper-list="selected"]');
      if (!allWaterfall && !selectedWaterfall) return;

      const allPapers = flattenAllPapers();
      const sortedPapers = sortPapers(allPapers, currentSortOrder);

      renderPaperList(selectedWaterfall, getSelectedPapers(sortedPapers));
      renderPaperList(allWaterfall, sortedPapers);
  
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
