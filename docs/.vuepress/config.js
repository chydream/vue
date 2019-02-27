module.exports = {
    base:'/vuepress/',
    title: '新东网ERP管理系统',
    description: '一个简单易用的在线开发工具',
    // chainWebpack (config) {
    //     config.resolve.alias.set('@theme','/vuepress')
    // },
    themeConfig:{
        nav:[
            {text:'主页', link:'/'},
            {text:'项目', link:'/project/'},
        ],
        sidebar:[
            {
                title: '项目',   // 必要的
                path: '/project/',       // 可选的, 应该是一个绝对路径
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/project/',
                    // '/project/pms',
                ]
            }
        ]
    }
}