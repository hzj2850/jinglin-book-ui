<template>
    <div class="task-list">
        <!-- 轮播图 -->
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, index) in tasks" :key="item.value">
                    <task-item :item="item" :index="index + 1" :taskId="taskId" @click="onTask(item)" />
                </div>
            </div>
        </div>
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
        };
    },
    mounted() {
        this.mySwiper = new Swiper('.swiper-container',{
            slidesPerView: 'auto',
            paginationClickable: true,
        });
    },
    methods: {
        onTask(item) {
            this.$emit('change', item);
        },
    }
}
</script>

<style lang="less" scoped>
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