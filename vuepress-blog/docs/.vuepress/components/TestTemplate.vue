<template>
    <div id="topBanner" style="padding-top: 5px;" class="slide" >
        <div v-for="(imgUrl, index) in bannerList" v-show="index===mark" :key="index" class="slideshow">
            <a href="#">
                <img :src=imgUrl style="width:100%;height:400px;">
            </a>
        </div>
        <div class="bar">
            <span v-for="(item, index) in bannerList" :class="{ 'active':index===mark }" :key="index"></span>
        </div>
    </div>
</template>

<script>
export default {  
  data () {  
    return {  
      mark: 0, //比对图片索引的变量  
      bannerList:[
            "https://wx3.sinaimg.cn/mw1024/006hxKBnly1gqsk21s9cdj32m21mchdt.jpg",
            "https://wx4.sinaimg.cn/mw1024/006hxKBnly1gq23v721nvj33402c0e81.jpg",
            "https://wx4.sinaimg.cn/mw1024/006hxKBnly1gpaxubbs8zj34mo334npg.jpg",
            "https://wx3.sinaimg.cn/mw1024/006hxKBnly1gpaxtnqxu6j33402c04qq.jpg",
            "https://wx3.sinaimg.cn/mw1024/006hxKBnly1gjlt8tgu8wj32801o04qp.jpg",
            ] 
    }  
  },  
  methods: {  
    autoPlay () {  
      this.mark++;  
      if (this.mark === 5) { //当遍历到最后一张图片置零  
        this.mark = 0  
      }  
    },  
    play () {  
      setInterval(this.autoPlay, 2500)  
    },  
    change (i) {  
      this.mark = i  
    }  
  },  
  created () {  
    this.play()  
  }  
}  
</script>
<style scoped>
.slide {  
    width: 100%;  
    height: 100%;  
    margin: 0 auto;  
    margin-top: 50px;  
    overflow: hidden;  
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }  
  .slideshow {  
    width: 800px;  
    height: 400px;  
    position:absolute；
  }  
  li {  
    position: absolute;  
  }  
  img {  
        text-align: center;
  }  
  .bar {  
    position: absolute;  
    width: 100%;  
    bottom: 10px;  
    margin: 0 auto;  
    z-index: 10;  
    text-align: center;  
  }  
  .bar span {  
    width: 5px;  
    height: 5px;  
    border-radius: 50%;
    border: 1px solid;  
    background: white;  
    display: inline-block;  
    margin-left: 10px; 
    text-align: center;

  }  
  .active {  
    background: #454644 !important;  
  }  
</style>