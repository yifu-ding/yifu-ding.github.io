// Load papers dynamically from configuration
(function() {
    'use strict';
  
    let currentSortOrder = 'year-desc'; // Default sort order
  
    function normalizeTag(tag) {
      return String(tag || '').trim().toLowerCase().replace(/\s+/g, ' ');
    }

    function normalizeTitle(title) {
      return String(title || '').trim().toLowerCase().replace(/\s+/g, ' ');
    }

    function slugifyTitle(title) {
      return normalizeTitle(title)
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
    }

    function getCurrentLang() {
      return localStorage.getItem('language') || 'en';
    }

    function getGroupTitle(group) {
      if (getCurrentLang() === 'zh' && group && group.titleZh) {
        return group.titleZh;
      }
      return group && group.title ? group.title : 'Selected Topic';
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
      const icons = {
        Details: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10.6 13.4a5 5 0 0 0 7.1 0l2.1-2.1a5 5 0 0 0-7.1-7.1l-1.2 1.2M13.4 10.6a5 5 0 0 0-7.1 0l-2.1 2.1a5 5 0 0 0 7.1 7.1l1.2-1.2"/></svg>',
        PDF: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3h7v7M21 3l-9 9M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>',
        Code: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.87c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.82a9.6 9.6 0 0 1 2.5.34c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.77c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>'
      };
      return `<a class="pub-action ${className}" href="${escapeHtml(href)}" target="${target}"${rel}>${icons[label] || ''}<span>${escapeHtml(label)}</span></a>`;
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

    function getConfiguredSelectedGroups(allPapers) {
      const groupsConfig = Array.isArray(window.SELECTED_PUBLICATION_GROUPS)
        ? window.SELECTED_PUBLICATION_GROUPS
        : [];
      if (groupsConfig.length === 0) {
        return [];
      }

      const papersByTitle = new Map();
      for (const paper of allPapers) {
        const key = normalizeTitle(paper && paper.title);
        if (key && !papersByTitle.has(key)) {
          papersByTitle.set(key, paper);
        }
      }

      return groupsConfig
        .map(group => {
          const titles = Array.isArray(group && group.papers) ? group.papers : [];
          const papers = titles
            .map(title => {
              const paper = papersByTitle.get(normalizeTitle(title));
              if (!paper) {
                console.warn('[papers] Selected publication title not found:', title);
              }
              return paper;
            })
            .filter(Boolean);

          return {
            id: group && group.id ? group.id : `selected-${slugifyTitle(group && group.title)}`,
            title: getGroupTitle(group),
            titleEn: group && group.title ? group.title : 'Selected Topic',
            titleZh: group && group.titleZh ? group.titleZh : '',
            papers
          };
        })
        .filter(group => group.papers.length > 0);
    }

    function renderSelectedPaperGroups(waterfall, groups) {
      if (!waterfall) {
        return;
      }

      waterfall.innerHTML = '';
      for (const groupConfig of groups) {
        const group = document.createElement('section');
        group.className = 'pub-year-group pub-topic-group';
        group.id = groupConfig.id;

        const heading = document.createElement('h3');
        heading.className = 'pub-year-title pub-topic-title';
        heading.textContent = groupConfig.title;

        const grid = document.createElement('div');
        grid.className = 'pub-grid';
        grid.setAttribute('aria-label', `${groupConfig.title} papers`);

        for (const paper of groupConfig.papers) {
          grid.appendChild(createPaperCard(paper, true));
        }

        group.appendChild(heading);
        group.appendChild(grid);
        waterfall.appendChild(group);
      }
    }
  
    function renderPaperList(waterfall, papers) {
      if (!waterfall) return;
  
      waterfall.innerHTML = '';
      const isSelected = waterfall.getAttribute('data-paper-list') === 'selected';

      if (isSelected) {
        const grid = document.createElement('div');
        grid.className = 'pub-grid';
        grid.setAttribute('aria-label', 'Selected publications');

        for (const paper of papers) {
          grid.appendChild(createPaperCard(paper, true));
        }

        waterfall.appendChild(grid);
        return;
      }
  
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
      const selectedGroups = getConfiguredSelectedGroups(allPapers);

      if (selectedGroups.length > 0) {
        renderSelectedPaperGroups(selectedWaterfall, selectedGroups);
      } else {
        renderPaperList(selectedWaterfall, getSelectedPapers(sortedPapers));
      }
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

    window.addEventListener('languageChanged', () => {
      loadPapers();
    });
  
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
