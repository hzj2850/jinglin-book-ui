<template>
    <layout-view :spinning="spinning">
        <template #header>
            <task-navs
                path="makeList"
                :taskId="taskId"
                :total="5"
                @change="onTask"
            />
        </template>
        <template>
            <!-- 导航切换 -->
            <ant-btns :tabs="tabs" :tabId="tabId" @change="onTabs" />
            <!-- 资料列表 -->
            <data-list v-if="tabId == 1" />
            <!-- 案件信息 -->
            <case-info v-if="tabId == 2" />
        </template>
    </layout-view>
</template>

<script>
import DataList from '../data-list/index.vue'
import caseInfo from '../case-info/index.vue'
import LayoutView from '@/components/ant-layout/layout-view.vue'
import AntBtns from '@/components/ant-form/ant-btns.vue'
import TaskNavs from '@/components/task-navs/index.vue'
export default {
    components: {
        DataList,
        caseInfo,
        AntBtns,
        TaskNavs,
        LayoutView,
    },
    data() {
        return {
            spinning: false, // 加载中
            taskId: '2', // 选中的任务
            tabId: '2', // 选中的导航
            tabs: [
                { label: "资料列表", value: "1" },
                { label: "案件信息", value: "2" },
            ],
        };
    },
    mounted() {
        // this.spinning = true;
    },
    activated() {
        this.$message.info('jjjjjjjj')
    },
    methods: {
        onTask(item) {
            this.taskId = item.value;
        },
        onTabs(item) {
            this.tabId = item.value;
        },
    }
}
</script>

<style lang="less" scoped>
.layout-view{
    /deep/ .layout-view-main{
        display: flex;
        flex-direction: column;
    }
}

.data-list{
    flex: 1;
    overflow: hidden;
}
</style>