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
    zh: {
      label: '中文',
      lang: 'zh-Hans',
      link: '/zh/',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '课程列表', link: '/zh/lessons/lesson03-04' }
        ],
        sidebar: {
          '/zh/lessons/': [
            {
              text: '前半：基础与技术掌握',
              items: [
                { text: '第3・4讲 Fusion基本操作与笔筒制作', link: '/zh/lessons/lesson03-04' },
                { text: '第9讲 接头', link: '/zh/lessons/lesson09' },
                { text: '第10讲 齿轮机构', link: '/zh/lessons/lesson10' },
                { text: '第11讲 凸轮机构', link: '/zh/lessons/lesson11' }
              ]
            },
            {
              text: '后半：作品制作',
              items: [
                { text: '第12讲 作品制作 1', link: '/zh/lessons/lesson12' },
                { text: '第13讲 作品制作 2', link: '/zh/lessons/lesson13' },
                { text: '第14讲 作品完成与视频拍摄', link: '/zh/lessons/lesson14' },
                { text: '第15讲 作品发表与讲评', link: '/zh/lessons/lesson15' }
              ]
            }
          ]
        },
        outline: { label: '目录' },
        docFooter: { prev: '上一页', next: '下一页' },
        darkModeSwitchLabel: '外观',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '返回顶部',
        langMenuLabel: '切换语言'
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
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '清除查询条件',
                backButtonTitle: '返回',
                noResultsText: '无法找到相关结果',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/' }
    ]
  }
})
