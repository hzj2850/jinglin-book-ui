<template>
    <div class="ant-table">
        <div class="ant-table-body">
            <table>
                <thead>
                    <table-head />
                </thead>
                <tbody-com :rowKey="rowKey" :selectRowKeys="selectRowKeys" />
            </table>
        </div>
    </div>
</template>

<script>
import { headRender } from './thead'
import { tbodyRender } from './tbody'
export default {
    props: {
        columns: {
            type: Array,
            default: () => ([])
        },
        listdata: {
            type: Array,
            default: () => ([])
        },
        seat: {
            type: String,
            default: '---'
        },
        rowKey: {
            type: String,
            default: 'id'
        },
        // 已选中的数据
        selectRowKeys: {
            type: Array,
            default: () => ([])
        },
    },
    components: {
        'table-head': {
            functional: true,
            render: headRender,
        },
        'tbody-com': {
            functional: true,
            render: tbodyRender,
        },
    },
    methods: {
        onRow() {

        }
    }
}
</script>

<style lang="less" scoped>
    @import url('./table.less');
</style>
