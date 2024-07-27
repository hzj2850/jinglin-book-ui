<template>
    <ant-modal class="my-modal" title="流程设置" :visible="visible" :maskClosable="false" @cancel="close" :bodyStyle="{padding: 0}">

        <!-- 人员选择 -->
        <a-form-model class="my-form-model" ref="ruleForm" :model="form" :rules="rules">
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
.ant-form{
    padding: @form-item-mt;
    .ant-select{
        display: block;
    }
}
.ant-form-item {
    margin-top: @form-item-mt !important;
    &:first-child{
        margin-top: 0 !important;
    }
    /deep/ .ant-form-item-label{
        width: 9em;
    }
}
</style>