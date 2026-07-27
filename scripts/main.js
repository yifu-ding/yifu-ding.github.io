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
                intro_supervised: 'Supervised by:',
                intro_prof_liu: 'Prof. Xianglong Liu',
                intro_prof_tao: 'Prof. Dacheng Tao',
                intro_and: 'and',
                intro_research_label: 'Research focus:',
                intro_research_area: 'AI Infra: high-performance kernels, model compression, and inference optimization',
                tag_high_perf_kernels: 'High-Perf Kernels',
                tag_model_compression: 'Model Compression',
                tag_inference_acceleration: 'Inference Acceleration',
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
                home_updates_title: '📌 Updates',
                home_recent_papers_title: '📄 Recent Papers',
                home_workshops_title: '👥 Workshops',
                home_education_title: '📖 Education',
                home_awards_title: '🏆 Awards & Funding',
                selected_repositories_title: '📦 Selected Repositories',
                sidebar_back_top: 'Back to Top',
                sidebar_updates: 'Updates',
                sidebar_recent_papers: 'Recent Papers',
                sidebar_repositories: 'Repositories',
                sidebar_workshops: 'Workshops',
                sidebar_education: 'Education',
                sidebar_awards: 'Awards',
                sidebar_a_few_words: 'A Few Words',
                sidebar_reflections: 'Reflections',
                reflections_title: '✍️ Reflections',
                reflections_subtitle: 'Thoughts and reflections recorded at different stages. Feel free to <a href="contact.html">reach out</a> anytime.',
                thought_label: 'Essay',
                thought_1_title: 'The Future of AI Infrastructure',
                thought_1_desc: 'How AI Infra evolves from regularized inference toward dynamic agentic systems, and where post-training algorithms are heading.',
                writing_back: '← Back to Reflections',
                writing_read_time: '5 min read',
                writing_footer: 'If this resonates with you or you have a different take, I\'d love to hear it — <a href="contact.html">reach out anytime</a>.',
                sidebar_collaborators: 'Collaborators',
                research_sidebar_overview: 'Overview',
                research_sidebar_selected: 'Selected',
                research_sidebar_kernels: 'High-Performance Kernels',
                research_sidebar_compression: 'Model Compression',
                research_sidebar_inference: 'Inference Optimization',
                research_sidebar_all_publications: 'All Publications',
                research_selected_publications_title: 'Selected Publications',
                collaborator_zihao: 'The most talented and meticulous AI researcher I have ever met.',
                collaborator_xingyu: 'A hardworking and focused labmate with deep insight into diffusion models.',
                collaborator_jinyang: 'One of my PhD advisors, always supportive and generous with insightful advice.',
                collaborator_wenhao: 'A helpful and active researcher in video diffusion acceleration, with rich industry experience.',
                collaborator_zining: 'A humorous and resilient labmate, with research experience at ByteDance Seed.',
                collaborator_yushi: 'A prolific open-source AI researcher with exceptional insight into visual understanding for large models.',
                collaborators_section_title: '🤝 Quick links to my collaborators',
                about_me_title: '👋 A Few Words',
                about_me_paragraph_1: 'As graduation approaches, life has become busier than ever. Several projects that I co-lead or participate in are still ongoing, as listed on my <a href="research.html">Research page</a>. Some are coming soon, while others have been continuously explored for more than two years and are still in the darkness before dawn.',
                about_me_paragraph_2: 'I feel fortunate to always have frontier research topics to work on and excellent teammates to work with. There has never been a dull moment in my Ph.D. life. As this chapter gradually comes to a close, I am excited and looking forward to embracing my upcoming journey in industry.',
                about_me_paragraph_3: 'Beyond research, I also enjoy travel and photography. If you are interested, you can find my <a href="studio.html">portfolio here 📷</a>.',
                update_fund_completion: 'Successfully passed the completion review for the <strong>Outstanding Doctoral Academic Fund</strong> at Beihang University.',
                update_sam2_glow_2026: 'One paper <span class="paper-title">"Layer Sensitivity Matters: Mixed-Precision Post-Training Quantization for SAM2 Video Segmentation"</span> accepted to <strong>GLOW @ IJCAI 2026</strong>. Congratulations to Wenyu Zhou!',
                update_sam2_glow_2026_date: 'Jun 2026',
                update_eclr_3_speakers: 'We warmly welcome potential speakers to join us at this year\'s workshop, <strong>The 3rd Efficient Computing under Limited Resources: Modern AI Models and Systems</strong>. Past workshop homepages: <a href="https://eclr-workshop.github.io/" target="_blank" rel="noopener">2nd at ICCV 2025</a>, <a href="https://eclr-workshop.github.io/index_2024.html" target="_blank" rel="noopener">1st at ACM MM 2024</a>.',
                update_glow_4_2026: 'My colleagues are holding <a href="https://glow-ijcai-2026.github.io/glow-ijcai-2026/" target="_blank" rel="noopener"><strong>the 4th International Workshop on Generalizing from Limited Resources in the Open World</strong></a> at IJCAI 2026 in Bremen, Germany. Welcome to follow and attend.',
                update_icml_2026: 'Two papers accepted by <strong>ICML 2026</strong>: "<a href="https://openreview.net/forum?id=oreET6Wz52" target="_blank" rel="noopener">Attribution-Guided and Coverage-Maximized Pruning for Structural MoE Compression</a>" and "<a href="https://icml.cc/virtual/2026/poster/66363" target="_blank" rel="noopener">SPA-Cache: Singular Proxies for Adaptive Caching in Diffusion Language Models</a>". Congratulations to co-authors!',
                update_iclr_2026: 'One paper accepted by <strong>ICLR 2026</strong>: "<a href="https://arxiv.org/pdf/2505.11497" target="_blank" rel="noopener">QVGen: Pushing the Limit of Quantized Video Generative Models</a>". Congratulations to <a href="https://harahan.github.io/" target="_blank" rel="noopener">Yushi Huang</a>!',
                update_acl_2025: 'One paper accepted by <strong>ACL 2025</strong>: "<a href="https://aclanthology.org/2025.acl-long.550.pdf" target="_blank" rel="noopener">Dynamic Parallel Tree Search for Efficient LLM Reasoning</a>".',
                home_education_ntu: '<strong>Joint-Training Doctoral Student</strong>, <a href="https://www.ntu.edu.sg/" target="_blank" rel="noopener">Nanyang Technological University</a> (<a href="https://www.ntu.edu.sg/computing" target="_blank" rel="noopener">College of Computing and Data Science</a>). Singapore. Supervised by <a href="https://dr.ntu.edu.sg/entities/person/Tao-Dacheng" target="_blank" rel="noopener">Prof. Dacheng Tao</a>.',
                home_education_buaa_phd: '<strong>Ph.D. Candidate, Computer Science</strong>, <a href="https://www.buaa.edu.cn/" target="_blank" rel="noopener">Beihang University</a> (<a href="https://scse.buaa.edu.cn/" target="_blank" rel="noopener">School of Computer Science and Engineering</a>). Beijing, China. Supervised by <a href="https://xlliu-beihang.github.io/" target="_blank" rel="noopener">Prof. Xianglong Liu</a> and <a href="https://dr.ntu.edu.sg/entities/person/Tao-Dacheng" target="_blank" rel="noopener">Prof. Dacheng Tao</a>.',
                home_education_buaa_bachelor: '<strong>B.Eng., Computer Science</strong>, <a href="https://www.buaa.edu.cn/" target="_blank" rel="noopener">Beihang University</a> (<a href="https://scse.buaa.edu.cn/" target="_blank" rel="noopener">School of Computer Science and Engineering</a>). Beijing, China. GPA: 3.80/4.0; rank: 25/257.',
                home_award_doctoral_fund: '<strong>Outstanding Doctoral Academic Fund</strong>, Beihang University. CNY 40,000.',
                home_award_state_scholarship: '<strong>State Scholarship Fund</strong>, China Scholarship Council. SGD 26,400 (approx. CNY 140,000).',
                home_award_national_scholarship: '<strong>National Scholarship for Graduate Students</strong>, Ministry of Education of the P.R. China. CNY 50,000.',
                home_award_academic_achievement: '<strong>Outstanding Academic Achievement Award</strong>, Beihang University.',
                home_award_doctoral_scholarship: '<strong>Doctoral Academic Scholarship</strong>, First Prize, Beihang University.',
                fund_completion_title: 'Outstanding Doctoral Academic Fund Completion',
                fund_completion_desc: 'Successfully passed the completion review for the Outstanding Doctoral Academic Fund at Beihang University.',
                fund_completion_date: 'Jun 2026',
                timeline_page_title: 'Timeline',
                timeline_page_subtitle: 'Latest updates, publications, and milestones.',
                timeline_phd_completion_title: '⭐️ Expected Ph.D. Completion and Open to Industry Opportunities ⭐️',
                timeline_phd_completion_desc: 'Expected to complete my Ph.D. in December 2026 (returned to China in July 2026). I am actively exploring industry opportunities and warmly welcome interview invitations.',
                timeline_phd_completion_date: 'Dec 2026',
                timeline_icml_seoul_title: 'ICML 2026 @ Seoul, Korea',
                timeline_icml_seoul_desc: 'Reconnected with longtime collaborators and met researchers and practitioners from across the AI industry.',
                timeline_icml_seoul_date: 'Jul 2026',
                timeline_gold_reviewer_title: 'Gold Reviewer at ICML 2026',
                timeline_gold_reviewer_desc: 'Recognized as a Gold Reviewer for ICML 2026.',
                timeline_gold_reviewer_date: 'May 2026',
                timeline_icml_2026_title: 'Two Papers Accepted at ICML 2026',
                timeline_icml_2026_desc: '"<a href="https://openreview.net/pdf?id=oreET6Wz52" target="_blank" rel="noopener">Attribution-Guided and Coverage-Maximized Pruning for Structural MoE Compression</a>" was accepted as a spotlight paper, and "<a href="https://arxiv.org/pdf/2602.02544" target="_blank" rel="noopener">SPA-Cache: Singular Proxies for Adaptive Caching in Diffusion Language Models</a>" was accepted at ICML 2026.',
                timeline_icml_2026_date: 'Apr 2026',
                timeline_iclr_2026_title: 'Paper Accepted at ICLR 2026',
                timeline_iclr_2026_desc: '"<a href="https://arxiv.org/pdf/2505.11497" target="_blank" rel="noopener">QVGen: Pushing the Limit of Quantized Video Generative Models</a>" accepted at ICLR 2026.',
                timeline_iclr_2026_date: 'Jan 2026',
                timeline_eclr_program_title: 'Program Chair for ECLR Workshop at ICCV 2025',
                timeline_eclr_program_desc: 'Served as Program Chair for the <a href="https://eclr-workshop.github.io/" target="_blank" rel="noopener">2nd Workshop on Efficient Computing under Limited Resources: Visual Computing</a>.',
                timeline_eclr_program_date: 'Oct 2025',
                timeline_acl_2025_title: 'Paper Accepted at ACL 2025',
                timeline_acl_2025_desc: '"<a href="https://aclanthology.org/2025.acl-long.550.pdf" target="_blank" rel="noopener">Dynamic Parallel Tree Search for Efficient LLM Reasoning</a>" accepted at ACL 2025.',
                timeline_acl_2025_date: 'May 2025',
                timeline_neurips_2025_title: 'Paper Accepted at NeurIPS 2025',
                timeline_neurips_2025_desc: '"<a href="https://arxiv.org/pdf/2505.18809" target="_blank" rel="noopener">VORTA: Efficient Video Diffusion via Routing Sparse Attention</a>" accepted at NeurIPS 2025.',
                timeline_fund_award_title: 'Outstanding Doctoral Academic Fund',
                timeline_fund_award_desc: 'Received the Outstanding Doctoral Academic Fund from Beihang University.',
                timeline_fund_award_date: 'Apr 2025',
                timeline_national_scholarship_title: 'National Scholarship for Graduate Students',
                timeline_national_scholarship_desc: 'Received the National Scholarship for Graduate Students from the Ministry of Education of the P.R. China.',
                timeline_national_scholarship_date: 'Nov 2024',
                timeline_state_scholarship_title: 'State Scholarship Fund',
                timeline_state_scholarship_desc: 'Awarded by the China Scholarship Council to support joint doctoral research.',
                timeline_state_scholarship_date: 'Jul 2024',
                timeline_ntu_visit_title: 'Started Visiting Research at Nanyang Technological University',
                timeline_ntu_visit_desc: 'Visited Nanyang Technological University in Singapore, supervised by Prof. Dacheng Tao.',
                timeline_ntu_visit_date: 'Nov 2024',
                timeline_emclr_publicity_title: 'Publicity Chair for EMCLR Workshop at ACM MM 2024',
                timeline_emclr_publicity_desc: 'Publicity Chair at <a href="https://eclr-workshop.github.io/index_2024.html" target="_blank" rel="noopener">the 1st International Workshop on Efficient Multimedia Computing under Limited Resources</a> at ACM MM 2024.',
                timeline_emclr_publicity_date: 'Oct 2024',
                timeline_glow_local_title: 'Local Arrangement Chair for GLOW Workshop at IJCAI 2024',
                timeline_glow_local_desc: 'Local Arrangement Chair at <a href="https://glow-ijcai.github.io/" target="_blank" rel="noopener">the 2nd International Workshop on Generalizing from Limited Resources in the Open World</a> at IJCAI 2024. Responsible for on-site logistics and coordination to ensure smooth conference operations.',
                timeline_glow_local_date: 'Aug 2024',
                timeline_student_editor_title: 'Student Editor for Springer CCIS Volume',
                timeline_student_editor_desc: 'Co-edited the Springer CCIS volume <a href="https://link.springer.com/book/10.1007/978-981-97-6125-8" target="_blank" rel="noopener"><em>Generalizing from Limited Resources in the Open World</em></a>.',
                timeline_student_editor_date: 'Aug 2024',
                timeline_reg_ptq_title: 'Paper Accepted at CVPR 2024',
                timeline_reg_ptq_desc: '"Reg-PTQ: Regression-specialized Post-training Quantization for Fully Quantized Object Detector" accepted at CVPR 2024.',
                timeline_reg_ptq_date: 'Jun 2024',
                timeline_proposal_title: 'Passed Ph.D. Proposal Defense with Outstanding Recognition',
                timeline_proposal_desc: 'Passed the Ph.D. proposal defense at Beihang University and received Outstanding Proposal recognition.',
                timeline_proposal_date: 'Mar 2024',
                timeline_academic_affairs_title: 'Undergraduate Academic Affairs Assistant at Beihang University',
                timeline_academic_affairs_desc: 'Served as an Undergraduate Academic Affairs Assistant at Beihang University.',
                timeline_academic_affairs_date: 'Jul 2022 - Jul 2023',
                timeline_course_ta_title: 'Teaching Assistant for English-Medium Courses',
                timeline_course_ta_desc: 'Served as Teaching Assistant for "Western Art and Ideas" in Spring 2023 and "Cambridge English and Culture" in Fall 2022, both taught entirely in English.',
                timeline_course_ta_date: 'Fall 2022 & Spring 2023',
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
                timeline_tag_activity: 'Activity',
                timeline_tag_milestone: 'Milestone',
                timeline_tag_internship: 'Internship',
                timeline_tag_education: 'Education',
                timeline_tag_opportunity: 'Opportunity',
                timeline_tag_service: 'Service',
                timeline_tag_career: 'Career',
                timeline_tag_award: 'Award',
                timeline_tag_publication: 'Publication',
                timeline_filter_label: 'Filter',
                timeline_filter_clear: 'Clear',

                workshops_page_title: 'Workshops',
                workshops_page_subtitle: 'Workshop services and academic organization activities.',
                workshops_quick_links_title: 'Quick Links for Workshop Series',
                workshop_event_eclr_3: '<strong>Program Chair</strong> at the 3rd ECLR workshop: Efficient Computing under Limited Resources: Modern AI Models and Systems. <strong><u>(Proposal prepared for submission. Speaker invitations are still open.)</u></strong>.',
                workshop_event_glow_4: 'My lab colleagues held <a href="https://glow-ijcai-2026.github.io/glow-ijcai-2026/" target="_blank" rel="noopener">the 4th International Workshop on Generalizing from Limited Resources in the Open World</a> at IJCAI 2026 in Bremen, Germany.',
                workshop_event_advml_6: 'My lab colleagues held <a href="https://cvpr26-advml.github.io/" target="_blank" rel="noopener">the 6th Workshop of Adversarial Machine Learning on Computer Vision: Safety of Vision-Language Agents</a> at CVPR 2026. Welcome to follow!',
                workshop_event_eclr_2: '<strong>Program Chair</strong> at <a href="https://eclr-workshop.github.io/" target="_blank" rel="noopener">the 2nd Workshop on Efficient Computing under Limited Resources: Visual Computing</a> at ICCV 2025. Responsible for full process coordination, including workshop promotion, reviewer assignment, decision organization, and final camera-ready metadata submission.',
                workshop_event_glow_3: 'My lab colleagues held <a href="https://glow-ijcai-2025.github.io/glow-ijcai-2025" target="_blank" rel="noopener">the 3rd International Workshop on Generalizing from Limited Resources in the Open World</a> at IJCAI 2025. Welcome to follow!',
                workshop_event_practical_4: 'My lab colleagues held <a href="https://practical-dl.github.io/" target="_blank" rel="noopener">the 4th Workshop on Practical Deep Learning: Toward Robust Compressed Foundation Models in the Real World</a> at IJCAI 2025 in Montreal, Canada.',
                workshop_event_emclr_1: '<strong>Publicity Chair</strong> at <a href="https://eclr-workshop.github.io/index_2024.html" target="_blank" rel="noopener">the 1st International Workshop on Efficient Multimedia Computing under Limited Resources</a> at ACM MM 2024.',
                workshop_event_glow_2: '<strong>Local Arrangement Chair</strong> at <a href="https://glow-ijcai.github.io/" target="_blank" rel="noopener">the 2nd International Workshop on Generalizing from Limited Resources in the Open World</a> at IJCAI 2024. Responsible for on-site logistics and coordination to ensure smooth conference operations.',
                workshop_event_practical_3: 'My lab colleagues held <a href="https://practical-dl.github.io/" target="_blank" rel="noopener">the 3rd International Workshop on Practical Deep Learning: Towards Efficient and Reliable LLMs</a> at IEEE CAI 2024 in Singapore.',
                workshop_event_glow_1: 'My lab colleagues held <a href="https://sites.google.com/view/glow-ijcai-23" target="_blank" rel="noopener">the 1st International Workshop on Generalizing from Limited Resources in the Open World</a> at IJCAI 2023 in Macao, S.A.R.',
                workshop_event_practical_2: 'My lab colleagues held <a href="https://practical-dl.github.io/2023/index" target="_blank" rel="noopener">the 2nd International Workshop on Practical Deep Learning in the Wild</a> at AAAI 2023 in Washington, D.C.',
                workshop_event_practical_1: 'My lab colleagues held <a href="https://practical-dl.github.io/2022/index" target="_blank" rel="noopener">the 1st International Workshop on Practical Deep Learning in the Wild</a> at AAAI 2022.',
                workshop_date_tbd: 'TBD',
                workshop_date_jun_2026: 'Jun 2026',
                workshop_date_oct_2025: 'Oct 2025',
                workshop_date_aug_2025: 'Aug 2025',
                workshop_date_oct_2024: 'Oct 2024',
                workshop_date_aug_2024: 'Aug 2024',
                workshop_date_jun_2024: 'Jun 2024',
                workshop_date_aug_2023: 'Aug 2023',
                workshop_date_feb_2023: 'Feb 2023',
                workshop_date_feb_2022: 'Feb 2022',
                
                btn_view_research: 'Research',
                btn_view_research_2: 'View Research →',
                btn_hobby_studio: 'Photography Portfolio',
                dropdown_photography: 'Photography',
                dropdown_reading: 'Reading',
                dropdown_development: 'Development',
                metrics_publications: 'Publications',
                metrics_citations: 'Citations',
                metrics_papers: 'Papers',
                metrics_h_index: 'h-index',
                metrics_i10_index: 'i10-index',
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
                research_description: 'AI Infra researcher and Ph.D. candidate in Computer Science, working across model compression, inference optimization, and high-performance CUDA kernels to make foundation models faster and cheaper to deploy.',
                research_statistics_title: 'Statistics',
                research_photo_credit: 'Photo taken by Yifu Ding in Yellowknife, Canada, December 2025 - Northern Lights',
                research_focus_title: 'Research Focus',
                research_focus_1: '<strong>High-performance kernels</strong> for low-bit, sparse, and hardware-aware computation, hand-tuned with Triton and CUDA for GPUs and FPGAs.',
                research_focus_2: '<strong>Model compression</strong> through quantization, pruning, and knowledge distillation for large language models, MoE models, and generative models.',
                research_focus_3: '<strong>Inference optimization</strong>, including KV cache and decoding strategies, expert routing/skipping, and attention/step caching for faster generation.',
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
                scroll_to_explore: 'Scroll to explore',
                back_to_academic_homepage: 'Back to my academic homepage',
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
                availability_title: 'Availability in Next 7 Days',
                availability_subtitle: 'Auto-synced from my calendar.',
                availability_legend_busy: 'Busy',
                availability_legend_free: 'Free',
                availability_loading: 'Loading availability…',
                
                // Common
                loading: 'Loading...',
                read_more: 'Read more',
                view_details: 'View details',
                close: 'Close',
                load_more_papers: 'Load More Papers',
                load_more_news: 'Load More Updates',
                load_more_repositories: 'Load More Repositories',
                load_more_workshops: 'Load More Workshop News',
                go_to_publication_page: 'Go to Publication Page',
                go_to_timeline_page: 'Go to Timeline Page',
                go_to_workshop_page: 'Go to Workshop Page',
                go_to_repositories_page: 'Go to Repositories Page',
                
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
                intro_supervised: '导师：',
                intro_prof_liu: '刘祥龙教授',
                intro_prof_tao: '陶大程教授',
                intro_and: '与',
                intro_research_label: '研究方向：',
                intro_research_area: 'AI Infra：高性能算子、模型压缩与推理优化',
                tag_high_perf_kernels: '高性能算子',
                tag_model_compression: '模型压缩',
                tag_inference_acceleration: '推理加速',
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
                home_updates_title: '📌 近期动态',
                home_recent_papers_title: '📄 近期论文',
                home_workshops_title: '👥 学术研讨会',
                home_education_title: '📖 教育经历',
                home_awards_title: '🏆 荣誉与资助',
                selected_repositories_title: '📦 精选代码仓库',
                sidebar_back_top: '返回顶部',
                sidebar_updates: '近期动态',
                sidebar_recent_papers: '近期论文',
                sidebar_repositories: '代码仓库',
                sidebar_workshops: '研讨会',
                sidebar_education: '教育经历',
                sidebar_awards: '荣誉奖项',
                sidebar_a_few_words: '一些感想',
                sidebar_reflections: '一些哲思',
                reflections_title: '✍️ 一些哲思',
                reflections_subtitle: '在这里记录一些阶段性的思考与感受，欢迎随时<a href="contact.html">找我交流</a>。',
                thought_label: '随笔',
                thought_1_title: 'AI Infra 的未来发展',
                thought_1_desc: '从历史规律和当前技术趋势出发，对 AI 基础设施的演进方向做阶段性的思考。',
                writing_back: '← 返回随想',
                writing_read_time: '约 5 分钟',
                writing_footer: '如果你读完之后有自己的看法，欢迎随时<a href="contact.html">找我聊聊</a>。',
                sidebar_collaborators: '合作者',
                research_sidebar_overview: '概览',
                research_sidebar_selected: '精选论文',
                research_sidebar_kernels: '高性能算子与内核',
                research_sidebar_compression: '模型压缩',
                research_sidebar_inference: '推理优化',
                research_sidebar_all_publications: '全部论文',
                research_selected_publications_title: '精选论文',
                collaborator_zihao: '我所见过最有天赋、也最细致的 AI 研究者。',
                collaborator_xingyu: '勤奋且专注的同门，在扩散模型领域有深入见解。',
                collaborator_jinyang: '我博士期间的指导老师之一，始终给予支持，并慷慨分享富有洞见的建议。',
                collaborator_wenhao: '热心且积极的视频扩散模型加速研究者，拥有丰富的业界经验。',
                collaborator_zining: '幽默风趣、抗压能力很强的同门，曾在字节跳动 Seed 团队从事研究。',
                collaborator_yushi: '高产的开源 AI 研究者，在大模型视觉理解领域卓有见地。',
                collaborators_section_title: '🤝 合作者快速链接',
                about_me_title: '👋 一些感想',
                about_me_paragraph_1: '毕业季比以往任何一年的博士生涯更忙碌。目前，我仍有几个负责或参与的项目正在推进中，具体可见 <a href="research.html">Research 页面</a>中的 ongoing projects。其中一些成果即将发布，也有一些已经持续探索了两年多，仍处在黎明前的黑暗中。',
                about_me_paragraph_2: '我很幸运，在博士阶段始终探索着最前沿的研究问题，也与最优秀的研究者们并肩合作，让六年的博士生活如白驹过隙。随着这个阶段逐渐接近尾声，我兴奋并且期待接下来在工业界的新旅程。',
                about_me_paragraph_3: '研究之外，我也喜欢旅行和摄影。如果你感兴趣，可以在这里查看我的<a href="studio.html">作品集📷</a>。',
                update_fund_completion: '顺利通过北京航空航天大学<strong>优秀博士研究生学术卓越基金</strong>结题验收。',
                update_sam2_glow_2026: '一篇论文<span class="paper-title">“Layer Sensitivity Matters: Mixed-Precision Post-Training Quantization for SAM2 Video Segmentation”</span>被 <strong>GLOW @ IJCAI 2026</strong> 接收。祝贺 Wenyu Zhou！',
                update_sam2_glow_2026_date: '2026年6月',
                update_eclr_3_speakers: '诚邀潜在演讲嘉宾加入今年的研讨会：<strong>第 3 届有限资源下的高效计算：现代 AI 模型与系统</strong>。往届主页：<a href="https://eclr-workshop.github.io/" target="_blank" rel="noopener">ICCV 2025 第 2 届</a>，<a href="https://eclr-workshop.github.io/index_2024.html" target="_blank" rel="noopener">ACM MM 2024 第 1 届</a>。',
                update_glow_4_2026: '我的实验室同事将在德国不来梅 IJCAI 2026 举办<a href="https://glow-ijcai-2026.github.io/glow-ijcai-2026/" target="_blank" rel="noopener"><strong>第 4 届开放世界中的有限资源泛化国际研讨会</strong></a>，欢迎关注和参加。',
                update_icml_2026: '两篇论文被 <strong>ICML 2026</strong> 接收：“<a href="https://openreview.net/forum?id=oreET6Wz52" target="_blank" rel="noopener">Attribution-Guided and Coverage-Maximized Pruning for Structural MoE Compression</a>” 和 “<a href="https://icml.cc/virtual/2026/poster/66363" target="_blank" rel="noopener">SPA-Cache: Singular Proxies for Adaptive Caching in Diffusion Language Models</a>”。祝贺合作者们！',
                update_iclr_2026: '一篇论文被 <strong>ICLR 2026</strong> 接收：“<a href="https://arxiv.org/pdf/2505.11497" target="_blank" rel="noopener">QVGen: Pushing the Limit of Quantized Video Generative Models</a>”。祝贺 <a href="https://harahan.github.io/" target="_blank" rel="noopener">Yushi Huang</a>！',
                update_acl_2025: '一篇论文被 <strong>ACL 2025</strong> 接收：“<a href="https://aclanthology.org/2025.acl-long.550.pdf" target="_blank" rel="noopener">Dynamic Parallel Tree Search for Efficient LLM Reasoning</a>”。',
                home_education_ntu: '<strong>联合培养博士生</strong>，<a href="https://www.ntu.edu.sg/" target="_blank" rel="noopener">新加坡南洋理工大学</a>（<a href="https://www.ntu.edu.sg/computing" target="_blank" rel="noopener">College of Computing and Data Science</a>）。新加坡。导师：<a href="https://dr.ntu.edu.sg/entities/person/Tao-Dacheng" target="_blank" rel="noopener">陶大程教授</a>。',
                home_education_buaa_phd: '<strong>计算机科学博士研究生</strong>，<a href="https://www.buaa.edu.cn/" target="_blank" rel="noopener">北京航空航天大学</a>（<a href="https://scse.buaa.edu.cn/" target="_blank" rel="noopener">计算机学院</a>）。中国北京。导师：<a href="https://xlliu-beihang.github.io/" target="_blank" rel="noopener">刘祥龙教授</a>与<a href="https://dr.ntu.edu.sg/entities/person/Tao-Dacheng" target="_blank" rel="noopener">陶大程教授</a>。',
                home_education_buaa_bachelor: '<strong>工学学士，计算机科学与技术</strong>，<a href="https://www.buaa.edu.cn/" target="_blank" rel="noopener">北京航空航天大学</a>（<a href="https://scse.buaa.edu.cn/" target="_blank" rel="noopener">计算机学院</a>）。中国北京。GPA：3.80/4.0；排名：25/257。',
                home_award_doctoral_fund: '<strong>优秀博士研究生学术卓越基金</strong>，北京航空航天大学。人民币 40,000 元。',
                home_award_state_scholarship: '<strong>国家留学基金</strong>，国家留学基金管理委员会。新币 26,400 元（约人民币 140,000 元）。',
                home_award_national_scholarship: '<strong>研究生国家奖学金</strong>，中华人民共和国教育部。人民币 50,000 元。',
                home_award_academic_achievement: '<strong>优秀学术成果奖</strong>，北京航空航天大学。',
                home_award_doctoral_scholarship: '<strong>博士研究生学业奖学金</strong>，一等奖，北京航空航天大学。',
                fund_completion_title: '优秀博士研究生学术卓越基金结题',
                fund_completion_desc: '顺利通过北京航空航天大学优秀博士研究生学术卓越基金结题验收。',
                fund_completion_date: '2026年6月',
                timeline_page_title: '时间线',
                timeline_page_subtitle: '近期动态、论文发表与重要里程碑。',
                timeline_phd_completion_title: '⭐️ 即将完成博士学业，并广泛寻找业界机会 ⭐️',
                timeline_phd_completion_desc: '预计于 2026 年 12 月完成博士学业（已于 2026 年 7 月回国）。目前正积极探索业界机会，欢迎相关面试邀约。',
                timeline_phd_completion_date: '2026年12月',
                timeline_icml_seoul_title: '去韩国首尔参与 ICML 2026',
                timeline_icml_seoul_desc: '与多年合作者重聚，结识了来自 AI 业界各方向的研究者与工程师。',
                timeline_icml_seoul_date: '2026年7月',
                timeline_gold_reviewer_title: '获评 ICML 2026 金牌审稿人',
                timeline_gold_reviewer_desc: '获评 ICML 2026 金牌审稿人。',
                timeline_gold_reviewer_date: '2026年5月',
                timeline_icml_2026_title: '两篇论文被 ICML 2026 接收',
                timeline_icml_2026_desc: '论文“<a href="https://openreview.net/pdf?id=oreET6Wz52" target="_blank" rel="noopener">Attribution-Guided and Coverage-Maximized Pruning for Structural MoE Compression</a>”被接收为 Spotlight，论文“<a href="https://arxiv.org/pdf/2602.02544" target="_blank" rel="noopener">SPA-Cache: Singular Proxies for Adaptive Caching in Diffusion Language Models</a>”被 ICML 2026 接收。',
                timeline_icml_2026_date: '2026年4月',
                timeline_iclr_2026_title: '论文被 ICLR 2026 接收',
                timeline_iclr_2026_desc: '论文“<a href="https://arxiv.org/pdf/2505.11497" target="_blank" rel="noopener">QVGen: Pushing the Limit of Quantized Video Generative Models</a>”被 ICLR 2026 接收。',
                timeline_iclr_2026_date: '2026年1月',
                timeline_eclr_program_title: '担任 ICCV 2025 ECLR Workshop 程序主席',
                timeline_eclr_program_desc: '担任<a href="https://eclr-workshop.github.io/" target="_blank" rel="noopener">第 2 届有限资源下的高效计算：视觉计算研讨会</a>程序主席。',
                timeline_eclr_program_date: '2025年10月',
                timeline_acl_2025_title: '论文被 ACL 2025 接收',
                timeline_acl_2025_desc: '论文“<a href="https://aclanthology.org/2025.acl-long.550.pdf" target="_blank" rel="noopener">Dynamic Parallel Tree Search for Efficient LLM Reasoning</a>”被 ACL 2025 接收。',
                timeline_acl_2025_date: '2025年5月',
                timeline_neurips_2025_title: '论文被 NeurIPS 2025 接收',
                timeline_neurips_2025_desc: '论文“<a href="https://arxiv.org/pdf/2505.18809" target="_blank" rel="noopener">VORTA: Efficient Video Diffusion via Routing Sparse Attention</a>”被 NeurIPS 2025 接收。',
                timeline_fund_award_title: '获北京航空航天大学优秀博士研究生学术卓越基金',
                timeline_fund_award_desc: '获得北京航空航天大学优秀博士研究生学术卓越基金资助。',
                timeline_fund_award_date: '2025年4月',
                timeline_national_scholarship_title: '获研究生国家奖学金',
                timeline_national_scholarship_desc: '获得中华人民共和国教育部研究生国家奖学金。',
                timeline_national_scholarship_date: '2024年11月',
                timeline_state_scholarship_title: '获国家留学基金资助',
                timeline_state_scholarship_desc: '获得国家留学基金管理委员会资助，支持博士联合培养研究。',
                timeline_state_scholarship_date: '2024年7月',
                timeline_ntu_visit_title: '赴南洋理工大学访问研究',
                timeline_ntu_visit_desc: '前往新加坡南洋理工大学访问，师从陶大程教授。',
                timeline_ntu_visit_date: '2024年11月',
                timeline_emclr_publicity_title: '担任 ACM MM 2024 EMCLR Workshop 宣传主席',
                timeline_emclr_publicity_desc: '担任 ACM MM 2024 <a href="https://eclr-workshop.github.io/index_2024.html" target="_blank" rel="noopener">第 1 届有限资源下的高效多媒体计算国际研讨会</a>宣传主席。',
                timeline_emclr_publicity_date: '2024年10月',
                timeline_glow_local_title: '担任 IJCAI 2024 GLOW Workshop 会务主席',
                timeline_glow_local_desc: '担任 IJCAI 2024 <a href="https://glow-ijcai.github.io/" target="_blank" rel="noopener">第 2 届开放世界中的有限资源泛化国际研讨会</a>会务主席，负责现场会务和协调工作，保障会议顺利进行。',
                timeline_glow_local_date: '2024年8月',
                timeline_student_editor_title: '担任 Springer CCIS 丛书学生编辑',
                timeline_student_editor_desc: '共同编辑 Springer CCIS 丛书<a href="https://link.springer.com/book/10.1007/978-981-97-6125-8" target="_blank" rel="noopener"><em>Generalizing from Limited Resources in the Open World</em></a>。',
                timeline_student_editor_date: '2024年8月',
                timeline_reg_ptq_title: '论文被 CVPR 2024 接收',
                timeline_reg_ptq_desc: '论文“Reg-PTQ: Regression-specialized Post-training Quantization for Fully Quantized Object Detector”被 CVPR 2024 接收。',
                timeline_reg_ptq_date: '2024年6月',
                timeline_proposal_title: '博士开题答辩通过并获优秀开题',
                timeline_proposal_desc: '在北京航空航天大学通过博士开题答辩，并获得优秀开题。',
                timeline_proposal_date: '2024年3月',
                timeline_academic_affairs_title: '北京航空航天大学本科生教务助理',
                timeline_academic_affairs_desc: '担任北京航空航天大学本科生教务助理。',
                timeline_academic_affairs_date: '2022年7月 - 2023年7月',
                timeline_course_ta_title: '全英文课程助教',
                timeline_course_ta_desc: '担任 2023 年春季《西方美术与观念》和 2022 年秋季《剑桥英语与文化》全英文课程助教。',
                timeline_course_ta_date: '2022年秋季与2023年春季',
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
                timeline_tag_activity: '活动',
                timeline_tag_milestone: '里程碑',
                timeline_tag_internship: '实习',
                timeline_tag_education: '教育',
                timeline_tag_opportunity: '机会',
                timeline_tag_service: '服务',
                timeline_tag_career: '职业',
                timeline_tag_award: '奖项',
                timeline_tag_publication: '论文',
                timeline_filter_label: '筛选',
                timeline_filter_clear: '清除',

                workshops_page_title: '研讨会',
                workshops_page_subtitle: '学术研讨会服务与组织经历。',
                workshops_quick_links_title: 'Workshop 系列快速链接',
                workshop_event_eclr_3: '担任第 3 届 ECLR Workshop：有限资源下的高效计算：现代 AI 模型与系统的<strong>程序主席</strong>。<strong><u>（提案准备提交中，演讲嘉宾邀请仍在进行。）</u></strong>',
                workshop_event_glow_4: '实验室同事在德国不来梅举行的 IJCAI 2026 上举办<a href="https://glow-ijcai-2026.github.io/glow-ijcai-2026/" target="_blank" rel="noopener">第 4 届开放世界中的有限资源泛化国际研讨会</a>。',
                workshop_event_advml_6: '实验室同事在 CVPR 2026 上举办<a href="https://cvpr26-advml.github.io/" target="_blank" rel="noopener">第 6 届计算机视觉对抗机器学习研讨会：视觉语言智能体安全</a>，欢迎关注！',
                workshop_event_eclr_2: '担任 ICCV 2025 <a href="https://eclr-workshop.github.io/" target="_blank" rel="noopener">第 2 届有限资源下的高效计算：视觉计算研讨会</a><strong>程序主席</strong>，负责宣传、审稿人分配、录用决策组织和终稿元数据提交等全流程协调工作。',
                workshop_event_glow_3: '实验室同事在 IJCAI 2025 上举办<a href="https://glow-ijcai-2025.github.io/glow-ijcai-2025" target="_blank" rel="noopener">第 3 届开放世界中的有限资源泛化国际研讨会</a>，欢迎关注！',
                workshop_event_practical_4: '实验室同事在加拿大蒙特利尔举行的 IJCAI 2025 上举办<a href="https://practical-dl.github.io/" target="_blank" rel="noopener">第 4 届实用深度学习研讨会：面向真实世界鲁棒压缩基础模型</a>。',
                workshop_event_emclr_1: '担任 ACM MM 2024 <a href="https://eclr-workshop.github.io/index_2024.html" target="_blank" rel="noopener">第 1 届有限资源下的高效多媒体计算国际研讨会</a><strong>宣传主席</strong>。',
                workshop_event_glow_2: '担任 IJCAI 2024 <a href="https://glow-ijcai.github.io/" target="_blank" rel="noopener">第 2 届开放世界中的有限资源泛化国际研讨会</a><strong>会务主席</strong>，负责现场会务和协调工作，保障会议顺利进行。',
                workshop_event_practical_3: '实验室同事在新加坡举行的 IEEE CAI 2024 上举办<a href="https://practical-dl.github.io/" target="_blank" rel="noopener">第 3 届实用深度学习国际研讨会：面向高效可靠的大语言模型</a>。',
                workshop_event_glow_1: '实验室同事在中国澳门举行的 IJCAI 2023 上举办<a href="https://sites.google.com/view/glow-ijcai-23" target="_blank" rel="noopener">第 1 届开放世界中的有限资源泛化国际研讨会</a>。',
                workshop_event_practical_2: '实验室同事在美国华盛顿特区举行的 AAAI 2023 上举办<a href="https://practical-dl.github.io/2023/index" target="_blank" rel="noopener">第 2 届真实场景中的实用深度学习国际研讨会</a>。',
                workshop_event_practical_1: '实验室同事在 AAAI 2022 上举办<a href="https://practical-dl.github.io/2022/index" target="_blank" rel="noopener">第 1 届真实场景中的实用深度学习国际研讨会</a>。',
                workshop_date_tbd: '待定',
                workshop_date_jun_2026: '2026年6月',
                workshop_date_oct_2025: '2025年10月',
                workshop_date_aug_2025: '2025年8月',
                workshop_date_oct_2024: '2024年10月',
                workshop_date_aug_2024: '2024年8月',
                workshop_date_jun_2024: '2024年6月',
                workshop_date_aug_2023: '2023年8月',
                workshop_date_feb_2023: '2023年2月',
                workshop_date_feb_2022: '2022年2月',
                
                btn_view_research: '研究工作',
                btn_view_research_2: '查看研究 →',
                btn_hobby_studio: '摄影作品集',
                dropdown_photography: '摄影',
                dropdown_reading: '阅读',
                dropdown_development: '开发',
                metrics_publications: '论文',
                metrics_citations: '引用',
                metrics_papers: '论文',
                metrics_h_index: 'h指数',
                metrics_i10_index: 'i10指数',
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
                research_description: 'AI Infra 研究者，计算机专业博士研究生，研究方向涵盖模型压缩、推理优化与高性能 CUDA 算子，致力于让基础模型的部署更快、更省成本。',
                research_statistics_title: '论文与引用',
                research_photo_credit: '照片由丁一芙拍摄于2025年12月加拿大黄刀镇 - 极光',
                research_focus_title: '研究重点',
                research_focus_1: '<strong>高性能算子与内核</strong>：面向低比特、稀疏和硬件感知计算，基于 Triton 和 CUDA 针对 GPU 与 FPGA 进行硬件协同设计。',
                research_focus_2: '<strong>模型压缩</strong>：面向大语言模型、MoE 模型及生成式模型的量化、剪枝与知识蒸馏。',
                research_focus_3: '<strong>推理优化</strong>：涵盖 KV 缓存与解码策略、专家路由/跳过，以及注意力与扩散步数缓存加速等技术。',
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
                scroll_to_explore: '向下滚动，探索作品',
                back_to_academic_homepage: '返回我的学术主页',
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
                availability_title: '未来 7 天日程安排',
                availability_subtitle: '自动同步自我的日历。',
                availability_legend_busy: '忙碌',
                availability_legend_free: '空闲',
                availability_loading: '正在加载日程…',

                // 通用
                loading: '加载中...',
                read_more: '阅读更多',
                view_details: '查看详情',
                close: '关闭',
                load_more_papers: '加载更多论文',
                load_more_news: '加载更多动态',
                load_more_repositories: '加载更多代码仓库',
                load_more_workshops: '加载更多研讨会动态',
                go_to_publication_page: '前往论文页面',
                go_to_timeline_page: '前往时间线页面',
                go_to_workshop_page: '前往研讨会页面',
                go_to_repositories_page: '前往代码仓库页面',
                
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

    sanitizeTranslationHtml(html) {
        const template = document.createElement('template');
        template.innerHTML = html;
        const allowedTags = new Set(['A', 'STRONG', 'U', 'EM']);

        Array.from(template.content.querySelectorAll('*')).forEach(element => {
            if (!allowedTags.has(element.tagName)) {
                element.replaceWith(...element.childNodes);
                return;
            }

            if (element.tagName === 'A') {
                const href = element.getAttribute('href') || '';
                const safeHref = /^(https?:\/\/|mailto:|#)/i.test(href)
                    || !/^[a-z][a-z0-9+.-]*:/i.test(href);
                Array.from(element.attributes).forEach(attribute => element.removeAttribute(attribute.name));
                if (safeHref) {
                    element.setAttribute('href', href);
                    if (/^https?:\/\//i.test(href)) {
                        element.setAttribute('target', '_blank');
                        element.setAttribute('rel', 'noopener');
                    }
                }
            } else {
                Array.from(element.attributes).forEach(attribute => element.removeAttribute(attribute.name));
            }
        });

        return template.innerHTML;
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
                element.innerHTML = this.sanitizeTranslationHtml(translations[key]);
            }
        });

        // Update placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (translations[key]) {
                element.placeholder = translations[key];
            }
        });

        window.dispatchEvent(new CustomEvent('languageChanged', {
            detail: { lang: this.currentLang }
        }));
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
    window.languageManager = languageManager;
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
        this.isPortfolioPage = document.body.classList.contains('portfolio-page');
        this.currentTheme = this.isPortfolioPage ? 'dark' : (localStorage.getItem('theme') || 'light');
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

        this.setupMobileMenu();

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
        if (document.body.classList.contains('mobile-menu-open')) return;

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

    setupMobileMenu() {
        const navLeft = this.nav.querySelector('.nav-left');
        const navCenter = this.nav.querySelector('.nav-center');
        const navContainer = this.nav.querySelector('.nav-container');
        const navLinks = this.nav.querySelector('.nav-links');
        const navRight = this.nav.querySelector('.nav-right');
        const navBrand = this.nav.querySelector('.nav-brand');
        if (!navLeft || !navCenter || !navContainer || !navLinks || !navRight) return;

        const toggle = document.createElement('button');
        toggle.className = 'mobile-menu-toggle';
        toggle.type = 'button';
        toggle.setAttribute('aria-label', 'Open navigation menu');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.innerHTML = '<span class="mobile-menu-toggle-icon" aria-hidden="true"></span>';
        navLeft.prepend(toggle);

        const overlay = document.createElement('button');
        overlay.className = 'mobile-menu-overlay';
        overlay.type = 'button';
        overlay.setAttribute('aria-label', 'Close navigation menu');
        document.body.appendChild(overlay);

        const closeMenu = () => {
            document.body.classList.remove('mobile-menu-open');
            toggle.setAttribute('aria-expanded', 'false');
            toggle.setAttribute('aria-label', 'Open navigation menu');
        };

        const updateMenuMode = () => {
            const navLinkItems = Array.from(navLinks.querySelectorAll('.nav-link'));
            const canvas = updateMenuMode.canvas || (updateMenuMode.canvas = document.createElement('canvas'));
            const context = canvas.getContext('2d');
            const linksWidth = navLinkItems.reduce((total, link) => {
                const style = window.getComputedStyle(link);
                context.font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
                return total + context.measureText(link.textContent.trim()).width;
            }, 0)
                + Math.max(0, navLinkItems.length - 1) * 48;
            const requiredWidth =
                90 +
                linksWidth +
                navRight.scrollWidth +
                260;
            const shouldUseMenu = window.innerWidth <= 768 || requiredWidth > navContainer.clientWidth;

            document.body.classList.toggle('nav-menu-mode', shouldUseMenu);
            if (!shouldUseMenu) closeMenu();
        };

        const openMenu = () => {
            this.nav.classList.remove('nav-hidden');
            this.nav.classList.add('nav-visible');
            document.body.classList.add('mobile-menu-open');
            toggle.setAttribute('aria-expanded', 'true');
            toggle.setAttribute('aria-label', 'Close navigation menu');
        };

        toggle.addEventListener('click', () => {
            document.body.classList.contains('mobile-menu-open') ? closeMenu() : openMenu();
        });
        overlay.addEventListener('click', closeMenu);
        navCenter.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
        document.addEventListener('keydown', event => {
            if (event.key === 'Escape') closeMenu();
        });
        window.addEventListener('resize', updateMenuMode);
        document.fonts?.ready.then(updateMenuMode);
        window.requestAnimationFrame(updateMenuMode);
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
  title={SPA-Cache: Singular Proxies for Adaptive Caching in Diffusion Language Models},
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
        loadMoreBtn.classList.add('is-final-action');
        loadMoreBtn.style.display = '';
        loadMoreBtn.removeAttribute('data-i18n');
        const label = loadMoreBtn.querySelector('.load-more-label');
        const currentTranslations = window.languageManager?.translations?.[window.languageManager.currentLang];
        const finalText = finalAction.textKey && currentTranslations?.[finalAction.textKey]
            ? currentTranslations[finalAction.textKey]
            : finalAction.text;
        if (label) {
            if (finalAction.textKey) {
                label.setAttribute('data-i18n', finalAction.textKey);
            } else {
                label.removeAttribute('data-i18n');
            }
            label.textContent = finalText;
        } else {
            loadMoreBtn.textContent = finalText;
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
        textKey: 'go_to_publication_page',
        href: 'research.html#all-publications'
    });
    setupLoadMore('load-more-news', '.updates-timeline > li', 4, 3, '', {
        text: 'Go to Timeline Page',
        textKey: 'go_to_timeline_page',
        href: 'timeline.html'
    });
    setupLoadMore('load-more-workshops', '#workshop-services .workshop-timeline > li', 3, 3, '', {
        text: 'Go to Workshop Page',
        textKey: 'go_to_workshop_page',
        href: 'workshops.html'
    });
    setupLoadMore('load-more-repositories', '#selected-repositories .project-card', 4, 4, 'flex', {
        text: 'Go to Repositories Page',
        textKey: 'go_to_repositories_page',
        href: 'repositories.html'
    });
});
