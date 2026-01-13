// ===========================
// Gallery Page - Photo Collection Display
// ===========================

// 照片集数据配置
// displayType: 'detailed' - 左右布局，有标题和详细介绍
// displayType: 'grid' - 横向滚动网格，只有简短标题或无标题
const galleryData = {
    rocky: {
        location: 'Rocky Mountains 2025',
        title: 'Rocky Mountains',
        titleZh: '落基山脉',
        folder: 'rocky',
        displayType: 'grid', // 网格模式 - 横向滚动
        groups: [
            {
                groupTitle: '湖泊',
                groupTitleEn: 'Lakes',
                images: [
                    {
                        file: 'IMG_2985.JPG',
                        caption: '路易斯湖',
                        captionEn: 'Lake Louise',
                        bgColor: '#E8C8B8'
                    }, 
                    {
                        file: 'IMG_2971.JPG',
                        caption: '路易斯湖',
                        captionEn: 'Lake Louise',
                        bgColor: '#E8C8B8'
                    },
                    {
                        file: 'IMG_0312.JPG',
                        caption: '路易斯湖',
                        captionEn: 'Lake Louise',
                        bgColor: '#E8C8B8'
                    },
                    { 
                        file: 'IMG_3146.JPG',
                        caption: '梦莲湖',
                        captionEn: 'Lake Louise',
                        bgColor: '#C8D5E0'
                    },
                    { 
                        file: 'IMG_2219.JPG',
                        caption: 'Medicine Lake，水位已经很浅',
                        captionEn: 'Medicine Lake with very low water level',
                        bgColor: '#D8E0E8'
                    },
                    { 
                        file: 'IMG_2215.JPG',
                        caption: '明尼旺卡湖',
                        captionEn: 'Lake Minnewanka',
                        bgColor: '#E8EDF2'
                    },
                    { 
                        file: 'IMG_0505.JPG',
                        caption: '梦莲湖的阳光反射，像星星一样明亮',
                        captionEn: 'Sunlight reflections on Lake Louise, bright like stars',
                        bgColor: '#E8C8B8'
                    },
                    { 
                        file: 'IMG_0441.JPG',
                        caption: '梦莲湖的阳光反射，像星星一样明亮',
                        captionEn: 'Star-like reflections on Lake Louise',
                        bgColor: '#B8C8D8'
                    }, 
                    {
                        file: 'IMG_1427.JPG',
                        caption: '猫爪湖',
                        captionEn: 'Cat\'s Paw Lake',
                        bgColor: '#B8C8D8'
                    }, 
                ]
            },
            {
                groupTitle: '冰原',
                groupTitleEn: 'Icefields',
                images: [
                    {
                        file: 'IMG_2205.JPG',
                        caption: '哥伦比亚冰原',
                        captionEn: 'Columbia Icefield',
                        bgColor: '#E8C8B8'
                    }, 
                ]
            },
            {
                groupTitle: '雪景',
                groupTitleEn: 'Snow Landscapes',
                images: [
                    { 
                        file: 'IMG_2224.JPG',
                        caption: '大火后的贾斯伯国家公园，只剩光秃秃的树木',
                        captionEn: 'Jasper National Park after the wildfire, with bare trees remaining',
                        bgColor: '#E8EEF2'
                    },
                    { 
                        file: 'IMG_2222.JPG',
                        caption: '雪中的贾斯伯国家公园',
                        captionEn: 'Jasper National Park in snow',
                        bgColor: '#C8D5E0'
                    },
                    { 
                        file: 'IMG_2218.JPG',
                        caption: '雪中的贾斯伯国家公园',
                        captionEn: 'Snow-covered Jasper National Park',
                        bgColor: '#D5DFE8'
                    },
                    { 
                        file: 'IMG_1394.JPG',
                        caption: '雪中的贾斯伯国家公园',
                        captionEn: 'Jasper National Park under snowfall',
                        bgColor: '#D8E0E8'
                    },
                    { 
                        file: 'IMG_2191.JPG',
                        caption: '雪中的山间木桥',
                        captionEn: 'A wooden bridge in snowy mountains',
                        bgColor: '#E0E8ED'
                    },
                ]
            },

            {
                groupTitle: '瀑布',
                groupTitleEn: 'Waterfalls',
                images: [
                    { 
                        file: 'IMG_2190.JPG',
                        caption: 'Sunwapta Falls',
                        captionEn: 'Sunwapta Falls',
                        bgColor: '#D8E8F0'
                    },
                    { 
                        file: 'IMG_2189.JPG',
                        caption: 'Athabasca Falls',
                        captionEn: 'Athabasca Falls',
                        bgColor: '#E8F0F5'
                    },
                    {
                        file: 'IMG_3323.JPG',
                        caption: 'Mistaya Canyon',
                        captionEn: 'Mistaya Canyon',
                        bgColor: '#D8E8F0'
                    }, 
                    {
                        file: 'IMG_0615.JPG',
                        caption: 'Mistaya Canyon',
                        captionEn: 'Mistaya Canyon',
                        bgColor: '#D8E8F0'
                    }, 
                    
                ]
            }, 

            {
                groupTitle: '山景',
                groupTitleEn: 'Mountains',
                images: [
                    { 
                        file: 'IMG_0154.JPG',
                        caption: '明尼旺卡湖旁的山路',
                        captionEn: 'Mountains by Lake Minnewanka',
                        bgColor: '#D5DFE8'
                    },
                    { 
                        file: 'IMG_0143.JPG',
                        caption: '明尼旺卡湖旁的松林',
                        captionEn: 'Pine forest near Lake Minnewanka',
                        bgColor: '#E8EEF2'
                    },
                    { 
                        file: 'IMG_2195.JPG',
                        caption: '哥伦比亚冰原旁的 Skywalk',
                        captionEn: 'Skywalk near the Columbia Icefield',
                        bgColor: '#C8D5E0'
                    },
                ]
            },
            {
                groupTitle: '人像',
                groupTitleEn: 'Portraits',
                images: [
                    { 
                        file: 'IMG_2172.JPG',
                        caption: 'Maligne Lake，大雪取消游船，在湖边拍下极具氛围感的一幕',
                        captionEn: 'Maligne Lake, boats canceled due to heavy snow, an atmospheric moment by the shore',
                        bgColor: '#C8D8E0'
                    },
                    { 
                        file: 'IMG_1983.JPG',
                        caption: '落基山脉沿线的湖泊之一',
                        captionEn: 'One of the many lakes along the Rocky Mountains',
                        bgColor: '#E0E5E8'
                    }
                ]
            }
        ]
        
    },
    guanajuato: {
        location: 'Guanajuato 2025',
        title: 'Urban Colors',
        titleZh: '城市色彩',
        folder: 'guanajuato',
        displayType: 'detailed', // 详细介绍模式
        images: [
            { 
                file: 'guana4.JPG', 
                title: '层叠的色彩',
                titleEn: 'Layers of Color',
                caption: '彩色的房屋层层叠叠，像是大地的调色板。在这座墨西哥小城里，每一栋建筑都在诉说着生活的故事，鲜艳的色彩映衬着蓝天白云，构成了一幅充满生命力的画面。',
                captionEn: 'Colorful houses stacked layer upon layer, like a palette of the earth. In this Mexican town, each building tells a story of life, with vibrant colors against the blue sky creating a picture full of vitality.',
                bgColor: '#E8D5C4' 
            },
            { 
                file: 'guana2.JPG', 
                title: '黄昏的守望',
                titleEn: 'Twilight Watch',
                caption: '黄昏时分，路灯在暮色中点亮，静静守望着这座历经沧桑的城市。远山与房屋的轮廓在柔和的光线中变得温柔，时间仿佛在这一刻放慢了脚步。',
                captionEn: 'At dusk, the street lamp lights up in the twilight, quietly watching over this weathered city. The silhouettes of distant mountains and houses soften in the gentle light, as if time itself has slowed down.',
                bgColor: '#9BA5C8' 
            },
            { 
                file: 'guana1.JPG', 
                title: '时光凝固处',
                titleEn: 'Where Time Stands Still',
                caption: '老城的街道承载着几个世纪的记忆。石板路、古老的建筑、斑驳的墙壁，每一个细节都在讲述着过往的故事。在这里，历史不是遥远的回忆，而是触手可及的现实。',
                captionEn: 'The streets of the old town carry centuries of memories. Cobblestone roads, ancient buildings, mottled walls—every detail tells stories of the past. Here, history is not a distant memory but a tangible reality.',
                bgColor: '#D4C5B8' 
            },
            { 
                file: 'guana3.JPG', 
                title: '墨西哥色彩美学',
                titleEn: 'Mexican Color Aesthetics',
                caption: '墨西哥的建筑色彩是一种独特的美学表达。明亮而不刺眼，温暖而不过分，这些颜色源于当地的文化传统和自然环境，展现了一种乐观向上的生活态度。',
                captionEn: 'The architectural colors of Mexico are a unique aesthetic expression. Bright but not harsh, warm but not excessive, these colors stem from local cultural traditions and natural environment, showcasing an optimistic attitude toward life.',
                bgColor: '#F5E8D8' 
            },
            { 
                file: 'IMG_3189.JPG', 
                title: '建筑与天空',
                titleEn: 'Architecture and Sky',
                caption: '建筑的垂直线条与天空的水平线形成对话，人造的几何形状与自然的云彩相互呼应。这是一个关于秩序与自由、坚固与流动的视觉对话。',
                captionEn: 'The vertical lines of architecture dialogue with the horizontal line of the sky, man-made geometry echoing natural clouds. This is a visual conversation about order and freedom, solidity and flow.',
                bgColor: '#C8D5E8' 
            }
        ]
    },
    
    'vegetation-landscape': {
        location: 'Nature & Vegetation 2024-2025',
        title: 'Nature & Vegetation',
        titleZh: '自然与植被',
        folder: 'vegetation_n_landscape',
        displayType: 'detailed',
        images: [
            { 
                file: 'IMG_1332.JPG', 
                title: '尼亚加拉瀑布（美国侧）',
                titleEn: 'Niagara Falls (American Side)',
                caption: '傍晚时分，尼亚加拉瀑布在暮色中奔流不息。晚霞从深邃的蓝渐变到温暖的橙，一只热气球静静地悬浮在空中，时间仿佛在这一刻凝固。水声轰鸣，却带不走这份宁静的永恒。',
                captionEn: 'At dusk, Niagara Falls flows ceaselessly in the twilight. The evening glow transitions from deep blue to warm orange, while a hot air balloon hovers motionless in the sky, as if time itself has frozen. The roaring water cannot carry away this moment of serene eternity.',
                bgColor: '#B8D0E0' 
            },
            { 
                file: 'IMG_2779.JPG', 
                title: 'Fanshawe 自然保护区',
                titleEn: 'Fanshawe Conservation Area',
                caption: '加拿大安大略省伦敦的 Fanshawe 自然保护区，密密的树林如绿色的屏障，柔软的草皮在脚下延伸。阳光透过枝叶洒下斑驳的光影，每一寸土地都散发着原始而纯净的气息。',
                captionEn: 'Fanshawe Conservation Area in London, Ontario, Canada. Dense forests form green barriers, while soft grass extends beneath your feet. Sunlight filters through leaves, casting dappled shadows, and every inch of land exudes a primitive and pure essence.',
                bgColor: '#C8D8C0' 
            },
            { 
                file: 'IMG_3652.JPG', 
                title: '天坑之心',
                titleEn: 'The Heart of the Cenote',
                caption: '墨西哥奇琴伊察附近的一处天坑，茂密的热带植被如绿色的帷幕，层层环绕着这被贯穿的大地之心。清澈的池水倒映着天空，仿佛连接着两个世界，神秘而深邃。',
                captionEn: 'A cenote near Chichen Itza, Mexico. Lush tropical vegetation forms green curtains, layer upon layer surrounding this pierced heart of the earth. The clear pool reflects the sky, as if connecting two worlds, mysterious and profound.',
                bgColor: '#A0B8C8' 
            },
            { 
                file: 'IMG_8633.JPG', 
                title: '城市绿意',
                titleEn: 'Urban Greenery',
                caption: '新加坡的一处公寓楼下，植被的叶子错落有致，在有限的空间里争夺着阳光和雨露。每一片叶子都在诉说着生存的智慧，在钢筋水泥的缝隙中，生命依然顽强而美丽。',
                captionEn: 'Beneath an apartment building in Singapore, vegetation leaves are arranged in an orderly yet natural way, competing for sunlight and rain in limited space. Each leaf tells a story of survival wisdom, and life remains tenacious and beautiful in the gaps between steel and concrete.',
                bgColor: '#D0E0C8' 
            }
        ]
    },

    mexico: {
        location: 'Mexico 2025',
        title: 'Mexico',
        titleZh: '墨西哥',
        folder: 'mexico',
        displayType: 'grid',
        groups: [
            {
                groupTitle: 'Gran Hotel',
                groupTitleEn: 'Gran Hotel',
                images: [
                    { file: 'IMG_4166.JPG', caption: 'Gran Hotel', captionEn: 'Gran Hotel', bgColor: '#E8C8B8' },
                    { file: 'IMG_4162.JPG', caption: 'Gran Hotel', captionEn: 'Gran Hotel', bgColor: '#E8C8B8' },
                    { file: 'IMG_3818.PNG', caption: 'Gran Hotel', captionEn: 'Gran Hotel', bgColor: '#E8C8B8' }
                ]
            },
            {
                groupTitle: '特奥蒂瓦坎金字塔',
                groupTitleEn: 'Teotihuacan Pyramids',
                images: [
                    { file: 'IMG_4120.JPG', caption: '特奥蒂瓦坎金字塔', captionEn: 'Teotihuacan Pyramids', bgColor: '#D8E0E8' }
                ]
            },
            {
                groupTitle: '城市景观',
                groupTitleEn: 'City View',
                images: [
                    { file: 'IMG_4053.JPG', caption: '城市景观', captionEn: 'City View', bgColor: '#C8D5E0' },
                    { file: 'IMG_4028.JPG', caption: '城市景观', captionEn: 'City View', bgColor: '#C8D5E0' },
                    { file: 'IMG_2777.JPG', caption: '城市景观', captionEn: 'City View', bgColor: '#C8D5E0' },
                    { file: 'IMG_4023.JPG', caption: '城市景观', captionEn: 'City View', bgColor: '#C8D5E0' },
                    { file: 'IMG_4017.JPG', caption: '城市景观', captionEn: 'City View', bgColor: '#C8D5E0' },
                    { file: 'IMG_4010.JPG', caption: '城市景观', captionEn: 'City View', bgColor: '#C8D5E0' },
                    { file: 'IMG_3829.JPG', caption: '城市景观', captionEn: 'City View', bgColor: '#C8D5E0' },
                    { file: 'IMG_3828.JPG', caption: '城市景观', captionEn: 'City View', bgColor: '#C8D5E0' },
                    { file: 'IMG_3827.JPG', caption: '城市景观', captionEn: 'City View', bgColor: '#C8D5E0' }
                ]
            },
            {
                groupTitle: '奇琴伊察',
                groupTitleEn: 'Chichen Itza',
                images: [
                    { file: 'IMG_3643.JPG', caption: '奇琴伊察', captionEn: 'Chichen Itza', bgColor: '#E8EDF2' },
                    { file: 'IMG_1848.JPG', caption: '奇琴伊察', captionEn: 'Chichen Itza', bgColor: '#E8EDF2' },
                    { file: 'IMG_1892.JPG', caption: '奇琴伊察', captionEn: 'Chichen Itza', bgColor: '#E8EDF2' },
                    { file: 'IMG_1977.JPG', caption: '奇琴伊察', captionEn: 'Chichen Itza', bgColor: '#E8EDF2' }
                ]
            }
        ]
    },
    
    sea: {
        location: 'Thailand Phuket 2025',
        title: 'Coastlines',
        titleZh: '海岸线',
        folder: 'sea',
        displayType: 'detailed', // 详细介绍模式
        images: [
            { file: ['IMG_0974.JPG', 'IMG_0955.JPG',], caption: '天亮前', captionEn: 'Before dawn', bgColor: '#B8D0E0' },
            { file: ['IMG_0959.JPG', 'IMG_0929.JPG'], caption: '红色朝霞', captionEn: 'Red sunrise', bgColor: '#B8D0E0' },
            { file: ['IMG_1038.JPG', 'IMG_1055.JPG'], caption: '远方的船只', captionEn: 'Distant vessels', bgColor: '#A0B8D0' },
            { file: '0e1c6603b1586ee2bbfe2092eb89646d.JPG', caption: '彩虹海浪', captionEn: 'Rainbow waves', bgColor: '#7898B8' }
        ]
    },
    sky: {
        location: 'Sky 2025',
        title: 'Sky Colors',
        titleZh: '天空',
        folder: 'sky',
        displayType: 'detailed', // 详细介绍模式
        images: [
            { file: ['1.JPG', '2.JPG'], caption: '彩虹', captionEn: 'Rainbow', bgColor: '#B8D0E0' }, 
            { file: '3.JPG', caption: '火烧云', captionEn: 'Fire cloud', bgColor: '#B8D0E0' }, 
        ]
    },
    thailand: {
        location: 'Thailand Chiangmai 2025',
        title: 'Tropical Light',
        titleZh: '热带光影',
        folder: 'thailand',
        displayType: 'detailed', // 详细介绍模式
        images: [
            { file: 'IMG_9514.JPG', caption: '热带的色彩', captionEn: 'Tropical colors', bgColor: '#E8D5C0' },
            { file: 'IMG_9560.JPG', caption: '寺庙的光影', captionEn: 'Temple light and shadow', bgColor: '#BAE4EF' },
            { file: 'IMG_9521.JPG', caption: '市场的生活', captionEn: 'Market life', bgColor: '#E0C8A8' },
            { file: 'IMG_9810.JPG', caption: '日落的金色', captionEn: 'Golden sunset', bgColor: '#F0D8B8' },
            { file: '28c1bcef6deba8aaa3e7d6c01e69939a.JPG', caption: '热带的宁静', captionEn: 'Tropical serenity', bgColor: '#C8D8C0' },
            { file: '828da493a750ff4463d3b6bfdaee26ed.JPG', caption: '异国的韵味', captionEn: 'Exotic charm', bgColor: '#D0C5B8' }
        ]
    },
    
    'close-up': {
        location: 'CLOSE STUDIES 2023-2024',
        title: 'Details & Textures',
        titleZh: '细节与纹理',
        folder: 'close-up',
        displayType: 'detailed', // 详细介绍模式
        images: [
            { 
                file: 'IMG_2991.JPG',
                title: '松针与蛛网',
                titleEn: 'Pine Needles and Spider Webs',
                caption: '在落基山脉路易斯湖附近的步道上，松针之间悬着一张细密的蜘蛛网。山风很轻，光线被树影切割成碎片。这一刻没有宏大的风景，只有自然在不经意间留下的精确与耐心。',
                captionEn: 'On a trail near Lake Louise in the Rocky Mountains, a delicate spider web hangs between pine needles. The wind is gentle, light fractured by shadows. There is no grand scenery here, only nature revealing its precision and patience in passing.',
                bgColor: '#E8E0D8'
            },
            { 
                file: 'IMG_0075.JPG',
                title: '暴雨中的城市',
                titleEn: 'A City in Heavy Rain',
                caption: '在曼谷的民宿里，窗外下着猛烈而饱满的雨。雨水敲击屋顶与街道，空气中充满湿热与能量。这种近乎喧闹的雨，与这座城市本身一样，鲜活、直接、不加克制。',
                captionEn: 'In a Bangkok guesthouse, heavy rain pours outside the window. Water strikes rooftops and streets, filling the air with heat and energy. The rain, intense and unapologetic, mirrors the city itself.',
                bgColor: '#A0B2D4'
            },
            { 
                file: 'IMG_8685.JPG',
                title: '未被提及的生日',
                titleEn: 'An Unspoken Birthday',
                caption: '生日那天我没有对任何人提起，但合租的室友悄悄准备了一个草莓小蛋糕和蜡烛。点燃蜡烛的瞬间，房间里的光线变得柔软而安静，这份被察觉的关心显得格外克制而真诚。',
                captionEn: 'On my birthday, which I did not mention to anyone, my housemates quietly prepared a small strawberry cake and candles. As the candles were lit, the room softened into a calm glow, a restrained yet sincere gesture of being seen.',
                bgColor: '#E5E6F4'
            },
            { 
                file: 'IMG_9752.JPG',
                title: '夜色与红酒',
                titleEn: 'Red Wine at Night',
                caption: '在清迈的民宿里，窗外是一片漆黑，只剩零星的光影。我们坐在室内，慢慢喝着红酒，时间被刻意放缓。这是一种无需言语的陪伴，与夜色一起沉静下来。',
                captionEn: 'In a Chiang Mai guesthouse, darkness fills the view outside, broken only by scattered lights. Inside, we drink red wine slowly, allowing time to decelerate. It is a quiet form of companionship, settling into the night.',
                bgColor: '#E0D9DD'
            },
            { 
                file: 'IMG_1111.JPG',
                title: '被认真对待的食物',
                titleEn: 'Food with Care',
                caption: '在清迈吃到的每一道菜和饮品，都被细致地装饰，分量也毫不吝啬。食物不仅仅是味觉体验，更体现了一种被认真对待的态度。',
                captionEn: 'Every dish and drink in Chiang Mai is carefully presented, generous in portion. The food offers not only flavor but a sense of attentiveness and respect.',
                bgColor: '#FFFCB9'
            },
            { 
                file: 'IMG_1112.JPG',
                title: '市集里的旧物',
                titleEn: 'Objects in the Market',
                caption: '在清迈市集闲逛时，看到一家古色古香的小店。店内摆满了铜制装饰品和桌面摆件，光泽温润，带着时间沉淀下来的痕迹。',
                captionEn: 'While wandering a Chiang Mai market, I came across a shop filled with copper ornaments and tabletop objects. Their muted sheen carries the quiet marks of time.',
                bgColor: '#D8C8B8'
            }
        ]
    },
    light: {
        location: 'YELLOWKNIFE 2023',
        title: 'Northern Light',
        titleZh: '北极光',
        folder: 'yellowknife',
        displayType: 'detailed', // 详细介绍模式
        images: [
            { 
                file: ['IMG_3538.JPG', 'IMG_3540.JPG'],
                title: '第一次确认',
                titleEn: 'The First Confirmation',
                caption: 'Yellowknife，2025年12月10日。沿着往西的3号公路开出约50公里，后半夜两点，黑暗几乎没有任何变化。肉眼看到的只是一抹模糊的白色，像悬在空中的飘带，形状有些不寻常，才迟疑地举起相机。取景框里出现了淡淡的绿色，那一刻才确信，这确实是北极光。',
                captionEn: 'Yellowknife, December 10, 2025. About 50 kilometers west along Highway 3, sometime after 2 a.m., the darkness barely shifted. To the naked eye it was only a faint white ribbon suspended in the sky. Its unusual shape prompted a hesitant lift of the camera. In the viewfinder, a subtle green emerged, confirming it was truly an aurora.',
                bgColor: '#485858'
            },
            { 
                file: 'IMG_1734.JPG',
                title: '等待窗口',
                titleEn: 'Waiting for the Window',
                caption: '借助 Windy 查找云层间隙，在寒夜里守了几个小时。凌晨六点，天空终于打开了一小段窗口，绿色极光清晰地显现出来。使用全画幅相机，16mm 广角，光圈 f/2.8，快门 4 到 5 秒，ISO 1600 并随快门调整。后期主要做了去雾、增加纹理和对比度，通过高光与暗部拉开层次，饱和度几乎未动，效果已经足够。',
                captionEn: 'Using Windy to track cloud gaps, I waited for hours in the cold. At around 6 a.m., a brief opening appeared and a vivid green aurora revealed itself. Shot on a full-frame camera with a 16mm wide-angle lens, aperture f/2.8, shutter 4 to 5 seconds, ISO 1600 adjusted in tandem with exposure. Post-processing focused on dehaze, added texture and contrast, lifting highlights and shadows. Saturation was barely touched and felt sufficient.',
                bgColor: '#303848'
            },
            { 
                file: 'IMG_1699.JPG',
                title: '并非最强的夜晚',
                titleEn: 'Not the Strongest Night',
                caption: '那几天云层极厚，KP 值达到 6 以上，但天空被完全遮住，几乎看不到任何亮光。最后一天，KP 只有 2，云量却降到 40% 左右，反而拍到了一点绿色的极光，与星空同框。条件并不理想，但能留下这一刻，已经不虚此行。',
                captionEn: 'During those days, cloud cover was heavy. The KP index exceeded 6, yet the sky remained sealed, with no visible glow. On the final night, KP dropped to around 2, but cloud coverage fell to about 40 percent. A faint green aurora appeared alongside the stars. The conditions were far from ideal, but capturing this moment made the trip worthwhile.',
                bgColor: '#384858'
            }
        ]
        
    }
};

