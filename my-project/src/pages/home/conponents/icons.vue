<template>
    <div class="icons">
         <swiper >
             <swiper-slide v-for="(page,index) of pages" :key="index">
                 <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgURL" >
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
             </swiper-slide>
            
         </swiper>
    </div>
</template>

<script>
export default {
    name:'HomeIcons',
    data() {
        return{
            iconList :[{
            id:'0001',
            imgURL:'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
            desc:'景点门票'

        },{
            id:'0002',
            imgURL:'https://imgs.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
            desc :'文化古迹'
        },{
            id:'0003',
            imgURL:'https://imgs.qunarzz.com/piao/fusion/1803/48/cb72b99b71974c02.png',
            desc :'生活休闲'
        },{
            id:'0004',
            imgURL:'https://imgs.qunarzz.com/piao/fusion/1803/f5/a963333e1fa802.png',
            desc :'本地玩乐'
        },{
            id:'0005',
            imgURL:'https://imgs.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
            desc :'必游榜单'
        },{
            id:'0006',
            imgURL:'https://imgs.qunarzz.com/piao/fusion/1803/87/20656da0ac042002.png',
            desc :'北固山'
        },{
            id:'0007',
            imgURL:'https://imgs.qunarzz.com/piao/fusion/1803/97/02f5043b51b2102.png',
            desc :'茅山'
        },{
            id:'0008',
            imgURL:'https://imgs.qunarzz.com/piao/fusion/1803/17/99402a22ce4af302.png',
            desc :'镇江金山'
         },{
            id:'0009',
            imgURL:'https://imgs.qunarzz.com/piao/fusion/1803/97/02f5043b51b2102.png',
            desc :'宝华山'
        },{
            id:'0010',
            imgURL:'https://imgs.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
            desc :'全部玩乐'
        }]
        }
        
    },
    computed:{
        pages (){
            const pages = []
            this.iconList.forEach((item,index) => {
                const page = Math.floor(index / 8)
                if(!pages[page]) {
                    pages[page] = []
                }   
                pages[page].push(item)
            })
            return pages;
        }
    }
}
</script>


<style lang="stylus" scoped>
    @import '~styles/varible.styl'
    @import '~styles/mixins.styl'
    .icons>>>.swiper-container
        height: 0;
        padding-bottom: 50%;
    .icon 
        position : relative
        overflow :hidden
        float : left
        width :25%
        height :0
        padding-bottom :25%
        .icon-img
            position :absolute
            top:0
            left:0
            right:0
            bottom: 0.44rem
            box-sizing :border-box
            .icon-img-content
                display :block
                margin :0 auto 
                height :100%
        .icon-desc
            position :absolute
            left:0
            right:0
            bottom:0
            height:.44rem
            line-height:.44rem
            text-align :center
            color :$darkTextColor
            ellipsis()

</style>

