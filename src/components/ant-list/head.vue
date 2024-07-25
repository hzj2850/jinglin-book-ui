<template>
    <div class="ant-screen">
        <div class="ant-screen-header">
            <a-input-search allowClear size="large" :placeholder="placeholder" enter-button @search="onSearch" />
            <a-button size="large" type="primary" @click="onShow">高级筛选</a-button>
            <template>
                <label>鉴定中心：</label>
                <a-select size="large" placeholder="请选择鉴定中心" />
            </template>
            <template>
                <label>鉴定专业：</label>
                <a-select size="large" placeholder="请选择鉴定专业" />
            </template>
        </div>
        <div class="ant-screen-body" :style="{height: bodyHeight}">
            <div class="ant-screen-content" ref="body">
                <div class="left">
                    <div class="form-item" v-for="(item, index) in formList" :key="index">
                        <label>{{ item.label }}：</label>
                        <a-select size="large" v-if="item.type === 'select'" />
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
export default {
    props: {
        placeholder: {
            type: String,
            default: '输入案件名称 / 委托编号 / 鉴定编号 / 任务编号'
        },
        formList: {
            type: Array,
            default: () => ([
                { label: '11111', key: 'jjjjj', type: 'select' },
                { label: '11111', key: 'jjjjj', type: 'select' },
                { label: '11111', key: 'jjjjj', type: 'select' },
                { label: '11111', key: 'jjjjj', type: 'select' },
                { label: '11111', key: 'jjjjj', type: 'select' },
            ])
        },
    },
    data() {
        return {
            bodyHeight: 0,
            moreShow: false
        };
    },
    methods: {
        onSearch() {

        },
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

        },
        // 查询
        onConsult() {

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
        flex-wrap: wrap;
        .form-item{
            width: 30%;
            display: flex;
            align-items: center;
            > label{
                min-width: 4em;
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