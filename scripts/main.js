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
                nav_timeline: 'Timeline',
                nav_education: 'Education',
                nav_research: 'Research',
                nav_repositories: 'Repositories',
                nav_workshops: 'Workshops',
                nav_studio: 'Photography',
                nav_contact: 'Contact',
                
                // Home Page - Personal intro (above Welcome)
                intro_bio_label: 'Bio:',
                intro_phd_label: 'PhD Candidate',
                intro_at: 'at',
                intro_buaa: 'Beihang University',
                intro_buaa_school: 'School of Computer Science and Engineering',
                intro_ntu: 'Nanyang Technological University',
                intro_ntu_college: 'College of Computing and Data Science',
                intro_joint: '(joint programme). ',
                intro_supervised: 'Supervised by',
                intro_prof_liu: 'Prof. Xianglong Liu',
                intro_prof_tao: 'Prof. Dacheng Tao',
                intro_and: 'and',
                intro_research_label: 'Research focus:',
                intro_research_area: 'Efficient foundation-model inference and deployment',
                intro_bachelor: 'Bachelor\'s Degree Graduated: ',
                intro_bachelor_graduated: '2021',
                intro_enrolled_label: 'Ph.D Enrolled: ',
                intro_enrolled_date: 'Sep 2021',
                intro_expected_label: 'Expected Graduation: ',
                intro_expected_date: 'Jun 2027',
                intro_phd_expected: 'PhD Expected Graduation: Dec 2026',
                intro_phd_expected_label: 'PhD Expected Graduation:',
                intro_phd_expected_date: 'Dec 2026',
                
                // Tools subsection
                tools_subsection_title: 'Customized Tools',
                tool_vocab_app: 'English Vocabulary iOS App',
                tool_vocab_desc: 'A vocabulary learning app based on etymology tracing. Features four-stage memory training system, offline dictionary, and comprehensive word root analysis.',
                tool_workshop_template: 'Conference Workshop Proposal Template',
                tool_workshop_desc: 'A LaTeX template for conference workshop proposals, based on successful proposals from previous workshops. Includes compact and full versions.',
                tool_journal_template: 'Journal Response Template',
                tool_journal_desc: 'A LaTeX template for journal response letters. Supports structured responses to editors and reviewers with track changes functionality.',

                // Home Page - Hero
                inne_hero_line1: 'Welcome to Yifu\'s Homepage.',
                inne_hero_line2: '',
                inne_hero_line3: 'and let time deliver the answers.',
                home_hero_desc: 'Keep your curiosity for the world, and let time deliver the answers.',
                home_photo_credit: 'Photo taken by Zihao Jing, Model & Direction: Yifu Ding, November 2025, Lake Minnewanka, Canadian Rockies',
                repositories_title: 'Repositories',
                repositories_description: 'A collection of my open-source repositories.',
                update_fund_completion: 'Successfully passed the completion review for the <strong>Outstanding Doctoral Academic Fund</strong> at Beihang University.',
                fund_completion_title: 'Outstanding Doctoral Academic Fund Completion',
                fund_completion_desc: 'Successfully passed the completion review for the Outstanding Doctoral Academic Fund at Beihang University.',
                fund_completion_date: 'Jun 2026',
                timeline_phd_completion_title: '⭐️ Expected Ph.D. Completion and Open to Industry Research Opportunities ⭐️',
                timeline_phd_completion_desc: 'Expected to complete my Ph.D. in December 2026. I am currently seeking Singapore-based opportunities at major technology companies and warmly welcome interview opportunities.',
                timeline_phd_completion_date: 'Dec 2026',
                timeline_ntu_visit_title: 'Started Visiting Research at Nanyang Technological University',
                timeline_ntu_visit_desc: 'Visited Nanyang Technological University in Singapore, supervised by Prof. Dacheng Tao.',
                timeline_ntu_visit_date: 'Nov 2024',
                timeline_emclr_publicity_title: 'Publicity Chair for EMCLR Workshop at ACM MM 2024',
                timeline_emclr_publicity_desc: 'Served as Publicity Chair for the 1st International Workshop on Efficient Multimedia Computing under Limited Resources at ACM MM 2024.',
                timeline_emclr_publicity_date: 'Oct 2024',
                timeline_glow_local_title: 'Local Arrangement Chair for GLOW Workshop at IJCAI 2024',
                timeline_glow_local_desc: 'Served as Local Arrangement Chair for the 2nd International Workshop on Generalizing from Limited Resources in the Open World at IJCAI 2024, responsible for on-site logistics and coordination to ensure smooth workshop operations.',
                timeline_glow_local_date: 'Aug 2024',
                timeline_reg_ptq_title: 'Paper Accepted at CVPR 2024',
                timeline_reg_ptq_desc: '"Reg-PTQ: Regression-specialized Post-training Quantization for Fully Quantized Object Detector" accepted at CVPR 2024.',
                timeline_reg_ptq_date: 'Jun 2024',
                timeline_proposal_title: 'Passed Ph.D. Proposal Defense with Outstanding Recognition',
                timeline_proposal_desc: 'Passed the Ph.D. proposal defense at Beihang University and received Outstanding Proposal recognition.',
                timeline_proposal_date: 'Mar 2024',
                timeline_qualification_title: 'Passed Ph.D. Qualification Exam',
                timeline_qualification_desc: 'Passed the doctoral qualification exam at Beihang University.',
                timeline_qualification_date: 'Oct 2022',
                timeline_meituan_title: 'Research Intern at Meituan Foundation Model Group',
                timeline_meituan_desc: 'Worked on edge deployment research for vision ViT models at Meituan Foundation Model Group, mentored by Zhenhua Chai.',
                timeline_meituan_date: '2022 - 2023',
                timeline_apq_vit_title: 'First First-authored Paper Accepted at CVPR 2022',
                timeline_apq_vit_desc: '"Towards Accurate Post-Training Quantization for Vision Transformer" accepted at CVPR 2022, my first first-authored paper.',
                timeline_apq_vit_date: 'Jun 2022',
                timeline_phd_start_title: 'Started Direct Ph.D. Study at Beihang University',
                timeline_phd_start_desc: 'Enrolled as a direct Ph.D. student at the School of Computer Science and Engineering, Beihang University, supervised by Prof. Xianglong Liu, and started my academic journey.',
                timeline_phd_start_date: 'Sep 2021',
                timeline_bachelor_title: 'Received B.Eng. Degree from Beihang University',
                timeline_bachelor_desc: 'Received my B.Eng. degree from the School of Computer Science and Engineering, Beihang University, with an Outstanding Undergraduate Thesis on low-bit quantization, compression, and acceleration for BERT models.',
                timeline_bachelor_date: 'Jun 2021',
                timeline_tag_visit: 'Visit',
                timeline_tag_milestone: 'Milestone',
                timeline_tag_internship: 'Internship',
                timeline_tag_education: 'Education',
                timeline_tag_opportunity: 'Opportunity',
                timeline_tag_service: 'Service',
                
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
                cv_button: 'CV',
                cv_option_en: 'EN',
                cv_option_cn: 'CN',
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
                research_description: 'AI researcher and Ph.D. candidate in Computer Science, specializing in model compression and acceleration for efficient foundation-model inference and deployment. ',
                research_photo_credit: 'Photo taken by Yifu Ding in Yellowknife, Canada, December 2025 - Northern Lights',
                research_focus_title: 'Research Focus',
                research_focus_1_bold: 'Efficient inference and deployment for large language models and MoE models.',
                research_focus_1_rest: ', especially LLMs, to reduce memory footprint, latency, and cost with minimal quality loss.',
                research_focus_1: '<strong>Efficient inference and deployment</strong> for large language models and MoE models.',
                research_focus_2_rest: ' for LLMs, vision models, and multimodal systems, including practical PTQ and QAT oriented techniques.',
                research_focus_2: '<strong>Post-training compression and acceleration, </strong> e.g., quantization, pruning, kv cache and decoding optimization.',
                research_focus_3_bold: 'High-performance operators and kernels for low-bit, sparse, and hardware-aware computation.',
                research_focus_3_rest: ', focusing on hardware-friendly structures (for example channels, heads, FFN dimensions, and MoE experts).',
                research_focus_3: '<strong>High-performance operators and kernels</strong> for low-bit, sparse, and hardware-aware computation.',
                research_focus_4_bold: 'Multimodal understanding and generation, including vision-language models and image/video diffusion models.',
                research_focus_4_rest: ', translating model-side compression into real speedups via hardware-aware design and optimization.',
                research_focus_4: '<strong>Multimodal understanding and generation</strong>, including vision-language models and image/video diffusion acceleration.',
                research_interests_title: 'Ongoing Projects',
                research_interest_1: 'Clinical World Model for physiological forecasting.',
                research_interest_2: 'Real-time quantum error correction with customized FPGA.',
                research_interest_3: 'Serving efficiency under SLA constraints, focusing on concurrency, tail latency, and cost efficiency.',
                research_interest_4: 'Deployment-friendly multimodal MoE compression.',
                research_interest_5: 'Super-resolution diffusion acceleration for image generation.',
                selected_work_title: 'All Publications',
                paper_category_quantization: 'Model Quantization',
                paper_category_sparsification: 'Sparsification / Model Pruning',
                citations: 'Citations',
                view_all_publications: 'View all publications on Google Scholar',
                filter_rules: 'Filter Rules',
                sort_by: 'Sort by',
                sort_year_desc: 'Newest',
                sort_year_asc: 'Oldest',

                // Education Page
                education_title: 'Education',
                education_description: 'My education background.',
                education_ntu_school: 'Nanyang Technological University',
                education_ntu_degree: 'Joint-Training Doctoral Student, College of Computing and Data Science',
                education_ntu_time: 'Nov 2024 - Nov 2026',
                education_ntu_location: 'Singapore',
                education_ntu_advisor: 'Supervised by <a href="https://dr.ntu.edu.sg/entities/person/Tao-Dacheng" target="_blank" rel="noopener">Prof. Dacheng Tao</a>.',
                education_ntu_desc: 'China Scholarship Council joint training program; research focus on efficient foundation-model inference and deployment, especially model compression and quantization for large models.',
                education_buaa_school: 'Beihang University',
                education_buaa_phd_degree: 'Ph.D. Candidate, School of Computer Science and Engineering',
                education_buaa_phd_time: 'Sep 2021 - Dec 2026',
                education_buaa_location: 'Beijing, China',
                education_buaa_phd_advisor: 'Supervised by <a href="https://xlliu-beihang.github.io/" target="_blank" rel="noopener">Prof. Xianglong Liu</a> and <a href="https://dr.ntu.edu.sg/entities/person/Tao-Dacheng" target="_blank" rel="noopener">Prof. Dacheng Tao</a>.',
                education_buaa_phd_desc: 'Research on quantization and compression for Transformer-based architectures, with a focus on efficient foundation-model inference and deployment.',
                education_buaa_bachelor_school: 'Beihang University',
                education_buaa_bachelor_degree: 'Bachelor of Engineering, Computer Science',
                education_buaa_bachelor_time: 'Sep 2017 - Jun 2021',
                education_buaa_bachelor_desc: 'GPA: 3.80/4.0; rank: 25/257.',
                // Studio Page
                studio_title: 'Photography Portfolio',
                studio_description: 'A space for creative work outside the main track.',
                studio_filter_all: 'All',
                studio_filter_photo: 'Photography',
                studio_filter_reading: 'Reading',
                studio_filter_apps: 'Apps',
                photography_title: 'Static Photos 📸',
                studio_photo_credit: 'Photo taken by Yifu Ding, December 2025, Pípila Hill, Guanajuato, Mexico',
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
                contact_photo_credit: 'Photo taken by Zihao Jing, Model & Direction: Yifu Ding, November 2025, Lake Minnewanka, Canadian Rockies',
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
                contact_form_title: 'Contact Form',
                contact_form_name: 'Name',
                contact_form_name_placeholder: 'Your name',
                contact_form_email: 'Your Email (optional)',
                contact_form_email_placeholder: 'your@email.com',
                contact_form_message: 'Message',
                contact_form_message_placeholder: 'Your message',
                contact_form_send: 'Send Message',
                contact_form_success_line1: 'Thank you for your message.',
                contact_form_success_line2: 'I will get back to you as soon as possible.',
                contact_methods_title: 'Other Ways to Connect',
                // contact_email_note: 'Preferred work email',
                // contact_phone_sg_note: 'Singapore phone',
                // contact_phone_cn_note: 'Phone / WeChat',
                
                // Common
                loading: 'Loading...',
                read_more: 'Read more',
                view_details: 'View details',
                close: 'Close',
                load_more_papers: 'Load More Papers',
                load_more_news: 'Load More Updates',
                
                // Gallery Page
                back_to_studio: 'Back to Portfolio',
                gallery_images: 'images',
            },
            zh: {
                // 导航
                nav_home: '首页',
                nav_timeline: '时间线',
                nav_education: '教育经历',
                nav_research: '研究',
                nav_repositories: '代码仓库',
                nav_workshops: '研讨会',
                nav_studio: '摄影',
                nav_contact: '联系',
                
                // 首页 - 个人介绍（Welcome 上方）
                intro_bio_label: '简介：',
                intro_phd_label: '博士研究生',
                intro_at: '，',
                intro_buaa: '北京航空航天大学',
                intro_buaa_school: '计算机学院',
                intro_ntu: '新加坡南洋理工大学',
                intro_ntu_college: 'College of Computing and Data Science',
                intro_joint: '（联合培养）。',
                intro_supervised: '导师',
                intro_prof_liu: '刘祥龙教授',
                intro_prof_tao: '陶大程教授',
                intro_and: '与',
                intro_research_label: '研究方向：',
                intro_research_area: '高效基础模型推理与部署',
                intro_bachelor: '本科',
                intro_bachelor_graduated: '2021年毕业',
                intro_enrolled_label: '博士入学',
                intro_enrolled_date: '2021年9月',
                intro_expected_label: '预计毕业',
                intro_expected_date: '2027年6月',
                intro_phd_expected: '博士预计毕业：2026年12月',
                intro_phd_expected_label: '博士预计毕业：',
                intro_phd_expected_date: '2026年12月',
                
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
                home_photo_credit: '照片由景子昊拍摄，模特&指导：丁一芙，2025年11月，明尼旺卡湖，加拿大落基山脉',
                repositories_title: '代码仓库',
                repositories_description: '我的开源代码仓库合集。',
                update_fund_completion: '顺利通过北京航空航天大学<strong>优秀博士研究生学术卓越基金</strong>结题验收。',
                fund_completion_title: '优秀博士研究生学术卓越基金结题',
                fund_completion_desc: '顺利通过北京航空航天大学优秀博士研究生学术卓越基金结题验收。',
                fund_completion_date: 'Jun 2026',
                timeline_phd_completion_title: '⭐️ 即将完成博士学业，并寻找新加坡工作机会 ⭐️',
                timeline_phd_completion_desc: '预计于 2026 年 12 月完成博士学业。目前正积极关注新加坡地区大型科技公司的研究与工程岗位机会，欢迎相关面试邀约。',
                timeline_phd_completion_date: '2026年12月',
                timeline_ntu_visit_title: '赴南洋理工大学访问研究',
                timeline_ntu_visit_desc: '前往新加坡南洋理工大学访问，师从陶大程教授。',
                timeline_ntu_visit_date: '2024年11月',
                timeline_emclr_publicity_title: '担任 ACM MM 2024 EMCLR Workshop 宣传主席',
                timeline_emclr_publicity_desc: '担任 ACM MM 2024 第 1 届 Efficient Multimedia Computing under Limited Resources 国际研讨会宣传主席。',
                timeline_emclr_publicity_date: '2024年10月',
                timeline_glow_local_title: '担任 IJCAI 2024 GLOW Workshop 会务主席',
                timeline_glow_local_desc: '担任 IJCAI 2024 第 2 届 Generalizing from Limited Resources in the Open World 国际研讨会会务主席，负责现场会务和协调工作，保障 workshop 顺利运行。',
                timeline_glow_local_date: '2024年8月',
                timeline_reg_ptq_title: '论文被 CVPR 2024 接收',
                timeline_reg_ptq_desc: '论文“Reg-PTQ: Regression-specialized Post-training Quantization for Fully Quantized Object Detector”被 CVPR 2024 接收。',
                timeline_reg_ptq_date: '2024年6月',
                timeline_proposal_title: '博士开题答辩通过并获优秀开题',
                timeline_proposal_desc: '在北京航空航天大学通过博士开题答辩，并获得优秀开题。',
                timeline_proposal_date: '2024年3月',
                timeline_qualification_title: '通过博士生资格考试',
                timeline_qualification_desc: '在北京航空航天大学通过博士生资格考试。',
                timeline_qualification_date: '2022年10月',
                timeline_meituan_title: '美团基础模型组研究实习',
                timeline_meituan_desc: '在美团基础模型组实习，导师为柴振华，从事视觉 ViT 模型端侧部署研究。',
                timeline_meituan_date: '2022年 - 2023年',
                timeline_apq_vit_title: '首篇一作论文被 CVPR 2022 接收',
                timeline_apq_vit_desc: '论文“Towards Accurate Post-Training Quantization for Vision Transformer”被 CVPR 2022 接收，这是我的第一篇一作论文。',
                timeline_apq_vit_date: '2022年6月',
                timeline_phd_start_title: '直博入学北京航空航天大学计算机学院',
                timeline_phd_start_desc: '直博入学北京航空航天大学计算机学院，师从刘祥龙教授，开启学术研究旅程。',
                timeline_phd_start_date: '2021年9月',
                timeline_bachelor_title: '获得北京航空航天大学计算机学院学士学位',
                timeline_bachelor_desc: '获得北京航空航天大学计算机学院学士学位，并获得优秀本科毕业设计；毕设主题为面向 BERT 模型的低比特量化、压缩与加速。',
                timeline_bachelor_date: '2021年6月',
                timeline_tag_visit: '访问',
                timeline_tag_milestone: '里程碑',
                timeline_tag_internship: '实习',
                timeline_tag_education: '教育',
                timeline_tag_opportunity: '机会',
                timeline_tag_service: '服务',
                
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
                cv_button: '简历',
                cv_option_en: '英文',
                cv_option_cn: '中文',
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
                research_description: 'AI 研究者，计算机专业博士研究生，研究方向为基础模型的压缩与推理加速，致力于提升深度学习模型的部署效率与实际应用能力。',
                research_photo_credit: '照片由丁一芙拍摄于2025年12月加拿大黄刀镇 - 极光',
                research_focus_title: '研究重点',
                research_focus_1_bold: '面向大语言模型和 MoE 模型的高效推理与部署。',
                research_focus_1_rest: '，尤其是大语言模型，在最小化质量损失的前提下减少内存占用、延迟和成本，涵盖模型压缩和推理时策略（如解码和计算控制）。',
                research_focus_1: '<strong>高效推理与部署</strong>，面向大语言模型和 MoE 模型。',
                research_focus_2_bold: '训练后压缩与加速，包括量化、剪枝、瘦身和蒸馏。',
                research_focus_2_rest: '，面向大语言模型、视觉模型和多模态系统，包括实用的训练后量化（PTQ）和量化感知训练（QAT）技术。',
                research_focus_2: '<strong>训练后压缩与加速</strong>，包括量化、剪枝、瘦身和蒸馏。',
                research_focus_3_bold: '面向低比特、稀疏和硬件感知计算的高性能算子与内核。',
                research_focus_3_rest: '，聚焦于硬件友好的结构（例如通道、注意力头、FFN维度和MoE专家）。',
                research_focus_3: '<strong>高性能算子与内核</strong>，面向低比特、稀疏和硬件感知计算。',
                research_focus_4_bold: '多模态理解与生成，包括视觉语言模型和图像/视频扩散模型。',
                research_focus_4_rest: '，通过硬件感知的设计和优化将模型侧压缩转化为实际加速。',
                research_focus_4: '<strong>多模态理解与生成</strong>，包括视觉语言模型和图像/视频扩散模型。',
                research_interests_title: '进行中的项目',
                research_interest_1: '面向生理状态预测的临床世界模型。',
                research_interest_2: '基于定制 FPGA 的实时量子纠错。',
                research_interest_3: '服务级协议（SLA）约束下的服务效率，关注并发性、尾延迟和成本效率。',
                research_interest_4: '部署友好的多模态 MoE 压缩。',
                research_interest_5: '面向图像生成的超分辨率扩散模型加速。',
                selected_work_title: '论文合集',
                paper_category_quantization: '模型量化',
                paper_category_sparsification: '稀疏化 / 模型剪枝',
                citations: '引用',
                view_all_publications: '在谷歌学术查看全部论文',
                filter_rules: '过滤规则',
                sort_by: '排序',
                sort_year_desc: '最新',
                sort_year_asc: '最早',

                // 教育页面
                education_title: '教育经历',
                education_description: '我的教育背景。',
                education_ntu_school: '新加坡南洋理工大学',
                education_ntu_degree: '联合培养博士生，College of Computing and Data Science',
                education_ntu_time: '2024年11月 - 2026年11月',
                education_ntu_location: '新加坡',
                education_ntu_advisor: '导师：<a href="https://dr.ntu.edu.sg/entities/person/Tao-Dacheng" target="_blank" rel="noopener">陶大程教授</a>。',
                education_ntu_desc: '国家留学基金委联合培养项目；研究方向为高效基础模型推理与部署，尤其关注大模型压缩与量化。',
                education_buaa_school: '北京航空航天大学',
                education_buaa_phd_degree: '博士研究生，计算机学院',
                education_buaa_phd_time: '2021年9月 - 2026年12月',
                education_buaa_location: '中国，北京',
                education_buaa_phd_advisor: '导师：<a href="https://xlliu-beihang.github.io/" target="_blank" rel="noopener">刘祥龙教授</a>与<a href="https://dr.ntu.edu.sg/entities/person/Tao-Dacheng" target="_blank" rel="noopener">陶大程教授</a>。',
                education_buaa_phd_desc: '研究 Transformer 架构的量化与压缩，重点关注高效基础模型推理与部署。',
                education_buaa_bachelor_school: '北京航空航天大学',
                education_buaa_bachelor_degree: '工学学士，计算机科学与技术',
                education_buaa_bachelor_time: '2017年9月 - 2021年6月',
                education_buaa_bachelor_desc: 'GPA：3.80/4.0；排名：25/257。',
                // 工作室页面
                studio_title: '摄影作品集',
                studio_description: '主业之外的创作空间。',
                studio_filter_all: '全部',
                studio_filter_photo: '摄影',
                studio_filter_reading: '阅读',
                studio_filter_apps: '应用',
                photography_title: '静态照片',
                studio_photo_credit: '照片由丁一芙拍摄，2025年12月，墨西哥瓜纳华托皮皮拉山',
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
                contact_photo_credit: '照片由景子昊拍摄，模特&指导：丁一芙，2025年11月，明尼旺卡湖，加拿大落基山脉',
                contact_description: '您可以使用以下表格向我发送有关研究合作、学术讨论或相关咨询的信息。',
                contact_research_collab: '研究合作',
                contact_research_desc: '欢迎在模型压缩、量化和高效深度学习方面进行合作。',
                contact_photo_projects: '摄影项目',
                contact_photo_desc: '接受委托作品、展览和编辑项目。',
                contact_location_label: '位置',
                contact_location_value: '中国北京',
                contact_social_title: '社交媒体',
                contact_form_title: '联系表单',
                contact_form_name: '姓名',
                contact_form_name_placeholder: '您的姓名',
                contact_form_email: '您的邮箱 (可选)',
                contact_form_email_placeholder: 'your@email.com',
                contact_form_message: '消息',
                contact_form_message_placeholder: '您的留言',
                contact_form_send: '发送消息',
                contact_form_success_line1: '感谢您的消息。',
                contact_form_success_line2: '我会尽快回复您。',
                contact_methods_title: '其他联系方式',
                // contact_email_note: '更偏好的工作邮箱',
                // contact_phone_sg_note: '新加坡手机号',
                // contact_phone_cn_note: '电话 / 微信同号',
                
                // 通用
                loading: '加载中...',
                read_more: '阅读更多',
                view_details: '查看详情',
                close: '关闭',
                load_more_papers: '加载更多论文',
                load_more_news: '加载更多动态',
                
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

        document.querySelectorAll('[data-i18n-html]').forEach(element => {
            const key = element.getAttribute('data-i18n-html');
            if (translations[key]) {
                element.innerHTML = translations[key]
                    .replace(/<(?!\/?strong\b)[^>]*>/gi, '')
                    .replace(/<strong\b[^>]*>/gi, '<strong>')
                    .replace(/<\/strong>/gi, '</strong>');
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
// ===========================
// Sidebar Navigation Manager
// ===========================

class SidebarNavigationManager {
    constructor() {
        this.sidebarNav = document.querySelector('.page-sidebar-nav');
        this.profileSidebar = document.querySelector('.home-profile-sidebar');
        this.navLinks = document.querySelectorAll('.page-sidebar-nav-link');
        this.sections = [];
        this.navHeight = document.querySelector('.main-nav')?.offsetHeight || 72;
        this.offset = 100;
        this.visibilityAnchor = null;
        this.scrollLockTimer = null;
        this.lockedTargetId = null;
        this.refreshSections();
        this.init();
    }

    init() {
        if (!this.sidebarNav && !this.profileSidebar) return;

        // Setup scroll spy
        this.setupScrollSpy();

        // Setup click handlers for smooth scrolling
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    e.preventDefault();
                    this.lockedTargetId = targetId;
                    this.setActiveLink(targetId);
                    window.clearTimeout(this.scrollLockTimer);

                    if (targetId === '#top') {
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });

                        this.scrollLockTimer = window.setTimeout(() => {
                            this.lockedTargetId = null;
                            this.updateActiveLink();
                        }, 900);
                        return;
                    }

                    const targetAnchor = this.getSectionAnchor(targetElement);
                    const elementPosition = targetAnchor.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - this.offset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });

                    this.scrollLockTimer = window.setTimeout(() => {
                        this.lockedTargetId = null;
                        this.updateActiveLink();
                    }, 900);
                }
            });
        });

        document.addEventListener('papers:rendered', () => {
            this.refreshSections();
            this.updateActiveLink();
            this.updateVisibility();
        });
    }

    refreshSections() {
        this.sections = Array.from(this.navLinks)
            .map(link => document.querySelector(link.getAttribute('href')))
            .filter(section => section && section.id !== 'top');
        this.visibilityAnchor = this.sections[0] || null;
    }

    setupScrollSpy() {
        let ticking = false;

        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    this.updateActiveLink();
                    this.updateVisibility();
                    ticking = false;
                });
                ticking = true;
            }
        });

        // Initial check
        this.updateActiveLink();
        this.updateVisibility();
    }

    updateVisibility() {
        if (!this.visibilityAnchor) return;

        const scrollPosition = window.pageYOffset;
        const anchorTop = this.visibilityAnchor.getBoundingClientRect().top + window.pageYOffset;
        const windowHeight = window.innerHeight;

        // Show sidebar when approaching the first linked section.
        if (scrollPosition >= anchorTop - windowHeight / 2) {
            if (this.sidebarNav) this.sidebarNav.classList.add('visible');
            if (this.profileSidebar) this.profileSidebar.classList.add('visible');
        } else {
            if (this.sidebarNav) this.sidebarNav.classList.remove('visible');
            if (this.profileSidebar) this.profileSidebar.classList.remove('visible');
        }
    }

    updateActiveLink() {
        if (!this.navLinks.length) return;
        if (this.lockedTargetId) {
            this.setActiveLink(this.lockedTargetId);
            return;
        }

        const scrollPosition = window.pageYOffset + this.offset + 2;

        // Find which section is currently in view
        let currentSection = null;
        const sectionOffsets = [];

        this.sections.forEach(section => {
            const sectionAnchor = this.getSectionAnchor(section);
            const sectionTop = sectionAnchor.getBoundingClientRect().top + window.pageYOffset;
            const sectionBottom = sectionTop + section.offsetHeight;
            sectionOffsets.push({
                element: section,
                top: sectionTop,
                bottom: sectionBottom
            });
        });

        // Find the section that's currently visible
        for (let i = sectionOffsets.length - 1; i >= 0; i--) {
            const { element, top } = sectionOffsets[i];
            if (scrollPosition >= top) {
                currentSection = element;
                break;
            }
        }

        this.setActiveLink(currentSection ? `#${currentSection.id}` : null);
    }

    setActiveLink(targetId) {
        this.navLinks.forEach(link => {
            link.classList.toggle('active', Boolean(targetId) && link.getAttribute('href') === targetId);
        });
    }

    getSectionAnchor(section) {
        return section.querySelector(
            '.publication-section-title, .subsection-title, .simple-page-title, h1, h2, h3, h4'
        ) || section;
    }
}

