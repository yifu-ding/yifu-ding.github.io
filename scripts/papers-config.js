// Papers configuration - organized by category
const PAPERS_CONFIG = {
  "llm": {
    title: "Large Language Models",
    subtitle: "Compression, quantization, distillation, reasoning, and MoE acceleration.",
    papers: [
      {
        url: "https://www.sciencedirect.com/science/article/pii/S0893608025007361",
        venue: "Neural Networks 2025",
        year: 2025,
        title: "A survey of low-bit large language models: Basics, systems, and algorithms",
        tags: ["LLM", "Survey", "Quantization"]
      },
      {
        url: "https://proceedings.neurips.cc/paper_files/paper/2024/file/9f4cc62d0632911c63163ea3d9ec19bd-Paper-Datasets_and_Benchmarks_Track.pdf",
        venue: "NeurIPS 2024",
        year: 2024,
        title: "Llmcbench: Benchmarking large language model compression for efficient deployment",
        tags: ["LLM", "Benchmark", "Sparsification", "Quantization"]
      },
      {
        url: "https://openreview.net/pdf?id=sCGRhnuMUJ",
        venue: "ICML 2024",
        year: 2024,
        title: "Compressing large language models by joint sparsification and quantization",
        tags: ["LLM", "Sparsification", "Quantization"]
      },
      {
        url: "https://openreview.net/pdf?id=NCYBdRCpw1",
        venue: "ICML 2025",
        year: 2025,
        title: "DA-KD: Difficulty-Aware Knowledge Distillation for Efficient Large Language Models",
        tags: ["LLM", "Knowledge Distillation"]
      },
      {
        url: "https://arxiv.org/pdf/2511.15690",
        venue: "arXiv 2025",
        year: 2025,
        title: "MoDES: Accelerating Mixture-of-Experts Multimodal Large Language Models via Dynamic Expert Skipping",
        tags: ["LLM", "MoE", "Expert Skipping"]
      },
      {
        url: "https://arxiv.org/pdf/2402.11960",
        venue: "ACL Findings 2024",
        year: 2024,
        title: "DB-LLM: Accurate Dual-Binarization for Efficient LLMs",
        tags: ["LLM", "Binarization", "Quantization"]
      },
      {
        url: "https://arxiv.org/pdf/2502.16235",
        venue: "ACL 2025",
        year: 2025,
        title: "Dynamic parallel tree search for efficient llm reasoning",
        tags: ["LLM", "Tree of Thoughts", "Reasoning"]
      }
    ]
  },

  "vision": {
    title: "Vision and Hardware Quantization",
    subtitle: "Post-training quantization for vision models and hardware-aware deployment.",
    papers: [
      {
        url: "https://arxiv.org/pdf/2505.11497?",
        venue: "arXiv 2025",
        year: 2025,
        title: "QVGen: Pushing the Limit of Quantized Video Generative Models",
        tags: ["Video Generation", "Diffusion", "PTQ", "Quantization"]
      },
      {
        url: "https://openaccess.thecvf.com/content/CVPR2024/papers/Lv_PTQ4SAM_Post-Training_Quantization_for_Segment_Anything_CVPR_2024_paper.pdf",
        venue: "CVPR 2024",
        year: 2024,
        title: "PTQ4SAM: Post-Training Quantization for Segment Anything",
        tags: ["SAM", "PTQ", "Segmentation", "Quantization"]
      },
      {
        url: "https://openaccess.thecvf.com/content/CVPR2024/papers/Ding_Reg-PTQ_Regression-specialized_Post-training_Quantization_for_Fully_Quantized_Object_Detector_CVPR_2024_paper.pdf",
        venue: "CVPR 2024",
        year: 2024,
        title: "Reg-PTQ: Regression-specialized Post-training Quantization for Fully Quantized Object Detector",
        tags: ["Detection", "PTQ", "Regression", "Quantization"]
      },
      {
        url: "https://openreview.net/pdf?id=3gamyee9Yh",
        venue: "NeurIPS 2023",
        year: 2023,
        title: "QuantSR: accurate low-bit quantization for efficient image super-resolution",
        tags: ["Super-Resolution", "PTQ", "Quantization"]
      },
      {
        url: "https://arxiv.org/pdf/2303.14341",
        venue: "CVPR 2022",
        year: 2022,
        title: "Towards Accurate Post-Training Quantization for Vision Transformer",
        tags: ["ViT", "PTQ", "Quantization"]
      }
    ]
  },

  "data-free": {
    title: "Data-Free Quantization",
    subtitle: "Synthetic data generation and robustness for data-free calibration.",
    papers: [
      {
        url: "https://arxiv.org/pdf/2109.00212",
        venue: "IEEE TPAMI 2023",
        year: 2023,
        title: "Diverse sample generation: Pushing the limit of generative data-free quantization",
        tags: ["Data-free", "CNN", "PTQ", "Quantization"]
      },
      {
        url: "https://openaccess.thecvf.com/content/CVPR2022W/ArtOfRobust/papers/Chen_An_Empirical_Study_of_Data-Free_Quantizations_Tuning_Robustness_CVPRW_2022_paper.pdf",
        venue: "CVPR Workshop 2022",
        year: 2022,
        title: "An Empirical Study of Data-Free Quantization's Tuning Robustness",
        tags: ["Data-free", "CNN", "PTQ", "Quantization"]
      },
      {
        url: "https://openaccess.thecvf.com/content/CVPR2021/papers/Cai_Diversifying_Sample_Generation_for_Accurate_Data-Free_Quantization_CVPR_2021_paper.pdf",
        venue: "CVPR 2021",
        year: 2021,
        title: "Diversifying Sample Generation for Accurate Data-Free Quantization",
        tags: ["Data-free", "Quantization", "CNN", "PTQ"]
      },
    ]
  },

  "binarization": {
    title: "Binarization and 1-bit Models",
    subtitle: "Binary networks and 1-bit transformers for efficient inference.",
    papers: [
      {
        url: "https://proceedings.mlr.press/v202/qin23b/qin23b.pdf",
        venue: "ICML 2023",
        year: 2023,
        title: "Bibench: Benchmarking and analyzing network binarization",
        tags: ["Benchmark", "Binarization"]
      },
      {
        url: "https://arxiv.org/pdf/2211.06987",
        venue: "IEEE TNNLS 2024",
        year: 2024,
        title: "Bifsmnv2: Pushing binary neural networks for keyword spotting to real-network performance",
        tags: ["Keyword Spotting", "Binarization"]
      },
      {
        url: "https://arxiv.org/pdf/2109.12338",
        venue: "IJCV 2022",
        year: 2022,
        title: "Distribution-sensitive information retention for accurate binary neural network",
        tags: ["Binarization", "CNN"]
      },
      {
        url: "https://openreview.net/pdf?id=EtKEzgslVg5",
        venue: "ICLR 2022",
        year: 2022,
        title: "Bibert: Accurate fully binarized bert",
        tags: ["BERT", "Binarization", "GLUE"]
      },
      {
        url: "https://www.ijcai.org/proceedings/2022/0603.pdf",
        venue: "IJCAI 2021",
        year: 2021,
        title: "BiFSMN: Binary neural network for keyword spotting",
        tags: ["Keyword Spotting", "Binarization", "FSMN"]
      },
      {
        url: "https://openreview.net/pdf?id=9QLRCVysdlO",
        venue: "ICLR 2021",
        year: 2021,
        title: "Bipointnet: Binary neural network for point clouds",
        tags: ["Point Clouds", "Binarization", "PointNet"]
      }
    ]
  },

  "generative": {
    title: "Efficient Attention and Generative Models",
    subtitle: "Kernel-level and attention-sparsity designs for fast generation.",
    papers: [
      {
        url: "https://openaccess.thecvf.com/content/ICCV2025W/ECLR/papers/Du_Low-bit_FlashAttention_Accelerated_Operator_Design_Based_on_Triton_ICCVW_2025_paper.pdf",
        venue: "ECLR 2025 (ICCV Workshop)",
        year: 2025,
        title: "Low-bit FlashAttention Accelerated Operator Design Based on Triton",
        tags: ["Attention", "Triton Kernel", "Quantization"]
      },
      {
        url: "https://arxiv.org/pdf/2502.02134",
        venue: "NeurIPS 2025",
        year: 2025,
        title: "VORTA: Efficient Video Diffusion via Routing Sparse Attention",
        tags: ["Video Generation", "Diffusion", "Attention"]
      },
      {
        url: "https://arxiv.org/pdf/2309.01945",
        venue: "ACM MM 2022",
        year: 2022,
        title: "OHQ: On-chip Hardware-aware Quantization",
        tags: ["Hardware", "On-chip", "Quantization"]
      }
    ]
  },

  "vision-robustness": {
    title: "Vision Understanding and Robustness",
    subtitle: "Few-shot learning, detection under shift, and deepfake robustness.",
    papers: [
      {
        url: "https://www.ijcai.org/proceedings/2025/0059.pdf",
        venue: "IJCAI 2025",
        year: 2025,
        title: "Unlocking the potential of lightweight quantized models for deepfake detection",
        tags: ["Deepfake", "Detection", "Quantization"]
      },
      {
        url: "https://openaccess.thecvf.com/content/CVPR2022/papers/Tao_Exploring_Endogenous_Shift_for_Cross-Domain_Detection_A_Large-Scale_Benchmark_and_CVPR_2022_paper.pdf",
        venue: "CVPR 2022",
        year: 2022,
        title: "Exploring Endogenous Shift for Cross-domain Detection: A Large-scale Benchmark and Perturbation Suppression Network",
        tags: ["Detection", "Benchmark", "Domain Adaptation"]
      },
      {
        url: "https://doi.org/10.1109/TCSVT.2023.3250646",
        venue: "IEEE TCSVT 2021",
        year: 2021,
        title: "Spatio-temporal adaptive network with bidirectional temporal difference for action recognition",
        tags: ["Action Recognition", "Domain Adaptation"]
      },
      {
        url: "https://doi.org/10.1145/3475724.3483603",
        venue: "ACM MM 2021",
        year: 2021,
        title: "Improving Generalization of Deepfake Detection with Domain Adaptive Batch Normalization",
        tags: ["Deepfake", "Detection", "Domain Adaptation"]
      },
      {
        url: "https://ieeexplore.ieee.org/abstract/document/9428447",
        venue: "ICME 2021",
        year: 2021,
        title: "Multi-pretext attention network for few-shot learning with self-supervision",
        tags: ["Few-shot Learning", "Attention"]
      },
      {
        url: "https://arxiv.org/pdf/2103.00809",
        venue: "IEEE TRANSACTIONS ON MULTIMEDIA 2021",
        year: 2021,
        title: "Over-sampling de-occlusion attention network for prohibited items detection in noisy x-ray images",
        tags: ["X-ray", "Detection", "Attention"]
      },
    ]
  },

  "service": {
    title: "Service and Workshops",
    subtitle: "Workshop organization and community service.",
    papers: [
      {
        url: "https://iccv.thecvf.com/virtual/2025/workshop/2785",
        venue: "ICCV 2025",
        year: 2025,
        title: "ECLR'25: 2nd Workshop on Efficient Computing under Limited Resources: Visual Computing",
        tags: ["Workshop", "Visual Computing", "Efficient"]
      },
      {
        url: "https://emclr-acmmm.github.io/",
        venue: "EMCLR 2024",
        year: 2024,
        title: "2024 1st International Workshop on Efficient Multimedia Computing under Limited Resources Organization",
        tags: ["Workshop", "Multimedia", "Efficient"]
      }
    ]
  }
};
