(function() {
  'use strict';

  const root = document.querySelector('[data-selected-repositories]');
  if (!root) return;

  const repositories = [
    {
      name: 'MoE-Slimming',
      url: 'https://github.com/yifu-ding/MoE-Slimming',
      created: '2026-05-23',
      month: 'May 2026',
      description: 'Official ICML 2026 Spotlight implementation for structural MoE compression, including attribution-guided channel scoring, coverage-maximized pruning, compact checkpoint construction, and fine-tuning support.',
      language: 'Python',
      topics: ['llm', 'llm-compression', 'model-quantization', 'moe', 'pruning', 'sparsification']
    },
    {
      name: 'Multimodal-MoE-Slimming',
      url: 'https://github.com/yifu-ding/Multimodal-MoE-Slimming',
      created: '2026-04-10',
      month: 'Apr 2026',
      description: 'Multimodal-MoE-Slimming is a post-training compression framework for multimodal Mixture-of-Experts models. It analyzes modality-aware expert behavior to reduce redundant capacity and build compact MoE checkpoints.',
      language: 'Python',
      topics: ['efficient-llm', 'model-compression', 'moe', 'multimodal', 'pruning', 'structural-pruning']
    },
    {
      name: 'MoDES',
      url: 'https://github.com/ModelTC/MoDES',
      created: '2026-02-20',
      month: 'Feb 2026',
      description: 'Official CVPR 2026 PyTorch implementation of MoDES, accelerating Mixture-of-Experts multimodal large language models via dynamic expert skipping.',
      language: 'Python',
      topics: ['cvpr-2026', 'mixture-of-experts', 'moe', 'multimodal', 'qwen3-vl', 'vlm']
    },
    {
      name: 'QVGen',
      url: 'https://github.com/ModelTC/QVGen',
      created: '2026-01-26',
      month: 'Jan 2026',
      description: 'Official ICLR 2026 PyTorch implementation of QVGen, pushing extremely low-bit quantization for video generative models.',
      language: 'Python',
      topics: ['diffusion-models', 'model-quantization', 'qat', 'quantization-aware-training', 'video-generation', 'videogen']
    },
    {
      name: 'MP-Sparse-Attn',
      url: 'https://github.com/yifu-ding/MP-Sparse-Attn',
      created: '2025-05-26',
      month: 'May 2025',
      description: 'MP-Sparse-Attn provides Triton kernels for Diagonal-Tiled Mixed-Precision Attention, targeting efficient low-bit MXFP inference for Transformer models.',
      language: 'Python',
      topics: ['attention', 'llm-inference', 'low-bit-quantization', 'mixed-precision', 'mxfp', 'triton']
    },
    {
      name: 'VORTA',
      url: 'https://github.com/wenhao728/VORTA',
      created: '2025-05-20',
      month: 'May 2025',
      description: 'Official implementation of VORTA: Efficient Video Diffusion via Routing Sparse Attention.',
      language: 'Python',
      topics: ['diffusion-models', 'sparse-attention', 'video-diffusion-model']
    },
    {
      name: 'DPTS',
      url: 'https://github.com/yifu-ding/DPTS',
      created: '2025-04-03',
      month: 'Apr 2025',
      description: 'Official implementation of Dynamic Parallel Tree Search for accelerating LLM reasoning with test-time parallel search.',
      language: 'Python',
      topics: ['code-generation', 'inference-acceleration', 'llm-reasoning', 'mathematical-reasoning', 'test-time-compute', 'tree-of-thoughts']
    },
    {
      name: 'BGEMM-CUDA',
      url: 'https://github.com/yifu-ding/BGEMM-CUDA',
      created: '2024-06-04',
      month: 'Jun 2024',
      description: 'BGEMM-CUDA is a CUDA-based low-bit GEMM kernel library for efficient neural network inference, with optimized binary and ternary matrix multiplication primitives.',
      language: 'Cuda',
      topics: ['bgemm', 'binarization', 'cuda', 'cuda-kernels', 'gemm', 'high-performance-computing']
    }
  ];

  function escapeHtml(value) {
    return String(value || '')
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;');
  }

  root.innerHTML = repositories.map(repository => {
    const tags = [repository.language, ...repository.topics];
    return `
      <article class="project-card">
        <div class="project-card-head">
          <h2>${escapeHtml(repository.name)}</h2>
          <time datetime="${escapeHtml(repository.created)}">${escapeHtml(repository.month)}</time>
        </div>
        <p>${escapeHtml(repository.description)}</p>
        <div class="project-tags">
          ${tags.map((tag, index) => `<span class="project-tag${index === 0 ? ' project-tag-language' : ''}">${escapeHtml(tag)}</span>`).join('')}
        </div>
        <a class="project-github-link" href="${escapeHtml(repository.url)}" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.44 5.44 0 0 0 3.5 8.55c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
          <span>GitHub</span>
        </a>
      </article>
    `;
  }).join('');
})();
