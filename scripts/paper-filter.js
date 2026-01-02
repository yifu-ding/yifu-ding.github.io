const KW_GROUPS = {
  model: new Set([
    "BERT", "ViT", "LLM", "MoE", "SAM", "CNN", "FSMN", "PointNet", "RetinaNet", "Fast RCNN",  "Attention", "Diffusion"
  ]),
  task: new Set([
    "Action Recognition", "Detection", "Deepfake", "Segmentation", "Regression",
    "Keyword Spotting", "Super-Resolution", "Few-shot Learning", "Reasoning", "GLUE", 
    "X-ray"
  ]),
  application: new Set([
    "Video Generation", "Point Clouds", "Visual Computing", "Multimedia", "Hardware", "On-chip",
    "Tree of Thoughts"
  ]),
  technique: new Set([
    "Quantization", "PTQ", "Binarization", 
    "Sparsification", "Knowledge Distillation",
    "Domain Adaptation", "Expert Skipping", 
    "Data-free",
    "Efficient", "Triton Kernel",
  ]), 
  other:  new Set([
      "Benchmark", "Survey", "Workshop",
    ])
};

function capitalizeKeyword(kw) {
  const str = String(kw || "").trim();
  if (!str) return str;
  
  // Known acronyms that should stay uppercase
  const acronyms = new Set(["llm", "vit", "bert", "moe", "sam", "ptq", "x-ray", "cnn", "fsmn", "glue"]);
  const kwLower = str.toLowerCase();
  
  // If it's a known acronym, return the mapped uppercase version
  if (acronyms.has(kwLower)) {
    const acronymMap = {
      "llm": "LLM", "vit": "ViT", "bert": "BERT", "moe": "MoE", 
      "sam": "SAM", "ptq": "PTQ", "x-ray": "X-Ray", "cnn": "CNN",
      "fsmn": "FSMN", "glue": "GLUE"
    };
    return acronymMap[kwLower] || str;
  }
  
  // Split by spaces and hyphens, capitalize each part, then rejoin
  return str.split(/([\s-]+)/).map((part, index) => {
    if (/[\s-]/.test(part)) return part; // Keep separators as-is
    if (part.length === 0) return part;
    // Capitalize first letter, lowercase the rest
    return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
  }).join("");
}

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
    const statusEl = root.querySelector("#filter-status");
    const clearBtn = root.querySelector("#kw-clear");
    const modeBtns = Array.from(root.querySelectorAll(".mode-btn"));
  
    if (!kwRow || !statusEl || !clearBtn || modeBtns.length === 0) return;
  
    const norm = (s) => String(s || "").trim().toLowerCase().replace(/\s+/g, " ");
  
    // Make selectors tolerant in case your generator uses different class names.
    const getCards = () => Array.from(
      root.querySelectorAll(".pub-waterfall .pub-card, .pub-waterfall a.pub-card, .pub-waterfall .paper-card, .pub-waterfall a[data-tags]")
    );
  
    const getCategories = () => Array.from(root.querySelectorAll(".pub-category"));
  
    const getCardTags = (card) => {
      const ds = card.getAttribute("data-tags");
      if (ds) return ds.split(",").map(norm).filter(Boolean);
  
      // Try common tag class names
      const tagNodes = card.querySelectorAll(".tag, .pub-tag, [data-tag]");
      if (!tagNodes || tagNodes.length === 0) return [];
  
      return Array.from(tagNodes).map(n => norm(n.textContent || n.getAttribute("data-tag"))).filter(Boolean);
    };
  
    let mode = "and";
    const selected = new Set();
  
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
  
    const GROUP_ORDER = ["model", "task", "application", "technique", "other"];
const GROUP_LABEL = {
  model: "Model & Structure",
  task: "Task",
  application: "Application",
  technique: "Technique",
  other: "Other"
};

