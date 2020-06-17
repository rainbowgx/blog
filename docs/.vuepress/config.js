module.exports = {
    base: '/blogs/',
    title: 'blogs', // 页签标题 : A001_VuePress博客搭建的简单教程&问题分析 # | Wiki 1001
    // description: '金志相的 Wiki 1001 维基百科', // meta 中的描述文字，意义不大，SEO用
    // head: [
    //     ['link', {
    //         rel: 'icon',
    //         href: '/img/geass-bg.ico'
    //     }],
    // ],
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        sidebarDepth: 3, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间,
        // 顶部导航栏
        nav: [{
                text: '前端',
                link: '/frontEnd/'
            },
            {
                text: '后端',
                link: '/backEnd/'
            },
            {
                text: '常用网站推荐',
                link: '/website/'
            },
            // 多项，下拉形式
            // {
            //     text: 'Concat',
            //     items: [
            //         // link：指向链接也可以是外网链接
            //         {
            //             text: 'Segmentfault',
            //             link: 'https://segmentfault.com/u/mulander'
            //         },
            //     ]
            // },
            // {
            //     text: 'GitHub',
            //     items: [{
            //             text: 'GitHub首页',
            //             link: 'https://github.com/Mulander-J'
            //         },
            //         {
            //             text: 'Island',
            //             link: 'https://mulander-j.github.io/island/code/html/index.html'
            //         },
            //         {
            //             text: 'TimeWaster',
            //             link: 'https://mulander-j.github.io/timeWaster/demo/index.html#/'
            //         },
            //     ]
            // },
        ],
    }
}