(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{589:function(t,r,n){"use strict";n.r(r);var e=n(31),a=Object(e.a)({},(function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"清除浮动"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#清除浮动"}},[t._v("#")]),t._v(" 清除浮动")]),t._v(" "),n("h4",{attrs:{id:"_1-浮动的特点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-浮动的特点"}},[t._v("#")]),t._v(" ① 浮动的特点：")]),t._v(" "),n("p",[t._v("(1)\t只会影响后面的元素；"),n("br"),t._v("\n(2)\t内容默认提升半层；"),n("br"),t._v("\n(3)\t默认宽度由内容决定；"),n("br"),t._v("\n(4)\t当父容器放不下浮动的元素时，会换行排列；"),n("br"),t._v("\n(5)\t浮动是块添加的；"),n("br"),t._v("\n(6)\t内联的元素也可以添加浮动；"),n("br"),t._v("\n(7)\t父容器不受margin传递影响。")]),t._v(" "),n("h4",{attrs:{id:"_2-清除浮动的方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-清除浮动的方法"}},[t._v("#")]),t._v(" ② 清除浮动的方法：")]),t._v(" "),n("p",[t._v("在非IE浏览器（如Firefox）下，当容器的高度为auto，且容器的内容中有浮动（float为left或right）的元素，在这种情况下，容器的高度不能自动伸长以适应内容的高度，使得内容溢出到容器外面而影响（甚至破坏）布局的现象。这个现象叫浮动溢出，为了防止这个现象的出现而进行的CSS处理，就叫CSS清除浮动。\n"),n("br"),t._v("<1> after伪类（最佳方式）：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('#box:after{\n   content="";\n   clear:both;\n   display:block;\n}\n')])])]),n("p",[n("br"),t._v("<2> 给父容器设置高度\n"),n("br"),t._v("<3> 利用BFC规范——父元素设置overflow：hidden/auto；\n"),n("br"),t._v("<4> 利用BFC规范——父元素设置display：inline-block；\n"),n("br"),t._v("<5> 利用BFC规范——父元素设置display：table；\n"),n("br"),t._v("<6> 结尾添加一个空标签——.empty{clear:both;}\n"),n("br"),t._v("<6> 让父元素也浮动")]),t._v(" "),n("h2",{attrs:{id:"伪类与伪元素"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#伪类与伪元素"}},[t._v("#")]),t._v(" 伪类与伪元素")]),t._v(" "),n("p",[n("strong",[t._v("① 伪类：")]),t._v("\n用于当已有元素处于的某个状态时，为其添加对应的样式，这个状态是根据用户行为而动态变化的。\n"),n("br"),t._v(" "),n("strong",[t._v("② 伪元素：")]),t._v("\n伪元素用于创建一些不在文档树中的元素，并为其添加样式。\n"),n("br"),n("strong",[t._v("③ 区别：")]),t._v("\n伪类的操作对象是文档树中已有的元素，而伪元素则创建了一个文档树外的元素。因此，伪类与伪元素的区别在于：有没有创建一个文档树之外的元素。\n"),n("br"),t._v("④ CSS3规范中的要求使用双冒号 ::表示伪元素，以此来区分伪元素和伪类。除了一些低于 IE8 版本的浏览器外，大部分浏览器都支持伪元素的双冒号::表示方法。除了少部分伪元素，如::backdrop 必须使用双冒号，大部分伪元素都支持单冒号和双冒号的写法。")]),t._v(" "),n("p",[t._v("⑤ 常用伪类及其含义：\n"),n("br"),t._v("(1) ：link——未访问的链接状态（只能给a标签加）\n"),n("br"),t._v("(2) ：visited——已访问的链接状态（只能给a标签加）\n"),n("br"),t._v("(3) ：hover——鼠标滑过链接的状态\n"),n("br"),t._v("(4) ：active——鼠标按下去的状态\n"),n("br"),t._v("(5) ：focus——选择获取焦点的输入字段\n"),n("br"),n("strong",[t._v("⑥ 常用伪元素及其含义：")]),t._v(" "),n("br"),t._v("(1) ：：before/：before——在被选元素前插入内容，需要使用content属性来指定要插入的内容。\n"),n("br"),t._v("(2) ：：after/：after——在被选元素后面插入内容，用法与before一样。\n"),n("br"),t._v("(3) ：：first-letter/：first-letter——匹配元素中文本的首字母\n"),n("br"),t._v("(4) ：：first-line/：first-line——匹配元素中的第一行文本，这个伪元素只能用在块元素中，不能用在内联元素中。\n"),n("br"),t._v("(5) ：：selection——匹配被用户选中或者处于高亮状态的部分，只支持：： 。\n"),n("vssue",{attrs:{options:{locale:"zh"}}})],1)])}),[],!1,null,null,null);r.default=a.exports}}]);