## 一、项目背景与目标

“Westlake for Good”旨在构建一个去中心化的社区协作网络，支持成员在AI提示词（Prompt Engineering）与AI安全领域开展协作与贡献。借鉴 [Ethereum 文档贡献指北](https://ethereum.org/zh/contributing/#how-to-update-content) 的扁平化、模块化内容结构，以及清晰的贡献工作流，提升社区参与度与知识共享效率。

## 二、Nextra简介

**Nextra** 是一个基于 [Next.js](https://nextjs.org/) 的静态站点生成框架，专注于文档与博客场景。其核心特性包括：

1. **MDX+React**：支持在 Markdown 中内嵌 React 组件，既能做文档，又可定制交互。
2. **文件路由**：通过 `docs/` 或 `pages/` 目录自动生成页面路由，无需额外路由配置。
3. **侧边栏自动化**：依据文件夹与 Front Matter，自动生成侧边栏导航。
4. **主题与样式**：内置简洁主题，可定制全局样式、代码高亮、搜索等。

借助 Nextra，我们可以快速搭建多层级文档网站，并且围绕“贡献指北”“AI 提示词库”“AI 安全讨论”分区展示，方便社区成员阅读、提案、提交 PR。

## 三、产品定位与范围

- **核心用户**：AI 研究者、Prompt 工程师、AI 安全专家、技术爱好者；
- **产品定位**：去中心化、开源的知识库与社区，侧重文档贡献和协作；
- **主要模块**：
  - 文档展示（Contributing、AI 提示词、AI 安全）
  - 贡献指北与工作流
  - 社区讨论区
  - 版本管理与自动化部署

## 四、核心功能需求

1. **文档贡献指北**

   - 基于 Nextra 的贡献文档模板
   - 清晰的 `Fork → Edit → PR` 流程示例
   - 常见问题与排查指北

2. **AI 提示词库**

   - 按主题（如：对话、图像、文本分类）组织的示例 Prompt
   - 社区提交/审核机制

3. **AI 安全专题**

   - 攻击向量与防御策略文档
   - 研究论文与案例汇总

4. **社区讨论区**

   - 嵌入 Disqus/Giscus 或 GitHub Discussions
   - 支持主题分类、标签、订阅通知

5. **文件与路由组织**
   参考 [Nextra 文件组织指北](https://nextra-v2-7hslbun8z-shud.vercel.app/docs/guide/organize-files)，主要目录：

   ```
   docs/
   ├── contributing/
   │   ├── index.md        # 首页：如何贡献
   │   └── update-content.md  # 更新内容示例
   ├── prompts/
   │   ├── index.md        # AI 提示词总览
   │   └── {category}/
   │       └── guide.md    # 各类 Prompt 指北
   ├── security/
   │   ├── index.md        # AI 安全概述
   │   └── threats.md      # 常见攻击与防御
   └── sidebar.js         # 自定义侧边栏配置
   ```

## 五、技术选型与架构

- **前端**：Next.js + Nextra + React
- **部署**：Vercel（自动部署、预览环境）
- **版本管理**：GitHub 仓库 + GitHub Actions 自动构建
- **讨论系统**：Giscus（基于 GitHub Discussions）