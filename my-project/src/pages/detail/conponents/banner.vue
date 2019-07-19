<template>
  <div>
    <div class="banner" @click="handle_bannet_click">
    <img class="banner-img" :src="bannerImg" >
    <div class="banner-info">
        <div class="banner-tittle">{{this.sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe60e;</span>
          {{this.bannerImgs.length}}
        </div>
    </div>
    <fade>  
      <common_gallary :imgs="bannerImgs" v-show="showgallary" @close="handle_gallary_click"></common_gallary>
    </fade>
  </div>

  </div>

</template>

<script>
import common_gallary from 'common/gallary/gallary'
import fade from 'common/fade/fade'

export default {
  name: 'detail_banner',
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  data () {
    return {
      showgallary:false,
    }
  },
  
  methods : {
    handle_bannet_click () {
      this.showgallary = true
    },
    handle_gallary_click() {
      this.showgallary = false
    }

  },
  components: {
    common_gallary,
    fade
  }
}
</script>

<style lang="stylus" scoped>
    .banner
        position relative
        overflow:hidden
        height 0
        padding-bottom: 55%
        .banner-img
          width 100%
        .banner-info
          display: flex
          position: absolute
          left: 0
          right: 0
          bottom: 0
          line-height: .6rem
          color: #fff
          background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
          .banner-tittle
            flex: 1
            font-size: .32rem
            padding: 0 .2rem
          .banner-number
            height: .32rem
            line-height: .32rem
            margin-top: .14rem
            padding: 0 .4rem
            border-radius: .2rem
            background: rgba(0, 0, 0, .8)
            font-size: .24rem 
            .banner-icon
              font-size .24rem
</style>
