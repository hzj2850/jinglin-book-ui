<template>
    <div class="right-table">
        <!-- 导航切换 -->
        <ant-btns :tabs="tabs" :tabId="tabId" @change="onTabs" />
        <ant-table
            :columns="columns"
            :listdata="listdata"
            :select-row-keys="openKeys"
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
            <a-button size="large" type="primary">文书制作</a-button>
            <a-button size="large" type="primary">重新制作</a-button>
            <a-button size="large" type="primary">文书比较</a-button>
            <a-button size="large" type="primary">查看审批稿子</a-button>
            <a-button size="large" type="primary">文书下载</a-button>
        </div>
    </div>
</template>

<script>
import { columns1, columns2, columns3 } from './columns'
import AntBtns from '@/components/ant-form/ant-btns.vue'
import AntTable from '@/components/ant-table/index.vue'
export default {
    components: {
        AntBtns,
        AntTable
    },
    data() {
        return {
            listdata: [],
            openKeys: [],
            tabId: '1', // 选中的导航
            tabs: [
                { label: "检材/样本列表", value: "1" },
                { label: "鉴定材料列表", value: "2" },
                { label: "文书操作日志", value: "3" },
            ],
        }
    },
    computed: {
        columns() {
            const v = this.tabId;
            if(v == 1) return columns1(this);
            if(v == 2) return columns2(this);
            if(v == 3) return columns3(this);
            return [];
        },
    },
    methods: {
        onTabs(item) {
            this.tabId = item.value;
        },
    }
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