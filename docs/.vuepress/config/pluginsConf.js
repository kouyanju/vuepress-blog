
module.exports={
  '@vssue/vuepress-plugin-vssue': {
    // set `platform` rather than `api`
    platform: 'github-v4',
    // 其他的 Vssue 配置
    // all other options of Vssue are allowed
    owner: 'kouyanju',//github账户名
    repo: 'kouyanju.github.io',//github一个项目的名称
    clientId: 'a830cd404f595faa19ac',//注册的Client ID
    clientSecret: '6d227535a0f91602c758f9cae19b9eead126bd3f',//注册的Client Secret
    autoCreateIssue: true,// 自动创建评论，默认是false，最好开启，这样首次进入页面的时候就不用去点击创建评论的按钮了。
  },
  '@vuepress/pwa':{
    serviceWorker: true,
    updatePopup: {
      message: "发现新内容可用",
      buttonText: "刷新"
    }
  },
  '@vuepress/back-to-top':true,
  //安装自动生成侧边栏分组的插件npm i vuepress-plugin-auto-sidebar -D
  "vuepress-plugin-auto-sidebar": {},
}