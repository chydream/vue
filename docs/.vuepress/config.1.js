module.exports = {
    title: '新东网ERP管理系统',
    description: '一个简单易用的在线开发工具',
    "name": "姜帅杰",
    "short_name": "姜帅杰",
    "start_url": "index.html",
    "display": "standalone",
    "background_color": "#2196f3",
    "theme_color": "blue",
    "icons": [
        {
        "src": "./logo.png",
        "sizes": "144x144",
        "type": "image/png"
        }
    ],
    "related_applications": [
        {
        "platform": "web"
        },
        {
        "platform": "play",
        "url": "https://play.google.com/store/apps/details?id=cheeaun.hackerweb"
        }
    ],
    head: [
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['link', { rel: 'apple-touch-icon', href: '/img/logo.png' }],
    ],
    serviceWorker: true,
    themeConfig: {
     nav: [
         { text: '主页', link: '/' },
         { text: '博文',
           items: [
             { text: 'Android', link: '/android/' },
             { text: 'ios', link: '/ios/' },
             { text: 'Web', link: '/web/' }
           ] 
         },
         { text: '关于', link: '/about/' },
         { text: 'Github', link: 'https://www.github.com/codeteenager' },
     ],
     sidebar: {
         '/android/': [
                     "",
                     "android1", 
                     
                      ],
             "/ios/":[
                     "",
                     "ios1",
                     ],
             "/web/":[
                     "",
                     "web1",
                     
                          ],
         },
     sidebarDepth: 2,
     lastUpdated: 'Last Updated', 
 },
}