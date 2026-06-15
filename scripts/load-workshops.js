(function() {
  'use strict';

  function escapeHtml(value) {
    return String(value || '')
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;');
  }

  function createWorkshopCard(item) {
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
        <h2 class="workshop-card-title">${escapeHtml(item.title)}</h2>
        <p class="workshop-card-meta">${escapeHtml(item.time)} · ${escapeHtml(item.location)}</p>
      </div>
    `;

    return card;
  }

  function renderWorkshops() {
    const grid = document.querySelector('[data-workshop-cards]');
    if (!grid || !Array.isArray(WORKSHOPS_CONFIG)) return;
    grid.innerHTML = '';
    WORKSHOPS_CONFIG.forEach(item => {
      grid.appendChild(createWorkshopCard(item));
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderWorkshops);
  } else {
    renderWorkshops();
  }
})();