// Gallery Manager
class GalleryManager {
    constructor() {
        this.currentCollection = null;
        this.currentLang = 'en';
        this.allImages = []; // 存储所有图片信息用于 lightbox
        this.currentImageIndex = 0;
        this.init();
    }

    init() {
        // 从URL参数获取collection
        const urlParams = new URLSearchParams(window.location.search);
        const collection = urlParams.get('collection');

        if (!collection || !galleryData[collection]) {
            this.showEmptyState();
            return;
        }

        this.currentCollection = collection;
        this.loadGallery();

        // 监听语言变化
        window.addEventListener('languageChanged', (e) => {
            this.currentLang = e.detail.lang;
            this.updateLanguage();
        });

        // 从localStorage获取当前语言
        this.currentLang = localStorage.getItem('language') || 'en';
        this.updateLanguage();
    }

    loadGallery() {
        const data = galleryData[this.currentCollection];
        const container = document.getElementById('gallery-container');

        // 更新页面标题和元信息
        document.getElementById('gallery-location').textContent = data.location;
        document.getElementById('gallery-title').textContent = this.currentLang === 'zh' ? data.titleZh : data.title;
        
        // 更新页面标题
        document.title = `${this.currentLang === 'zh' ? data.titleZh : data.title} - Yifu Ding`;

        // 清空容器
        container.innerHTML = '';

        // 收集所有图片信息用于 lightbox
        this.collectAllImages(data);

        // 创建 lightbox
        this.createLightbox();

        // 根据displayType决定渲染方式
        if (data.displayType === 'detailed') {
            // 详细模式：左右布局
            this.renderDetailedGallery(data, container);
        } else if (data.displayType === 'grid') {
            // 网格模式：横向滚动组
            this.renderGridGallery(data, container);
        }

        // 为所有图片添加点击事件
        this.attachImageClickHandlers();
    }

