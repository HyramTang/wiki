module.exports = {
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',

    navbar: [
      { text: '首页', link: '/' },
      { text: '草稿箱', link: '/draft' },
    ],

    sidebar: {
      '/': [{ text: '首页', children: ['/README.md'] }],
      '/draft': [
        {
          text: 'PUBWIKI 使用指南',
          children: ['/draft/pub-wiki-use/search.md', '/draft/pub-wiki-use/markdown.md', '/draft/pub-wiki-use/tips.md'],
        },
      ],
    },
  },
};
