<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <li class="item border-bottom "
                v-for="item of recommendList"
                :key="item.id">
                    <img class="item-img" :src="item.imgUrl">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <button class="item-button">查看详情</button>
                </div>
                
            </li>
        </ul>
    </div> 
</template>

<script>
export default {
  name: "HomeRecommend",
  data () {
      return{
          recommendList:[{
          id:'0001',
          imgUrl:'https://imgs.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
          title:'北京欢乐谷'
      },{
          id:'0002',
          imgUrl:'https://imgs.qunarzz.com/sight/p0/1903/5d/5dcaf453dfd6f5dba3.img.jpg_200x200_51d03f19.jpg',
          title:'古北水镇'
      },{
          id:'0003',
          imgUrl:'https://imgs.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
          title:'故宫'
      },{
          id:'0004',
          imgUrl:'https://imgs.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_200x200_2458ffb2.jpg',
          title:'八达岭长城'
      }]
      }
      
  }
} 
</script>


<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .title
        margin-top .2rem
        background #eee
        line-height .8rem
        text-indent .2rem
    .item
        overflow hidden
        height  1.9rem
        display flex
        .item-img
            width 1.7rem
            height 1.7rem
            padding .1rem
        .item-info
            flex:1
            padding: .1rem
            min-width:0
            .item-title
                line-height .54rem
                font-size .32rem
            .item-button
                line-height .44rem
                margin-top .40rem
                background #ff9300
                padding .05rem
                border-radius .1rem
</style>

