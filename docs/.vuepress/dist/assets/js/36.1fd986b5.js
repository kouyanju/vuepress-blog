(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{610:function(t,s,a){"use strict";a.r(s);var n=a(31),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"vue路由两种实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue路由两种实现"}},[t._v("#")]),t._v(" vue路由两种实现")]),t._v(" "),a("p",[t._v("路由就是根据不同的 url 地址展示不同的内容或页面。路由出现在单页面应用中，页面中公共部分不变，只改变部分内容的使用。路由切换时根据不同的路由动态加载不同的组件。")]),t._v(" "),a("h3",{attrs:{id:"_1-hash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-hash"}},[t._v("#")]),t._v(" ① Hash：")]),t._v(" "),a("ul",[a("li",[t._v("就是指 url 尾巴后的 # 号以及后面的字符，它的特点在于：hash 虽然出现URL中，但不会被包含在HTTP请求中，对后端完全没有影响，因此改变hash不会重新加载页面。")]),t._v(" "),a("li",[t._v("原理：hash通过BOM的location.hash切换路由，通过window.onhashchange()监听路径切换。")])]),t._v(" "),a("h3",{attrs:{id:"_2-history-利用了html5-history-interface中新增的pushstate-和replacestate-方法-这两个方法应用于浏览器的历史记录栈-在当前已有的back、forward、go的基础上-他们提供了对当前浏览器进行修改的功能-只是当它们被修改时-虽然浏览器的url发生了变化-但是不会立即向后端服务器发送请求-但是如果点击刷新-就会重新向后端服务器发送请求。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-history-利用了html5-history-interface中新增的pushstate-和replacestate-方法-这两个方法应用于浏览器的历史记录栈-在当前已有的back、forward、go的基础上-他们提供了对当前浏览器进行修改的功能-只是当它们被修改时-虽然浏览器的url发生了变化-但是不会立即向后端服务器发送请求-但是如果点击刷新-就会重新向后端服务器发送请求。"}},[t._v("#")]),t._v(" ② History： 利用了HTML5 History Interface中新增的pushState()和replaceState()方法，这两个方法应用于浏览器的历史记录栈，在当前已有的back、forward、go的基础上，他们提供了对当前浏览器进行修改的功能，只是当它们被修改时，虽然浏览器的URL发生了变化，但是不会立即向后端服务器发送请求，但是如果点击刷新，就会重新向后端服务器发送请求。")]),t._v(" "),a("ul",[a("li",[t._v("不过这种模式要玩好，还需要后台配置支持。因为我们的应用是个单页客户端应用，如果后台没有正确的配置，当用户在浏览器直接访问http://oursite.com/user/id就会返回 404，这就不好看了。\n所以呢，你要在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个index.html页面，这个页面就是你 app 依赖的页面。")]),t._v(" "),a("li",[t._v("原理： 利用H5的 history中新增的两个API pushState()(切换路由) 和 replaceState() 和一个事件onpopstate监听路径切换。")])]),t._v(" "),a("h3",{attrs:{id:"_3-区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-区别"}},[t._v("#")]),t._v(" ③ 区别：")]),t._v(" "),a("p",[t._v("hash 能兼容到IE8， history 只能兼容到 IE10；")]),t._v(" "),a("ul",[a("li",[t._v("(1) 调用history.pushState()相比于直接修改hash，存在以下优势：\n"),a("ol",[a("li",[t._v("pushState()设置的新URL可以是与当前URL同源的任意URL；而hash只可修改#后面的部分，因此只能设置与当前URL同文档的URL；")]),t._v(" "),a("li",[t._v("pushState()设置的新URL可以与当前URL一模一样，这样也会把记录添加到栈中；而hash设置的新值必须与原来不一样才会触发动作将记录添加到栈中；")]),t._v(" "),a("li",[t._v("pushState()通过stateObject参数可以添加任意类型的数据到记录中；而hash只可添加短字符串；")]),t._v(" "),a("li",[t._v("pushState()可额外设置title属性供后续使用。")])])]),t._v(" "),a("li",[t._v("(2) 缺点：但是在用户手动输入URL后回车，或者刷新（重启）浏览器的时候。\n"),a("ol",[a("li",[t._v("hash 模式下，仅hash符号之前的内容会被包含在请求中，如http://www.abc.com,因此对于后端来说，即使没有做到对路由的全覆盖，也不会返回404错误。")]),t._v(" "),a("li",[t._v("history模式下，前端的URL必须和实际向后端发起请求的URL一致。如htttp://www.abc.com/book/id。如果后端缺少对/book/id 的路由处理，将返回404错误")])])])]),t._v(" "),a("h2",{attrs:{id:"简单路由实现-单页面切换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简单路由实现-单页面切换"}},[t._v("#")]),t._v(" 简单路由实现——单页面切换：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" routeTable "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" div1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" div2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" div3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"4"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" div4 \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("route")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("container")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" number "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("substr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  number "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" number "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//默认路由，当hash值为空时将它设为1")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//根据hash得到路由表中相应页面")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" div "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" routeTable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//如果路由表中不存在则跳转到404页面")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    div "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#div404"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  div"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("display "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"block"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//先将容器中清空")]),t._v("\n  container"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//展示内容")]),t._v("\n  container"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("router")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hashchange"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("route")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);