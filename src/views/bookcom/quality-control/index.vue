<template>
    <div class="quality-control">
        <info-item v-for="(item, index) in 10" :item="item" :key="index" />
    </div>
</template>

<script>
import InfoItem from './item.vue'
export default {
    components: {
        InfoItem
    }
}
</script>

<style lang="less" scoped>
.quality-control{
    display: flex;
    background: #1E3691;
    padding: 20px;
    height: 100%;
    width: 100%;
    overflow: auto;
}
</style>