    collectAllImages(data) {
        this.allImages = [];
        
        if (data.displayType === 'detailed') {
            // 详细模式：直接使用 images 数组
            data.images.forEach((image) => {
                // 如果 file 是数组，将每个文件都添加到 allImages
                if (Array.isArray(image.file)) {
                    image.file.forEach((file) => {
                        this.allImages.push({
                            src: `src/photos/${data.folder}/${file}`,
                            caption: this.currentLang === 'zh' ? image.caption : image.captionEn,
                            title: this.currentLang === 'zh' ? (image.title || '') : (image.titleEn || '')
                        });
                    });
                } else {
                    this.allImages.push({
                        src: `src/photos/${data.folder}/${image.file}`,
                        caption: this.currentLang === 'zh' ? image.caption : image.captionEn,
                        title: this.currentLang === 'zh' ? (image.title || '') : (image.titleEn || '')
                    });
                }
            });
        } else if (data.displayType === 'grid') {
            // 网格模式：遍历所有 groups
            data.groups.forEach((group) => {
                group.images.forEach((image) => {
                    this.allImages.push({
                        src: `src/photos/${data.folder}/${image.file}`,
                        caption: this.currentLang === 'zh' ? image.caption : image.captionEn,
                        title: ''
                    });
                });
            });
        } else {
            // 默认模式（没有 displayType）
            data.images.forEach((image) => {
                this.allImages.push({
                    src: `src/photos/${data.folder}/${image.file}`,
                    caption: this.currentLang === 'zh' ? image.caption : image.captionEn,
                    title: ''
                });
            });
        }
    }