const renderKeywords = (allKeywords) => {
  kwRow.innerHTML = "";

  // bucket keywords
  const buckets = { model: [], task: [], application: [], technique: [], other: [] };
  for (const kw of allKeywords) {
    buckets[getGroupForKw(kw)].push(kw);
  }

  // stable ordering inside each group
  for (const k of Object.keys(buckets)) {
    buckets[k].sort((a, b) => a.localeCompare(b));
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
      btn.textContent = capitalizeKeyword(kw);
      btn.dataset.kw = kw;
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
      const cards = getCards();
      const cats = getCategories();
      const sel = Array.from(selected);
  
      let visibleCount = 0;
  
      for (const c of cards) {
        const tags = getCardTags(c);
        const ok = match(tags, sel);
        c.classList.toggle("is-hidden", !ok);
        if (ok) visibleCount += 1;
      }
  
    //   for (const cat of cats) {
    //     const anyVisible = !!cat.querySelector(".pub-card:not(.is-hidden), .paper-card:not(.is-hidden), a.pub-card:not(.is-hidden)");
    //     cat.classList.toggle("is-hidden", !anyVisible);
    //   }
  
      if (sel.length === 0) {
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
  
      const allKeywords = Array.from(new Set(cards.flatMap(getCardTags))).sort((a, b) => a.localeCompare(b));
      renderKeywords(allKeywords);
  
      for (const b of modeBtns) {
        b.addEventListener("click", () => setMode(b.dataset.mode));
      }
  
      clearBtn.addEventListener("click", () => {
        selected.clear();
        root.querySelectorAll(".kw-btn.is-selected").forEach(x => {
          x.classList.remove("is-selected");
          x.setAttribute("aria-pressed", "false");
        });
        applyFilter();
      });
  
      setMode("and");
      applyFilter();
  
      root.dataset.filterInited = "1";
    };
  
    // Initialize after papers are rendered
    document.addEventListener("papers:rendered", init);
  
    // Also try once in case papers already rendered before listener registration
    window.addEventListener("load", init);
  })();
  

  // (() => {
  //   const root = document.getElementById("selected-work");
  //   if (!root) return;
  
  //   const kwRow = root.querySelector("#kw-row");
  //   const statusEl = root.querySelector("#filter-status");
  //   const clearBtn = root.querySelector("#kw-clear");
  
  //   const modeBtns = Array.from(root.querySelectorAll(".mode-btn"));
  //   const cards = Array.from(root.querySelectorAll(".pub-card"));
  //   const categories = Array.from(root.querySelectorAll(".pub-category"));
  
  //   const norm = (s) => String(s || "").trim().toLowerCase().replace(/\s+/g, " ");
  //   const getCardTags = (card) => {
  //     const ds = card.getAttribute("data-tags");
  //     if (ds) {
  //       return ds.split(",").map(norm).filter(Boolean);
  //     }
  //     return Array.from(card.querySelectorAll(".tag")).map(t => norm(t.textContent)).filter(Boolean);
  //   };
  
  //   // Precompute tags per card
  //   const cardTagsMap = new Map();
  //   for (const c of cards) cardTagsMap.set(c, getCardTags(c));
  
  //   // Collect unique keywords
  //   const allKeywords = Array.from(
  //     new Set(cards.flatMap(c => cardTagsMap.get(c) || []))
  //   ).sort((a, b) => a.localeCompare(b));
  
  //   // State
  //   let mode = "and"; // default
  //   const selected = new Set();
  
  //   const renderKeywords = () => {
  //     kwRow.innerHTML = "";
  //     for (const kw of allKeywords) {
  //       const btn = document.createElement("button");
  //       btn.type = "button";
  //       btn.className = "kw-btn";
  //       btn.textContent = kw;
  //       btn.dataset.kw = kw;
  //       btn.setAttribute("aria-pressed", "false");
  //       btn.addEventListener("click", () => {
  //         const k = btn.dataset.kw;
  //         if (selected.has(k)) {
  //           selected.delete(k);
  //           btn.classList.remove("is-selected");
  //           btn.setAttribute("aria-pressed", "false");
  //         } else {
  //           selected.add(k);
  //           btn.classList.add("is-selected");
  //           btn.setAttribute("aria-pressed", "true");
  //         }
  //         applyFilter();
  //       });
  //       kwRow.appendChild(btn);
  //     }
  //   };
  
  //   const setMode = (m) => {
  //     mode = m;
  //     for (const b of modeBtns) {
  //       const active = b.dataset.mode === m;
  //       b.classList.toggle("is-active", active);
  //       b.setAttribute("aria-pressed", active ? "true" : "false");
  //     }
  //     applyFilter();
  //   };
  
  //   const match = (tags, selectedArr) => {
  //     if (selectedArr.length === 0) return true;
  //     if (mode === "and") {
  //       return selectedArr.every(k => tags.includes(k));
  //     }
  //     return selectedArr.some(k => tags.includes(k));
  //   };
  
  //   const applyFilter = () => {
  //     const sel = Array.from(selected);
  //     let visibleCount = 0;
  
  //     for (const c of cards) {
  //       const tags = cardTagsMap.get(c) || [];
  //       const ok = match(tags, sel);
  //       c.classList.toggle("is-hidden", !ok);
  //       if (ok) visibleCount += 1;
  //     }
  
  //     // Hide empty categories
  //     for (const cat of categories) {
  //       const anyVisible = !!cat.querySelector(".pub-card:not(.is-hidden)");
  //       cat.classList.toggle("is-hidden", !anyVisible);
  //     }
  
  //     // Status text
  //     if (sel.length === 0) {
  //       statusEl.textContent = `${visibleCount} papers (no filter)`;
  //     } else {
  //       statusEl.textContent = `${visibleCount} papers, mode=${mode.toUpperCase()}, selected=${sel.length}`;
  //     }
  //   };
  
  //   // Wire mode buttons
  //   for (const b of modeBtns) {
  //     b.addEventListener("click", () => setMode(b.dataset.mode));
  //   }
  
  //   // Clear
  //   clearBtn.addEventListener("click", () => {
  //     selected.clear();
  //     root.querySelectorAll(".kw-btn.is-selected").forEach(x => {
  //       x.classList.remove("is-selected");
  //       x.setAttribute("aria-pressed", "false");
  //     });
  //     applyFilter();
  //   });
  
  //   // Init
  //   renderKeywords();
  //   setMode("and");
  // })();
