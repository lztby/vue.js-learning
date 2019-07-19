<template>
<div>
    <detail_banner
    :sightName="sightName"
    :bannerImg="bannerImg"
    :bannerImgs="gallaryImgs"> 
    </detail_banner>
    <detail_header> </detail_header>
    
    <div class="content">
      <detail_list :list="list">  </detail_list>
    </div>
</div>
  
</template>

<script>


import detail_banner from './conponents/banner'
import detail_header from './conponents/header'
import detail_list from './conponents/list'
import axios from 'axios'

export default {
  name: 'detail',
  components : {
      detail_banner,
      detail_header,
      detail_list,
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
    .content
      height 50rem
</style>
