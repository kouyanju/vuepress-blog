(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{600:function(t,a,e){"use strict";e.r(a);var r=e(31),v=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"事件池"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件池"}},[t._v("#")]),t._v(" 事件池")]),t._v(" "),e("h4",{attrs:{id:"_1-进程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-进程"}},[t._v("#")]),t._v(" ① 进程：")]),t._v(" "),e("p",[t._v("进程是系统分配的独立资源，是 CPU 资源分配的基本单位，进程是由一个或者多个线程组成的。")]),t._v(" "),e("h4",{attrs:{id:"_2-线程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-线程"}},[t._v("#")]),t._v(" ② 线程：")]),t._v(" "),e("p",[t._v("线程是进程的执行流，是CPU调度和分派的基本单位，\n同个进程之中的多个线程之间是共享该进程的资源的。")]),t._v(" "),e("h4",{attrs:{id:"_3-浏览器内核"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-浏览器内核"}},[t._v("#")]),t._v(" ③ 浏览器内核：")]),t._v(" "),e("ul",[e("li",[t._v("(1) 浏览器是多进程的，浏览器每一个 tab 标签都代表一个独立的进程\n（也不一定，因为多个空白 tab 标签会合并成一个进程），\n浏览器内核（浏览器渲染进程）属于浏览器多进程中的一种。")]),t._v(" "),e("li",[t._v("(2) 浏览器内核里有多种线程在工作。")])]),t._v(" "),e("h4",{attrs:{id:"_1-gui-渲染线程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-gui-渲染线程"}},[t._v("#")]),t._v(" <1>GUI 渲染线程：")]),t._v(" "),e("p",[t._v("负责渲染页面，解析 HTML，CSS 构成 DOM 树等，当页面重绘或者由于某种操作引起回流都会调起该线程。\n和 JS 引擎线程是互斥的，当 JS 引擎线程在工作的时候，GUI 渲染线程会被挂起，GUI 更新被放入在 JS 任务队列中，等待 JS 引擎线程空闲的时候继续执行。")]),t._v(" "),e("h4",{attrs:{id:"_2-js引擎线程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-js引擎线程"}},[t._v("#")]),t._v(" <2>JS引擎线程：")]),t._v(" "),e("p",[t._v("单线程工作，负责解析运行 JavaScript 脚本。JS引擎是单线程的，也就是说每次只能执行一项任务，其他任务都得按照顺序排队等待被执行，只有当前的任务执行完成之后才会往下执行下一个任务。\n和 GUI 渲染线程互斥，JS 运行耗时过长就会导致页面阻塞。\n注：HTML5 中提出了 Web-Worker API，主要是为了解决页面阻塞问题，但是并没有改变JS是单线程的本质。")]),t._v(" "),e("h4",{attrs:{id:"_3-事件触发线程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-事件触发线程"}},[t._v("#")]),t._v(" <3>事件触发线程：")]),t._v(" "),e("p",[t._v("当事件符合触发条件被触发时，该线程会把对应的事件回调函数添加到任务队列的队尾，等待 JS 引擎处理。")]),t._v(" "),e("h4",{attrs:{id:"_4-定时器触发线程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-定时器触发线程"}},[t._v("#")]),t._v(" <4>定时器触发线程：")]),t._v(" "),e("p",[t._v("浏览器定时计数器并不是由 JS 引擎计数的，阻塞会导致计时不准确。\n开启定时器触发线程来计时并触发计时，计时完成后会被添加到任务队列中，等待 JS 引擎处理。")]),t._v(" "),e("h4",{attrs:{id:"_5-http请求线程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-http请求线程"}},[t._v("#")]),t._v(" <5>http请求线程：")]),t._v(" "),e("p",[t._v("http 请求的时候会开启一条请求线程。\n请求完成有结果了之后，将请求的回调函数添加到任务队列中，等待 JS 引擎处理")]),t._v(" "),e("h2",{attrs:{id:"事件循环"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件循环"}},[t._v("#")]),t._v(" 事件循环")]),t._v(" "),e("ul",[e("li",[t._v("① JavaScript 事件循环机制分为浏览器和 Node 事件循环机制，\n两者的实现技术不一样，浏览器 Event Loop 是 HTML 中定义的规范，\nNode Event Loop 是由 libuv 库实现。主要指的就是浏览器的")]),t._v(" "),e("li",[t._v("② Javascript 有一个 main thread 主线程和 call-stack 调用栈(执行栈)，\n所有的任务都会被放到调用栈等待主线程执行。")])]),t._v(" "),e("h4",{attrs:{id:"_1-js-调用栈"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-js-调用栈"}},[t._v("#")]),t._v(" (1)JS 调用栈：")]),t._v(" "),e("p",[t._v("JS 调用栈是一种后进先出的数据结构。当函数被调用时，\n会被添加到栈中的顶部，执行完成之后就从栈顶部移出该函数，直到栈内被清空。")]),t._v(" "),e("h4",{attrs:{id:"_2-同步任务、异步任务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-同步任务、异步任务"}},[t._v("#")]),t._v(" (2)同步任务、异步任务：")]),t._v(" "),e("p",[t._v("JavaScript 单线程中的任务分为同步任务和异步任务。\n同步任务会在调用栈中按照顺序排队等待主线程执行，\n异步任务则会在异步有了结果后将注册的回调函数添加到任务队列(消息队列)中等待\n主线程空闲的时候，也就是栈内被清空的时候，被读取到栈中，等待主线程执行。\n任务队列是先进先出的数据结构。")]),t._v(" "),e("h4",{attrs:{id:"_3-event-loop"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-event-loop"}},[t._v("#")]),t._v(" (3)Event Loop：")]),t._v(" "),e("p",[t._v("-<1>调用栈中的同步任务都执行完毕，栈内被清空了，\n就代表主线程空闲了，这个时候就会去任务队列中按照顺序读取一个任务，\n放入到栈中执行。每次栈内被清空，都会去读取任务队列有没有任务，\n有就读取执行，一直循环读取-执行的操作，就形成了事件循环。")]),t._v(" "),e("ul",[e("li",[t._v("<2>宏任务(macro-task)、微任务(micro-task):\n"),e("ul",[e("li",[t._v("除了广义的同步任务和异步任务，JavaScript 单线程中的任务可以细分为宏任务和微任务。")]),t._v(" "),e("li",[t._v("macro-task包括：script(整体代码), setTimeout, setInterval, setImmediate, I/O, UI rendering;")]),t._v(" "),e("li",[t._v("micro-task包括：Promises, MutationObserver ，Object.observe, process.nextTick(node里的)。\n第一次事件循环中，JavaScript 引擎会把整个 script 代码当成一个宏任务执行，执行完成之后，再检测本次循环中是否存在微任务，存在的话就依次从微任务的任务队列中读取执行完所有的微任务，再读取宏任务的任务队列中的任务执行，再执行所有的微任务，如此循环。JS 的执行顺序就是每次事件循环中的宏任务-微任务。")])])])]),t._v(" "),e("h4",{attrs:{id:"_4-定时器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-定时器"}},[t._v("#")]),t._v(" (4)定时器")]),t._v(" "),e("p",[t._v("定时器会开启一条定时器触发线程来触发计时，定时器会在等待了指定的时间后将事件放入到任务队列中等待读取到主线程执行。\n定时器指定的延时毫秒数其实并不准确，因为定时器只是在到了指定的时间时将事件放入到任务队列中，必须要等到同步的任务和现有的任务队列中的事件全部执行完成之后，才会去读取定时器的事件到主线程执行，中间可能会存在耗时比较久的任务，那么就不可能保证在指定的时间执行。")]),t._v(" "),e("h2",{attrs:{id:"mutationobserver"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mutationobserver"}},[t._v("#")]),t._v(" MutationObserver")]),t._v(" "),e("ul",[e("li",[t._v("1.MutationObserver——变动观察器，就是用来观察node节点变化的。")]),t._v(" "),e("li",[t._v("2.MutationObserver是一个构造器，接受一个callback参数，用来处理节点变化的回调函数，返回两个参数，mutations：节点变化记录列表（sequence"),e("MutationRecord",[t._v("），observer：构造MutationObserver对象。")])],1),t._v(" "),e("li",[t._v("3.MutationObserver对象有三个方法，分别如下：")])]),t._v(" "),e("h4",{attrs:{id:"_1observe-设置观察目标-接受两个参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1observe-设置观察目标-接受两个参数"}},[t._v("#")]),t._v(" ①observe：设置观察目标，接受两个参数，")]),t._v(" "),e("ul",[e("li",[t._v("target：观察目标，")]),t._v(" "),e("li",[t._v("options：通过对象成员来设置观察选项。")]),t._v(" "),e("li",[t._v("options有以下几个选项：\n"),e("ul",[e("li",[t._v("(1)childList：设置true，表示观察目标子节点的变化，比如添加或者删除目标子节点，不包括修改子节点以及子节点后代的变化.")]),t._v(" "),e("li",[t._v("(2)attributes：设置true，表示观察目标属性的改变.")]),t._v(" "),e("li",[t._v("(3)characterData：设置true，表示观察目标数据的改变.")]),t._v(" "),e("li",[t._v("(4)subtree：设置为true，目标以及目标的后代改变都会观察.")]),t._v(" "),e("li",[t._v("(5)attributeOldValue：如果属性为true或者省略，则相当于设置为true，表示需要记录改变前的目标属性值，设置了attributeOldValue可以省略attributes设置.")]),t._v(" "),e("li",[t._v("(6)characterDataOldValue：如果characterData为true或省略，则相当于设置为true,表示需要记录改变之前的目标数据，设置了characterDataOldValue可以省略characterData设置.")]),t._v(" "),e("li",[t._v("(7)attributeFilter：如果不是所有的属性改变都需要被观察，并且attributes设置为true或者被忽略，那么设置一个需要观察的属性本地名称（不需要命名空间）的列表.")])])])]),t._v(" "),e("h4",{attrs:{id:"_2disconnect-阻止-mutationobserver-实例继续接收的通知-直到再次调用其observe-方法-该观察者对象包含的某些函数都不会再被调用。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2disconnect-阻止-mutationobserver-实例继续接收的通知-直到再次调用其observe-方法-该观察者对象包含的某些函数都不会再被调用。"}},[t._v("#")]),t._v(" ②disconnect：阻止 MutationObserver 实例继续接收的通知，直到再次调用其observe()方法，该观察者对象包含的某些函数都不会再被调用。")]),t._v(" "),e("h4",{attrs:{id:"_3takerecords-清空记录队列并返回里面的内容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3takerecords-清空记录队列并返回里面的内容"}},[t._v("#")]),t._v(" ③takeRecords：清空记录队列并返回里面的内容")]),t._v(" "),e("h2",{attrs:{id:"浏览器事件机制中事件触发三个阶段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器事件机制中事件触发三个阶段"}},[t._v("#")]),t._v(" 浏览器事件机制中事件触发三个阶段")]),t._v(" "),e("h4",{attrs:{id:"_1-事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-事件"}},[t._v("#")]),t._v(" ① 事件：")]),t._v(" "),e("p",[t._v("用户或浏览器自身执行的某种动作，它通过web浏览器通知应用程序发生了什么事情。")]),t._v(" "),e("h4",{attrs:{id:"_2-事件流"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-事件流"}},[t._v("#")]),t._v(" ② 事件流：")]),t._v(" "),e("p",[t._v("描述的是从页面中接收事件的顺序。")]),t._v(" "),e("ul",[e("li",[t._v("(1) IE使用的是先里后外的方式——事件冒泡；"),e("br"),t._v("\nNetScape使用的是先外后里的方式——事件捕获。")]),t._v(" "),e("li",[t._v("(2) 种类：事件冒泡；事件捕获；DOM事件流")])]),t._v(" "),e("h4",{attrs:{id:"_3-js中事件执行的整个过程称之为事件流-分为三个阶段-事件捕获阶段-事件目标处理函数、事件冒泡阶段。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-js中事件执行的整个过程称之为事件流-分为三个阶段-事件捕获阶段-事件目标处理函数、事件冒泡阶段。"}},[t._v("#")]),t._v(" ③ js中事件执行的整个过程称之为事件流，分为三个阶段：事件捕获阶段，事件目标处理函数、事件冒泡阶段。")]),t._v(" "),e("ul",[e("li",[t._v("(1)当某个元素触发某个事件时（如：click），从顶层元素window发出一个事件流，顺着dom树的节点向触发它的目标节点流去，直到达到目标元素，这个层层递进，向下找目标的过程为事件的捕获阶段，所有经过的节点,都会触发对应的事件。")]),t._v(" "),e("li",[t._v("(2)到达目标元素，便会执行绑定在此元素上的，与事件相应的函数，即事件目标处理函数阶段。")]),t._v(" "),e("li",[t._v("(3)最后，从目标元素起，再依次往顶层元素对象传递，此过程称之为事件冒泡，同样，所有经过的节点,都会触发对应的事件。")])]),t._v(" "),e("h4",{attrs:{id:"_4-event-target和event-currenttarget"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-event-target和event-currenttarget"}},[t._v("#")]),t._v(" ④ event.target和event.currentTarget")]),t._v(" "),e("ul",[e("li",[t._v("(1)event.target：返回触发事件的元素")]),t._v(" "),e("li",[t._v("(2)event.currentTarget：返回绑定事件的元素")])]),t._v(" "),e("h4",{attrs:{id:"_5阻止事件冒泡-w3c-stoppropagation-ie-cancelbubble-true"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5阻止事件冒泡-w3c-stoppropagation-ie-cancelbubble-true"}},[t._v("#")]),t._v(" ⑤阻止事件冒泡：w3c——.stopPropagation()；IE——.cancelBubble()=true")]),t._v(" "),e("h4",{attrs:{id:"_6取消默认事件-w3c-preventdefault-ie-returnvalue-false"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6取消默认事件-w3c-preventdefault-ie-returnvalue-false"}},[t._v("#")]),t._v(" ⑥取消默认事件：w3c——.preventDefault()；IE——.returnValue()=false")]),t._v(" "),e("h2",{attrs:{id:"事件委托-事件代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件委托-事件代理"}},[t._v("#")]),t._v(" 事件委托(事件代理)")]),t._v(" "),e("ul",[e("li",[t._v("① 事件委托就是利用事件冒泡，只指定一个事件处理程序，就可以管理某一类型的所有事件。")]),t._v(" "),e("li",[t._v("② 作用：支持为同一个DOM元素注册多个同类型事件；可将事件分成事件捕获和事件冒泡机制。")]),t._v(" "),e("li",[t._v("③ 优点：\n"),e("ul",[e("li",[t._v("(1) 提高性能：每一个函数都会占用内存空间，只需添加一个事件处理程序代理所有事件,所占用的内存空间更少。")]),t._v(" "),e("li",[t._v("(2) 动态监听：使用事件委托可以自动绑定动态添加的元素,即新增的节点不需要主动添加也可以具有和其他元素一样的事件。\n"),e("vssue",{attrs:{options:{locale:"zh"}}})],1)])])])])}),[],!1,null,null,null);a.default=v.exports}}]);