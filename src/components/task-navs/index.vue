<template>
    <div class="task-navs">
        <div class="task-title">{{ title }}</div>
        <task-list :tasks="tasks" :taskId="taskId" @change="onTask" v-if="tasks.length > 0" />
        <a-button size="large" @click="onTaskList" v-if="total * 1 > 0">进入全部任务列表（{{ total }}）</a-button>
    </div>
</template>

<script>
import taskList from './taskList.vue'
export default {
    components: {
        taskList
    },
    props: {
        title: {
            type: String,
            default: '文书审核任务列表'
        },
        tasks: {
            type: Array,
            default: () => ([
                {label: 'G520100-40-22000', value: '1'},
                {label: 'J520100-40-22003', value: '2'},
            ])
        },
        taskId: {
            type: [String, Number],
            default: "G520100-40-22000",
        },
        total: {
            type: [String, Number],
            default: '0',
        },
        path: {
            type: String
        },
    },
    methods: {
        onTask(item) {
            this.$emit('change', item);
        },
        onTaskList() {
            if(!this.path) return alert("请配置path");
            this.$router.push({
                name: this.path
            })
        },
    }
}
</script>

<style lang="less" scoped>
.task-navs{
    display: flex;
    align-items: center;
}
.task-title{
    font-size: @font-size-title;
}
</style>
