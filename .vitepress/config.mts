import { defineConfig } from 'vitepress'
import timeline from 'vitepress-markdown-timeline' // 导入时间线插件
import { La51Plugin } from 'vitepress-plugin-51la' //导入 51la统计
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons' // 导入代码组图标插件
import { defineTeekConfig } from 'vitepress-theme-teek/config'
import { version } from 'vitepress-theme-teek/es/version'
import { generateNav, generateSidebar } from './utils'

const description = ['vitepress-theme-teek 使用文档', 'vitepress 主题框架'].toString()

const teekConfig = defineTeekConfig({
    author: { name: '程序员皮蛋鸽鸽', link: 'https://github.com/ZhouYu2156' },

    footerInfo: {
        // bottomMessage: ["初闻不知曲中意，再听已是曲中人"],
        topMessage: ['初闻不知曲中意，再听已是曲中人'],
        bottomMessage: [
            `<span style="margin: 0; display: inline;">本人已在地球上苟活了 <span id="footer-runtime"></span></span>`, // 搭配 ./theme/helper/useFooterRuntime.ts
            `<script id="LA-DATA-WIDGET" crossorigin="anonymous" charset="UTF-8" src="https://v6-widget.51.la/v6/3LmZHLhDZIDpMaT0/quote.js?theme=#1690FF,#333333,#999999,#007BFF,#FFFFFF,#1690FF,12&f=12&display=0,0,1,1,1,1,1,1"></script>`,
            `<a href="https://51.la/" target="_blank" style="display:flex;align-items:center;justify-content:center;">本网站由51.LA <img src="https://51.la/favicon.ico" style="width:16px;height:16px;margin-inline: 5px;" alt="51.LA"> 提供数据统计服务</a>`,
        ],
        theme: {
            name: `Theme By Teek@${version}-2025.4.10`,
        },
        copyright: {
            createYear: 2025,
            suffix: '程序员皮蛋鸽鸽',
        },
        icpRecord: {
            name: '湘ICP备2024064075号-1',
            link: 'https://beian.miit.gov.cn/',
        },
        // 网络安全备案信息配置
        securityRecord: {
            name: '湘公网安备43112402000148号',
            link: 'https://ywtb.mps.gov.cn/',
        },
        // customHtml: `<p style="margin: 0; display: inline;">小破站已运行了 <span id="footer-runtime"></span></p>`,
    },

    //文章分享 功能
    articleShare: { enabled: true },

    // 精选文章
    topArticle: {
        enabled: true, // 是否启用精选文章卡片
        limit: 4, // 一页显示的数量
        autoPage: false, // 是否自动翻页
        pageSpeed: 4000, // 翻页间隔时间，单位：毫秒。autoPage 为 true 时生效
        dateFormat: 'yyyy-MM-dd', // 精选文章的日期格式
        // dateFormat: "yyyy-MM-dd hh:mm:ss", // 精选文章的日期格式
    },

    // 布蒜子统计分析
    docAnalysis: {
        createTime: '2021-10-19',
        statistics: {
            provider: 'busuanzi',
        },
        wordCount: true,
        readingTime: true,
        // overrideInfo: [
        //   { key: "lastActiveTime", value: (_, currentValue) => `${currentValue}前` },
        //   { key: "totalPosts", label: "文章总数目" },
        // ],
        appendInfo: [{ key: 'index', label: '序号', value: 'One' }],
    },

    // 封面图模式为 full。
    post: {
        coverImgMode: 'full',
    },

    // 赞赏在文章下方
    appreciation: {
        position: 'doc-after',
        options: {
            icon: 'weChatPay', // 赞赏图标，内置 weChatPay 和 alipay
            expandTitle: '打赏支持', // 展开标题，支持 HTML
            collapseTitle: '下次一定', // 折叠标题，支持 HTML
            // content: `<img src='/img/alipay/1.png'>`, // 赞赏内容，支持 HTML
            content: `<img src='/vitepress-teek-docs/social-icons/wechat-QR.jpg'><img src='/vitepress-teek-docs/social-icons/zfb-QR.jpg'>`, // 赞赏内容，支持 HTML
            expand: true, // 是否默认展开，默认 false
        },
    },

    // 赞赏在 文章导航栏下侧
    // appreciation: {
    //   position: "aside-bottom",
    //   options: {
    //     title: `<span style="color: var(--tk-theme-color)">欢迎打赏支持</span>`, // 赞赏标题，支持 HTML
    //     content: `<img src='/teek-logo-large.png'>`, // 赞赏内容，支持 HTML
    //   },
    // },

    vitePlugins: {
        autoFrontmatter: true, //添加自动格式formatter插件
        sidebarOption: {
            // initItems: false, //这条命令注释后，才会让文档和目录的样式保持一致
            collapsed: true, //打开侧边栏自动收缩功能
        },
        permalinkOption: {
            ignoreList: ['private-data', 'images'], // 忽略扫描某些目录
        },
    },

    markdown: {
        config: (md) => {
            md.use(timeline)
            md.use(groupIconMdPlugin)
        },

        demo: {
            githubUrl: 'https://github.com/Kele-Bingtang/vitepress-theme-teek/blob/master/docs',
        },
    },

    //站点统计
    siteAnalytics: {
        provider: 'baidu',
        options: {
            id: '你的id',
        },
    },
})

