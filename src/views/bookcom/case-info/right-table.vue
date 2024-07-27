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
            <!-- 页数 -->
            <template #page>
                <a-input placeholder="请输入页码" />
            </template>
            <!-- 起止页码 -->
            <template #page2>
                <a-input placeholder="请输入页码" />
            </template>
            <!-- 操作 -->
            <a slot="action" @click="onSe(item)" slot-scope="{item,index}">
                查看{{ index }}
            </a>
        </ant-table>
        <!-- 检材/样本列表 -->
        <div class="right-table-foot" v-if="tabId == 1">
            <a-button size="large" type="primary" @click="onMake()">文书制作</a-button>
            <a-button size="large" type="primary" @click="onRemake()">重新制作</a-button>
            <a-button size="large" type="primary">文书比较</a-button>
            <a-button size="large" type="primary">查看审批稿子</a-button>
            <a-button size="large" type="primary">文书下载</a-button>
        </div>
        <!-- 鉴定材料列表 -->
        <div class="right-table-foot" v-if="tabId == 2">
            <a-button size="large" type="primary">打印</a-button>
            <a-button size="large" type="primary">上传</a-button>
            <a-button size="large" type="primary">下载</a-button>
        </div>

        <!-- 文书制作弹框 -->
        <modal-make ref="make" />
        <modal-make2 ref="make2" />
        <!-- 二次确认提示弹框 -->
        <modal-confirm ref="confirm" />
    </div>
</template>

<script>
import { columns1, columns2, columns3, getList } from './columns'
import AntBtns from '@/components/ant-form/ant-btns.vue'
import AntTable from '@/components/ant-table/index.vue'
import modalMake from './modal-make/idnex.vue'
import modalMake2 from './modal-make/index2.vue'
import modalConfirm from '@/components/ant-form/modal-confirm.vue'
export default {
    components: {
        AntBtns,
        AntTable,
        modalMake,
        modalMake2,
        modalConfirm,
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
        onMake() {
            this.$refs.make.open();
        },
        onRemake() {
            this.$refs.confirm.text = `确定重新制作？\n之前制作的文书将形成记录且不可修改！`;
            this.$refs.confirm.open(() => {
                this.$refs.make2.open();
            });
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

    .ant-input{
        width: calc(100% - 12px);
        font-size: @font-size-base;
        text-align: center;
    }
}

.ant-table{
    flex: 1;
    margin-top: 2px;
    overflow: hidden;
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