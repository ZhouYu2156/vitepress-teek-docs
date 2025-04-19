import type { TeekConfig } from 'vitepress-theme-teek/config'

// 文档配置
export const teekDocConfig: TeekConfig = {
    themeSetting: {
        themeSize: 'default',
        backTopDone: (TkMessage) => {
            TkMessage.success('返回顶部成功')
        },
        themeStyle: 'vp-green',
    },

    //公告栏
    notice: {
        enabled: true,
        position: 'center',
    },
}

// 博客配置
export const teekBlogConfig: TeekConfig = {
    teekHome: true,
    vpHome: false,
    themeSetting: {
        themeSize: 'default',
        themeStyle: 'vp-green',
        backTopDone: (TkMessage: any) => {
            TkMessage.success('返回顶部成功')
        },
    },
    wallpaper: {
        enabled: true,
    },

    banner: {
        name: '极客兔 🎉',
        mask: false,
        enabled: true,
        bgStyle: 'fullImg',
        imgInterval: 8000,
        imgShuffle: true, // 当多张大图时（imgSrc 为数组），设置切换时间，单位：毫秒
        imgSrc: [
            '/banner/1.webp',
            '/banner/2.webp',
            '/banner/3.webp',
            '/banner/4.webp',
            '/banner/5.webp',
            '/banner/6.webp',
            '/banner/7.webp',
            '/banner/8.webp',
            '/banner/9.webp',
            '/banner/10.webp',
            '/banner/11.webp',
            '/banner/12.webp',
            '/banner/13.webp',
            '/banner/14.webp',
            '/banner/15.webp',
            '/banner/16.webp',
            '/banner/17.webp',
            '/banner/18.webp',
            '/banner/19.webp',
            '/banner/20.webp',
            '/banner/21.webp',
            '/banner/22.webp',
            '/banner/23.webp',
            '/banner/24.webp',
            '/banner/25.webp',
            '/banner/26.webp',
            '/banner/27.webp',
            '/banner/28.webp',
            '/banner/29.webp',
        ],
        descStyle: 'types',
        // descStyle: "types", // 描述信息风格：default 为纯文字渲染风格（如果 description 为数组，则取第一个），types 为文字打印风格，switch 为文字切换风格
        maskBg: 'rgba(0, 0, 0, 0.4)', // Banner 大图遮罩颜色，如果为数字，则是 rgba(0, 0, 0, ${maskBg})，如果为字符串，则作为背景色
        textColor: '#ffffff', // Banner 字体颜色，bgStyle 为 default 时为 '#000000'，其他为 '#ffffff'
        titleFontSize: '3.2rem', // 标题字体大小
        descFontSize: '1.4rem', // 描述字体大小
        description: [
            //lonely
            '初闻不知曲中意，再听已是曲中人',

            // 原有内容保留
            '万般努力只为出人头地，低头弯腰只为爬的更高',

            // 动漫经典语录
            '无论你在哪里，我一定会找到你 —— 星际牛仔',
            '重要的不是你长得漂亮与否，而是你的心灵是否美丽 —— 千与千寻',
            '我们仰望着同一片天空，却看着不同的地方 —— 秒速五厘米',
            '比自己的生命更重要的东西永远存在着 —— fate',
            '正因为生来什么都没有，因此我们能拥有一切 —— 游戏人生',

            // 爱情感悟
            '喜欢一个人就是在对方的一切都合理化',
            '爱，其实很简单，困难的是接受这份简单',
            '最好的爱情是互相成就，而不是互相禁锢',
            '缘分就是，遇见了可以让你笑的人',
            '爱情不是占有，而是彼此成就',

            // 人生哲理
            '生命中最困难的时刻，恰是转机的开始',
            '没有人可以回到过去，但每个人都可以从现在开始',
            '与其等待机会，不如创造机会',
            '生活不会因为你的懦弱而停止脚步',
            '成长的过程总是孤独的，但结果是美好的',

            // 更多动漫台词
            '即使是在最深的黑暗里，也要保持希望 —— 进击的巨人',
            '不要为了别人而活，要为了自己而活 —— 火影忍者',
            '比起悲伤，无法分享快乐才是真的寂寞 —— 四月是你的谎言',
            '梦想是不会结束的，只要还活着就要继续追逐 —— 海贼王',

            // ... 继续添加更多句子直到100个
            '生命的意义不在于活了多久，而在于经历了什么',
            '最珍贵的不是拥有的回忆，而是正在创造的回忆',
            '不要因为走得太远，而忘记了为什么出发',
            '有时候，坚持了你最不想干的事情，却等来了你最想要的结果',
            '与其用泪水悔恨昨天，不如用汗水拼搏今天',

            // 添加更多正能量句子...
            '每个人都是自己人生的主角',
            '不要被周围的声音干扰，坚持自己认定的道路',
            '成功不是终点，失败也不是终结',
            '时间会证明一切，耐心是最好的答案',
            '活在当下，珍惜现在，期待未来',
        ], // 描述信息
        switchTime: 4000, // 描述信息切换间隔时间，单位：毫秒。descStyle 为 switch 时生效
        switchShuffle: false, // 描述信息是否随机切换，为 false 时按顺序切换。descStyle 为 switch 时生效
        typesInTime: 200, // 输出一个文字的时间，单位：毫秒。descStyle 为 types 时生效
        typesOutTime: 100, // 删除一个文字的时间，单位：毫秒。descStyle 为 types 时生效
        typesNextTime: 800, // 打字与删字的间隔时间，单位：毫秒。descStyle 为 types 时生效
        typesShuffle: false, // 描述信息是否随机打字，为 false 时按顺序打字，descStyle 为 types 时生效
    },

    blogger: {
        avatar: '/avatar.jpg',
        shape: 'square',
        name: '程序员皮蛋',
        slogan: '用心创作优质内容',
    },

    // 文章
    article: {
        showIcon: true, // 作者、日期、分类、标签、字数、阅读时长、浏览量等文章信息的图标是否显示
        // dateFormat: "yyyy-MM-dd hh:mm:ss", // 文章日期格式，首页和文章页解析日期时使用
        dateFormat: 'yyyy-MM-dd', // 文章日期格式，首页和文章页解析日期时使用
        showInfo: true, // 是否展示作者、日期、分类、标签、字数、阅读时长、浏览量等文章信息，分别作用于首页和文章页
        showAuthor: true, // 是否展示作者
        showCreateDate: true, // 是否展示创建日期
        showUpdateDate: true, // 是否展示更新日期，是否展示更新时间，仅在文章页显示
        showCategory: true, // 是否展示分类
        showTag: true, // 是否展示标签
        topTip: (frontmatter) => {
            const tip: Record<string, string> = {
                type: 'warning',
                title: '注意',
                text: '文章发布较早，内容可能过时，阅读注意甄别。',
            }

            // frontmatter.long 为 true，则添加提示
            if (frontmatter.long) return tip

            // frontmatter.date 大于半年，则添加提示
            const longTime = 6 * 30 * 24 * 60 * 60 * 1000
            if (frontmatter.date && Date.now() - new Date(frontmatter.date).getTime() > longTime) return tip
        },

        // imageViewer: {
        //   hideOnClickModal: true,
        // },
    },
    // 设置主题尺寸
    // themeSetting: {
    //   themeSize: "large",
    // },

    friendLink: {
        list: [
            {
                avatar: '/teeker-logo-large.png',
                name: 'vitepress-theme-teek',
                desc: 'Teek官网',
                link: 'https://vp.teek.top/',
            },
        ],
    },

    // 社交链接
    social: [
        {
            icon: 'icon-github',
            iconType: 'iconfont',
            name: 'GitHub',
            link: 'https://github.com/ZhouYu2156',
        },
        {
            icon: 'icon-gitee2',
            iconType: 'iconfont',
            name: 'Gitee',
            link: 'https://gitee.com/zhouyu2156',
        },
        {
            icon: 'icon-bilibili-',
            iconType: 'iconfont',
            name: 'Bilibili',
            link: 'https://space.bilibili.com/431828034',
        },
    ],

    comment: {
        // provider: "giscus",
        provider: 'twikoo',
        options: {
            // twikoo 配置，官网：https://twikoo.js.org/
            envId: 'https://twikoo.onedayxyy.cn/',
            link: 'https://cdn.jsdelivr.net/npm/twikoo@1.6.41/dist/twikoo.min.js',

            // waline 配置，官网：https://waline.js.org/
            // serverURL: "https://tk.waline.youngkbt.cn/",
            // jsLink: "https://unpkg.com/@waline/client@v3/dist/waline.js",
            // cssLink: "https://unpkg.com/@waline/client@v3/dist/waline.css",

            // giscus 配置，官网：https://giscus.app/zh-CN
            // repo: "Kele-Bingtang/vitepress-theme-kt",
            // repoId: "R_kgDONpVfBA",
            // category: "Announcements",
            // categoryId: "DIC_kwDONpVfBM4Cm3v9",

            // artalk 配置，官网：https://artalk.js.org/
            // server: "",
            // site: "",
        },
    },

    //公告栏
    notice: {
        enabled: true,
        position: 'center',
    },
}
