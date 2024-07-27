<template>
    <layout-view :spinning="spinning">
        <template #header>
            <task-navs
                :title="title"
                :path="listPath"
                :tasks="tasks"
                :taskId="taskId"
                :total="total"
                @change="onTask"
            />
        </template>
        <template>
            <!-- 导航切换 -->
            <ant-btns :tabs="tabs" :tabId="tabId" @change="onTabs" />
            <!-- 资料列表 -->
            <data-list ref="tabCentent" v-if="tabId == 1" />
            <!-- 案件信息 -->
            <case-info ref="tabCentent" v-if="tabId == 2" />
        </template>
    </layout-view>
</template>

<script>
import DataList from '../data-list/index.vue'
import caseInfo from '../case-info/index.vue'
import LayoutView from '@/components/ant-layout/layout-view.vue'
import AntBtns from '@/components/ant-form/ant-btns.vue'
import TaskNavs from '@/components/task-navs/index.vue'
import { getTasks, getTask, setTask } from './fn'
export default {
    components: {
        DataList,
        caseInfo,
        AntBtns,
        TaskNavs,
        LayoutView,
    },
    props: {
        listPath: {
            type: String,
            default: ''
        },
        title: {
            type: String
        },
    },
    data() {
        return {
            spinning: false, // 加载中
            tasks: [], // 任务列表
            total: 0, // 任务总数
            tabId: '2', // 选中的导航
            tabs: [
                { label: "资料列表", value: "1" },
                { label: "案件信息", value: "2" },
            ],
        };
    },
    computed: {
        taskId() {
            const v = this.$route.query.id;
            const obj = this.tasks.find(f => f.value == v);
            if(obj) return v;
            return '';
        },
    },
    async activated() {
        console.log('进入详情');
        // 1、开启加载动画
        this.$loading(true);
        // 2、获取任务列表
        const obj = await getTasks(this);
        // 3、默认选中任务
        await setTask(this, obj);
    },
    methods: {
        onTask(item) {
            if(item.value != this.$route.query.id) {
                this.$router.replace({
                    query: { ...this.$route.query, id: item.value }
                });
            }
            // 触发组件生命周期
            const ref = this.$refs.tabCentent;
            if(ref) ref.Init();
        },
        onTabs(item) {
            this.tabId = item.value;
            // 触发组件生命周期
            const ref = this.$refs.tabCentent;
            if(ref) ref.Init();
        },
    },
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