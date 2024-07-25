<template>
    <ant-list
        :spinning="spinning"
        :tabs="tabs"
        :tabId="form.state"
        @tab="onTab"
        :pagination="{ current: form.current, pageSize: form.size, total: total }"
        @size="onSize"
    >
        <ant-table
            :columns="columns"
            :listdata="listdata"
            :select-row-keys="rowKeys"
            row-key="id"
        >
            <!-- 操作 -->
            <template #action>
                <a-button type="link">打印</a-button>
            </template>
        </ant-table>
        <template #footer>
            <a-button size="large" @click="onBack()">返回</a-button>
        </template>
    </ant-list>
</template>

<script>
import { columns, getTabs, getList } from './columns'
import AntTable from '@/components/ant-table/index.vue'
import AntList from '@/components/ant-list/index.vue'
export default {
    components: {
        AntTable,
        AntList,
    },
    data() {
        return {
            spinning: false, // 加载中
            listdata: [], // 列表数据
            rowKeys: [], // 选中的数据
            total: 0,
            form: {
                keyword: '', // 关键字
                evaluationCenter: '', // 鉴定中心
                specialty: '', // 鉴定专业
                isIndistinct: 1, // 是否模糊查询（0：精准，1：模糊）
                current: 1, // 当前页
                size: 10, // 每页记录数
                state: 0, // 状态
                module: 1, // 1:文书制作
                taskOrRecord: 0,
            }
        }
    },
    computed: {
        columns() {
            return columns(this);
        },
        tabs() {
            return getTabs(this);
        },
    },
    mounted() {
        this.onTab(this.tabs[0]);
    },
    methods: {
        onBack() {
            this.$router.go(-1);
        },
        onTab(item) {
            this.form.state = item.value;
            this.getList();
        },
        onSize(v, s) {
            this.form.current = v;
            this.form.size = s;
            this.getList();
        },
        getList() {
            return getList(this);
        },
    },
}
</script>

<style lang="less" scoped>
.list-page{
    display: flex;
    flex-direction: column;
    height: 100%;
}
</style>