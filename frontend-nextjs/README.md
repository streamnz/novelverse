# NovelVerse - Next.js Frontend

这是 NovelVerse 项目的现代化前端实现，采用了最佳实践的技术栈。

## 🚀 技术栈

- **Next.js 15** - React 全栈框架
- **React 19** - 用户界面库
- **TypeScript** - 类型安全的 JavaScript
- **Tailwind CSS** - 实用优先的 CSS 框架
- **Framer Motion** - 动画和交互库
- **React Icons** - 图标库

## 📦 安装

```bash
# 克隆项目
git clone <your-repo-url>
cd NovelVerse/frontend-nextjs

# 安装依赖
npm install
# 或
yarn install
# 或
pnpm install
```

## 🛠 开发

```bash
# 启动开发服务器
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看结果。

## 🏗 构建

```bash
# 构建生产版本
npm run build
# 或
yarn build
# 或
pnpm build

# 启动生产服务器
npm start
# 或
yarn start
# 或
pnpm start
```

## 📝 脚本命令

- `npm run dev` - 启动开发服务器
- `npm run build` - 构建生产版本
- `npm start` - 启动生产服务器
- `npm run lint` - 运行 ESLint 检查
- `npm run type-check` - 运行 TypeScript 类型检查

## 🎨 项目结构

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # 全局样式
│   ├── layout.tsx      # 根布局
│   └── page.tsx        # 主页
├── components/         # 可复用组件
│   └── sections/       # 页面区块组件
│       ├── HeroSection.tsx
│       ├── TechStackSection.tsx
│       ├── FeaturesSection.tsx
│       ├── ComingSoonSection.tsx
│       └── Footer.tsx
└── lib/               # 工具函数
    └── utils.ts       # 通用工具
```

## 🎯 特性

- ✅ **响应式设计** - 适配所有设备尺寸
- ✅ **现代动画** - 使用 Framer Motion 实现流畅动画
- ✅ **类型安全** - 完整的 TypeScript 支持
- ✅ **优化性能** - Next.js 自动优化和代码分割
- ✅ **SEO 友好** - 完整的元数据和开放图协议支持
- ✅ **无障碍设计** - 遵循 WCAG 准则
- ✅ **现代 CSS** - 使用 Tailwind CSS 实现一致的设计系统

## 🔧 自定义

### 修改颜色主题

在 `tailwind.config.ts` 中修改颜色配置：

```typescript
colors: {
  primary: {
    // 自定义主色调
    500: '#your-color',
  },
  // ...
}
```

### 添加新组件

1. 在 `src/components/` 目录下创建新组件
2. 使用 TypeScript 和 Tailwind CSS
3. 添加 `'use client'` 指令（如果使用客户端功能）

### 修改动画

在组件中修改 Framer Motion 动画配置：

```typescript
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
};
```

## 📱 移动端优化

项目已完全优化移动端体验：

- 触摸友好的交互
- 响应式布局
- 优化的字体大小和间距
- 移动端专属动画效果

## 🌐 浏览器支持

- Chrome (最新)
- Firefox (最新)
- Safari (最新)
- Edge (最新)

## 📄 许可证

版权所有 © 2025 NovelVerse. 保留所有权利。
