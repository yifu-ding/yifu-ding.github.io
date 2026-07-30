(function() {
  'use strict';

  const grid = document.querySelector('[data-project-grid]');
  const topicRow = document.querySelector('[data-project-topics]');
  const statusEl = document.querySelector('[data-project-status]');
  if (!grid || !topicRow || !statusEl) return;

  const API_URL = 'https://api.github.com/users/yifu-ding/repos?per_page=100&sort=created&direction=desc';
  const CACHE_URL = 'data/repositories.json';

  function escapeHtml(value) {
    return String(value || '')
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;');
  }

  function formatMonth(value) {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return '';
    return date.toLocaleString('en-US', { month: 'short', year: 'numeric' });
  }

  function fallbackDescription(repo) {
    return repo.description || 'Open-source repository hosted on GitHub.';
  }

  function getRepoTags(repo) {
    const tags = [];
    if (repo.language) tags.push(repo.language);
    if (repo.fork) tags.push('Fork');
    for (const topic of repo.topics || []) tags.push(topic);
    if (repo.stargazers_count > 0) tags.push(`${repo.stargazers_count} stars`);
    return Array.from(new Set(tags)).slice(0, 7);
  }

  function normalizeRepos(repos) {
    return (repos || [])
      .filter(repo => !repo.archived)
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  }

  function renderTopics(repos) {
    const counts = new Map();
    for (const repo of repos) {
      if (repo.language) counts.set(repo.language, (counts.get(repo.language) || 0) + 1);
      for (const topic of repo.topics || []) counts.set(topic, (counts.get(topic) || 0) + 1);
    }
    const topics = Array.from(counts.entries())
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .slice(0, 24)
      .map(([name]) => name);

    topicRow.innerHTML = topics
      .map(topic => `<span class="project-topic">${escapeHtml(topic)}</span>`)
      .join('');
  }

  function renderRepos(repos) {
    grid.innerHTML = repos.map(repo => {
      const tags = getRepoTags(repo);
      const created = formatMonth(repo.created_at);
      return `
        <article class="project-card">
          <div class="project-card-head">
            <h2>${escapeHtml(repo.name)}</h2>
            <time datetime="${escapeHtml(repo.created_at)}">${escapeHtml(created)}</time>
          </div>
          <p>${escapeHtml(fallbackDescription(repo))}</p>
          <div class="project-tags">
            ${tags.map((tag, index) => `<span class="project-tag${index === 0 && repo.language ? ' project-tag-language' : ''}">${escapeHtml(tag)}</span>`).join('')}
          </div>
          <a class="project-github-link" href="${escapeHtml(repo.html_url)}" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.44 5.44 0 0 0 3.5 8.55c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            <span>GitHub</span>
          </a>
        </article>
      `;
    }).join('');
  }

  function showRepos(repos, statusText) {
    const visibleRepos = normalizeRepos(repos);
    renderTopics(visibleRepos);
    renderRepos(visibleRepos);
    statusEl.textContent = statusText.replace('{count}', String(visibleRepos.length));
  }

  async function fetchLiveRepos() {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);
    try {
      const response = await fetch(API_URL, {
        headers: { Accept: 'application/vnd.github+json' },
        signal: controller.signal
      });
      if (!response.ok) throw new Error(`GitHub API ${response.status}`);
      return await response.json();
    } finally {
      clearTimeout(timeoutId);
    }
  }

  async function fetchCachedRepos() {
    const response = await fetch(CACHE_URL, { headers: { Accept: 'application/json' } });
    if (!response.ok) throw new Error(`Cache ${response.status}`);
    const payload = await response.json();
    return Array.isArray(payload) ? payload : (payload.repositories || []);
  }

  async function loadRepositories() {
    try {
      const repos = await fetchLiveRepos();
      showRepos(repos, '{count} public repositories loaded from GitHub.');
      return;
    } catch (liveError) {
      console.warn('GitHub API unavailable, falling back to local cache.', liveError);
    }

    try {
      const repos = await fetchCachedRepos();
      showRepos(repos, '{count} repositories shown from local cache (GitHub API unavailable).');
    } catch (cacheError) {
      statusEl.textContent = 'Unable to load GitHub repositories right now.';
      console.error(cacheError);
    }
  }

  loadRepositories();
})();
