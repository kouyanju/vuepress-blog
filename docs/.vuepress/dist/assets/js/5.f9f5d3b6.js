(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{391:function(t,n,i){var s=i(2),e=i(5),a=i(33),r=[].slice,c=function(t){return function(n,i){var s=arguments.length>2,e=s?r.call(arguments,2):void 0;return t(s?function(){("function"==typeof n?n:Function(n)).apply(this,e)}:n,i)}};s({global:!0,bind:!0,forced:/MSIE .\./.test(a)},{setTimeout:c(e.setTimeout),setInterval:c(e.setInterval)})},548:function(t,n,i){},582:function(t,n,i){"use strict";i(548)},592:function(t,n,i){"use strict";i.r(n);i(391);var s={data:function(){return{mark:0,bannerList:["https://wx3.sinaimg.cn/mw1024/006hxKBnly1gqsk21s9cdj32m21mchdt.jpg","https://wx4.sinaimg.cn/mw1024/006hxKBnly1gq23v721nvj33402c0e81.jpg","https://wx4.sinaimg.cn/mw1024/006hxKBnly1gpaxubbs8zj34mo334npg.jpg","https://wx3.sinaimg.cn/mw1024/006hxKBnly1gpaxtnqxu6j33402c04qq.jpg","https://wx3.sinaimg.cn/mw1024/006hxKBnly1gjlt8tgu8wj32801o04qp.jpg"],timer:void 0}},methods:{autoPlay:function(){this.mark++,this.mark===this.bannerList.length&&(this.mark=0)},play:function(){this.timer=setInterval(this.autoPlay,2500)}},mounted:function(){this.play()},beforeDestroy:function(){clearInterval(this.timer)}},e=(i(582),i(31)),a=Object(e.a)(s,(function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"slide",staticStyle:{"padding-top":"5px"}},[t._l(t.bannerList,(function(n,s){return i("div",{directives:[{name:"show",rawName:"v-show",value:s===t.mark,expression:"index === mark"}],key:s,staticClass:"slideshow"},[i("img",{staticStyle:{width:"100%",height:"400px"},attrs:{src:n}})])})),t._v(" "),i("div",{staticClass:"bar"},t._l(t.bannerList,(function(n,s){return i("span",{key:s,class:{active:s===t.mark}})})),0)],2)}),[],!1,null,"c42997c6",null);n.default=a.exports}}]);