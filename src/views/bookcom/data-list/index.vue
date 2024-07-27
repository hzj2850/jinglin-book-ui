<template>
    <div class="data-list">
        <left-tree/>
        <div class="right-iframe">
            <iframe src="" frameborder="0"></iframe>
        </div>
    </div>
</template>

<script>
import leftTree from './left-tree.vue';
export default {
    components: { leftTree },
    methods: {
        Init() {
            console.log('页面数据回信');
        },
    }
}
</script>

<style lang="less" scoped>
.data-list{
    display: flex;
    height: 100%;
}

.left-tree{
    width: 400px;
}

.right-iframe{
    width: calc(100% - 400px);
    height: 100%;
    background: #fff;
    border-left: 1px solid #ccc;
    iframe{
        width: 100%;
        height: 100%;
    }
}
</style>