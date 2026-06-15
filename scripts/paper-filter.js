const KW_GROUPS = {
  model: new Set([
    "LLM", "Language Model", "MoE", "Transformer", "BERT", "Diffusion",
    "SAM", "Attention", "ViT", "CNN", "FSMN", "PointNet"
  ]),
  taskApplication: new Set([
    "Multimodal", "Multimodal Understanding", "Video Generation",
    "Image Generation", "Code Generation", "Reasoning", "Mathematical Reasoning",
    "Tree of Thoughts", "GLUE", "Hardware", "On-chip",
    "Action Recognition", "Detection", "Image Detection", "Deepfake",
    "Segmentation", "Regression", "Keyword Spotting", "Super-Resolution",
    "Few-shot Learning", "X-ray", "Point Clouds"
  ]),
  technique: new Set([
    "Caching", "Expert Skipping", "Knowledge Distillation", "Training-free",
    "Mid-Training", "Triton Kernel", "CUDA Kernel", "MXFP", "FPGA",
    "Quantization", "PTQ", "Binarization", "Pruning", "Acceleration",
    "Domain Adaptation", "Cross-domain", "Data-free", "De-occlusion"
  ]),
  other: new Set([
    "Benchmark", "Survey", "Workshop", "Efficient Computing"
  ])
};

function getGroupForKw(kw) {
  const kwLower = String(kw || "").trim().toLowerCase().replace(/\s+/g, " ");
  for (const [groupName, groupSet] of Object.entries(KW_GROUPS)) {
    for (const groupKw of groupSet) {
      if (groupKw.toLowerCase().replace(/\s+/g, " ") === kwLower) {
        return groupName;
      }
    }
  }
  return "other";
}


