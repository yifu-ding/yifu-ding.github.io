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
                
                // Home Page - Personal intro (above Welcome)
                intro_bio_label: 'Bio:',
                intro_phd_label: 'PhD Candidate',
                intro_joint: '(joint programme). ',
                intro_supervised: 'Supervised by',
                intro_and: 'and',
                intro_research_label: 'Research focus:',
                intro_research_area: 'Model compression and Inference efficiency',
                intro_bachelor: 'Bachelor\'s Degree Graduated: ',
                intro_bachelor_graduated: '2021',
                intro_enrolled_label: 'Ph.D Enrolled: ',
                intro_enrolled_date: 'Sep 2021',
                intro_expected_label: 'Expected Graduation: ',
                intro_expected_date: 'Jun 2027',
                
                // Tools subsection
                tools_subsection_title: 'Tools',
                tool_vocab_app: 'English Vocabulary iOS App',
                tool_vocab_desc: 'A vocabulary learning app based on etymology tracing. Features four-stage memory training system, offline dictionary, and comprehensive word root analysis.',
                tool_workshop_template: 'Conference Workshop Proposal Template',
                tool_workshop_desc: 'A LaTeX template for conference workshop proposals, based on successful proposals from previous workshops. Includes compact and full versions.',
                tool_journal_template: 'Journal Response Template',
                tool_journal_desc: 'A LaTeX template for journal response letters. Supports structured responses to editors and reviewers with track changes functionality.',

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
                channel_development_desc_custom: 'An iOS app for vocabulary learning through etymology tracing (Personal use)',
                latest_title: 'Latest',
                latest_subtitle: 'A short log across research and studio.',
                latest_section_title: 'Latest Activities',
                latest_view_all: 'View All',
                selected_shorts_title: 'Selected Shorts 🎥',
                video_guana_desc: 'At dusk, the sunset sweeps over the ridge of Pipila like a stream of molten gold, and Guanajuato sinks into a gentleness of color. This mountain city, as if God had spilled a palette across it, gradually sheds the daytime clamor in the twilight and welcomes the revelry that belongs to the night. The drifting clouds deepen from a fervent orange-red into a profound violet, and every flicker of light and shadow dances across the painted walls. Buildings as bright as candy grow richer as the shadows lengthen swiftly, as though the whispered secrets of time were murmuring along the winding cobblestone streets. When the last trace of afterglow finally sinks into the valley, the whole city seems to be awakened from within by starlight. One by one, countless lamps bloom in the dark blue night, like the Milky Way fallen to earth, gathering into a river in the quiet gorge. In that fleeting instant when light gives way to darkness, the sunset in Guanajuato becomes a dream of romance and eternity.',
                video_north_light_desc: 'When the last trace of rosy afterglow sinks into the frozen earth, Yellowknife steps into the dominion of the stars. As the world’s aurora capital, this vast wilderness quietly kindles another kind of light amid winter’s darkness and silence. A deep blue night sky drapes down like an immense velvet curtain, and newly unfurled, emerald-tinted radiance begins to dance lightly across the heavens. Those leaping ribbons of light grow ever more crystalline in the bitter air. In that fleeting instant when brightness yields to shadow, Yellowknife’s aurora tells a story of motion in green.',
                video_macritchie_desc: 'As the fierce afternoon sun pierces the lush canopy, MacRitchie descends into the depths of verdure. A tropical sanctuary within the city, this jungle harbors the whispers of all living souls within its humid air. The atmosphere carries the scent of water and the crisp sweetness of leaves warmed by the sun. Mottled light and shadow play across the winding boardwalk. Stepping onto the TreeTop Walk, one’s perspective is suddenly lifted, as if shifting from an earthly narrative to a chapter among the clouds. The canopy undulates beneath your feet like a slow-motion sea, while the tropical breeze weaves through the foliage, bringing a coolness laden with mist and greenery.',
                footer_rights: '',
                back_to_top: 'Back to top',
                gallery_view_grid: 'Grid',
                gallery_view_detailed: 'Detailed',
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
                sort_by: 'Sort by',
                sort_year_desc: 'Newest',
                sort_year_asc: 'Oldest',
                // Studio Page
                studio_title: 'Photography Portfolio',
                studio_description: 'A space for creative work outside the main track.',
                studio_filter_all: 'All',
                studio_filter_photo: 'Photography',
                studio_filter_reading: 'Reading',
                studio_filter_apps: 'Apps',
                photography_title: 'Static Photos 📸',
                photography_series: 'Series',
                reading_title: 'Reading',
                reading_highlights: 'Highlights & Notes',
                apps_title: 'Apps & Tools',
                apps_description: 'Small projects and experiments',
                photography_description: 'A collection of photographic series exploring patterns, light, and composition across different environments.',
                btn_view_album: 'View Album',
                btn_view_notes: 'View Notes',
                video_guana_title: 'Sunset in Guanajuato 💫',
                video_north_light_title: 'Aurora Capital Yellowknife 💫',
                video_macritchie_title: 'MacRitchie Tropical Nature Reserve 💫',
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
                contact_title: 'Leave a message 💬',
                contact_description: 'You can use the form below to send me a message regarding research collaborations, academic discussions, or related inquiries.', 
                contact_research_collab: 'Research Collaboration',
                contact_research_desc: 'Open to collaborations on model compression, quantization, and efficient deep learning.',
                contact_photo_projects: 'Photography Projects',
                contact_photo_desc: 'Available for commissioned work, exhibitions, and editorial projects.',
                contact_speaking: 'Speaking & Teaching',
                contact_speaking_desc: 'Available for talks and workshops on efficient AI and neural network compression.',
                contact_location_label: 'Location',
                contact_location_value: 'Beijing, China',
                contact_social_title: 'Connect',
                contact_form_title: 'Send a Message',
                contact_form_name: 'Name',
                contact_form_email: 'Your Email (optional)',
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
                
                // 首页 - 个人介绍（Welcome 上方）
                intro_bio_label: '简介：',
                intro_phd_label: '博士研究生',
                intro_joint: '（联合培养）。',
                intro_supervised: '导师',
                intro_and: '与',
                intro_research_label: '研究方向：',
                intro_research_area: '模型压缩与推理效率',
                intro_bachelor: '本科',
                intro_bachelor_graduated: '2021年毕业',
                intro_enrolled_label: '博士入学',
                intro_enrolled_date: '2021年9月',
                intro_expected_label: '预计毕业',
                intro_expected_date: '2027年6月',
                
                // 工具包 subsection
                tools_subsection_title: '工具包',
                tool_vocab_app: '英语词汇 iOS 应用',
                tool_vocab_desc: '基于词源学习的背单词应用。包含四阶段记忆训练系统、离线词典和全面的词根分析功能。',
                tool_workshop_template: '会议 Workshop 提案模板',
                tool_workshop_desc: '用于会议 workshop 提案的 LaTeX 模板，基于以往成功提案制作。包含紧凑版和完整版。',
                tool_journal_template: '期刊回复模板',
                tool_journal_desc: '用于期刊回复信的 LaTeX 模板。支持结构化回复编辑和审稿人，包含修订追踪功能。',

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
                channel_development_desc_custom: '一个通过词根溯源来辅助单词记忆的 iOS app (自用)',
                latest_title: '最新',
                latest_subtitle: '研究和工作室的简短日志。',
                latest_section_title: '最新动态',
                latest_view_all: '查看全部',
                selected_shorts_title: '精选短片 🎥',
                video_guana_desc: '傍晚的日暮如流金般掠过皮皮拉的山脊，瓜纳华托便坠入色彩的温柔。这座仿佛被上帝打翻调色盘的山城，在暮色里逐渐褪去白日的喧嚣，迎来属于夜晚的狂欢。流云从热烈的橘红晕染成深邃的紫罗兰，光影在彩色墙面上跳跃；那些如糖果般绚烂的建筑，在飞速拉长的阴影里愈发浓郁，仿佛岁月的密语正沿着蜿蜒的石板路低回。直到最后一抹余晖彻底沉入谷底，整座城市像被星光从内而外唤醒，万家灯火在幽蓝的夜色中次第亮起，犹如银河跌落人间，在静谧的峡谷里汇聚成河。在这场明暗交替的瞬息里，瓜纳华托的日落，是一场关于浪漫与永恒的梦境。',
                video_north_light_desc: '当最后的霞光没入冰封的大地，耶洛奈夫便步入星辰的疆域。作为世界的极光之都，这片旷野在凛冬的黑暗与寂静中悄悄点燃了另一种光。深蓝的夜幕如巨大的丝绒缓缓垂下，初绽的翡翠色流光便在苍穹间轻盈起舞；那些跃动的光带，在极寒的空气中愈发清冽。在这场明暗交替的瞬息里，耶洛奈夫的极光，用绿色讲述流动。',
                video_macritchie_desc: '当午后的炽阳穿透繁茂的林冠，麦里芝便步入了绿意的深处。作为城市里的热带原乡，这片丛林在湿润的空气中保护着万物生灵的低语。空气里有水的味道，也有叶片被阳光烘热后的清甜。斑驳的光影在蜿蜒的木栈道上。踏上TreeTop Walk，视线忽然被抬高，仿佛从地面的叙事切换到云端的章节。树冠在脚下起伏，像一片缓慢移动的海，热带的风从叶片之间穿行，带着水汽与绿意的凉爽。',
                footer_rights: '',
                back_to_top: '返回顶部',
                gallery_view_grid: '网格',
                gallery_view_detailed: '详细',
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
                sort_by: '排序',
                sort_year_desc: '最新',
                sort_year_asc: '最早',
                // 工作室页面
                studio_title: '摄影作品集',
                studio_description: '主业之外的创作空间。',
                studio_filter_all: '全部',
                studio_filter_photo: '摄影',
                studio_filter_reading: '阅读',
                studio_filter_apps: '应用',
                photography_title: '静态照片',
                photography_series: '系列',
                reading_title: '阅读',
                reading_highlights: '摘录与笔记',
                apps_title: '应用与工具',
                apps_description: '小项目与实验',
                photography_description: '探索不同环境中的图案、光影和构图的摄影系列作品集。',
                btn_view_album: '查看相册',
                btn_view_notes: '查看笔记',
                video_guana_title: '瓜纳华托的日暮 💫',
                video_north_light_title: '极光首都黄刀镇 💫',
                video_macritchie_title: '麦里芝热带自然保护区 💫',
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
                contact_title: '留言',
                contact_description: '您可以使用以下表格向我发送有关研究合作、学术讨论或相关咨询的信息。',
                contact_research_collab: '研究合作',
                contact_research_desc: '欢迎在模型压缩、量化和高效深度学习方面进行合作。',
                contact_photo_projects: '摄影项目',
                contact_photo_desc: '接受委托作品、展览和编辑项目。',
                contact_location_label: '位置',
                contact_location_value: '中国北京',
                contact_social_title: '社交媒体',
                contact_form_title: '发送消息',
                contact_form_name: '姓名',
                contact_form_email: '您的邮箱 (可选)',
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