// ===========================
// CV Dropdown Manager
// ===========================

class CVDropdownManager {
    constructor() {
        this.switcher = document.querySelector('.cv-switcher');
        this.button = document.querySelector('.cv-button');
        this.init();
    }

    init() {
        if (!this.switcher || !this.button) return;

        this.button.addEventListener('click', (event) => {
            event.stopPropagation();
            const isActive = this.switcher.classList.toggle('active');
            this.button.setAttribute('aria-expanded', String(isActive));
        });

        this.switcher.addEventListener('click', (event) => {
            event.stopPropagation();
        });

        document.addEventListener('click', () => {
            this.switcher.classList.remove('active');
            this.button.setAttribute('aria-expanded', 'false');
        });
    }
}

// ===========================
// Initialize Everything
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize managers
    const clockManager = new ClockManager();
    const languageManager = new LanguageManager();
    const cardManager = new CardManager();
    const themeManager = new ThemeManager();
    const sidebarNavigationManager = new SidebarNavigationManager();
    const cvDropdownManager = new CVDropdownManager();

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
// Theme Manager - Dark Mode Toggle
// ===========================

class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.themeToggle = document.getElementById('theme-toggle');
        this.init();
    }

    init() {
        // Apply saved theme
        this.applyTheme();
        
        // Setup toggle button
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => {
                this.toggleTheme();
            });
        }
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', this.currentTheme);
        this.applyTheme();
    }

    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.currentTheme);
    }

    getCurrentTheme() {
        return this.currentTheme;
    }
}

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
        SidebarNavigationManager,
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
    'moe-compression': `@inproceedings{ding2026moecompression,
  title={Attribution-Guided and Coverage-Maximized Pruning for Structural MoE Compression},
  author={Ding, Yifu and Wang, Jiacheng and Yang, Ge and Jing, Yongcheng and Guo, Jinyang and Liu, Xianglong and Tao, Dacheng},
  booktitle={Forty-third International Conference on Machine Learning},
  year={2026},
  url={https://openreview.net/forum?id=oreET6Wz52}
}`,

    'spa-cache': `@inproceedings{sun2026spacache,
  title={Singular Proxies for Adaptive Caching in Diffusion Language Models},
  author={Sun, Wenhao and Tu, Rong-Cheng and Ding, Yifu and Jin, Zhao and Liao, Jingyi and Jing, Yongcheng and Tao, Dacheng},
  booktitle={Forty-third International Conference on Machine Learning},
  year={2026},
  url={https://icml.cc/virtual/2026/poster/66363}
}`,

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
}`,

    'modes': `@inproceedings{huang2026modes,
  title={MoDES: Accelerating Mixture-of-Experts Multimodal Large Language Models via Dynamic Expert Skipping},
  author={Huang, Yushi and Wang, Zining and Yuan, Zhenyu and Ding, Yifu and Gong, Ruihao and Guo, Jinyang and Liu, Xianglong and Zhang, Jun},
  booktitle={IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},
  year={2026}
}`,

    'diagonal-tiled': `@inproceedings{ding2026diagonal,
  title={Diagonal-Tiled Mixed-Precision Attention for Efficient Low-Bit MXFP Inference},
  author={Ding, Yifu and Zhang, Xuan},
  booktitle={EDGE Workshop at IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},
  year={2026}
}`,

    'lowbit-flash': `@inproceedings{du2025lowbit,
  title={Low-bit FlashAttention Accelerated Operator Design Based on Triton},
  author={Du, Jinyang and Guo, Jinyang and Ding, Yifu},
  booktitle={ECLR Workshop at IEEE/CVF International Conference on Computer Vision (ICCV)},
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

// ===========================
// Load More Functionality
// ===========================

function setupLoadMore(buttonId, itemSelector, initialVisible, loadPerClick, visibleDisplay, finalAction) {
    const loadMoreBtn = document.getElementById(buttonId);
    if (!loadMoreBtn) return;

    const items = Array.from(document.querySelectorAll(itemSelector))
        .filter(item => item.style.display !== 'none');
    const totalItems = items.length;
    let currentVisible = initialVisible;
    let isFinalAction = false;

    const setFinalAction = () => {
        if (!finalAction) {
            loadMoreBtn.style.display = 'none';
            return;
        }

        isFinalAction = true;
        loadMoreBtn.style.display = '';
        loadMoreBtn.removeAttribute('data-i18n');
        const label = loadMoreBtn.querySelector('.load-more-label');
        if (label) {
            label.removeAttribute('data-i18n');
            label.textContent = finalAction.text;
        } else {
            loadMoreBtn.textContent = finalAction.text;
        }
    };

    items.forEach((item, index) => {
        if (index >= initialVisible) {
            item.style.display = 'none';
        }
    });

    if (totalItems <= initialVisible) {
        setFinalAction();
    }

    loadMoreBtn.addEventListener('click', () => {
        if (isFinalAction) {
            window.location.href = finalAction.href;
            return;
        }

        const nextVisible = Math.min(currentVisible + loadPerClick, totalItems);

        for (let i = currentVisible; i < nextVisible; i++) {
            if (items[i]) {
                items[i].style.display = visibleDisplay;
                setTimeout(() => {
                    items[i].style.opacity = '0';
                    items[i].style.transform = 'translateY(20px)';
                    items[i].style.transition = 'all 0.5s ease';
                    setTimeout(() => {
                        items[i].style.opacity = '1';
                        items[i].style.transform = 'translateY(0)';
                    }, 50);
                }, (i - currentVisible) * 100);
            }
        }

        currentVisible = nextVisible;

        if (currentVisible >= totalItems) {
            setFinalAction();
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setupLoadMore('load-more-papers', '.papers-list .paper-card', 3, 3, 'grid', {
        text: 'Go to Publication Page',
        href: 'research.html#all-publications'
    });
    setupLoadMore('load-more-news', '.updates-timeline > li', 4, 3, '', {
        text: 'Go to Timeline Page',
        href: 'timeline.html'
    });
});
