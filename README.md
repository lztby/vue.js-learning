---
typora-copy-images-to: img
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

    