// https://vitepress.dev/reference/site-config
export default defineConfig({
    extends: teekConfig,
    title: '极客兔',
    description: description,
    cleanUrls: true,
    base: '/vitepress-teek-docs/',
    lastUpdated: true,
    srcDir: './src',
    outDir: './dist',
    lang: 'zh-CN',
    head: [
        ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],
        ['link', { rel: 'icon', href: '/rabbit.svg', type: 'image/svg' }],
        // ["link", { rel: "icon", type: "image/svg+xml", href: "/teek-logo-mini.svg" }],
        // ["link", { rel: "icon", type: "image/png", href: "/teek-logo-mini.png" }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:locale', content: 'zh-CN' }],
        ['meta', { property: 'og:title', content: 'Teek | Vitepress Theme' }],
        ['meta', { property: 'og:site_name', content: 'Teek' }],
        ['meta', { property: 'og:image', content: '' }],
        ['meta', { property: 'og:url', content: '' }],
        ['meta', { name: 'author', content: '程序员皮蛋鸽鸽' }],
        [
            'meta',
            {
                name: 'viewport',
                content: 'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
            },
        ],
        [
            'meta',
            {
                name: 'description',
                description,
            },
        ],
        ['meta', { name: 'keywords', description }],

        ['link', { rel: 'stylesheet', href: '//at.alicdn.com/t/font_2989306_w303erbip9.css' }], // 阿里在线矢量库
        ['link', { rel: 'stylesheet', href: '//at.alicdn.com/t/c/font_4429259_ena0fqhcv9l.css' }], // 阿里购物车项目图标库在线资源

        //添加看板娘
        ['script', { src: 'https://fastly.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/autoload.js' }],

        //免费的音乐播放器
        /*[
            'script',
            {
                type: 'text/javascript',
                src: 'https://cdn.bootcdn.net/ajax/libs/jquery/3.7.1/jquery.min.js',
                // src: "https://myhkw.cn/player/js/jquery.min.js",
            },
        ],
        [
            'script',
            {
                type: 'text/javascript',
                id: 'myhk',
                src: 'https://myhkw.cn/api/player/1741345067120',
                key: '1741345067120',
                m: '1',
                lr: 'r',
                defer: 'defer', // 添加defer属性，确保脚本在DOM加载完成后执行
            },
        ],*/

        //51la统计挂件
        [
            'script',
            {
                id: 'LA-DATA-WIDGET',
                crossorigin: 'anonymous',
                charset: 'UTF-8',
                src: 'https://v6-widget.51.la/v6/3LmZHLhDZIDpMaT0/quote.js?theme=0&col=true&f=12&badge=icon_0&icon=center',
                // src: "https://myhkw.cn/player/js/jquery.min.js",
            },
        ],

        // 鼠标爆炸效果
        /*[
      'script',
      {
        type: 'text/javascript',
        src: 'https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/animejs/3.2.1/anime.min.js', //字节cdn
        id: 'anime.min.js-js',
        defer: 'defer',
      },
    ],
    [
      'script',
      {
        // src: "https://cpython666.github.io/js/clickjs/fireworks.js",
        src: 'https://live2d-hyde.netlify.app/Clickfireworks.js',
        defer: 'defer',
      },
    ],  */
    ],

    markdown: {
        // 开启行号
        lineNumbers: true,
        image: {
            // 默认禁用；设置为 true 可为所有图片启用懒加载。
            lazyLoading: true,
        },
        // 更改容器默认值标题
        container: {
            tipLabel: '提示',
            warningLabel: '警告',
            dangerLabel: '危险',
            infoLabel: '信息',
            detailsLabel: '详情',
        },
    },
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/rabbit.svg',
        darkModeSwitchLabel: '主题',
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '返回顶部',
        lastUpdatedText: '上次更新时间',
        outline: {
            level: [2, 4],
            label: '本页导航',
        },
        docFooter: {
            prev: '上一页',
            next: '下一页',
        },

        nav: generateNav({ source: 'src', excludeDirs: ['@pages', 'public', 'images'] }) /*[
            {
                text: '🏡首页',
                link: '/',
            },
            {
                text: '💻️web开发',
                items: [
                    {
                        text: '后端',
                        items: [
                            {
                                text: 'Lua',
                                link: '/web开发/后端/Lua/Lua语言快速入门',
                            },
                        ],
                    },
                ],
            },
            {
                text: '👏索引',
                items: [
                    { text: '分类', link: '/categories' },
                    { text: '标签', link: '/tags' },
                    { text: '归档', link: '/archives' },
                ],
            },
        ]*/,
        sidebar: generateSidebar({ source: 'src', excludeDirs: ['@pages', 'public', 'images'] }),

        socialLinks: [{ icon: 'github', link: 'https://github.com/ZhouYu2156' }],

        search: {
            /**
             * 本地搜索配置
             */
            provider: 'local',
            options: {
                translations: {
                    button: {
                        buttonText: '搜索文档',
                        buttonAriaLabel: '搜索文档',
                    },
                    modal: {
                        noResultsText: '无法找到相关结果',
                        resetButtonTitle: '清除查询条件',
                        displayDetails: '显示详情列表',
                        footer: {
                            selectText: '选择',
                            navigateText: '切换',
                            closeText: '关闭',
                        },
                    },
                },
            },
        },
        editLink: {
            text: '在 GitHub 上编辑此页',
            pattern: 'https://github.com/Kele-Bingtang/vitepress-theme-teek/edit/master/docs/:path',
        },
    },

    // 运行后自动打开网页
    vite: {
        server: {
            host: true,
        },
        plugins: [
            groupIconVitePlugin(), //代码组图标

            La51Plugin({
                id: '你id',
                ck: '你ck',
                apply: 'build', //（默认）：仅在 生产环境（用户访问正式网站）时加载统计代码。
            }),
        ],
        //其他配置项
        build: {
            chunkSizeWarningLimit: 1024 * 5, // 限制警告的块大小
            rollupOptions: {
                external: ['**/_*.md'], // 忽略所有以下划线开头的 Markdown 文件
            },
        },
    },
})
