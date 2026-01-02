// ===========================
// Real-time Clock & Date
// ===========================

class ClockManager {
    constructor() {
        this.timeElement = document.getElementById('current-time');
        this.timeElement2 = document.getElementById('current-time-2');
        this.dateElement = document.getElementById('current-date');
        this.init();
    }

    init() {
        if (!this.timeElement && !this.timeElement2 && !this.dateElement) return;
        
        this.updateTime();
        setInterval(() => this.updateTime(), 1000);
    }

    updateTime() {
        const now = new Date();
        
        // Format time (HH:MM am/pm)
        const hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'pm' : 'am';
        const displayHours = hours % 12 || 12;
        const timeString = `${displayHours}:${minutes} ${ampm}`;
        
        if (this.timeElement) this.timeElement.textContent = timeString;
        if (this.timeElement2) this.timeElement2.textContent = timeString;
        
        // Format date (DD MMM YYYY)
        if (this.dateElement) {
            const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 
                           'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
            const day = now.getDate().toString().padStart(2, '0');
            const month = months[now.getMonth()];
            const year = now.getFullYear();
            this.dateElement.textContent = `${day} ${month} ${year}`;
        }
    }
}

// ===========================
// Language Switcher - Complete Translation System
// ===========================

class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'en';
        this.translations = {
            en: {
                // Navigation
                nav_home: 'Home',
                nav_research: 'Research',
                nav_studio: 'Photography',
                nav_contact: 'Contact',
                
                // Home Page - Hero
                inne_hero_line1: 'Welcome to Yifu\'s Homepage.',
                inne_hero_line2: 'Keep your curiosity for the world,',
                inne_hero_line3: 'and let time deliver the answers.',
                home_hero_desc: 'Keep your curiosity for the world, and let time deliver the answers.',
                
                btn_view_research: 'Research',
                btn_view_research_2: 'View Research →',
                btn_hobby_studio: 'Photography Portfolio',
                dropdown_photography: 'Photography',
                dropdown_reading: 'Reading',
                dropdown_development: 'Development',
                metrics_publications: 'Publications',
                metrics_citations: 'Citations',
                metrics_h_index: 'h-index',
                now_title: 'Now',
                now_local_time: 'Local time',
                now_location: 'Location',
                now_focus: 'Focus',
                quick_links: 'Quick links',
                google_scholar: 'Google Scholar',
                github: 'GitHub',
                featured_title: 'Featured across channels',
                featured_subtitle: 'A few representative pieces. Each item is intentionally small and specific.',
                featured_research_title: 'Neural Network Compression Survey',
                featured_research_desc: 'Comprehensive review of low-bit quantization techniques for large language models.',
                featured_photo_title: 'Rocky Mountains',
                featured_photo_desc: 'Rocky Mountain landscapes exploring light and negative space.',
                featured_reading_title: 'Thinking, Fast and Slow',
                featured_reading_author: 'Daniel Kahneman',
                featured_dev_title: 'Quantization Toolkit',
                featured_dev_desc: 'Open-source library for efficient model compression.',
                channels_title: 'Channels',
                channels_subtitle: 'Two tracks, multiple formats. Same taste for structure.',
                channel_research: 'Research',
                channel_research_desc: 'Neural network compression, quantization, and efficient AI systems.',
                channel_photography: 'Photography',
                channel_photography_desc: 'Light, minimalism, and the structure of the everyday.',
                channel_reading: 'Reading',
                channel_reading_desc: 'Notes and highlights on systems, cognition, and design.',
                channel_development: 'Development',
                channel_development_desc: 'Tools and experiments in machine learning and web development.',
                latest_title: 'Latest',
                latest_subtitle: 'A short log across research and studio.',
                latest_section_title: 'Latest Activities',
                latest_view_all: 'View All',
                footer_rights: 'Beihang University',
                back_to_top: 'Back to top',
                btn_enter_studio: 'Enter Studio →',
                btn_view_development: 'View Details on GitHub →',
                
                // Research Page
                research_title: 'Research',
                research_description: 'PhD Candidate at Beihang University, specializing in neural network compression and model quantization. Making deep learning more efficient and accessible for real-world deployment.',
                research_focus_title: 'Research Focus',
                research_focus_1_title: 'Neural Network Compression',
                research_focus_1_desc: 'Developing efficient methods to reduce model size and computational cost while maintaining accuracy.',
                research_focus_2_title: 'Model Quantization',
                research_focus_2_desc: 'Low-bit quantization techniques for LLMs, vision models, and multimodal systems.',
                research_focus_3_title: 'Efficient AI Systems',
                research_focus_3_desc: 'Hardware-aware optimization and deployment strategies for resource-constrained environments.',
                selected_work_title: 'All Publications',
                paper_category_quantization: 'Model Quantization',
                paper_category_sparsification: 'Sparsification / Model Pruning',
                citations: 'Citations',
                view_all_publications: 'View all publications on Google Scholar',
                filter_rules: 'Filter Rules',
                // Studio Page
                studio_title: 'Photography Portfolio',
                studio_description: 'A space for creative work outside the main track. Photography, reading notes, and side projects all share a common attention to structure and clarity.',
                studio_filter_all: 'All',
                studio_filter_photo: 'Photography',
                studio_filter_reading: 'Reading',
                studio_filter_apps: 'Apps',
                photography_title: 'Photography',
                photography_series: 'Series',
                reading_title: 'Reading',
                reading_highlights: 'Highlights & Notes',
                apps_title: 'Apps & Tools',
                apps_description: 'Small projects and experiments',
                photography_description: 'A collection of photographic series exploring patterns, light, and composition across different environments.',
                btn_view_album: 'View Album',
                btn_view_notes: 'View Notes',
                tools_title: 'Individual Development',
                vocab_builder_desc: 'An iOS vocabulary building app based on etymology learning. Through etymological explanations and a four-stage scientific memory training system, it helps users deeply understand and memorize English words. Works offline, no login required.',
                vocab_tag_etymology: 'Etymology Learning',
                vocab_tag_practice: 'Four-Stage Practice',
                vocab_tag_offline: 'Offline Dictionary',
                quant_toolkit_desc: 'Open-source toolkit for efficient neural network quantization. Implements PTQ and QAT methods with support for various model architectures.',
                coming_soon: 'Coming soon',
                series_1: 'Rocky Mountain Series',
                series_2: 'Urban Geometry',
                series_3: 'Guanajuato Colors',
                series_4: 'Macro Details',
                series_5: 'Light Studies',
                series_6: 'Rocky Mountains',
                
                // Contact Page
                contact_title: 'Contact',
                contact_description: 'You can use the form below to send me a message regarding research collaborations, academic discussions, or related inquiries.', 
                contact_research_collab: 'Research Collaboration',
                contact_research_desc: 'Open to collaborations on model compression, quantization, and efficient deep learning.',
                contact_photo_projects: 'Photography Projects',
                contact_photo_desc: 'Available for commissioned work, exhibitions, and editorial projects.',
                contact_speaking: 'Speaking & Teaching',
                contact_speaking_desc: 'Available for talks and workshops on efficient AI and neural network compression.',
                contact_email_label: 'Email',
                contact_location_label: 'Location',
                contact_location_value: 'Beijing, China',
                contact_social_title: 'Connect',
                contact_form_title: 'Send a Message',
                contact_form_name: 'Name',
                contact_form_email: 'Email',
                contact_form_message: 'Message',
                contact_form_send: 'Send Message',
                contact_form_success_line1: 'Thank you for your message.',
                contact_form_success_line2: 'I will get back to you as soon as possible.',
                
                // Common
                loading: 'Loading...',
                read_more: 'Read more',
                view_details: 'View details',
                close: 'Close',
                
                // Gallery Page
                back_to_studio: 'Back to Portfolio',
                gallery_images: 'images',
            },
            zh: {
                // 导航
                nav_home: '首页',
                nav_research: '研究',
                nav_studio: '摄影',
                nav_contact: '联系',
                
                // 首页 - Hero
                inne_hero_line1: '欢迎来到一芙的网站。',
                inne_hero_line2: '把好奇心留给世界，',
                inne_hero_line3: '把答案交给时间。',
                home_hero_desc: '把好奇心留给世界，把答案交给时间。',
                
                btn_view_research: '研究工作',
                btn_view_research_2: '查看研究 →',
                btn_hobby_studio: '摄影作品集',
                dropdown_photography: '摄影',
                dropdown_reading: '阅读',
                dropdown_development: '开发',
                metrics_publications: '论文',
                metrics_citations: '引用',
                metrics_h_index: 'h指数',
                now_title: '当前',
                now_local_time: '本地时间',
                now_location: '位置',
                now_focus: '研究方向',
                quick_links: '快速链接',
                google_scholar: '谷歌学术',
                github: 'GitHub',
                featured_title: '精选作品',
                featured_subtitle: '几件代表性作品。每一件都经过精心挑选。',
                featured_research_title: '神经网络压缩综述',
                featured_research_desc: '大语言模型低比特量化技术的全面综述。',
                featured_photo_title: '山岳极简',
                featured_photo_desc: '落基山脉风光，探索光影与留白。',
                featured_reading_title: '思考，快与慢',
                featured_reading_author: '丹尼尔·卡尼曼',
                featured_dev_title: '量化工具包',
                featured_dev_desc: '高效模型压缩的开源库。',
                channels_title: '频道',
                channels_subtitle: '两条轨道，多种形式。相同的结构品味。',
                channel_research: '研究',
                channel_research_desc: '神经网络压缩、量化和高效AI系统。',
                channel_photography: '摄影',
                channel_photography_desc: '光影、极简主义和日常结构。',
                channel_reading: '阅读',
                channel_reading_desc: '关于系统、认知和设计的笔记与摘录。',
                channel_development: '开发',
                channel_development_desc: '机器学习和Web开发的工具与实验。',
                latest_title: '最新',
                latest_subtitle: '研究和工作室的简短日志。',
                latest_section_title: '最新动态',
                latest_view_all: '查看全部',
                footer_rights: '北京航空航天大学',
                back_to_top: '返回顶部',
                btn_enter_studio: '查看作品集 →',
                btn_view_development: '在GitHub查看详情 →',
                // 研究页面
                research_title: '研究',
                research_description: '北京航空航天大学博士研究生，专注于神经网络压缩和模型量化。致力于让深度学习更高效、更易于实际部署。',
                research_focus_title: '研究方向',
                research_focus_1_title: '神经网络压缩',
                research_focus_1_desc: '开发高效的方法来减少模型大小和计算成本，同时保持准确性。',
                research_focus_2_title: '模型量化',
                research_focus_2_desc: '针对大语言模型、视觉模型和多模态系统的低比特量化技术。',
                research_focus_3_title: '高效AI系统',
                research_focus_3_desc: '面向资源受限环境的硬件感知优化和部署策略。',
                selected_work_title: '论文合集',
                paper_category_quantization: '模型量化',
                paper_category_sparsification: '稀疏化 / 模型剪枝',
                citations: '引用',
                view_all_publications: '在谷歌学术查看全部论文',
                filter_rules: '过滤规则',
                // 工作室页面
                studio_title: '摄影作品集',
                studio_description: '主业之外的创作空间。',
                studio_filter_all: '全部',
                studio_filter_photo: '摄影',
                studio_filter_reading: '阅读',
                studio_filter_apps: '应用',
                photography_title: '摄影',
                photography_series: '系列',
                reading_title: '阅读',
                reading_highlights: '摘录与笔记',
                apps_title: '应用与工具',
                apps_description: '小项目与实验',
                photography_description: '探索不同环境中的图案、光影和构图的摄影系列作品集。',
                btn_view_album: '查看相册',
                btn_view_notes: '查看笔记',
                tools_title: '个人开发',
                vocab_builder_desc: '基于词源学习的 iOS 英语词汇构建应用。通过词源解释和四阶段科学记忆训练系统，帮助用户深度理解和记忆英语单词。离线使用，无需登录。',
                vocab_tag_etymology: '词源学习',
                vocab_tag_practice: '四阶段练习',
                vocab_tag_offline: '离线词典',
                quant_toolkit_desc: '高效神经网络量化的开源工具包。实现了PTQ和QAT方法，支持多种模型架构。',
                coming_soon: '即将推出',
                series_1: '落基山脉系列',
                series_2: '城市几何',
                series_3: '瓜纳华托色彩',
                series_4: '微距细节',
                series_5: '光影研究',
                series_6: '极简风光',
                
                // 联系页面
                contact_title: '联系',
                contact_description: '您可以使用以下表格向我发送有关研究合作、学术讨论或相关咨询的信息。',
                contact_research_collab: '研究合作',
                contact_research_desc: '欢迎在模型压缩、量化和高效深度学习方面进行合作。',
                contact_photo_projects: '摄影项目',
                contact_photo_desc: '接受委托作品、展览和编辑项目。',
                contact_email_label: '邮箱',
                contact_location_label: '位置',
                contact_location_value: '中国北京',
                contact_social_title: '社交媒体',
                contact_form_title: '发送消息',
                contact_form_name: '姓名',
                contact_form_email: '邮箱',
                contact_form_message: '消息',
                contact_form_send: '发送消息',
                contact_form_success_line1: '感谢您的消息。',
                contact_form_success_line2: '我会尽快回复您。',
                
                // 通用
                loading: '加载中...',
                read_more: '阅读更多',
                view_details: '查看详情',
                close: '关闭',
                
                // 照片集页面
                back_to_studio: '返回工作室',
                gallery_images: '张照片',
            }
        };
        this.init();
    }

    init() {
        // Setup language switcher button
        const langButton = document.querySelector('.lang-button');
        const langSwitcher = document.querySelector('.lang-switcher');
        const langOptions = document.querySelectorAll('.lang-option');

        if (langButton && langSwitcher) {
            langButton.addEventListener('click', (e) => {
                e.stopPropagation();
                langSwitcher.classList.toggle('active');
            });

            // Close dropdown when clicking outside
            document.addEventListener('click', () => {
                langSwitcher.classList.remove('active');
            });
        }

        if (langOptions) {
            langOptions.forEach(option => {
                option.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const lang = option.getAttribute('data-lang');
                    this.switchLanguage(lang);
                    langSwitcher.classList.remove('active');
                });
            });
        }

        // Apply saved language
        this.applyLanguage();
    }

    switchLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('language', lang);
        this.applyLanguage();
    }

    applyLanguage() {
        // Update language button text
        const langButton = document.querySelector('.lang-button');
        if (langButton) {
            const text = langButton.querySelector('span');
            if (text) {
                text.textContent = this.currentLang.toUpperCase();
            }
        }

        // Update active state in dropdown
        document.querySelectorAll('.lang-option').forEach(option => {
            if (option.getAttribute('data-lang') === this.currentLang) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });

        // Update all translatable elements
        const translations = this.translations[this.currentLang];
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[key]) {
                element.textContent = translations[key];
            }
        });

        // Update placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (translations[key]) {
                element.placeholder = translations[key];
            }
        });
    }

    getCurrentLanguage() {
        return this.currentLang;
    }
}