// ===========================
// BibTex Copy Functionality
// ===========================

// BibTex database embedded in JavaScript
const BIBTEX_DATABASE = {
    'llm-quant-survey': `@article{gong2025llm-quant-survey,
title = {A survey of low-bit large language models: Basics, systems, and algorithms},
journal = {Neural Networks},
volume = {192},
pages = {107856},
year = {2025},
issn = {0893-6080},
doi = {https://doi.org/10.1016/j.neunet.2025.107856},
url = {https://www.sciencedirect.com/science/article/pii/S0893608025007361},
author = {Ruihao Gong and Yifu Ding and Zining Wang and Chengtao Lv and Xingyu Zheng and Jinyang Du and Yang Yong and Shiqiao Gu and Haotong Qin and Jinyang Guo and Dahua Lin and Michele Magno and Xianglong Liu},
keywords = {Large language model, Quantization, Low-bit, System, Algorithm},
}`,
    
    'da-kd': `@inproceedings{he2025da-kd,
  title={DA-KD: Difficulty-Aware Knowledge Distillation for Efficient Large Language Models},
  author={He, Changyi and Ding, Yifu and Guo, Jinyang and Gong, Ruihao and Qin, Haotong and Liu, Xianglong},
  booktitle={Forty-second International Conference on Machine Learning}
}`,
    
    'dpts': `@inproceedings{ding2025dpts,
  author    = {Yifu Ding and Wentao Jiang and Shunyu Liu and Yongcheng Jing and Jinyang Guo and Yingjie Wang and Jing Zhang and Zengmao Wang and Ziwei Liu and Bo Du and Xianglong Liu and Dacheng Tao},
  year      = {2025},
  title     = {Dynamic Parallel Tree Search for Efficient LLM Reasoning},
  booktitle = {arXiv.org},
  doi       = {10.48550/arXiv.2502.16235},
}`,
    
    'vorta': `@article{DBLP:journals/corr/abs-2505-18809,
  author       = {Wenhao Sun and
                  Rong{-}Cheng Tu and
                  Yifu Ding and
                  Zhao Jin and
                  Jingyi Liao and
                  Shunyu Liu and
                  Dacheng Tao},
  title        = {{VORTA:} Efficient Video Diffusion via Routing Sparse Attention},
  journal      = {CoRR},
  volume       = {abs/2505.18809},
  year         = {2025}
}`,
    
    'deepfake': `@inproceedings{tao2025Unlocking,
  title     = {Unlocking the Potential of Lightweight Quantized Models for Deepfake Detection},
  author    = {Tao, Renshuai and Qin, Ziheng and Ding, Yifu and Tan, Chuangchuang and Wang, Jiakai and Wang, Wei},
  booktitle = {Proceedings of the Thirty-Fourth International Joint Conference on
               Artificial Intelligence, {IJCAI-25}},
  publisher = {International Joint Conferences on Artificial Intelligence Organization},
  editor    = {James Kwok},
  pages     = {520--528},
  year      = {2025},
  month     = {8},
  note      = {Main Track},
  doi       = {10.24963/ijcai.2025/59},
  url       = {https://doi.org/10.24963/ijcai.2025/59},
}`,
    
    'qvgen': `@article{huang2025qvgen,
  title={QVGen: Pushing the Limit of Quantized Video Generative Models},
  author={Huang, Yushi and Gong, Ruihao and Liu, Jing and Ding, Yifu and Lv, Chengtao and Qin, Haotong and Zhang, Jun},
  journal={arXiv preprint arXiv:2505.11497},
  year={2025}
}`
};

