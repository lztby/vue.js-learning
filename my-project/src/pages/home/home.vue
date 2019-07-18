<template>
<div>
   <home-header> </home-header>
   <home-swiper> </home-swiper> 
   <home-icons>  </home-icons>
   <home-recommend> </home-recommend>
   <home-weekend> </home-weekend>
 </div> 
</template>

<script>
import HomeHeader from './conponents/header'
import HomeSwiper from './conponents/swiper'
import HomeIcons from  './conponents/icons'
import HomeRecommend from './conponents/recommend'
import HomeWeekend from './conponents/Weekend'

export default {
    name:'Home',
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend,
    }
}

</script>


<style>

</style>

