# 照片集展示框架 - 双模式系统

## 概览
实现了两种照片展示模式，可以根据内容类型灵活选择：

### 1. Detailed 模式（详细介绍）
- **适用场景**：有完整故事和深度描述的照片
- **布局**：左右布局，照片在一侧，标题+详细介绍在另一侧
- **特点**：沉浸式阅读体验，适合精选作品

### 2. Grid 模式（横向滚动）
- **适用场景**：数量较多、主题相似的照片组
- **布局**：横向滚动卡片，按组分类
- **特点**：快速浏览，适合系列作品

## 数据结构

### Detailed 模式示例

```javascript
guanajuato: {
    location: 'GUANAJUATO 2024',
    title: 'Urban Colors',
    titleZh: '城市色彩',
    folder: 'guanajuato',
    displayType: 'detailed', // 必须设置为 'detailed'
    images: [
        { 
            file: 'guana4.JPG',
            title: '层叠的色彩',          // 照片标题（中文）
            titleEn: 'Layers of Color',    // 照片标题（英文）
            caption: '详细的中文描述...',  // 详细描述（中文）
            captionEn: 'Detailed English description...',  // 详细描述（英文）
            bgColor: '#E8D5C4'             // 文字区域背景色
        }
    ]
}
```

### Grid 模式示例

```javascript
rocky: {
    location: 'ROCKY MOUNTAINS 2024',
    title: 'Mountain Minimalism',
    titleZh: '山岳极简',
    folder: 'rocky',
    displayType: 'grid', // 必须设置为 'grid'
    groups: [              // 使用 groups 而不是 images
        {
            groupTitle: '冰雪世界',      // 组标题（中文）
            groupTitleEn: 'Winter Wonderland', // 组标题（英文）
            images: [
                { 
                    file: 'IMG_2222.JPG',
                    caption: '晨光穿透云层',        // 简短描述（中文）
                    captionEn: 'Morning light',     // 简短描述（英文）
                    bgColor: '#C8D5E0'              // 背景色（可选，grid模式不使用）
                }
            ]
        }
    ]
}
```

## 如何添加新照片集

### 步骤 1: 确定展示模式
- 有详细故事？→ 使用 `detailed` 模式
- 数量较多、需要分组？→ 使用 `grid` 模式

### 步骤 2: 在 gallery.js 中添加数据

#### Detailed 模式：
```javascript
yourCollection: {
    location: '地点 年份',
    title: 'English Title',
    titleZh: '中文标题',
    folder: 'folder-name',
    displayType: 'detailed',
    images: [
        {
            file: 'photo.jpg',
            title: '照片标题',
            titleEn: 'Photo Title',
            caption: '2-3句话的详细描述，讲述照片背后的故事...',
            captionEn: 'Detailed English description...',
            bgColor: '#HEXCOLOR'
        }
    ]
}
```

#### Grid 模式：
```javascript
yourCollection: {
    location: '地点 年份',
    title: 'English Title',
    titleZh: '中文标题',
    folder: 'folder-name',
    displayType: 'grid',
    groups: [
        {
            groupTitle: '组名称',
            groupTitleEn: 'Group Name',
            images: [
                {
                    file: 'photo.jpg',
                    caption: '简短说明',
                    captionEn: 'Brief caption'
                }
            ]
        }
    ]
}
```

### 步骤 3: 更新 studio.html 链接
在 studio.html 中添加卡片链接：
```html
<a href="gallery.html?collection=yourCollection" class="photo-showcase-card">
    ...
</a>
```

## 样式特点

### Detailed 模式
- 照片高度：600px
- 左右各50%宽度
- 照片左对齐到页面边缘
- 文字区域有背景色
- 奇偶行交替方向

### Grid 模式
- 每组一个横向滚动行
- 照片卡片：400x400px
- 卡片间距：24px
- 支持触摸滑动
- 自定义滚动条样式

## 响应式设计
- 桌面端：完整布局
- 平板：适配调整
- 移动端：
  - Detailed 模式改为上下布局
  - Grid 模式缩小卡片尺寸（300x300px）

## 动画效果
- 页面加载时逐个淡入
- 照片悬停时轻微缩放
- Detailed: 1.01倍
- Grid: 1.05倍

## 实际应用示例

### 示例 1: Guanajuato (Detailed)
- 5张照片
- 每张都有深度描述
- 展现墨西哥城市色彩美学

### 示例 2: Rocky Mountains (Grid)
- 3个组，每组4-5张照片
- 按主题分组：冰雪世界、山峰剪影、极简风光
- 适合快速浏览大量照片

## 注意事项

1. **背景色选择**：
   - 从照片中提取主色调
   - 使用柔和的色彩（饱和度不要太高）
   - 确保文字对比度足够

2. **文字长度**：
   - Detailed 模式：2-4行描述
   - Grid 模式：1行简短说明

3. **照片比例**：
   - Detailed：保持原始比例
   - Grid：会被裁剪为正方形

4. **组的数量**：
   - Grid 模式建议每组3-6张照片
   - 每个collection建议2-4个组

## 文件清单
- `scripts/gallery.js` - 数据配置和渲染逻辑
- `styles/gallery.css` - 双模式样式
- `gallery.html` - 展示页面
- `studio.html` - 入口页面（需添加链接）

