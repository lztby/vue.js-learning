<template>

<div class="header">
    <div class="header-left">
        <div class="iconfont back-icon">&#xe60e;</div>
    </div>
    <div class="header-input">
        <span class="iconfont">&#xe603;</span>
        输入城市/景点/游玩主题
    </div>

    <router-link to='/city'>
        <div class="header-right">
            {{this.city}}
            <span class="iconfont arrow-icon">&#xe6aa;</span>
         </div>
    </router-link>
    
</div> 
</template>

<script>
import {mapState } from 'vuex'
export default {
    name:'HomeHeader',
    computed:{
        ...mapState(['city'])
    }
}
</script>


<style lang="stylus" scoped>
    @import '~styles/varible.styl'
    .header
        display : flex
        line-height :.86rem
        background : $bgcolor
        color:#fff
        .header-left
            width :.64rem
            float: left 
            .back-icon
                text-align :center
                font-size :.4rem
        .header-input
            flex :1
            height : .64rem
            line-height :.64rem
            margin-top:.12rem
            margin-left:.2rem
            padding-left:.2rem
            background :white
            border-radius:.1rem
            color:#ccc
        .header-right
            color:white
            min-width:1.04rem
            padding:0.1rem
            float :right
            text-align :center
            .arrow-icon
                margin-left :-.04rem
                font-size :.24rem
</style>

