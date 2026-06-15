(function() {
  'use strict';

  function escapeHtml(value) {
    return String(value || '')
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;');
  }

  function createWorkshopCard(item, language) {
    const card = document.createElement('a');
    card.className = 'workshop-card';
    card.href = item.url || '#';
    if (/^https?:\/\//i.test(card.href)) {
      card.target = '_blank';
      card.rel = 'noopener';
    }

    const imageUrl = item.imageUrl || '';
    const thumb = imageUrl
      ? `<img src="${escapeHtml(imageUrl)}" alt="${escapeHtml(item.workshop)} thumbnail" loading="lazy">`
      : `<span>${escapeHtml(item.workshop || 'WS')}</span>`;

    card.innerHTML = `
      <div class="workshop-card-thumb${imageUrl ? ' has-image' : ''}">${thumb}</div>
      <div class="workshop-card-body">
        <p class="workshop-card-kicker">${escapeHtml(item.workshop)} · ${escapeHtml(item.venue)}</p>
        <h2 class="workshop-card-title">${escapeHtml(language === 'zh' ? item.titleZh || item.title : item.title)}</h2>
        <p class="workshop-card-meta">${escapeHtml(language === 'zh' ? item.timeZh || item.time : item.time)} · ${escapeHtml(language === 'zh' ? item.locationZh || item.location : item.location)}</p>
      </div>
    `;

    return card;
  }

  function renderWorkshops() {
    const root = document.querySelector('[data-workshop-cards]');
    if (!root || !Array.isArray(WORKSHOPS_CONFIG)) return;
    const language = localStorage.getItem('language') || 'en';

    const seriesConfig = [
      { key: 'practical', title: '🛠️ Practical-DL Series', titleZh: '🛠️ Practical-DL 系列' },
      { key: 'glow', title: '🌍 GLOW Series', titleZh: '🌍 GLOW 系列' },
      { key: 'eclr', title: '⚡ ECLR / EMCLR Series', titleZh: '⚡ ECLR / EMCLR 系列' }
    ];

    root.innerHTML = '';
    seriesConfig.forEach(series => {
      const items = WORKSHOPS_CONFIG.filter(item => item.series === series.key);
      if (items.length === 0) return;

      const section = document.createElement('section');
      section.className = 'workshop-series-section';

      const heading = document.createElement('h2');
      heading.className = 'workshop-series-title';
      heading.textContent = language === 'zh' ? series.titleZh : series.title;

      const grid = document.createElement('div');
      grid.className = 'workshop-card-grid';

      items.forEach(item => {
        grid.appendChild(createWorkshopCard(item, language));
      });

      section.appendChild(heading);
      section.appendChild(grid);
      root.appendChild(section);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderWorkshops);
  } else {
    renderWorkshops();
  }
  window.addEventListener('languageChanged', renderWorkshops);
})();
