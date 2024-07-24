<template>
    <div class="book-layout">
        <keep-alive>
            <router-view v-if="keepAlive" />
        </keep-alive>
        <router-view v-if="!keepAlive" />
    </div>
</template>

<script>
export default {
    computed: {
        keepAlive() {
            return this.$route.meta.keepAlive;
        }
    },
}
</script>

<style lang="less" scoped>
.book-layout{
    width: 100%;
    height: 100%;
}
</style>