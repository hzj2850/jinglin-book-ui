<template>
    <div class="ant-screen">
        <div class="ant-screen-header">
            <a-input-search allowClear size="large" :placeholder="placeholder" enter-button @search="onSearch" />
            <a-button size="large" type="primary" @click="onShow">高级筛选</a-button>
            <template>
                <label>鉴定中心：</label>
                <a-select
                    size="large"
                    placeholder="请选择鉴定中心"
                    :value="form.evaluationCenter || undefined"
                    :options="jdzxList"
                    @change="onJszx"
                    show-search
                    :filterOption="filterOption"
                />
            </template>
            <template>
                <label>鉴定专业：</label>
                <a-select
                    size="large"
                    placeholder="请选择鉴定专业"
                    :value="form.specialty || undefined"
                    :options="majorList"
                    @change="onZy"
                    :disabled="majorList.length === 0"
                    show-search
                    :filterOption="filterOption"
                />
            </template>
        </div>
        <div class="ant-screen-body" :style="{height: bodyHeight}">
            <div class="ant-screen-content" ref="body">
                <div class="left">
                    <div class="form-item" v-for="(item, index) in formList" :key="index">
                        <label>{{ item.label }}：</label>
                        <a-select
                            size="large"
                            allowClear
                            :value="form[item.key] || undefined"
                            :placeholder="item.placeholder || '请选择'"
                            :options="item.list || getSelect(item.data)"
                            @change="onChangeItem($event, item)"
                            show-search
                            :filterOption="filterOption"
                            v-if="item.type === 'select'"
                        />
                        <a-range-picker
                            size="large"
                            :value="getRange(form[item.key])"
                            @change="onChangeDate($event, item)"
                            format="YYYY年MM月DD日"
                            v-if="item.type === 'range'"
                        />
                    </div>
                </div>
                <div class="right">
                    <a-button size="large" type="danger" @click="onReset()">重置</a-button>
                    <a-button size="large" type="primary" @click="onConsult(0)">精确查询</a-button>
                    <a-button size="large" type="sussess" @click="onConsult(1)">模糊查询</a-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getMajor, getPartyList, getReceiver, getSurveyor, getOperator } from './get'
