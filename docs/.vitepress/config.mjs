import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "HBuilderX翻译插件",
  description: "这是一个HBuilderX的翻译插件",
  base: '/hbx-translation-docs/',
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/hbx-translation-docs/favicon.ico' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '文档', link: '/start' },
      { text: '赞赏', link: '/donate' },
      { text: '插件市场', link: 'https://ext.dcloud.net.cn/plugin?id=19421' }
    ],
    search: {
      provider: 'local'
    },
    // logo: 'https://s21.ax1x.com/2025/01/19/pEk2Kte.png',

    sidebar: [
      {
        text: '文档',
        items: [
          { text: '起步', link: '/start' },
          { text: '配置', link: '/config' },
          {
            text: '使用', link: '/use/shortcut', collapsed: true , items:
            [
              { text: '快捷键', link: '/use/shortcut' },
              { text: '翻译', link: '/use/translate' },
              { text: '翻译替换', link: '/use/replace' },
              { text: '更多翻译结果', link: '/use/more' },
              { text: '单词映射', link: '/use/word' },
              { text: '语音朗读', link: '/use/speak' },
              { text: '多语言选择', link: '/use/lang' },
            ]
          },
          { text: '更新日志', link: '/CHANGELOG' },
          { text: '赞赏', link: '/donate' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/qmcx-ming/translation' }
    ]
  },
  markdown: {
    lineNumbers: true
  }
})