document.addEventListener('DOMContentLoaded', () => {
    const bibtexLinks = document.querySelectorAll('.paper-card-link-bibtex');
    
    bibtexLinks.forEach(link => {
        link.addEventListener('click', async (e) => {
            e.preventDefault();
            
            const bibtexKey = link.getAttribute('data-bibtex-key');
            
            if (!bibtexKey || bibtexKey === '') {
                alert('BibTex not available yet.');
                return;
            }
            
            const bibtexContent = BIBTEX_DATABASE[bibtexKey];
            
            if (!bibtexContent) {
                alert('BibTex not found for this paper.');
                console.error('BibTex key not found:', bibtexKey);
                return;
            }
            
            try {
                // Copy to clipboard
                await navigator.clipboard.writeText(bibtexContent);
                
                // Visual feedback
                const originalText = link.textContent;
                link.textContent = '✓ Copied';
                link.style.backgroundColor = 'rgba(34, 197, 94, 0.1)';
                link.style.borderColor = '#22c55e';
                link.style.color = '#22c55e';
                
                setTimeout(() => {
                    link.textContent = originalText;
                    link.style.backgroundColor = '';
                    link.style.borderColor = '';
                    link.style.color = '';
                }, 2000);
            } catch (err) {
                console.error('Failed to copy BibTex:', err);
                alert('Failed to copy BibTex. Please try again.');
            }
        });
    });
});
