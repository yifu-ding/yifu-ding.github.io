# 照片集页面功能

## 概览
实现了点击 Photography 卡片后进入照片集展示页面的功能，采用左右布局展示照片和说明文字。

## 新增文件
- `gallery.html` - 照片集展示页面
- `styles/gallery.css` - 照片集页面样式
- `scripts/gallery.js` - 照片集页面逻辑

## 功能特点

### 1. 左右交替布局
- 参考 Assembly Line 网站设计
- 左侧显示照片，右侧显示简短说明
- 奇偶行自动交替显示顺序
- 响应式设计，移动端自动改为上下布局

### 2. 多个照片集
支持6个不同的照片集：
- Rocky Mountains 2024 (17张照片)
- Guanajuato 2024 (5张照片)
- Coastal Studies 2023-2024 (7张照片)
- Thailand 2023 (6张照片)
- Close Studies 2023-2024 (6张照片)
- Yellowknife 2023 - Northern Light (5张照片)

### 3. 双语支持
- 每张照片都有中英文双语说明
- 页面标题、元数据全部支持双语
- 与网站的语言切换功能无缝集成

### 4. URL 参数导航
使用 `?collection=` 参数来指定显示哪个照片集：
- `gallery.html?collection=rocky`
- `gallery.html?collection=guanajuato`
- `gallery.html?collection=sea`
- `gallery.html?collection=thailand`
- `gallery.html?collection=close-up`
- `gallery.html?collection=light`

### 5. 优雅的动画
- 照片项逐个淡入
- 鼠标悬停时照片轻微放大
- 返回按钮交互动画

## 使用方法

### 在 studio.html 中的链接
已经更新了所有照片卡片的链接，点击任意卡片即可进入对应的照片集。

### 直接访问
也可以直接通过URL访问：
```
gallery.html?collection=rocky
```

### 添加新照片集
在 `scripts/gallery.js` 的 `galleryData` 对象中添加新的照片集配置即可。

## 本地测试
运行本地服务器：
```bash
cd yifu-ding.github.io
python3 -m http.server 8080
```

然后访问：
```
http://localhost:8080/gallery.html?collection=rocky
```

## 样式参考
- Assembly Line (图2) - 左右布局灵感来源
- 温暖灰色调配色
- 优雅的 Charter/Georgia 字体
- 充足的留白和间距

