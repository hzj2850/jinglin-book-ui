<template>
    <ant-modal class="my-modal" title="文书信息预览及设置" :visible="visible" :maskClosable="false" @cancel="close" :bodyStyle="{padding: 0}">
        <div class="modal-make-body">
            <!-- 头部试剂盒 -->
            <div class="body_header">
                <label>试剂盒：</label>
                <a-select :value="undefined" :options="[]" show-search :filterOption="filterOption" size="large" placeholder="请选择试剂盒" />
                <div class="illustrate">说明;放专业数据项</div>
            </div>

            <!-- 列表表格 -->
            <ant-table :columns="columns" :listdata="listdata" />

            <!-- 底部人员选中 -->
            <a-form-model class="my-form-model" ref="ruleForm" :model="form" :rules="rules" hideRequiredMark>
                <a-form-model-item label="鉴定人1" prop="user1">
                    <a-select :value="undefined" :options="[]" show-search :filterOption="filterOption" size="large" placeholder="请选择鉴定人" />
                </a-form-model-item>
                <a-form-model-item label="鉴定人2(审核人)" prop="user1">
                    <a-select :value="undefined" :options="[]" show-search :filterOption="filterOption" size="large" placeholder="请选择审核人" />
                </a-form-model-item>
                <a-form-model-item label="授权签字人" prop="user1">
                    <a-select :value="undefined" :options="[]" show-search :filterOption="filterOption" size="large" placeholder="请选择授权签字人" />
                </a-form-model-item>
                <a-form-model-item label="签发人" prop="user1">
                    <a-select :value="form.user1 || undefined" :options="[{label: '1', value: '1'}]" show-search :filterOption="filterOption" size="large" placeholder="请选择签发人" @change="onUser4" />
                </a-form-model-item>
            </a-form-model>
        </div>

        <template #footer>
            <a-button size="large" type="primary">文书上传</a-button>
            <a-button size="large" type="primary" @click="bindCreate()">生成文书</a-button>
        </template>
    </ant-modal>
</template>

<script>
import antModal from '@/components/ant-form/ant-modal.vue'
import AntTable from '@/components/ant-table/index.vue'
import { rules, validate, columns } from './fn'
export default {
    components: {
        antModal,
        AntTable,
    },
    data() {
        return {
            rules,
            columns,
            visible: false,
            listdata: [],
            form: {
                user1: ''
            }
        };
    },
    methods: {
        close() {
            this.visible = false;
        },
        open() {
            this.visible = true;
        },
        filterOption(input, option) {
            return option.componentOptions.children[0].text.toUpperCase().indexOf(input.toUpperCase()) >= 0;
        },
        bindCreate() {
            validate(this);
        },
        onUser4(v) {
            this.form.user1 = v;
        },
    }
}
</script>

<style lang="less" scoped>
.my-modal{
    /deep/ .ant-modal{
        width: 1100px !important;
    }
}

.modal-make-body{
    font-size: @font-size-base;
    padding: 16px;
}

.body_header{
    display: flex;
    align-items: center;

    .ant-select{
        width: 300px;
    }
    .illustrate{
        color: @error-color;
        margin-left: 12px;
    }
}

.ant-table{
    margin-top: 16px;
    height: 45vh;
}

.ant-form{
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
    .ant-form-item{
        &:nth-child(1) {
            width: 20%;
        }
        &:nth-child(2) {
            width: 25%;
        }
        &:nth-child(3) {
            width: 25%;
        }
        &:nth-child(4) {
            width: 20%;
        }
    }
    .ant-select{
        display: block;
    }
}
</style>