// ===========================
// Card Interactions
// ===========================

class CardManager {
    constructor() {
        this.init();
    }

    init() {
        // Add entrance animations for cards on scroll
        this.setupScrollAnimations();
    }

    setupScrollAnimations() {
        const cards = document.querySelectorAll('.content-card, .featured-card, .channel-card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '0';
                    entry.target.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        entry.target.style.transition = 'all 0.5s ease';
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, 50);
                    
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        cards.forEach(card => {
            observer.observe(card);
        });
    }
}

// ===========================
// Utility Functions
// ===========================

const Utils = {
    // Debounce function for performance
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Get scroll position
    getScrollPosition() {
        return window.pageYOffset || document.documentElement.scrollTop;
    },

    // Smooth scroll to element
    scrollToElement(element, offset = 0) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
};

// ===========================
// Initialize Everything
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize managers
    const clockManager = new ClockManager();
    const languageManager = new LanguageManager();
    const cardManager = new CardManager();

    // Add smooth scrolling for anchor links (only for #hash links, not page navigation)
    document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').slice(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
                Utils.scrollToElement(targetElement, 100);
            }
        });
    });

    // Add loading complete class for animations
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);

    console.log('✨ Personal homepage initialized successfully!');
});

// ===========================
// Navigation Auto-hide on Scroll
// ===========================

