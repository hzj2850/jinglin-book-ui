<template>
    <div class="left-info">
        <div class="infobox" v-for="(item, index) in caseInfo" :key="index">
            <div class="info-title">{{ item.title }}</div>
            <div class="label-row" v-for="(e, i) in item.data" :key="index + '-' + i">
                <span>{{ e.label }}：</span>
                <div>{{ e.text }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { caseInfo } from './columns'
export default {
    computed: {
        caseInfo() {
            return caseInfo(this);
        },
    }
}
</script>

<style lang="less" scoped>
.left-info{
    background: #fff;
    height: 100%;
    .hidScrollBar();
}

.infobox{
    margin-top: 12px;
    &:first-child{
        margin-top: 0;
    }
}

.label-row{
    display: flex;
    align-items: flex-start;
    margin-top: 6px;
    > span{
        color: @label-color;
        padding-left: 8px;
    }
}

.info-title{
    position: relative;
    padding-left: 8px;
    &::before{
        content: '';
        display: inline-block;
        width: 4px;
        height: 1em;
        background: @active-color;
        vertical-align: middle;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 2px;
    }
}
</style>