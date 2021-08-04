## Vuepress——静态网站生成器

## vuepress介绍
- 基于 Vue、围绕 markdown 生成静态页面的 VuePress 框架；

- 它由两部分组成：
  1. 第一部分是一个极简静态网站生成器 ，包含由 Vue 驱动的主题系统和插件 API
  2. 另一部分是为书写技术文档而优化的默认主题

## vuepress特性
#### 1.简洁。
内置 markdown 扩展，针对技术文档进行了优化，以最少的配置帮助你专注于写作。

#### 2.vue驱动。
享受 Vue + webpack 的开发体验，可以在 Markdown 中使用 Vue 组件，
又可以使用 Vue 来开发自定义主题。

## vuepress优点
#### 界面简洁优雅
#### 容易上手
#### 更好的兼容、扩展 Markdown 语法
#### 响应式布局，PC端、手机端

## 搭建过程

首先检查使node.js>=8.6，从头开始搭建。
按照官网命令行安装，整个项目就成了一个初始的静态网站。
文件的目录结构需要自己创建，虽然官网有推荐的目录结构，但那些都是自定义的。
开发时常常会出现代码与运行结果不同步的现象，多用运行和打包两个命令行就好啦。

vuepress的主要模块有配置、主题、插件等，
<br/>一个基本的网站我感觉其实只需要配置（导航栏、侧边栏，
这两个主要是路径结构对不对和markdown标题的问题）。
<br/>（他的默认主题我觉得挺简洁大方的）
<br/>难点：部署上线


## 一、通过命令创建一个简单可用的 VuePress 文档

1. 创建并进入一个新目录
```sh
mkdir vuepress-demo && cd vuepress-demo
```
2. 使用包管理器进行初始化
```sh
yarn init 
npm init
```
3. 将 VuePress 安装为本地依赖
```sh
yarn add -D vuepress 
npm install -D vuepress
```
4. 创建第一篇文档README.md
<br>默认的主题里提供了一个首页（Homepage）的布局 (用于这个网站的主页)。可自行copy
```sh
mkdir docs && echo '# Hello VuePress' > docs/README.md
```
5. 在 package.json 中添加一些 scripts
```js
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```
6. 在本地启动服务器
```sh
yarn docs:dev
npm run docs:dev
```
VuePress 会在 http://localhost:8080 启动一个热重载的开发服务器。

现在，你应该已经有了一个简单可用的 VuePress 文档。

## 二、做一些基本配置

1. 接下来可以先了解一下官方约定好的目录结构
```js
.
├── docs
│   ├── .vuepress (可选的)用于存放全局的配置、组件、静态资源等
│   │   ├── components (可选的)该目录中的 Vue 组件将会被自动注册为全局组件
│   │   ├── theme (可选的)用于存放本地主题
│   │   │   └── Layout.vue
│   │   ├── public (可选的)静态资源目录。
│   │   ├── styles (可选的)用于存放样式相关的文件
│   │   │   ├── index.styl将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级。
│   │   │   └── palette.styl
│   │   ├── templates (可选的, 谨慎配置)存储 HTML 模板文件。
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── config.js (可选的)配置文件的入口文件
│   │   └── enhanceApp.js (可选的)客户端应用的增强
│   │ 
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│ 
└── package.json
```
2. 根据目录结构创建所需文件<br>
  (1). 首先我们需要在docs文档目录下创建一个 .vuepress 目录文件夹，
所有 VuePress 相关的文件都将会被放在这里。项目结构会变成这样：
```js
.
├─ docs
│  ├─ README.md
│  └─ .vuepress
│     └─ config.js
└─ package.json
```
  (2). 其次，创建config.js<br/>
一个 VuePress 网站必要的配置文件是 .vuepress/config.js，
它应该导出一个 JavaScript 对象：
```js
module.exports = {
  title:"Glowing'blog",//网站的标题
  description:"May everything you do for it have romantic results",//网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。
}
```
  (3). 对于上述的配置，如果运行起 npm run docs:dev，<br>
将会看到一个页面，它包含一个页头，里面包含一个标题和一个搜索框。即：README.md在页面中的展示

  (4). 在 .vuepress/public 设置公共文件<br/>
有时，需要提供一个静态资源，但是它们并不直接被我们的任何一个 markdown 文件或者主题组件引用 
—— 举例来说，favicons 和 PWA 的图标，在这种情形下，
我们可以将它们放在 .vuepress/public 中， 它们最终会被复制到生成的静态文件夹中。<br>
  （5).配置导航栏（注意路径）
```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    logo: '/assets/logo.png',// 导航栏logo图
    nav: [
        { text: 'Home', link: '/' },
        { text: 'About', link:'/about1'},
        {
          text: 'Study',
          items: [ // items 数组将显示为一个下拉列表
            { text: '布局', link: '/css/css-aaa/' },
            { text: '动画', link: '/css/css-bbb/' }
          ]
        }
    ]
  }
}
```
  （6）设置最后更新时间提示<br>
  可以通过 themeConfig.lastUpdated 选项来获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部：
```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    lastUpdated: '更新时间', // string | boolean
  }
}
```
  (7)

