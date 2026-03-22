import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/digital-fabrication-exercise/',
  title: 'デジタルファブリケーション演習',
  description: 'Fusion を使った3Dモデリングとからくり作品制作',
  ignoreDeadLinks: [/\.f3d$/],

  locales: {
    ja: {
      label: '日本語',
      lang: 'ja',
      link: '/ja/',
      themeConfig: {
        nav: [
          { text: 'ホーム', link: '/ja/' },
          { text: '授業一覧', link: '/ja/lessons/lesson03-04' }
        ],
        sidebar: {
          '/ja/lessons/': [
            {
              text: '前半：基礎と技術習得',
              items: [
                { text: '第3・4回 Fusionの基本操作とペン立て', link: '/ja/lessons/lesson03-04' },
                { text: '第9回 ジョイント', link: '/ja/lessons/lesson09' },
                { text: '第10回 歯車機構', link: '/ja/lessons/lesson10' },
                { text: '第11回 カム機構', link: '/ja/lessons/lesson11' }
              ]
            },
            {
              text: '後半：作品制作',
              items: [
                { text: '第12回 作品制作 1', link: '/ja/lessons/lesson12' },
                { text: '第13回 作品制作 2', link: '/ja/lessons/lesson13' },
                { text: '第14回 作品の完成・動画撮影', link: '/ja/lessons/lesson14' },
                { text: '第15回 作品発表・講評', link: '/ja/lessons/lesson15' }
              ]
            }
          ]
        },
        outline: { label: '目次' },
        docFooter: { prev: '前のページ', next: '次のページ' }
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Lessons', link: '/en/lessons/lesson03-04' }
        ],
        sidebar: {
          '/en/lessons/': [
            {
              text: 'Part 1: Fundamentals',
              items: [
                { text: 'Lesson 3-4: Fusion Basics & Pen Holder', link: '/en/lessons/lesson03-04' },
                { text: 'Lesson 9: Joints', link: '/en/lessons/lesson09' },
                { text: 'Lesson 10: Gear Mechanism', link: '/en/lessons/lesson10' },
                { text: 'Lesson 11: Cam Mechanism', link: '/en/lessons/lesson11' }
              ]
            },
            {
              text: 'Part 2: Project Work',
              items: [
                { text: 'Lesson 12: Project Work 1', link: '/en/lessons/lesson12' },
                { text: 'Lesson 13: Project Work 2', link: '/en/lessons/lesson13' },
                { text: 'Lesson 14: Completion & Video', link: '/en/lessons/lesson14' },
                { text: 'Lesson 15: Presentation & Review', link: '/en/lessons/lesson15' }
              ]
            }
          ]
        }
      }
    }
  },

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/digital-fabrication-exercise/DFlogo.png' }]
  ],

  themeConfig: {
    logo: '/DFlogo.png',
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/' }
    ]
  }
})
