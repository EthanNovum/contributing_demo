export default {
  logo: <span style={{ fontWeight: 'bold' }}>Westlake for Good</span>,
  project: {
    link: 'https://github.com/westlake-ai/ai-for-good',
  },
  docsRepositoryBase: 'https://github.com/westlake-ai/ai-for-good/tree/main',
  footer: {
    text: `© ${new Date().getFullYear()} Westlake for Good. 基于 MIT 许可协议.`,
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Westlake for Good'
    }
  },
  search: {
    placeholder: '搜索内容...'
  },
  feedback: {
    content: '有疑问? 给我们反馈 →',
  },
  editLink: {
    text: '在 GitHub 上编辑此页面 →',
  },
  toc: {
    title: '本页内容',
  },
  // 默认使用暗色模式
  darkMode: true,
  // i18n 配置
  i18n: [
    { locale: 'zh', text: '简体中文' },
  ],
} 