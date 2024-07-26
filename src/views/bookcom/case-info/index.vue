<template>
    <div class="case-info">
        <left-info />
        <right-table/>
    </div>
</template>

<script>
import leftInfo from './left-info.vue'
import RightTable from './right-table.vue'
export default {
    components: { leftInfo, RightTable },
    props: ['taskId'],
    watch: {
        taskId: {
            immediate: true,
            handler(v) {
                if(v) console.log('任务id', v);
            }
        }
    }
}
</script>

<style lang="less" scoped>
.case-info{
    overflow: hidden;
    height: 100%;
    display: flex;
    background: #fff;
    padding: 12px;
}

.left-info{
    width: 30%;
}

.right-table{
    width: 70%;
}
</style>