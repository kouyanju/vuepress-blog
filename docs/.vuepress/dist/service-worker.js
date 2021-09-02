/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5024ebc6a2b21065122ff31aee8d4c89"
  },
  {
    "url": "about.html",
    "revision": "63a39290b51749d02847949038dbf86e"
  },
  {
    "url": "about1.html",
    "revision": "67a3c935dbc61bfa6b583ced6095fa50"
  },
  {
    "url": "all/css/c-aaa.html",
    "revision": "eb44c5b4480902243bb98406e4d16d67"
  },
  {
    "url": "all/css/c-bbb.html",
    "revision": "ec696cf436ee0de78933d72a1230c977"
  },
  {
    "url": "all/css/c-ccc.html",
    "revision": "aa47488127d43161c25303356accf893"
  },
  {
    "url": "all/css/css选择器.html",
    "revision": "d16fcee4a2569a355019542411683a8b"
  },
  {
    "url": "all/css/display属性.html",
    "revision": "6f75837a3284d10b17de1b49859ef87b"
  },
  {
    "url": "all/css/h5+css3新增.html",
    "revision": "839c94d7d927c0bda20d6aedd5129589"
  },
  {
    "url": "all/css/动画.html",
    "revision": "c9980db714363dfb674f4b7014649ee7"
  },
  {
    "url": "all/css/块级元素和行内元素.html",
    "revision": "d8a55fce22d7749e95449c7cfa28ea29"
  },
  {
    "url": "all/css/实践经验.html",
    "revision": "bce7cb55f0d25a8b827994748088da89"
  },
  {
    "url": "all/css/布局.html",
    "revision": "be79314631220d49776d71fa59e729c2"
  },
  {
    "url": "all/css/水平垂直居中.html",
    "revision": "72f81cbe7c40be220467d11b34ad9677"
  },
  {
    "url": "all/essays/20210721记录.html",
    "revision": "45396eefd20adbefc8c35830314cbf86"
  },
  {
    "url": "all/essays/20210723记录.html",
    "revision": "a5cb581732580a644c1a651dc9189dce"
  },
  {
    "url": "all/javascript/es6新增.html",
    "revision": "691a0311014ba39537ace329ace9a6ea"
  },
  {
    "url": "all/javascript/this指向.html",
    "revision": "019e9fdb76e83db2188c780187f07cce"
  },
  {
    "url": "all/javascript/事件相关.html",
    "revision": "05a2264cacf468adf9b816b3c1075c4e"
  },
  {
    "url": "all/javascript/数据类型.html",
    "revision": "5213b7675594d51b5e76ed581275495b"
  },
  {
    "url": "all/javascript/数组.html",
    "revision": "f474ac6fa0ed033979044bee1d5aa26e"
  },
  {
    "url": "all/javascript/防抖节流.html",
    "revision": "ff970450bd682cd9c6b5aeb4b0c0a163"
  },
  {
    "url": "all/others/algorithm.html",
    "revision": "c5362079ff9ab606c2a448d1a9eba17d"
  },
  {
    "url": "all/others/didi需求.html",
    "revision": "2f060681c7bb008ec7d9e291c6a21aaa"
  },
  {
    "url": "all/others/git.html",
    "revision": "eb39af21c7ebf28c7b7b6072d7d2a472"
  },
  {
    "url": "all/others/study.html",
    "revision": "092c45f16c0a7639ab6988d9d2239149"
  },
  {
    "url": "all/others/vuepress搭建blog.html",
    "revision": "41bcbba59bd1cd6d8c50a86eb6e5ce10"
  },
  {
    "url": "all/vue/v-if和v-show的区别.html",
    "revision": "365311a96196e3bbdf0bdc5899fe593e"
  },
  {
    "url": "all/vue/vue路由的两种实现.html",
    "revision": "50f3dfdfdc1a77cc45e518e0d25bf710"
  },
  {
    "url": "all/vue/动态绑定多个class.html",
    "revision": "5910e06ae579adc574e88cc8f5d5589c"
  },
  {
    "url": "all/vue/生命周期.html",
    "revision": "a78ad1d5d043624684fc9b3ea6444940"
  },
  {
    "url": "all/vue/组件.html",
    "revision": "d11abdbb27af6f3ce09f88763fcbc749"
  },
  {
    "url": "assets/css/0.styles.9c54ab14.css",
    "revision": "ad131b4cd48b8139dc2234ec3fce56dd"
  },
  {
    "url": "assets/guo.png",
    "revision": "be167a05fbbba61de484bb6858effab4"
  },
  {
    "url": "assets/hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "assets/hotdog.png",
    "revision": "9aedbe64262b88dd78b689b39955f12a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/ssh-rsa.dc72d8cc.png",
    "revision": "dc72d8cc17112300ed0993a7f1ba5915"
  },
  {
    "url": "assets/js/10.e6ead868.js",
    "revision": "4c4059537aafe68c9b5d5ddcd36b7593"
  },
  {
    "url": "assets/js/11.12ea2fe3.js",
    "revision": "ee6b4807f38bec0f4610215470274b6a"
  },
  {
    "url": "assets/js/12.b3c08560.js",
    "revision": "c48fa31af41a1b16de63628addfe1903"
  },
  {
    "url": "assets/js/13.ce215a70.js",
    "revision": "5f09bdded6f1484b4239c2955db69549"
  },
  {
    "url": "assets/js/14.9f4e8c9e.js",
    "revision": "5cb125d8e0070f6cc72c531e88fd3371"
  },
  {
    "url": "assets/js/15.132b4107.js",
    "revision": "97043aa27a47a05cec60e9293709c469"
  },
  {
    "url": "assets/js/16.c07a970b.js",
    "revision": "16b1b42daafcd0c1d3aafeea1cdafaa4"
  },
  {
    "url": "assets/js/17.22143510.js",
    "revision": "42d2fa7532c4d212cbe5a4dc45ea8b15"
  },
  {
    "url": "assets/js/18.27db22a6.js",
    "revision": "877e33280bab1dbc85553710454f3ba9"
  },
  {
    "url": "assets/js/19.e75eb0c1.js",
    "revision": "e82edbccabf331910e39abfbfc8f5664"
  },
  {
    "url": "assets/js/2.8bbd1442.js",
    "revision": "f22daa8568816b6423f2126f7d7dc770"
  },
  {
    "url": "assets/js/20.61407e5c.js",
    "revision": "28d80a7cee054a439c61a3fe231b71e7"
  },
  {
    "url": "assets/js/21.498c88dd.js",
    "revision": "35ff1011f2eb2d2f0a4c8b2e93b0200e"
  },
  {
    "url": "assets/js/22.17b0ae5b.js",
    "revision": "5da294638134fa649350cf381d582446"
  },
  {
    "url": "assets/js/23.c46cce9a.js",
    "revision": "4b1ebfd0248d66a96b4b956ef3edc50e"
  },
  {
    "url": "assets/js/24.4e93dfe0.js",
    "revision": "83cfda76b6d94a3ff5f92585524bd6c4"
  },
  {
    "url": "assets/js/25.ee7af3b6.js",
    "revision": "f46ad41440da602b7ff044caabc43040"
  },
  {
    "url": "assets/js/26.29c3f2b5.js",
    "revision": "6b1ab6ad92985e6e824f5f8ea056796c"
  },
  {
    "url": "assets/js/27.0e5dc4a1.js",
    "revision": "542b0b440a1c774822f463ee5d5f34d2"
  },
  {
    "url": "assets/js/28.60188723.js",
    "revision": "d89f7277bb5a8a8edd5ebf5abc4ef8ae"
  },
  {
    "url": "assets/js/29.ee3f3ec3.js",
    "revision": "82a7d2b1f3480bc594e96ea46d934c13"
  },
  {
    "url": "assets/js/3.fc81fee6.js",
    "revision": "58e5f7d1572ea1bff01323f1df23e551"
  },
  {
    "url": "assets/js/30.8f029577.js",
    "revision": "09e8eee83b08cca43589273a17e59a31"
  },
  {
    "url": "assets/js/31.5ffa5374.js",
    "revision": "fab4cf3661e959d85781d46aebb70035"
  },
  {
    "url": "assets/js/32.91d4fef9.js",
    "revision": "8ec757383f0756b0fd0b5dd9f66ab7ac"
  },
  {
    "url": "assets/js/33.d6e35208.js",
    "revision": "5dce08b3770735fa4e0a6dee72eb1cc5"
  },
  {
    "url": "assets/js/34.53dd7cf9.js",
    "revision": "458e824e54ee66fc8c668dffd0ff059d"
  },
  {
    "url": "assets/js/35.a4e64aca.js",
    "revision": "3b6a70ef2dbcbb8083fa54f6461d02f3"
  },
  {
    "url": "assets/js/36.3660971e.js",
    "revision": "3772b9dba73028a5d823f311360a6c0b"
  },
  {
    "url": "assets/js/37.cfd5e0be.js",
    "revision": "0354d238646c2aa3296d3483adbe8f99"
  },
  {
    "url": "assets/js/38.6ebfde60.js",
    "revision": "fd0e3f1949a20faf5da4ffd400d8dde1"
  },
  {
    "url": "assets/js/39.094201e4.js",
    "revision": "17360cb668c4c526269d42b901484b3d"
  },
  {
    "url": "assets/js/4.65c7b950.js",
    "revision": "54c9b19ddc7dd1cbb117070251640dbe"
  },
  {
    "url": "assets/js/40.4061cba7.js",
    "revision": "27b161aa471c94dc1d5adf68b1838046"
  },
  {
    "url": "assets/js/41.ecad87b8.js",
    "revision": "08f63cfd91a272f5eaaea96b5bec93be"
  },
  {
    "url": "assets/js/42.6c51018e.js",
    "revision": "84f421174c385ba8bf8b41df1466f91e"
  },
  {
    "url": "assets/js/43.78ac2457.js",
    "revision": "21da3c9950ea4befc361152da58542ea"
  },
  {
    "url": "assets/js/5.57681e7f.js",
    "revision": "45b4a1c537f1f2392e5d6ded71444659"
  },
  {
    "url": "assets/js/6.fefcd371.js",
    "revision": "662b85b52d354b8538ce4d18bd6bc37c"
  },
  {
    "url": "assets/js/7.9f79476e.js",
    "revision": "7dd54ff1a8e6d17ff67871263cc5aa66"
  },
  {
    "url": "assets/js/8.cd4380ab.js",
    "revision": "3f2efeb5175376fb1114592fb5763a3f"
  },
  {
    "url": "assets/js/9.5572125b.js",
    "revision": "0ae409ff360619ca51c6556a60965467"
  },
  {
    "url": "assets/js/app.e735123f.js",
    "revision": "39d5fdaf58d9444aa0bf11c8e039953e"
  },
  {
    "url": "assets/kfc.png",
    "revision": "a8e68bda58ae06b27b237be68bf03cc3"
  },
  {
    "url": "assets/play.png",
    "revision": "bcc7a270a0fc1d6966f38f8db13b0e38"
  },
  {
    "url": "assets/ssh-rsa.png",
    "revision": "dc72d8cc17112300ed0993a7f1ba5915"
  },
  {
    "url": "assets/touxiang.png",
    "revision": "76276823d8fd957793972e33c2a78b52"
  },
  {
    "url": "assets/tree.png",
    "revision": "250c3b9e269a46ab5280fa428fba0507"
  },
  {
    "url": "index.html",
    "revision": "5e0ab65d25f4117981ca207d0f23a6fe"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
