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
                11111111111111
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
        }
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
}
</style>