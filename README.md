---
\typora-copy-images-to: img
---

### 课程内容简介

* ![1562731945799](img/1562731945799.png)

* 生命周期函数就是Vue实例在某一个时间点会自动执行的函数

* ![ Vue å®ä¾çå½å¨æ](img/lifecycle.png)

* 计算属性 computed   有缓存性能比较高
  * get
  * set
  
* 方法   methods   没有缓存机制

* 监听器 watch  也有一个缓存  和计算属性差不多，但是watch更复杂。

* Vue中的样式绑定

* v-bind:可以省略为：   v-on:click简写为@click

* v-if和v-else要连在一起写

* 给input添加key值，虚拟dom

* 数组的方法：push pop shift unshift splice sort reverse

* 改变数据的引用

* vue.set方法。对象，数组都可以。

  * ```
    Vue.set(vm.userInfo,1,5)  
    Vue.$set(vm.userInfo,2,10) vue对象的set方法，实例方法$set
    ```

* is语法

* 在子组件定义一个data必须是一个函数，不能是对象。



### 项目

* 路由就是根据网址的不同，返回不同的内容给用户

* 相关配置

  * ```
    解决触屏点击300ms延迟的问题
    npm install fastclick --save
    
    利用board.css库解决不同特性的手机的边框问题
    
    利用resize.css  不同手机初始化的统一
    
    iconfont 图标
    
    无用代码的删除
    
    ```

* ```
  安装CSS相关的配置：
      npm install stylus --save
      npm install stylus-loader --save
      
  ```

* ```
  ​```
  
  ​```
  lang="stylus" 可以让css更简单  scoped  让style作用局部化
  
  <style lang="stylus" scoped>
  
  display：flex  弹性布局
      
  color是字体的颜色, background-color是背景的颜色
      
  项目里的iconfont是通过下载到本地使用的
  CSS文件引入css文件 （在src目录中）   
  ~@
      
  ​```
  ```

  * 轮播图插件
  
    ```
    Vue-Awesome-Swiper
    
    npm install Vue-Awesome-Swiper@2.6.7 --save
    
    
    如何解决加载页面的抖动感？
    ```
  
  * ```
    overflow :hidden
            width :100%
            height :0
            padding-bottom:31.25%
            background :#eee
    这样可以撑开一个图片的大小
    ```

* ```
  实现带省略号的方法
  overflow: hidden
  white-space :nowrap
  text-overflow :ellipsis
  ```

* ```
  text-indent:.2rem：text-indent 属性 规定了 一个元素 首行 文本内容之前应该有多少水平空格。水平空格是块级包含元素的内容盒子的左边(对于从右向左布局来说是右边).
  font-size CSS 属性指定字体的大小。因为该属性的值会被用于计算em和ex长度单位，定义该值可能改变其他元素的大小。
  z-index 属性指定了一个具有定位属性的元素及其子代元素的 z-order。 当元素之间重叠的时候，z-order 决定哪一个元素覆盖在其余元素的上方显示。 通常来说 z-index 较大的元素会覆盖较小的一个。
```
  
* ```
  <li class="item border-bottom "> //这样写可以有个一像素的边框
  min-width:0   解决省略号的问题
  <img class="item-img" :src="item.imgUrl"> 记得这个：
  ```

  

* ```
  npm install axios --save     利用axios 使用ajax
  
  打包上线   vue提供一个转发机制
  config>index.js
  proxyTable: {
        '/api':{
          target:'http://localhost:8080',
          pathRewrite:{
            '^/api':'/static/mock'
          }
        }
      },
  ```

* ```
  给城市页面留有一个固定的空间，可以让abcd存放
  
  better-scroll的使用   滑动效果
  npm install better-scroll --save
  
  兄弟组件直接的传值，利用先传给父亲，然后父亲再传给兄弟的方法
  ```

* ```
  城市页和主页利用vuex 共享
  
  
  优化 ：每次切换   ajax 都会重新发送   利用keep-alive  
  ```

* ```JavaScript
  <router-link to = "/detail">
                  <li class="item border-bottom "
                  v-for="item of list"
                  :key="item.id">
                      <img class="item-img" :src="item.imgUrl">
                  <div class="item-info">
                      <p class="item-title">{{item.title}}</p>
                      <p class="item-desc">{{item.desc}}</p>
                      <button class="item-button">查看详情</button>
                  </div>
                  </li>
  </router-link> 
  
  
  这样会让li标签的包括的文字发生改变
  
  <router-link  
  tag="li"
  class="item border-bottom "
  v-for="item of list"
  :key="item.id"
  :to = "'/detail'+item.id"
  >
      <img class="item-img" :src="item.imgUrl">
          <div class="item-info">
              <p class="item-title">{{item.title}}</p>
  <p class="item-desc">{{item.desc}}</p>
  <button class="item-button">查看详情</button>
  </div>
   </router-link> 
  这样写就不会有问题了
  ```

* ```
  overflow:hidden
  height 0
   padding-bottom: 55%
  防止页面抖动
          
  common组件   
  在webpack.base 上加一个路径优化
  
  
  observeParents:ture,
  observe:true,
  
  解决宽度计算的问题，刷新问题
  
  
              
  渐隐渐显的效果   随着滑动改变
  借助这个函数  可以通过检测滑动了多少距离来 来让导航栏的出现和隐藏
  mounted () {
  window.addEventListener('scroll', this.handleScroll)
  },
  handleScroll () {
  const top = document.documentElement.scrollTop
  if (top > 60) {
  let opacity = top / 140
  opacity = opacity > 1 ? 1 : opacity
  this.opacityStyle = { opacity }
  this.showAbs = false
  } else {
  this.showAbs = true
  }
  }
  
  :style="opacityStyle">  动态增加渐隐渐显的效果
  
  注意对全局事件的解绑
  
  递归组件事件
  
  获得动态路由 的参数
  
  进到0001  之后  退出  再进0002  ajax 并没有重新获得连接？ mounted  配有actived
  或者
  <keep-alive exclude="detail">这样做
  
  每个组件的name是干什么用的？递归组件会用到，取消缓存会用到，Vue调试组件显示的名字
  
  
  scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    } 解决不同页面的滑动问题
  ```

  

​    



### problems

* ```
  <!-- <link rel="stylesheet" type="text/css" href="./animate.css"> -->
      <link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">
  ```

  第一种引入方式是不可以的，第二种引入方式是可以的，不知道为什么。