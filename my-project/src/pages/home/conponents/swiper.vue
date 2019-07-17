<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>

      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- 控制左右箭头
            <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>-->
      <!-- 滚动条
      <div class="swiper-scrollbar"   slot="scrollbar"></div>-->
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true
      },

      swiperList: [
        {
          id: "0001",
          imgUrl:
          '//mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/3f5ff03fa0c024b930f515e63ae2c702.jpg_945x288_7dff4510.jpg'
        },
        {
          id: "0002",
          imgUrl:
            "//mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/ebf7306335a5e060dbbfe42b8e8ede9f.jpg_945x288_da043916.jpg"
        }
      ]
    };
  }
};
</script>


<style lang="stylus" scoped>
.wrapper>>>.swiper-pagination-bullet-active {
  background: white !important;
}

.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
  background: #eee;

  .swiper-img {
    width: 100%;
  }
}
</style>

