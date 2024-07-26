<template>
    <div class="task-list">
        <i class="iconfont icon-dual-left" :hase="lShow" @click="onPrev()"></i>
        <!-- 轮播图 -->
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, index) in tasks" :key="index">
                    <task-item :item="item" :index="index + 1" :taskId="taskId" @click="onTask(item, index)" />
                </div>
            </div>
        </div>
        <i class="iconfont icon-dual-right" :hase="rShow" @click="onNext()"></i>
    </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/idangerous.swiper.css";
import taskItem from "./taskItem.vue";
export default {
    components: {
        taskItem
    },
    props: {
        tasks: {
            type: Array,
            default: () => ([])
        },
        taskId: {
            type: [String, Number]
        },
    },
    data() {
        return {
            mySwiper: null,
            lShow: true,
            rShow: true,
        };
    },
    mounted() {
        this.mySwiper = new Swiper('.swiper-container',{
            slidesPerView: 'auto',
            paginationClickable: true,
            onSwiperCreated: this.getIndex,
            onSlideChangeEnd: this.getIndex,
            onTouchEnd: this.getIndex,
        });
    },
    methods: {
        onTask(item, index) {
            this.mySwiper.swipeTo(index - 1, 500, true);
            this.$emit('change', item);
        },
        onPrev() {
            this.mySwiper.swipePrev();
        },
        onNext() {
            this.mySwiper.swipeNext();
        },
        getIndex(e) {
            this.lShow = e.activeIndex !== 0;
            this.rShow = e.activeIndex !== e.slides.length - e.visibleSlides.length;
        },
    },
    watch: {
        taskId: {
            immediate: true,
            handler(v) {
                if(v) this.$nextTick(() => {
                    const idx = this.tasks.findIndex(f => f.value === this.taskId);
                    if(idx > 0) this.mySwiper.swipeTo(idx - 1, 500, true);
                });
            }
        }
    },
}
</script>

<style lang="less" scoped>
.task-list{
    display: flex;
    align-items: center;
    padding: 0 6px;
    > .iconfont{
        color: @active-default;
        font-size: @font-size-base;
        margin: 0 6px;
        cursor: pointer;
    }
    .iconfont[hase] {
        color: @active-color;
    }
}
.swiper-container{
    max-width: 600px;
    .swiper-wrapper{
        width: 100% !important;
        display: flex;
        align-items: center;
    }
    .swiper-slide {
        width: auto;
        padding: 0 5px;
    }
}
</style>