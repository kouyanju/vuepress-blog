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
    "revision": "876dd8df53d0964c30035633bd4bb5b1"
  },
  {
    "url": "about.html",
    "revision": "14673779164a06d2672ed67e8d2c0e48"
  },
  {
    "url": "about1.html",
    "revision": "d1da174f3ca1fae9dab8843fb4014e84"
  },
  {
    "url": "all/css/c-aaa.html",
    "revision": "78f1916c465aa10b6e36b597d58e44ad"
  },
  {
    "url": "all/css/c-bbb.html",
    "revision": "55f1b749f2494544ae214f2ce04cc24d"
  },
  {
    "url": "all/css/c-ccc.html",
    "revision": "bfb70752b86d219371b1918418cfe51a"
  },
  {
    "url": "all/css/css选择器.html",
    "revision": "c8cd35408c4d41e0645e03915f73b218"
  },
  {
    "url": "all/css/display属性.html",
    "revision": "53b16abab6efb7cfe39a641c95f14878"
  },
  {
    "url": "all/css/h5+css3新增.html",
    "revision": "729b735885d203de1b89c9bf6c17f8f2"
  },
  {
    "url": "all/css/动画.html",
    "revision": "8f7c0af99d25427a0e63975d391da61a"
  },
  {
    "url": "all/css/块级元素和行内元素.html",
    "revision": "27cfa437f38212132e04167e10a2265b"
  },
  {
    "url": "all/css/布局.html",
    "revision": "e18de533a41c9d2bee60391c53a3f331"
  },
  {
    "url": "all/css/水平垂直居中.html",
    "revision": "e2e19dc0249b325805dad05f40576cc9"
  },
  {
    "url": "all/essays/20210721记录.html",
    "revision": "08076fe615aeb06a385b1b14370fa216"
  },
  {
    "url": "all/essays/20210723记录.html",
    "revision": "64a4cc26f5fdcfa5ace9fa355c30bf40"
  },
  {
    "url": "all/javascript/es6新增.html",
    "revision": "6311e4731b31166260351e0e0a51362b"
  },
  {
    "url": "all/javascript/this指向.html",
    "revision": "363390d1e5d8b87824b7f663184cffa9"
  },
  {
    "url": "all/javascript/事件.html",
    "revision": "c228b39f12bae23fe50ba766c9c7bf4b"
  },
  {
    "url": "all/javascript/数据类型.html",
    "revision": "a53b529d869fa1ceeb61f49206209eaf"
  },
  {
    "url": "all/javascript/数组.html",
    "revision": "bed59c6a2cd852d86143fa697e6d20a8"
  },
  {
    "url": "all/javascript/防抖节流.html",
    "revision": "4a4c5cfb4abd6f6d323a483753673d57"
  },
  {
    "url": "all/others/algorithm.html",
    "revision": "ee3865164df21265eb8f889f189ce2b2"
  },
  {
    "url": "all/others/git.html",
    "revision": "f3869d3950a7828edbeb01b9355175a2"
  },
  {
    "url": "all/others/vuepress搭建blog.html",
    "revision": "18506a27a9a95f314c9ac46019be752f"
  },
  {
    "url": "all/vue/basicUnderstanding.html",
    "revision": "f5c2165fbdbd51a7ee41b68d8c17a83a"
  },
  {
    "url": "all/vue/vue路由的两种实现.html",
    "revision": "1a8dffc91d1323c2a39a9e0167422b09"
  },
  {
    "url": "all/vue/生命周期.html",
    "revision": "7c8b766a0b805093274ffe51ec631319"
  },
  {
    "url": "all/vue/组件.html",
    "revision": "47da527b9c19638c8f38968e1601eb95"
  },
  {
    "url": "assets/css/0.styles.5348b871.css",
    "revision": "f0dbc2dbc42992200697dea1ef08ca1c"
  },
  {
    "url": "assets/hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
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
    "url": "assets/js/10.53ee2431.js",
    "revision": "403f5d185eba6864850e7c8973d1a16e"
  },
  {
    "url": "assets/js/11.cd33df29.js",
    "revision": "2f5b5540f69eaa5e254a7a8130384b04"
  },
  {
    "url": "assets/js/12.5b5d41e3.js",
    "revision": "8f2b9d5b9e43245c9473e1dd3e5f5168"
  },
  {
    "url": "assets/js/13.5f90527e.js",
    "revision": "1830ce1cde270089998bfd112528cbc8"
  },
  {
    "url": "assets/js/14.bf2729d8.js",
    "revision": "dce9a903d758b0d5353b09014cb2fa7d"
  },
  {
    "url": "assets/js/15.ff260bc8.js",
    "revision": "7e781521bd3e52980a96b39f82ad04b2"
  },
  {
    "url": "assets/js/16.baba44df.js",
    "revision": "3674f88168bf8fe82edce33c9be38d79"
  },
  {
    "url": "assets/js/17.f0f4a3a6.js",
    "revision": "fb79f73c15d263aaae1f2af8d2f128e1"
  },
  {
    "url": "assets/js/18.fb2f6cdf.js",
    "revision": "940f6e6f09abc320994090ebffb6f461"
  },
  {
    "url": "assets/js/19.013ec78e.js",
    "revision": "cbd628260c89dbbebb75b3dfa802faca"
  },
  {
    "url": "assets/js/2.f47e6317.js",
    "revision": "1805762445b3f47eb1ea610849db273c"
  },
  {
    "url": "assets/js/20.83364f15.js",
    "revision": "a10fe24f98e1bc3f8d5bad145aae5180"
  },
  {
    "url": "assets/js/21.1d38874f.js",
    "revision": "b56461b286bc26095a78962d975f53fd"
  },
  {
    "url": "assets/js/22.d4163ee5.js",
    "revision": "b000f9a7dafaf3829b19175c73fe85a3"
  },
  {
    "url": "assets/js/23.770ee266.js",
    "revision": "1f7d49269099f218e8892818d8b7c903"
  },
  {
    "url": "assets/js/24.f43ce5d4.js",
    "revision": "50cedbc3e52fa72a9fb44c1298dcc079"
  },
  {
    "url": "assets/js/25.95f936ec.js",
    "revision": "bc601773b11af1295b82e455fdd711af"
  },
  {
    "url": "assets/js/26.40217499.js",
    "revision": "a6879d6845b850a3b8c8fe3a1b7ac50c"
  },
  {
    "url": "assets/js/27.329c2c4c.js",
    "revision": "048517e0288eae86bd9f6626d614d8db"
  },
  {
    "url": "assets/js/28.71f8fa63.js",
    "revision": "9516820a92359bdfb75274ca25aa65ed"
  },
  {
    "url": "assets/js/29.4e5c5502.js",
    "revision": "53f669109fc8f17c369d3a59f0d48537"
  },
  {
    "url": "assets/js/3.9a953d45.js",
    "revision": "f15660afd149c4b8370298b8f719e0fa"
  },
  {
    "url": "assets/js/30.d4f5b06f.js",
    "revision": "bf80d16ac87c60c4071c541d65755a4d"
  },
  {
    "url": "assets/js/31.fc329375.js",
    "revision": "196dc8ae6aa63d884e7c87c54ab2b282"
  },
  {
    "url": "assets/js/32.7306c6df.js",
    "revision": "dc56a4dfe7da242cd78122a1930e54ae"
  },
  {
    "url": "assets/js/33.d165f509.js",
    "revision": "ade1026370864708c284b84f40e21365"
  },
  {
    "url": "assets/js/34.461363a5.js",
    "revision": "5a981c277d967c49e8d0305facd87b80"
  },
  {
    "url": "assets/js/35.a65f3c56.js",
    "revision": "2644898bc02f8529a900745dd365a56e"
  },
  {
    "url": "assets/js/36.1fd986b5.js",
    "revision": "4c50dd83877621365cc8fce4e3474a1b"
  },
  {
    "url": "assets/js/37.5dedc48b.js",
    "revision": "850616f4b72ca85731d262b761e5ecf3"
  },
  {
    "url": "assets/js/38.970edaa8.js",
    "revision": "4ac9c29d91e2dc595df2d461ee5640e8"
  },
  {
    "url": "assets/js/39.316ae27c.js",
    "revision": "bb2bad388636d69ca0759f40bb51735e"
  },
  {
    "url": "assets/js/4.f68f1d54.js",
    "revision": "800d6ee8a8a0e6d9d4235fb97a81a303"
  },
  {
    "url": "assets/js/5.84895482.js",
    "revision": "df2f47856c1e8894316abe3e50f310e6"
  },
  {
    "url": "assets/js/6.2779fa17.js",
    "revision": "6e75b254d98994f6d61f9a3f4fa3b128"
  },
  {
    "url": "assets/js/7.b3e61fdc.js",
    "revision": "c98e495333d6d0474f1d5336c31556c2"
  },
  {
    "url": "assets/js/8.2035095f.js",
    "revision": "b998843760bee749f6bb0a61634473ee"
  },
  {
    "url": "assets/js/9.e27f74e8.js",
    "revision": "c421d3a9ce44c5260fc6efa6300be4c6"
  },
  {
    "url": "assets/js/app.c11cb42d.js",
    "revision": "14d4d6feae764663f4bf3dcd11cec597"
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
    "url": "index.html",
    "revision": "ecd3a7e65de00846b5ab63d332e75caa"
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
