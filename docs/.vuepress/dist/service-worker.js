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
    "revision": "a2368e69a891a22e708d7a984561ea36"
  },
  {
    "url": "about.html",
    "revision": "9b44bc7f676dc62d428823ffe12c2ca8"
  },
  {
    "url": "about1.html",
    "revision": "272d72d26351684f0adf95851ad12929"
  },
  {
    "url": "all/css/c-aaa.html",
    "revision": "9d2c1014f31736abbfa8ece217cfe2e2"
  },
  {
    "url": "all/css/c-bbb.html",
    "revision": "a062895aec8563f6c9b0b082f23cbea8"
  },
  {
    "url": "all/css/c-ccc.html",
    "revision": "6050e8830f4303918bb575c30343ff91"
  },
  {
    "url": "all/css/css选择器.html",
    "revision": "0bfff66fd5e22e640f3dc8666ff70ea0"
  },
  {
    "url": "all/css/display属性.html",
    "revision": "89deca0be01e1493ba1744369fcb02b7"
  },
  {
    "url": "all/css/h5+css3新增.html",
    "revision": "b183fb787364bcbfb56419ed1fa8b719"
  },
  {
    "url": "all/css/动画.html",
    "revision": "66ce08817b76e3c5963090c60bec173c"
  },
  {
    "url": "all/css/块级元素和行内元素.html",
    "revision": "eaf31a17435834918b66c659d8f73231"
  },
  {
    "url": "all/css/布局.html",
    "revision": "9fd5703a2378ce23c74a5b5cda0a34c6"
  },
  {
    "url": "all/css/水平垂直居中.html",
    "revision": "2057b0a5b0d1d2ae0d1a1b4a3372aacf"
  },
  {
    "url": "all/essays/20210721记录.html",
    "revision": "3feee95b3095a47f2ff0b232963e13fd"
  },
  {
    "url": "all/essays/20210723记录.html",
    "revision": "1f54963b09b9dd078319fbab0cb687e1"
  },
  {
    "url": "all/javascript/es6新增.html",
    "revision": "3a22e4349a6cb6aed9bf2bff50110cec"
  },
  {
    "url": "all/javascript/this指向.html",
    "revision": "922f4db0d034d606add3c7b78683bd09"
  },
  {
    "url": "all/javascript/事件相关.html",
    "revision": "3b2b505d6a05b1706db28a30597b37f6"
  },
  {
    "url": "all/javascript/数据类型.html",
    "revision": "d6564a20013c259d48cb9e47a8bd5762"
  },
  {
    "url": "all/javascript/数组.html",
    "revision": "dbf754142809a8652d53c77b933e7599"
  },
  {
    "url": "all/javascript/防抖节流.html",
    "revision": "e4408760644f81ab5b4c8b96a7ba0f77"
  },
  {
    "url": "all/others/algorithm.html",
    "revision": "77fbca6f786e9d0156c9cd4adf5e2b92"
  },
  {
    "url": "all/others/git.html",
    "revision": "50281aef0f6ac0d442fa9858fb3ede3e"
  },
  {
    "url": "all/others/vuepress搭建blog.html",
    "revision": "e838d71fe87d5b0c4a5f87e013d06c8a"
  },
  {
    "url": "all/vue/basicUnderstanding.html",
    "revision": "344a6d55d4ad3d6d55bec798818eebd1"
  },
  {
    "url": "all/vue/vue路由的两种实现.html",
    "revision": "aa4a03481069e97475590b84a666aaaf"
  },
  {
    "url": "all/vue/生命周期.html",
    "revision": "585842269a0b5cb0d56733bb88b2c5cd"
  },
  {
    "url": "all/vue/组件.html",
    "revision": "113c650ac7b3d519968e726d1c6a5f7d"
  },
  {
    "url": "assets/css/0.styles.ad080a3e.css",
    "revision": "411c641f2ed5b7abe08200aaad267869"
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
    "url": "assets/js/10.bcb7c6f7.js",
    "revision": "88caea1afc147c7b7120e04ddc39eea2"
  },
  {
    "url": "assets/js/11.2c2d5485.js",
    "revision": "33308f78854aa5a26cf3c5be001a844b"
  },
  {
    "url": "assets/js/12.49cfb402.js",
    "revision": "85550609475e2b6aced531aaadbd1470"
  },
  {
    "url": "assets/js/13.ce215a70.js",
    "revision": "5f09bdded6f1484b4239c2955db69549"
  },
  {
    "url": "assets/js/14.ca0a62c8.js",
    "revision": "95abba4d840b3aceb0d3497c50423cf7"
  },
  {
    "url": "assets/js/15.a020167e.js",
    "revision": "e5f7efcb8b34af3f50fe99c84a7d3614"
  },
  {
    "url": "assets/js/16.1d9ae34d.js",
    "revision": "043ad8e0b8ba2eda89cf23ced7bda879"
  },
  {
    "url": "assets/js/17.cdff1f09.js",
    "revision": "cdb2238b4da33ce4928229ac295b41b4"
  },
  {
    "url": "assets/js/18.0d41e8d0.js",
    "revision": "01ec5f10646c19cf798122992cd1c8c1"
  },
  {
    "url": "assets/js/19.73e0f003.js",
    "revision": "7f5f0aa446cc79edf335bcb711288fe5"
  },
  {
    "url": "assets/js/2.24852a69.js",
    "revision": "98a8ddda4519c0e0dd56957d8a19b324"
  },
  {
    "url": "assets/js/20.86e71a0b.js",
    "revision": "6ff316e9b0e41b40bdfe975c87a284ae"
  },
  {
    "url": "assets/js/21.1ec6501b.js",
    "revision": "3a2b34ec17f772306c1f82a0cb5100b3"
  },
  {
    "url": "assets/js/22.d5b0b033.js",
    "revision": "8e2d9b54e6b58df18705e93fd2891131"
  },
  {
    "url": "assets/js/23.23fac625.js",
    "revision": "ec074a1860003fa73392e440b8f01d49"
  },
  {
    "url": "assets/js/24.b7792054.js",
    "revision": "daa18c561ee2809f9f1ac4e09b12d7cd"
  },
  {
    "url": "assets/js/25.b3660f08.js",
    "revision": "6c58f8faf12816080e1d5b1f43760874"
  },
  {
    "url": "assets/js/26.68572870.js",
    "revision": "b70de3a40a6335d929021df69609f929"
  },
  {
    "url": "assets/js/27.cf0c38ad.js",
    "revision": "61c499745abe217a6a4342a9bbdecfac"
  },
  {
    "url": "assets/js/28.c87b8b70.js",
    "revision": "edfb67418d5b2864e280b6bdb70758f9"
  },
  {
    "url": "assets/js/29.ad363c61.js",
    "revision": "312f3d78df13366eed15d895388358fa"
  },
  {
    "url": "assets/js/3.65128a9a.js",
    "revision": "58e5f7d1572ea1bff01323f1df23e551"
  },
  {
    "url": "assets/js/30.ad240a7a.js",
    "revision": "ed2c9435ac8ea1e204751e97a0cef94a"
  },
  {
    "url": "assets/js/31.3e60b761.js",
    "revision": "b5469c6d9f7d97e05be54497c24488b6"
  },
  {
    "url": "assets/js/32.9ff36b59.js",
    "revision": "fc3bae3a663b33bafad4b5817d36e50d"
  },
  {
    "url": "assets/js/33.d9ee1d58.js",
    "revision": "b5dd5e71d93e95ae032d2cf8032f0474"
  },
  {
    "url": "assets/js/34.bacdaba5.js",
    "revision": "fce0ea68b4108286523b9da2a9e15554"
  },
  {
    "url": "assets/js/35.a454de32.js",
    "revision": "d721c68c62c7108e48a28fbc93a69b30"
  },
  {
    "url": "assets/js/36.177d3a00.js",
    "revision": "dddcdc5a1e2ce7172559768416e88fb9"
  },
  {
    "url": "assets/js/37.13c91c5e.js",
    "revision": "9657cc92d898d65d5acefb41b84e670a"
  },
  {
    "url": "assets/js/38.f3452869.js",
    "revision": "dd7eefc187c6a95fdd7fedd99e1b6326"
  },
  {
    "url": "assets/js/39.e3996def.js",
    "revision": "0d2ee9bd93f7b03b2319c8988edd7e36"
  },
  {
    "url": "assets/js/4.7cd247e8.js",
    "revision": "3accbde5667ffe3c679b9db71c411ff5"
  },
  {
    "url": "assets/js/5.db774364.js",
    "revision": "fada5e685c11765c221764baefbe4703"
  },
  {
    "url": "assets/js/6.fefcd371.js",
    "revision": "662b85b52d354b8538ce4d18bd6bc37c"
  },
  {
    "url": "assets/js/7.dd266cbf.js",
    "revision": "151ccab92f12770edbbab8a33b9eaf25"
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
    "url": "assets/js/app.73811721.js",
    "revision": "0ed57e557c3b74d5684823fd24ff3a99"
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
    "revision": "55ecc8752d119e5c695e50c4f5dd073a"
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
