const headConf = require("./config/headConf");
const pluginsConf = require("./config/pluginsConf");
// const { description } = require("commander");
const navConf = require("./config/navConf");

module.exports = {
    title:"Glowing'blog",
    description:"May everything you do for it have romantic results",
    themeConfig:{
        lastUpdated: '更新时间', 
        logo: '/assets/hero.png',//添加导航栏左侧logo
        // navbar: false,//禁用导航栏
        nav: navConf,//增加导航栏链接
        sidebarDepth:2,
    },
    head:headConf, 
    plugins:pluginsConf,
  }