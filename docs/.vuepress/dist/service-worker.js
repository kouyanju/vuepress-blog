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
    "revision": "f736ad71adb12c7b7b4adc8b75dd0306"
  },
  {
    "url": "about.html",
    "revision": "d2cb739b70d08faa1391ed2b8f4e4da1"
  },
  {
    "url": "about1.html",
    "revision": "77ff9eb775c88468c4090d6c073c803d"
  },
  {
    "url": "assets/css/0.styles.adf2abd6.css",
    "revision": "1271ef8c85ae7f036cdaaf4ccab8b8a1"
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
    "url": "assets/js/10.1dd8af1e.js",
    "revision": "b804e0ff2c0b056d15ddf9a0d614ce85"
  },
  {
    "url": "assets/js/11.2add06c2.js",
    "revision": "3abf8194fa6fb34ea59ed057473216ff"
  },
  {
    "url": "assets/js/12.d485cf6b.js",
    "revision": "a5859c147013c28355fa74705b8db772"
  },
  {
    "url": "assets/js/13.cb1ad3f0.js",
    "revision": "2d805a6f2e44e3fc8a6b157f6ca3e0be"
  },
  {
    "url": "assets/js/14.c491703d.js",
    "revision": "4f882398651fed74d3f22f9fdf0b3713"
  },
  {
    "url": "assets/js/15.5fbc36d3.js",
    "revision": "fdf9ef4e62722ce49fd5df77d515ec71"
  },
  {
    "url": "assets/js/16.6575f5f1.js",
    "revision": "044474bdb5cf20caeb3860be5e0d9f4d"
  },
  {
    "url": "assets/js/17.1fee7d84.js",
    "revision": "2d618276d9fde42cc3a28e5966841b21"
  },
  {
    "url": "assets/js/18.90640304.js",
    "revision": "e419024210467d72e214e8469d7d7dfa"
  },
  {
    "url": "assets/js/19.e8e54507.js",
    "revision": "e82edbccabf331910e39abfbfc8f5664"
  },
  {
    "url": "assets/js/2.43e90ef8.js",
    "revision": "a23f9b35369d0b5ebeb2862d49617350"
  },
  {
    "url": "assets/js/20.d8873261.js",
    "revision": "301c219f0f57651f0dbd113f35e01767"
  },
  {
    "url": "assets/js/21.b0948cdf.js",
    "revision": "8bf1e93de9bb48a4b5c6599d2806ba3a"
  },
  {
    "url": "assets/js/22.6e2a3b9d.js",
    "revision": "5da294638134fa649350cf381d582446"
  },
  {
    "url": "assets/js/23.3c91f426.js",
    "revision": "ec074a1860003fa73392e440b8f01d49"
  },
  {
    "url": "assets/js/24.0d39a181.js",
    "revision": "8072e0183161c9543ce6b812a2b0245d"
  },
  {
    "url": "assets/js/25.b30ca71b.js",
    "revision": "8028923766fac99832171da9b0333e90"
  },
  {
    "url": "assets/js/26.8f945fe4.js",
    "revision": "2dba6b823db1c0cbf779ade794bb0ede"
  },
  {
    "url": "assets/js/27.93a39c25.js",
    "revision": "864ab6d19ecf9e885b2209c1a8a99626"
  },
  {
    "url": "assets/js/28.81c78aee.js",
    "revision": "73ad20f8002aadec5065650d0b6289db"
  },
  {
    "url": "assets/js/29.f3b0407f.js",
    "revision": "1e0ddbed42288694307d36bdb2f361f4"
  },
  {
    "url": "assets/js/3.b4410f83.js",
    "revision": "6fa68cdf576f325de807315b094ec9a8"
  },
  {
    "url": "assets/js/30.52b6137a.js",
    "revision": "df0bcf450f53cb76d700e8a2f8a13157"
  },
  {
    "url": "assets/js/31.863c12f6.js",
    "revision": "e84e6f37b86feb79b8e07872aee335a3"
  },
  {
    "url": "assets/js/32.3a964219.js",
    "revision": "1b979c346eb37c88fb502bc366e3f05a"
  },
  {
    "url": "assets/js/33.ad19d0d6.js",
    "revision": "f763c0ad3938c23deee7f5571bbfaa93"
  },
  {
    "url": "assets/js/34.d4df4b9b.js",
    "revision": "ad38c28699aafc1ef321e0b31e924973"
  },
  {
    "url": "assets/js/35.4211016a.js",
    "revision": "995d83703d1201e9d5e24de15732b1c9"
  },
  {
    "url": "assets/js/36.d64d489e.js",
    "revision": "11f87c372ca57ec9752b7b9c503bb353"
  },
  {
    "url": "assets/js/37.8d5b1bd1.js",
    "revision": "6289f7c56a42b2aed3c61e01dfa68ea4"
  },
  {
    "url": "assets/js/38.2728fdc4.js",
    "revision": "fba7c86677b5385cdefcaa092a08e7a2"
  },
  {
    "url": "assets/js/39.63567a91.js",
    "revision": "ad54b44edd6a1f7f79491cd6d291d268"
  },
  {
    "url": "assets/js/4.1b653e2d.js",
    "revision": "1b5ef4a1a8066fe6ff979222080dac43"
  },
  {
    "url": "assets/js/5.f9f5d3b6.js",
    "revision": "e3318b26ae5091a8fc6cef096a23be4b"
  },
  {
    "url": "assets/js/6.b9dcae21.js",
    "revision": "0523bd50deb3dde4fa1ec27429f952fa"
  },
  {
    "url": "assets/js/7.6aaf2003.js",
    "revision": "295bd41c00071b1372bcf7e2a76b1ca7"
  },
  {
    "url": "assets/js/8.e54e927d.js",
    "revision": "5f47017a23e1a165805771a17557873f"
  },
  {
    "url": "assets/js/9.172e36c4.js",
    "revision": "15637b5b45af6473194eaf754533b2b6"
  },
  {
    "url": "assets/js/app.6c0327b6.js",
    "revision": "b1d1f0eef55d3b4be0003cbe12043953"
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
    "url": "css/c-aaa.html",
    "revision": "4f09765964207c957f142c28c6bf88ce"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "d40e33690bf9043e63f3167eb5fb5c29"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "5a80f5cb30cdccdc7865b6f8e4eacd5a"
  },
  {
    "url": "css/css选择器.html",
    "revision": "b38ff74319d02592e0efa95148878bd4"
  },
  {
    "url": "css/display属性.html",
    "revision": "9bf1517d310fe426ffc662254bb1355a"
  },
  {
    "url": "css/h5+css3新增.html",
    "revision": "6bcce06709fc36112bb40c8f961679a4"
  },
  {
    "url": "css/动画.html",
    "revision": "e597387cb5155faed5645be2cb5e9e00"
  },
  {
    "url": "css/块级元素和行内元素.html",
    "revision": "32f5c5a05c5d3821704377b70aa38935"
  },
  {
    "url": "css/布局.html",
    "revision": "3716bf429b09a0b8348a91db7d9f3dbc"
  },
  {
    "url": "css/水平垂直居中.html",
    "revision": "7335b850f94aaa4d4f2c4a0aa11f2831"
  },
  {
    "url": "essays/20210721记录.html",
    "revision": "1d9977792be5e9eaf0bd5fe85efd15ce"
  },
  {
    "url": "essays/20210723记录.html",
    "revision": "54318e1d4aa8be475b79350379650147"
  },
  {
    "url": "index.html",
    "revision": "fb45314bc23f319506b45116ed16eaa5"
  },
  {
    "url": "javascript/es6新增.html",
    "revision": "b824027f5954657f411884d0afdd8035"
  },
  {
    "url": "javascript/this指向.html",
    "revision": "f5277adcb96795abb9018c776cbdbedb"
  },
  {
    "url": "javascript/事件.html",
    "revision": "aacec3d436cf965ab80cd4cba66c36a0"
  },
  {
    "url": "javascript/数据类型.html",
    "revision": "dea7a8c619977e87079bb5e274a2984c"
  },
  {
    "url": "javascript/数组.html",
    "revision": "3f9748fafded2e132d11a9663e50f8a7"
  },
  {
    "url": "javascript/防抖节流.html",
    "revision": "cf8fd7e0b7b5f17181e3d31de81c75f8"
  },
  {
    "url": "others/algorithm.html",
    "revision": "0bbdf42cdfdbe5601e31cd82cfd172a6"
  },
  {
    "url": "others/git.html",
    "revision": "89a108f18f64f838ddec9b8a7b394a19"
  },
  {
    "url": "others/vuepress搭建blog.html",
    "revision": "1be2770127e1e38671c957bcff95c4f8"
  },
  {
    "url": "vue/basicUnderstanding.html",
    "revision": "2c04a6c92918b8b45163d5ff03fe6721"
  },
  {
    "url": "vue/vue路由的两种实现.html",
    "revision": "15edcdb4f8a78f44af4310d78c656bfd"
  },
  {
    "url": "vue/生命周期.html",
    "revision": "b659cc41b7ee8f5c5713b9904c646594"
  },
  {
    "url": "vue/组件.html",
    "revision": "3cc4d758a4dfb60f529123210b1463ab"
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