(() => {
    const root = document.getElementById("selected-work");
    if (!root) return;
  
    const kwRow = root.querySelector("#kw-row");
    const searchInput = root.querySelector("#paper-search");
    const statusEl = root.querySelector("#filter-status");
    const clearBtn = root.querySelector("#kw-clear");
    const clearFeedback = root.querySelector("#clear-feedback");
    const modeBtns = Array.from(root.querySelectorAll(".mode-btn"));
  
    if (!kwRow || !statusEl || !clearBtn || modeBtns.length === 0) return;
  
    const norm = (s) => String(s || "").trim().toLowerCase().replace(/\s+/g, " ");
  
    // Make selectors tolerant in case your generator uses different class names.
    const getCards = () => Array.from(
      root.querySelectorAll('[data-paper-list="all"] .pub-card, [data-paper-list="all"] a.pub-card, [data-paper-list="all"] .paper-card, [data-paper-list="all"] a[data-tags]')
    );
  
    const getGroups = () => Array.from(root.querySelectorAll('[data-paper-list="all"] .pub-year-group, [data-paper-list="all"] .pub-category'));

    const getAllPapersWaterfall = () => root.querySelector('[data-paper-list="all"]');

    const setFlatLayout = (enabled) => {
      const waterfall = getAllPapersWaterfall();
      if (!waterfall) return;

      const existingFlatGrid = waterfall.querySelector(':scope > .pub-filter-results');

      if (enabled) {
        const flatGrid = existingFlatGrid || document.createElement("div");
        if (!existingFlatGrid) {
          flatGrid.className = "pub-grid pub-filter-results";
          flatGrid.setAttribute("aria-label", "Filtered publications");
          waterfall.appendChild(flatGrid);
        }

        for (const group of getGroups()) {
          const year = group.getAttribute("data-year-group") || "";
          for (const card of group.querySelectorAll(".pub-card, .paper-card, a[data-tags]")) {
            card.dataset.filterYear = year;
            flatGrid.appendChild(card);
          }
          group.classList.add("is-hidden");
        }
        return;
      }

      if (!existingFlatGrid) return;

      const groupsByYear = new Map(
        getGroups().map(group => [group.getAttribute("data-year-group") || "", group])
      );

      for (const card of Array.from(existingFlatGrid.children)) {
        const group = groupsByYear.get(card.dataset.filterYear || "");
        const grid = group?.querySelector(".pub-grid");
        if (grid) grid.appendChild(card);
        delete card.dataset.filterYear;
      }

      existingFlatGrid.remove();
    };
  
    const getCardTags = (card) => {
      const ds = card.getAttribute("data-tags");
      if (ds) return ds.split(",").map(norm).filter(Boolean);
  
      // Try common tag class names
      const tagNodes = card.querySelectorAll(".tag, .pub-tag, [data-tag]");
      if (!tagNodes || tagNodes.length === 0) return [];
  
      return Array.from(tagNodes).map(n => norm(n.textContent || n.getAttribute("data-tag"))).filter(Boolean);
    };

    const getCardDisplayTags = (card) => {
      const tagNodes = card.querySelectorAll(".tag, .pub-tag, [data-tag]");
      return Array.from(tagNodes)
        .map(n => String(n.textContent || n.getAttribute("data-tag") || "").trim())
        .filter(Boolean);
    };

    const getSearchText = (card) => {
      const dataSearch = card.getAttribute("data-search");
      if (dataSearch) return norm(dataSearch);
      return norm(card.textContent || "");
    };
  
    let mode = "and";
    const selected = new Set();
    let clearFeedbackTimer;
  
    const setMode = (m) => {
      mode = m;
      for (const b of modeBtns) {
        const active = b.dataset.mode === m;
        b.classList.toggle("is-active", active);
        b.setAttribute("aria-pressed", active ? "true" : "false");
      }
      applyFilter();
    };
  
    const match = (tags, selectedArr) => {
      if (selectedArr.length === 0) return true;
      if (mode === "and") return selectedArr.every(k => tags.includes(k));
      return selectedArr.some(k => tags.includes(k));
    };

    const matchesQuery = (card, query) => {
      if (!query) return true;
      return getSearchText(card).includes(query);
    };

    const updateKeywordVisibility = (cards, selectedArr) => {
      const shouldNarrowKeywords = mode === "and" && selectedArr.length > 0;
      const availableTags = new Set();

      if (shouldNarrowKeywords) {
        for (const card of cards) {
          if (!card.classList.contains("is-hidden")) {
            for (const tag of getCardTags(card)) availableTags.add(tag);
          }
        }
      }

      for (const btn of kwRow.querySelectorAll(".kw-btn")) {
        const keyword = norm(btn.dataset.kw);
        btn.hidden = shouldNarrowKeywords
          && !selected.has(keyword)
          && !availableTags.has(keyword);
      }

      for (const group of kwRow.querySelectorAll(".kw-group")) {
        group.hidden = shouldNarrowKeywords
          && !group.querySelector(".kw-btn:not([hidden])");
      }
    };
  
    const GROUP_ORDER = ["model", "taskApplication", "technique", "other"];
const GROUP_LABEL = {
  model: "Model & Structure",
  taskApplication: "Task & Application",
  technique: "Technique",
  other: "Other"
};

const getKeywordOrder = (kw) => {
  const group = getGroupForKw(kw);
  const groupKeywords = Array.from(KW_GROUPS[group] || []);
  const index = groupKeywords.findIndex(item => norm(item) === norm(kw));
  return index === -1 ? Number.MAX_SAFE_INTEGER : index;
};

const renderKeywords = (allKeywords) => {
  kwRow.innerHTML = "";

  // bucket keywords
  const buckets = { model: [], taskApplication: [], technique: [], other: [] };
  for (const kw of allKeywords) {
    buckets[getGroupForKw(kw)].push(kw);
  }

  // Keep each group close to the research narrative rather than alphabetic order.
  for (const k of Object.keys(buckets)) {
    buckets[k].sort((a, b) => getKeywordOrder(a) - getKeywordOrder(b) || a.localeCompare(b));
  }

  // render groups
  for (const g of GROUP_ORDER) {
    if (!buckets[g].length) continue;

    const group = document.createElement("div");
    group.className = "kw-group";

    const title = document.createElement("div");
    title.className = "kw-group-title";
    title.textContent = GROUP_LABEL[g];

    const chips = document.createElement("div");
    chips.className = "kw-chips";

    for (const kw of buckets[g]) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "kw-btn";
      btn.textContent = kw;
      btn.dataset.kw = norm(kw);
      btn.setAttribute("aria-pressed", "false");

      btn.addEventListener("click", () => {
        const k = btn.dataset.kw;
        if (selected.has(k)) {
          selected.delete(k);
          btn.classList.remove("is-selected");
          btn.setAttribute("aria-pressed", "false");
        } else {
          selected.add(k);
          btn.classList.add("is-selected");
          btn.setAttribute("aria-pressed", "true");
        }
        applyFilter();
      });

      chips.appendChild(btn);
    }

    group.appendChild(title);
    group.appendChild(chips);
    kwRow.appendChild(group);
  }
};

  
    const applyFilter = () => {
      const sel = Array.from(selected);
      const query = norm(searchInput?.value || "");
      const useFlatLayout = sel.length > 0;

      setFlatLayout(useFlatLayout);

      const cards = getCards();
      const groups = getGroups();
  
      let visibleCount = 0;
  
      for (const c of cards) {
        const tags = getCardTags(c);
        const ok = match(tags, sel) && matchesQuery(c, query);
        c.classList.toggle("is-hidden", !ok);
        if (ok) visibleCount += 1;
      }

      updateKeywordVisibility(cards, sel);
  
      if (useFlatLayout) {
        for (const group of groups) group.classList.add("is-hidden");
      } else {
        for (const group of groups) {
          const anyVisible = !!group.querySelector(".pub-card:not(.is-hidden), .paper-card:not(.is-hidden), a.pub-card:not(.is-hidden)");
          group.classList.toggle("is-hidden", !anyVisible);
        }
      }
  
      if (sel.length === 0 && !query) {
        statusEl.textContent = `${visibleCount} papers`;
      } else {
        statusEl.textContent = `${visibleCount} papers`;
      }
    };
  
    const init = () => {
      // Prevent double init
      if (root.dataset.filterInited === "1") return;
  
      const cards = getCards();
      if (cards.length === 0) {
        // No cards yet, do not mark initialized, wait for next render.
        statusEl.textContent = "0 papers (no filter)";
        return;
      }
  
      const keywordMap = new Map();
      for (const tag of cards.flatMap(getCardDisplayTags)) {
        const key = norm(tag);
        if (key && !keywordMap.has(key)) keywordMap.set(key, tag);
      }
      const allKeywords = Array.from(keywordMap.values()).sort((a, b) => a.localeCompare(b));
      renderKeywords(allKeywords);
  
      for (const b of modeBtns) {
        b.addEventListener("click", () => setMode(b.dataset.mode));
      }
  
      clearBtn.addEventListener("click", () => {
        selected.clear();
        if (searchInput) searchInput.value = "";
        root.querySelectorAll(".kw-btn.is-selected").forEach(x => {
          x.classList.remove("is-selected");
          x.setAttribute("aria-pressed", "false");
        });
        applyFilter();

        if (clearFeedback) {
          window.clearTimeout(clearFeedbackTimer);
          clearFeedback.classList.remove("is-visible");
          void clearFeedback.offsetWidth;
          clearFeedback.classList.add("is-visible");
          clearFeedbackTimer = window.setTimeout(() => {
            clearFeedback.classList.remove("is-visible");
          }, 1000);
        }
      });

      if (searchInput) {
        searchInput.addEventListener("input", applyFilter);
      }
  
      setMode("and");
      applyFilter();
  
      root.dataset.filterInited = "1";
    };
  
    // Initialize after papers are rendered, then re-apply active filters after re-sorting.
    document.addEventListener("papers:rendered", () => {
      if (root.dataset.filterInited === "1") {
        applyFilter();
        return;
      }
      init();
    });
  
    // Also try once in case papers already rendered before listener registration
    window.addEventListener("load", init);
  })();
  
