<template>
    <ant-modal class="my-modal" :title="title" :visible="visible" :maskClosable="false" @cancel="close" :bodyStyle="{padding: 0}" >
        <div class="modal-confirm-body">
            <div v-if="html" v-html="html"></div>
            <div class="text">{{ text }}</div>
            <slot></slot>
        </div>
            
        <template #footer>
            <a-button size="large" type="default" @click="close()">取消</a-button>
            <a-button size="large" type="primary" @click="confirm()">确认</a-button>
        </template>
    </ant-modal>
</template>

<script>
import antModal from './ant-modal.vue';
export default {
    components: { antModal },
    data() {
        return {
            title: '提示',
            html: '',
            text: '请你二次确认？',
            visible: false,
        };
    },
    methods: {
        close() {
            this.visible = false;
        },
        open(fn) {
            this.visible = true;
            if(fn) this.collback = fn;
        },
        collback() {},
        confirm() {
            this.collback(this);
            this.close();
        },
    }
}
</script>

<style lang="less" scoped>
.modal-confirm-body{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: @font-size-title;
    min-height: 160px;
    white-space: pre-wrap;
    text-align: center;
    line-height: 2;
}
</style>