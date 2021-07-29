(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{594:function(l,i,t){"use strict";t.r(i);var o=t(31),v=Object(o.a)({},(function(){var l=this,i=l.$createElement,t=l._self._c||i;return t("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[t("h2",{attrs:{id:"行内元素、块级元素"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#行内元素、块级元素"}},[l._v("#")]),l._v(" 行内元素、块级元素")]),l._v(" "),t("ul",[t("li",[l._v("常用的行内元素、块级元素\n"),t("ul",[t("li",[l._v("(1) 行内(内联)元素有：a img input span select i em textaera button")]),l._v(" "),t("li",[l._v("(2) 块级元素有：div p ul ol li dl dt dd h1...h6 table form")])])]),l._v(" "),t("li",[l._v("行内元素、块元素的区别：\n"),t("ol",[t("li",[l._v("行内元素会在一条直线上排列，都是同一行的，水平方向排列。块级元素各占据一行，垂直方向排列。")]),l._v(" "),t("li",[l._v("块级元素可以包含行内元素和块级元素。行内元素不能包含块级元素。")]),l._v(" "),t("li",[l._v("行内元素设置不能设置宽和高，宽度只与内容有关，margin上下无效，padding上下无效。")]),l._v(" "),t("li",[l._v("行内块状元素特征：(1)不自动换行(2)能够识别宽高(3)默认排列方式为从左到右")])])])]),l._v(" "),t("h2",{attrs:{id:"bfc-block-formatting-contexts-块级格式化上下文"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bfc-block-formatting-contexts-块级格式化上下文"}},[l._v("#")]),l._v(" BFC Block Formatting Contexts (块级格式化上下文)")]),l._v(" "),t("ul",[t("li",[l._v("BFC 的理解：\nBFC是一个独立的隔离容器，BFC中的元素的布局是不受外边元素的影响，也不影响外边的元素。")]),l._v(" "),t("li",[l._v("特性：\n"),t("ol",[t("li",[l._v("BFC内部的盒子会在垂直方向上一个接一个的排列；")]),l._v(" "),t("li",[l._v("这些盒子垂直方向上的距离是由margin决定的；")]),l._v(" "),t("li",[l._v("BFC区域不会与float区域重叠(可以据此设置左固定右自适应布局)；")]),l._v(" "),t("li",[l._v("计算BFC区域的高度时，浮动元素也参与。")])])]),l._v(" "),t("li",[l._v("触发条件：\n"),t("ol",[t("li",[l._v("float：left/right(脱离文档流)；")]),l._v(" "),t("li",[l._v("display：inline-block/table-cells/flex；")]),l._v(" "),t("li",[l._v("overflow：hidden/auto/scroll；")]),l._v(" "),t("li",[l._v("position：absolute/fixed(脱离文档流)；")]),l._v(" "),t("li",[l._v("body根元素(因为根元素的position属性不是static)。")])])]),l._v(" "),t("li",[l._v("解决的问题：\n"),t("ul",[t("li",[l._v("margin传递问题：\n"),t("ol",[t("li",[l._v("问题描述：一个父容器里面有一个子容器，给子容器添加一个margin-top，结果是父容器和子容器都有了相同的margin-top。")]),l._v(" "),t("li",[l._v("解决方法：\n"),t("br"),l._v("给父容器添加：display:inline-block；position:absolute/fixed；overflow:hidden;\n"),t("br"),l._v("给子容器添加：display:inline-block；float:left/right")])])]),l._v(" "),t("li",[l._v("浮动问题：\n"),t("ol",[t("li",[l._v("问题描述：原本是上下垂直排列的两个盒子，给上面的盒子添加了float：left，两个盒子就发生了重叠。")]),l._v(" "),t("li",[l._v("解决方法：给第二个盒子添加overflow：hidden；")])])]),l._v(" "),t("li",[l._v("重叠问题：\n"),t("ol",[t("li",[l._v("问题描述：上下排列的两个兄弟盒子，给上面的盒子设置了margin-bottom，给下面的盒子设置了margin-top，但是两个盒子之间的垂直距离并不是margin-bottom+margin-top，而是取决于margin-bottom和margin-top中较大的那个值。")]),l._v(" "),t("li",[l._v("解决方法：给任意一个盒子设置display:inline-block;")])])])])])]),l._v(" "),t("vssue",{attrs:{options:{locale:"zh"}}})],1)}),[],!1,null,null,null);i.default=v.exports}}]);