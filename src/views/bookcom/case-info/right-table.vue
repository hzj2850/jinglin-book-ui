<template>
    <div class="right-table">
        <!-- 导航切换 -->
        <ant-btns :tabs="tabs" :tabId="tabId" @change="onTabs" />
        <ant-table
            :columns="columns"
            :listdata="listdata"
            :select-row-keys="selectRowKeys"
            row-key="id"
        >
            <a slot="action" @click="onSe(item)" slot-scope="{item,index}">
                查看{{ index }}
            </a>
            <template #expand="e">
                <p>下拉展开内容</p>
                {{ e }}
            </template>
        </ant-table>
        <div class="right-table-foot">
            <a-button size="large" type="primary" @click="onAdd">文书制作</a-button>
            <a-button size="large" type="primary">重新制作</a-button>
            <a-button size="large" type="primary">文书比较</a-button>
            <a-button size="large" type="primary">查看审批稿子</a-button>
            <a-button size="large" type="primary">文书下载</a-button>
        </div>
    </div>
</template>

<script>
import { columns1, columns2, columns3, getList } from './columns'
import AntBtns from '@/components/ant-form/ant-btns.vue'
import AntTable from '@/components/ant-table/index.vue'
export default {
    components: {
        AntBtns,
        AntTable
    },
    data() {
        return {
            list1: [], // 检材/样本列表
            list2: [], // 鉴定材料列表
            list3: [], // 文书操作日志
            tabId: '', // 选中的导航
            selectRowKeys: [], // 已选中的数据
        }
    },
    mounted() {
        this.tabId = (this.tabs[0] || {}).value;
    },
    computed: {
        tabs() {
            return [
                { label: "检材/样本列表", value: "1" },
                { label: "鉴定材料列表", value: "2" },
                { label: "文书操作日志", value: "3" },
            ]
        },
        columns() {
            const v = this.tabId;
            if(v == 1) return columns1(this);
            if(v == 2) return columns2(this);
            if(v == 3) return columns3(this);
            return [];
        },
        listdata() {
            const v = this.tabId;
            if(v == 1) return this.list1;
            if(v == 2) return this.list2;
            if(v == 3) return this.list3;
            return [];
        },
    },
    methods: {
        Init() {
            const obj = this.tabs.find(f => f.value == this.tabId) || this.tabs[0];
            if(obj) this.onTabs(obj);
        },
        onTabs(item) {
            this.tabId = item.value;
            return getList(this);
        },
        onAdd() {
            this.listdata.push({name: 'hzj', age: this.listdata.length})
        },
    },
}
</script>


<style lang="less" scoped>
.right-table{
    display: flex;
    flex-direction: column;
}

.ant-table{
    flex: 1;
    margin-top: 2px;
}

.right-table-foot{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-top: 10px;
    .ant-btn{
        margin-left: 12px;
    }
}
</style>