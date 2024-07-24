<template>
    <ant-list :spinning="spinning" :tabs="tabs" :tabId="tabId" @tab="onTab">
        <ant-table
            :columns="columns"
            :listdata="listdata"
            :select-row-keys="rowKeys"
            row-key="id"
        />
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
            tabId: '',
            form: {
                current: 1,
                size: 10,
                isRenewal: 1,
                taskOrRecord: 1,
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
    created() {
        this.onTab(this.tabs[0]);
    },
    methods: {
        onBack() {
            this.$router.go(-1);
        },
        onTab(item) {
            this.tabId = item.value;
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