3. markdown基本语法要了解<br/>
所有的 Markdown 文件都会被编译成 Vue 组件，展示在可见的页面中。
因此需要我们对markdown基本语法要熟知。帮助我们日后写文档。

## 三、安装一些插件
1. back-to-top 回至顶部插件
<br/>
(1)安装
```sh
yarn add -D @vuepress/plugin-back-to-top
# OR npm install -D @vuepress/plugin-back-to-top
```
(2)使用
```js
module.exports = {
  plugins: {
    '@vuepress/back-to-top':true
    }
}
```
2. pwa 内容更新提示
<br/>(1)安装
```sh
yarn add -D @vuepress/plugin-pwa
# OR npm install -D @vuepress/plugin-pwa
```
(2)使用
```js
module.exports = {
  head:[
    ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],
  plugins: {
    '@vuepress/pwa':{
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新"
        }
  }
}
```
3.vssue评论区
<br/>
(1)安装

```sh
# use Github V3
npm install @vssue/api-github-v3
# OR: use Github V4
npm install @vssue/api-github-v4
# OR: use Gitlab V4
npm install @vssue/api-gitlab-v4
# OR: use Bitbucket V2
npm install @vssue/api-bitbucket-v2
# OR: use Gitee V5
npm install @vssue/api-gitee-v5
# OR: use Gitea V1
npm install @vssue/api-gitea-v1
```
(2)使用
```js
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
```

4.自动生成侧边栏
<br>
(1)安装

```sh
npm i vuepress-plugin-auto-sidebar -D
```
(2)使用
```js
module.exports = {
  plugins: {
    "vuepress-plugin-auto-sidebar": {},
}
```

## 四、添加编辑.md文件
### markdown语法

## 五、使用组件

所有在 .vuepress/components 中找到的 *.vue 文件将会自动地被注册为全局的异步组件，如：
```sh
.
└─ .vuepress
   └─ components
      ├─ demo-1.vue
      ├─ OtherComponent.vue
      └─ Foo
         └─ Bar.vue
```
你可以直接使用这些组件在任意的 Markdown 文件中（组件名是通过文件名取到的）：
```js
<demo-1/>
<OtherComponent/>
<Foo-Bar/>
```

## 六、部署到服务器

说了这么多都是在本地进行的，现在我们要把本地的内容推送到某个服务器上，这样只要有网络，就可以随时随地看自己的网站了。

### 一般来说，有两种方案可供选择：

- 自己买一个服务器，阿里云、腾讯云等，这种方式的好处是速度有保证、可以被搜索引擎收录，坏处是要花钱啊 土豪同学可以考虑。
- 使用 Github Pages 。
<br>什么是 Github Pages 呢？简单说就是 Github 提供的、用于搭建个人网站的静态站点托管服务。很多人用它搭建个人博客。这种方式的好处是免费、方便，坏处是速度可能会有些慢、不能被国内的搜索引擎收录。
最终我选择了方案2，下面将讲解如何使用 Github Pages 服务。
### 登陆 Github
打开 github 网站，登陆自己的 github 账号

#### 接着我们新建两个仓库，

#### 新建仓库一： USERNAME.github.io （不用克隆到本地）
:::tip
USERNAME 必须是你 Github 的账号名称，不是你的名字拼音，也不是你的非主流网名，不要瞎起，要保证和Github账号名一模一样！
:::
例如我的 Github 账号名称是 kouyanju
,那么新建仓库，Repository name 就填写为：kouyanju.github.io
<br>这个仓库建好后，不用克隆到本地，内容更新修改都在下面的仓库中进行。

#### 新建仓库二：随便起一个名字，比如：vuepressblog （克隆到本地）
这个项目是用来开发博客的，以后只需要改这个项目就够了。

<br>在仓库二中的项目里，在其根目录下创建 deploy.sh 文件，内容如下：

```sh
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.yourwebsite.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果你想要部署到 https://USERNAME.github.io
git push -f git@github.com:USERNAME/USERNAME.github.io.git master

# 如果发布到 https://USERNAME.github.io/<REPO>  REPO=github上的项目
# git push -f git@github.com:USERNAME/<REPO>.git master:gh-pages

cd -
```
修改仓库二中的 deploy.sh 发布脚本
<br>把文件中的 USERNAME 改成 Github 账号名，例如我的账号名是 kouyanju，那么就可以改为：
```sh
# 如果你想要部署到 https://USERNAME.github.io
git push -f git@github.com:kouyanju/kouyanju.github.io.git master
```
在 package.json 文件夹中添加发布命令（使用工具包的请忽略）
```js
"scripts": {
  "deploy": "bash deploy.sh"
}
```
### 大功告成，运行发布命令
```sh
npm run deploy
```
此时打开 Github Settings 中下面的链接: https://kouyanju.github.io/ 即可看到自己的主页啦~

## 收获
- 对于我而言
<br>通过制作这个blog，体验了快速使用框架搭建网站的过程，感受到了前所未有的便捷和技术的强大；
同时，运用了熟悉的vue。
<br>感谢师父布置blog任务，我将使用它整理知识体系和梳理生活，
它将会做为我前端职业生涯美好的开始，日后将跟随我一路前行。
以后我会继续优化、持续更新！

<vssue :options="{locale:'zh'}"/>