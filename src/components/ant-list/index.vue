<template>
    <div class="ant-list">
        <headCom :formList="formList" :form="form" @change="onSearch" />
        <ant-btns :tabs="tabs" :tabId="tabId" @change="onTabs" />
        <div class="ant-list-body">
            <slot></slot>
        </div>
        <paginationCom :pagination="pagination" v-if="pagination.pageSize" @change="onSize" />
        <div class="ant-list-footer" v-if="$scopedSlots['footer']">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
import headCom from './head.vue'
import AntBtns from '../ant-form/ant-btns.vue'
import paginationCom from './pagination.vue'
export default {
    components: {
        headCom,
        AntBtns,
        paginationCom
    },
    props: {
        spinning: {
            type: [String, Boolean]
        },
        tabs: {
            type: Array,
            default: () => ([])
        },
        tabId: {
            type: [String, Number]
        },
        pagination: {
            type: Object,
            default: () => ({})
        },
        form: {
            type: Object,
            default: () => ({})
        },
        formList: {
            type: Array
        },
    },
    watch: {
        spinning(v) {
            this.$store.commit("SET_SPIN", v);
        }
    },
    methods: {
        onTabs(item) {
            this.$emit('tab', item);
        },
        onSize(v, s) {
            this.$emit('size', v, s);
        },
        onSearch() {
            const obj = this.tabs.find(f => f.value == this.tabId);
            this.onTabs(obj);
        },
    }
}
</script>

<style lang="less" scoped>
.ant-list{
    display: flex;
    flex-direction: column;
    height: 100%;
    /deep/ .ant-btns{
        padding-left: 12px;
        padding-bottom: 2px;
        background: #fff;
    }
}

.ant-list-body{
    flex: 1;
    overflow: hidden;
    padding: 0 12px;
    background: #fff;
}

.ant-list-footer{
    background: @footer-color;
    height: @foot-height;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 12px;
    padding: 0 12px;
}
</style>