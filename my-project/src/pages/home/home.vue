<template>
<div>
   <home-header> </home-header>
   <home-swiper> </home-swiper> 
 </div> 
</template>

<script>
import HomeHeader from './conponents/header'
import HomeSwiper from './conponents/swiper'

export default {
    name:'Home',
    components: {
        HomeHeader,
        HomeSwiper
    }
}

</script>


<style>

</style>