    createLightbox() {
        // 如果已存在，先移除
        const existing = document.getElementById('gallery-lightbox');
        if (existing) {
            existing.remove();
        }

        const lightbox = document.createElement('div');
        lightbox.id = 'gallery-lightbox';
        lightbox.className = 'gallery-lightbox';
        lightbox.innerHTML = `
            <div class="gallery-lightbox-overlay"></div>
            <button class="gallery-lightbox-close" aria-label="Close">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <button class="gallery-lightbox-prev" aria-label="Previous">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <button class="gallery-lightbox-next" aria-label="Next">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="gallery-lightbox-content">
                <img class="gallery-lightbox-image" src="" alt="">
                <div class="gallery-lightbox-info">
                    <h3 class="gallery-lightbox-title"></h3>
                    <p class="gallery-lightbox-caption"></p>
                    <span class="gallery-lightbox-counter"></span>
                </div>
            </div>
        `;
        document.body.appendChild(lightbox);

        // 绑定事件
        this.setupLightboxEvents();
    }

    setupLightboxEvents() {
        const lightbox = document.getElementById('gallery-lightbox');
        const closeBtn = lightbox.querySelector('.gallery-lightbox-close');
        const prevBtn = lightbox.querySelector('.gallery-lightbox-prev');
        const nextBtn = lightbox.querySelector('.gallery-lightbox-next');
        const overlay = lightbox.querySelector('.gallery-lightbox-overlay');

        // 关闭
        const close = () => {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        };

        closeBtn.addEventListener('click', close);
        overlay.addEventListener('click', close);

        // 上一张
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.showPreviousImage();
        });

        // 下一张
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.showNextImage();
        });

        // 键盘导航
        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('active')) return;

            if (e.key === 'Escape') {
                close();
            } else if (e.key === 'ArrowLeft') {
                this.showPreviousImage();
            } else if (e.key === 'ArrowRight') {
                this.showNextImage();
            }
        });
    }

    showImage(index) {
        if (index < 0 || index >= this.allImages.length) return;

        this.currentImageIndex = index;
        const image = this.allImages[index];
        const lightbox = document.getElementById('gallery-lightbox');
        const img = lightbox.querySelector('.gallery-lightbox-image');
        const title = lightbox.querySelector('.gallery-lightbox-title');
        const caption = lightbox.querySelector('.gallery-lightbox-caption');
        const counter = lightbox.querySelector('.gallery-lightbox-counter');

        img.src = image.src;
        img.alt = image.caption;

        if (image.title) {
            title.textContent = image.title;
            title.style.display = '';
        } else {
            title.style.display = 'none';
        }

        caption.textContent = image.caption;
        counter.textContent = `${index + 1} / ${this.allImages.length}`;

        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    showNextImage() {
        const nextIndex = (this.currentImageIndex + 1) % this.allImages.length;
        this.showImage(nextIndex);
    }

    showPreviousImage() {
        const prevIndex = (this.currentImageIndex - 1 + this.allImages.length) % this.allImages.length;
        this.showImage(prevIndex);
    }

    attachImageClickHandlers() {
        // 为详细模式的图片添加点击事件
        const detailedImages = document.querySelectorAll('.gallery-image');
        let imageIndex = 0;
        detailedImages.forEach((img) => {
            img.style.cursor = 'pointer';
            const currentIndex = imageIndex;
            img.addEventListener('click', () => {
                this.showImage(currentIndex);
            });
            imageIndex++;
        });

        // 为网格模式的图片添加点击事件
        const gridImages = document.querySelectorAll('.gallery-grid-image');
        let gridIndex = 0;
        gridImages.forEach((img) => {
            img.style.cursor = 'pointer';
            const currentIndex = gridIndex;
            img.addEventListener('click', () => {
                this.showImage(currentIndex);
            });
            gridIndex++;
        });
    }

    renderDetailedGallery(data, container) {
        // 渲染详细介绍模式
        // 正确统计图片数量：如果 file 是数组，统计数组长度；否则算 1 张
        const totalImageCount = data.images.reduce((count, image) => {
            if (Array.isArray(image.file)) {
                return count + image.file.length;
            } else {
                return count + 1;
            }
        }, 0);
        
        const imageCountText = this.currentLang === 'zh' 
            ? `${totalImageCount} 张照片`
            : `${totalImageCount} images`;
        document.getElementById('gallery-count').textContent = imageCountText;

        data.images.forEach((image, index) => {
            const item = this.createDetailedItem(image, index, data.folder);
            container.appendChild(item);
        });
    }

    renderGridGallery(data, container) {
        // 渲染网格滚动模式
        const totalImages = data.groups.reduce((sum, group) => sum + group.images.length, 0);
        const imageCountText = this.currentLang === 'zh' 
            ? `${totalImages} 张照片`
            : `${totalImages} images`;
        document.getElementById('gallery-count').textContent = imageCountText;

        data.groups.forEach((group, groupIndex) => {
            const groupElement = this.createGridGroup(group, groupIndex, data.folder);
            container.appendChild(groupElement);
        });
    }

    // 判断颜色是否较深（用于决定文字颜色）
    isDarkColor(color) {
        if (!color) return false;
        
        // 移除 # 号
        const hex = color.replace('#', '');
        
        // 如果是 3 位十六进制，扩展为 6 位
        const fullHex = hex.length === 3 
            ? hex.split('').map(c => c + c).join('')
            : hex;
        
        // 转换为 RGB
        const r = parseInt(fullHex.substring(0, 2), 16);
        const g = parseInt(fullHex.substring(2, 4), 16);
        const b = parseInt(fullHex.substring(4, 6), 16);
        
        // 计算亮度（使用标准公式）
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        
        // 如果亮度低于 0.5，认为是深色
        return luminance < 0.5;
    }

    createDetailedItem(image, index, folder) {
        const item = document.createElement('div');
        item.className = 'gallery-item gallery-item-detailed';
        item.style.animationDelay = `${index * 0.1}s`;

        const title = this.currentLang === 'zh' ? (image.title || '') : (image.titleEn || '');
        const caption = this.currentLang === 'zh' ? image.caption : image.captionEn;
        const bgColor = image.bgColor || '#f5f5f5';
        
        // 判断背景色是否较深，决定文字颜色
        const isDark = this.isDarkColor(bgColor);
        const textColor = isDark ? '#FFFFFF' : 'inherit';

        // 检查 file 是否是数组
        const isMultipleFiles = Array.isArray(image.file);
        const files = isMultipleFiles ? image.file : [image.file];
        const imageCount = files.length;
        
        // 生成图片 HTML
        const imagesHTML = files.map((file, fileIndex) => {
            return `<img src="src/photos/${folder}/${file}" 
                        alt="${caption}" 
                        class="gallery-image"
                        data-file-index="${fileIndex}"
                        loading="lazy">`;
        }).join('');

        item.innerHTML = `
            <div class="gallery-image-wrapper ${isMultipleFiles ? 'gallery-image-wrapper-multiple' : ''}" 
                 ${isMultipleFiles ? `data-image-count="${imageCount}"` : ''}>
                ${imagesHTML}
            </div>
            <div class="gallery-caption" style="background-color: ${bgColor}; color: ${textColor};">
                <div class="gallery-caption-inner">
                    ${title ? `<h3 class="gallery-caption-title" style="color: ${textColor};">${title}</h3>` : ''}
                    <p class="gallery-caption-text" style="color: ${textColor};">${caption}</p>
                </div>
            </div>
        `;

        return item;
    }

    createGridGroup(group, groupIndex, folder) {
        const groupElement = document.createElement('div');
        groupElement.className = 'gallery-grid-group';
        groupElement.style.animationDelay = `${groupIndex * 0.1}s`;

        const groupTitle = this.currentLang === 'zh' ? group.groupTitle : group.groupTitleEn;

        const groupHeader = document.createElement('div');
        groupHeader.className = 'gallery-grid-header';
        groupHeader.innerHTML = `<h3 class="gallery-grid-group-title">${groupTitle}</h3>`;
        
        const scrollContainer = document.createElement('div');
        scrollContainer.className = 'gallery-grid-scroll';
        
        const gridTrack = document.createElement('div');
        gridTrack.className = 'gallery-grid-track';

        group.images.forEach((image) => {
            const gridItem = this.createGridItem(image, folder);
            gridTrack.appendChild(gridItem);
        });

        scrollContainer.appendChild(gridTrack);
        groupElement.appendChild(groupHeader);
        groupElement.appendChild(scrollContainer);

        return groupElement;
    }

    createGridItem(image, folder) {
        const item = document.createElement('div');
        item.className = 'gallery-grid-item';

        const caption = this.currentLang === 'zh' ? image.caption : image.captionEn;

        item.innerHTML = `
            <div class="gallery-grid-image-wrapper">
                <img src="src/photos/${folder}/${image.file}" 
                     alt="${caption}" 
                     class="gallery-grid-image"
                     loading="lazy">
            </div>
            ${caption ? `<p class="gallery-grid-caption">${caption}</p>` : ''}
        `;

        return item;
    }

    updateLanguage() {
        if (!this.currentCollection) return;

        const data = galleryData[this.currentCollection];
        document.getElementById('gallery-title').textContent = this.currentLang === 'zh' ? data.titleZh : data.title;
        
        // 更新图片数量翻译
        let imageCountText;
        if (data.displayType === 'grid') {
            const totalImages = data.groups.reduce((sum, group) => sum + group.images.length, 0);
            imageCountText = this.currentLang === 'zh' 
                ? `${totalImages} 张照片`
                : `${totalImages} images`;
        } else {
            // 正确统计图片数量：如果 file 是数组，统计数组长度；否则算 1 张
            const totalImageCount = data.images.reduce((count, image) => {
                if (Array.isArray(image.file)) {
                    return count + image.file.length;
                } else {
                    return count + 1;
                }
            }, 0);
            imageCountText = this.currentLang === 'zh' 
                ? `${totalImageCount} 张照片`
                : `${totalImageCount} images`;
        }
        document.getElementById('gallery-count').textContent = imageCountText;

        // 重新收集图片信息（因为语言改变了）
        this.collectAllImages(data);

        // 更新所有caption
        const items = document.querySelectorAll('.gallery-item');
        items.forEach((item, index) => {
            const captionText = item.querySelector('.gallery-caption-text');
            const image = data.images[index];
            if (captionText && image) {
                captionText.textContent = this.currentLang === 'zh' ? image.caption : image.captionEn;
            }
        });

        // 如果 lightbox 正在显示，更新当前图片信息
        const lightbox = document.getElementById('gallery-lightbox');
        if (lightbox && lightbox.classList.contains('active')) {
            this.showImage(this.currentImageIndex);
        }
    }

    showEmptyState() {
        const container = document.getElementById('gallery-container');
        const emptyTitle = this.currentLang === 'zh' ? '照片集未找到' : 'Gallery Not Found';
        const emptyText = this.currentLang === 'zh' ? '抱歉，您请求的照片集不存在。' : 'Sorry, the requested gallery does not exist.';
        const emptyButton = this.currentLang === 'zh' ? '返回摄影作品集' : 'Back to Photography Portfolio';
        
        container.innerHTML = `
            <div class="gallery-empty">
                <h2 class="gallery-empty-title">${emptyTitle}</h2>
                <p class="gallery-empty-text">${emptyText}</p>
                <a href="studio.html" class="gallery-empty-button">${emptyButton}</a>
            </div>
        `;

        document.getElementById('gallery-location').textContent = '';
        document.getElementById('gallery-title').textContent = emptyTitle;
        document.getElementById('gallery-count').textContent = '';
    }
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    const galleryManager = new GalleryManager();

    // 监听语言切换
    const originalSwitchLanguage = window.LanguageManager?.prototype?.switchLanguage;
    if (originalSwitchLanguage) {
        window.LanguageManager.prototype.switchLanguage = function(lang) {
            originalSwitchLanguage.call(this, lang);
            window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
        };
    }
});