class NavigationManager {
    constructor() {
        this.nav = document.querySelector('.main-nav');
        this.lastScrollTop = 0;
        this.scrollThreshold = 5; // 最小滚动距离才触发
        this.init();
    }

    init() {
        if (!this.nav) return;

        let ticking = false;

        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    this.handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    handleScroll() {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // 在页面顶部，始终显示导航栏
        if (currentScrollTop <= 0) {
            this.nav.classList.remove('nav-hidden');
            this.nav.classList.add('nav-visible');
            this.lastScrollTop = currentScrollTop;
            return;
        }

        // 计算滚动差值
        const scrollDiff = Math.abs(currentScrollTop - this.lastScrollTop);

        // 只有滚动距离超过阈值才触发
        if (scrollDiff < this.scrollThreshold) {
            return;
        }

        // 向下滚动 - 隐藏导航栏
        if (currentScrollTop > this.lastScrollTop) {
            this.nav.classList.add('nav-hidden');
            this.nav.classList.remove('nav-visible');
        } 
        // 向上滚动 - 显示导航栏
        else {
            this.nav.classList.remove('nav-hidden');
            this.nav.classList.add('nav-visible');
        }

        this.lastScrollTop = currentScrollTop;
    }
}

// 初始化导航管理器
document.addEventListener('DOMContentLoaded', () => {
    new NavigationManager();
});

// ===========================
// Export for potential module usage
// ===========================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ClockManager,
        LanguageManager,
        CardManager,
        NavigationManager,
        Utils
    };
}


(function () {
    var items = document.querySelectorAll(".reveal");
    if (!items.length) return;
  
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      {
        root: null,
        threshold: 0.12,
        rootMargin: "0px 0px -10% 0px"
      }
    );
  
    items.forEach(function (el) { io.observe(el); });
  })();

  
  
  
const form = document.getElementById("contact-form");
const success = document.getElementById("form-success");

if (form) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const formData = new FormData(form);

        const response = await fetch("https://formspree.io/f/xwvpldgj", {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        });

        if (response.ok) {
            form.style.display = "none";
            success.style.display = "block";
        } else {
            alert("Something went wrong. Please try again later.");
        }
    });
}