import moment from 'moment'
export default {
    props: {
        placeholder: {
            type: String,
            default: '输入案件名称 / 委托编号 / 鉴定编号 / 任务编号'
        },
        formList: {
            type: Array,
            default: () => ([
                { label: '打印情况', key: 'jjjjj', type: 'select' },
                { label: '制作时间', key: 'jjjjj', type: 'select' },
                { label: '委托单位', key: 'jjjjj', type: 'select' },
            ])
        },
        form: {
            type: Object,
            default: () => ({})
        },
    },
    data() {
        return {
            bodyHeight: 0,
        };
    },
    computed: {
        jdzxList() {
            return this.$store.state.jdzxList.map(f => ({ label: f.orgName, value: f.id }));
        },
        // 鉴定专业
        majorList() {
            const list = this.$store.state.majorList || [];
            const id = this.form.evaluationCenter;
            const obj = list.find(f => f.id == id) || {};
            const arr = obj.list || [];
            return arr.map(f => ({ label: f.remark, value: f.id }));
        },
        // 委托单位
        partyList() {
            const arr = this.getStoreData('partyList');
            return arr.map(f => ({label: f.orgName, value: f.id}));
        },
        // 受理人
        receiverList() {
            const arr = this.getStoreData('receiverList');
            return arr.map(f => ({label: f.realName, value: f.id}));
        },
        // 检验人
        surveyorList() {
            const arr = this.getStoreData('surveyorList');
            return arr.map(f => ({label: f.realName, value: f.id}));
        },
        // 操作人
        operatorList() {
            const arr = this.getStoreData('operatorList');
            return arr;
        },
        // 制作人
        userlist1() {
            return this.getUsers('BOOK_PRODUCER');
        },
        // 审核人
        userlist2() {
            return this.getUsers('BOOK_REVIEWED_BY');
        },
        // 审批人
        userlist3() {
            return this.getUsers('BOOK_APPROVED_BY');
        },
        // 签发人
        userlist4() {
            return this.getUsers('BOOK_ISSUER');
        },
        // 打印情况
        printList() {
            return [ 
                { label:'已打印', value: 1 },
                { label:'未打印', value: 0 }
            ]
        }
    },
    watch: {
        'form.evaluationCenter': {
            handler(v, s) {
                if(v && !s) this.onJszx(v);
            },
            deep: true,
            immediate: true,
        }
    },
    methods: {
        onShow() {
            const el = this.$refs.body;
            if(this.bodyHeight === 0) {
                this.bodyHeight = el.offsetHeight + 'px';
            } else {
                this.bodyHeight = 0;
            }
        },
        // 重置
        onReset() {
            for(let e of this.formList) {
                this.$set(this.form, e.key, '');
            }
            this.$emit('change', this.form);
        },
        // 关键字搜索
        onSearch(v) {
            const str = (v || '').trim();
            this.$set(this.form, 'keyword', str);
            this.$emit('change', this.form);
        },
        // 查询
        onConsult(v) {
            this.$set(this.form, 'isIndistinct', v);
            this.$emit('change', this.form);
        },
        // 鉴定中心
        async onJszx(id) {
            this.$set(this.form, 'evaluationCenter', id);
            // 鉴定专业
            if(this.majorList.length === 0) {
                await getMajor(id, this);
            }
            const obj = this.majorList.find(f => f.value == this.form.specialty) || this.majorList[0];
            if(obj) this.onZy(obj.value);
        },
        // 鉴定专业
        onZy(v) {
            this.$set(this.form, 'specialty', v);
            this.$emit('change', this.form);
            // 委托单位
            if(this.partyList.length === 0) getPartyList(v, this);
            // 受理人
            if(this.receiverList.length === 0) getReceiver(v, this);
            // 检验人
            if(this.surveyorList.length === 0) getSurveyor(v, this);
            // 操作人
            const param = { majorId: v, organId: this.form.evaluationCenter };
            getOperator(param, this);
        },
        filterOption(input, option) {
            return option.componentOptions.children[0].text.toUpperCase().indexOf(input.toUpperCase()) >= 0;
        },
        getStoreData(key) {
            const list = this.$store.state[key] || [];
            const id = this.form.specialty;
            const obj = list.find(f => f.id == id) || {};
            return obj.list || [];
        },
        getUsers(k) {
            const obj = this.operatorList.find(f => f.type == k) || {};
            const arr = obj.sysUserList || [];
            return arr.map(f => ({label: f.realName, value: f.id}));
        },
        getSelect(k) {
            return this[k] || [];
        },
        onChangeItem(v, item) {
            this.$set(this.form, item.key, v);
        },
        onChangeDate(v, item) {
            const arr = v.map(f => f.format('YYYY-MM-DD'));
            this.onChangeItem(arr, item);
        },
        getRange(v) {
            if(!v) return [];
            return v.map(f => moment(f));
        },
    },
}
</script>

<style lang="less" scoped>
.ant-screen{
    display: flex;
    flex-direction: column;
    background: @header-color;
    padding: 0 12px;
}

.ant-screen-header{
    display: flex;
    align-items: center;
    white-space: nowrap;
    height: @head-height;
    .ant-input-search{
        width: 500px;
    }
    .ant-select{
        min-width: 180px;
    }
    > label{
        margin-left: 30px;
    }
    > .ant-btn{
        margin-left: 10px;
    }
}

.ant-screen-body{
    overflow: hidden;
    transition: all 300ms ease;
}

.ant-screen-content{
    padding-bottom: 12px;
    display: flex;
    > .left{
        flex: 1;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-wrap: wrap;
        .form-item{
            width: 30%;
            display: flex;
            align-items: center;
            margin: 6px 0;
            > label{
                min-width: 5em;
                text-align: right;
            }
            .ant-select{
                flex: 1;
            }
        }
    }
    > .right{
        width: 400px;
        display: flex;
        align-items: center;
        justify-content: center;
        .ant-btn{
            margin: 10px;
        }
    }
}
</style>