// ===========================
// Studio Page - Auto-generate Gallery Cards
// ===========================
(function() {
    'use strict';

    function getFirstImageFile(collection) {
        if (collection.displayType === 'grid' && collection.groups && collection.groups.length > 0) {
            // 网格模式：从第一个 group 的第一张图片获取
            const firstGroup = collection.groups[0];
            if (firstGroup.images && firstGroup.images.length > 0) {
                const firstImage = firstGroup.images[0];
                if (Array.isArray(firstImage.file)) {
                    return firstImage.file[0];
                }
                return firstImage.file;
            }
        } else if (collection.images && collection.images.length > 0) {
            // 详细模式或默认模式：从第一张图片获取
            const firstImage = collection.images[0];
            if (Array.isArray(firstImage.file)) {
                return firstImage.file[0];
            }
            return firstImage.file;
        }
        return null;
    }

    function countTotalImages(collection) {
        let count = 0;
        if (collection.displayType === 'grid' && collection.groups) {
            // 网格模式：统计所有 groups 中的图片
            collection.groups.forEach(group => {
                if (group.images) {
                    group.images.forEach(image => {
                        if (Array.isArray(image.file)) {
                            count += image.file.length;
                        } else {
                            count += 1;
                        }
                    });
                }
            });
        } else if (collection.images) {
            // 详细模式或默认模式：统计 images 数组
            collection.images.forEach(image => {
                if (Array.isArray(image.file)) {
                    count += image.file.length;
                } else {
                    count += 1;
                }
            });
        }
        return count;
    }

    function createGalleryCard(key, collection, currentLang) {
        const card = document.createElement('a');
        card.href = `gallery.html?collection=${key}`;
        card.className = 'photo-showcase-card';

        const firstImageFile = getFirstImageFile(collection);
        const imageSrc = firstImageFile ? `src/photos/${collection.folder}/${firstImageFile}` : '';
        const imageAlt = currentLang === 'zh' ? collection.titleZh : collection.title;
        
        const totalImages = countTotalImages(collection);
        const imageCountText = currentLang === 'zh' 
            ? `${totalImages} 张照片`
            : `${totalImages} images`;

        const title = currentLang === 'zh' ? collection.titleZh : collection.title;

        card.innerHTML = `
            <div class="photo-showcase-image">
                <img src="${imageSrc}" alt="${imageAlt}" loading="lazy">
            </div>
            <div class="photo-showcase-meta">
                <span class="photo-showcase-location">${collection.location}</span>
                <h3 class="photo-showcase-title">${title}</h3>
                <p class="photo-showcase-count">${imageCountText}</p>
            </div>
        `;

        return card;
    }

    function renderGalleryCards() {
        const track = document.querySelector('.photo-grid-track');
        if (!track || typeof galleryData === 'undefined') return;

        // 清空现有内容
        track.innerHTML = '';

        // 获取当前语言
        const currentLang = localStorage.getItem('language') || 'en';

        // 遍历 galleryData 生成卡片
        Object.keys(galleryData).forEach(key => {
            const collection = galleryData[key];
            const card = createGalleryCard(key, collection, currentLang);
            track.appendChild(card);
        });
    }

    function updateGalleryCardsLanguage() {
        const track = document.querySelector('.photo-grid-track');
        if (!track || typeof galleryData === 'undefined') return;

        const currentLang = localStorage.getItem('language') || 'en';
        const cards = track.querySelectorAll('.photo-showcase-card');

        cards.forEach((card, index) => {
            const key = Object.keys(galleryData)[index];
            const collection = galleryData[key];
            if (!collection) return;

            const title = currentLang === 'zh' ? collection.titleZh : collection.title;
            const totalImages = countTotalImages(collection);
            const imageCountText = currentLang === 'zh' 
                ? `${totalImages} 张照片`
                : `${totalImages} images`;

            const titleEl = card.querySelector('.photo-showcase-title');
            const countEl = card.querySelector('.photo-showcase-count');
            
            if (titleEl) titleEl.textContent = title;
            if (countEl) countEl.textContent = imageCountText;
        });
    }

    // 初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderGalleryCards);
    } else {
        renderGalleryCards();
    }

    // 监听语言切换
    window.addEventListener('languageChanged', (e) => {
        updateGalleryCardsLanguage();
    });

    // 如果 LanguageManager 已经初始化，也监听它的变化
    if (window.LanguageManager) {
        const originalSwitchLanguage = window.LanguageManager.prototype?.switchLanguage;
        if (originalSwitchLanguage) {
            window.LanguageManager.prototype.switchLanguage = function(lang) {
                originalSwitchLanguage.call(this, lang);
                updateGalleryCardsLanguage();
            };
        }
    }
})();

