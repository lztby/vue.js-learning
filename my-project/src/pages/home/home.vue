<template>
<div>
   <home-header> </home-header>
   <home-swiper> </home-swiper> 
   <home-icons>  </home-icons>
 </div> 
</template>

<script>
import HomeHeader from './conponents/header'
import HomeSwiper from './conponents/swiper'
import HomeIcons from  './conponents/icons'

export default {
    name:'Home',
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
    }
}

</script>


<style>

</style>

