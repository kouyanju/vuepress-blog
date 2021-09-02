## vue动态绑定class
### 问题描述：需要给div在不同的情况下添加不同的样式
#### 1.绑定单个class
html部分
```html
<div :class="{'active':isActive}"></div>
```
js部分：判断是否绑定一个active
```js
data() {
    return {
      isActive: true
    };
}
```
结果渲染为：
```html
<div class="active"></div>
```
### 2.若要绑定多个class
需要逗号隔开就行：（这里的activeTwo加不加引号都可以，也一样都能渲染，如下）
```js
<div class="activeOne" v-bind:class="{ activeTwo: isActive, 'activeThree': hasError }"></div>
```
js部分：判断是否绑定对应class
```js
data() {
  return {
    isActive: true,
    hasError: true
  };
}
```
结果渲染为：
```js
<div class="activeOne activeTwo activeThree"></div>
```
### 3.（单纯数组方法）
```html
<div :class="[activeClass, errorClass]"></div>
```
js部分：判断是否绑定对应class
```js
data() {
  return {
    activeClass: "active",
    errorClass: "disActive"
  };
},
```
结果渲染为：
```html
<div class="active disActive"></div>
```
### 4（数组与三元运算符结合判断选择需要的class）
```html
<div :class="[isActive?'active':'disActive']"></div>
```
js部分
```js
data() {
  return {
    isActive: false,
  };
},
```
结果渲染为：
```html
<div class="disActive"></div>
```