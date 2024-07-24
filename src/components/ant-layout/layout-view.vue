<template>
    <div class="layout-view">
        <header class="layout-view-header" v-if="$scopedSlots['header']">
            <slot name="header"></slot>
        </header>

        <main class="layout-view-main">
            <slot></slot>
        </main>

        <footer class="layout-view-footer" v-if="$scopedSlots['footer']">
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script>
export default {
    props: {
        spinning: {
            type: [String, Boolean]
        },
    },
    watch: {
        spinning(v) {
            this.$store.commit("SET_SPIN", v);
        }
    },
}
</script>

<style lang="less" scoped>
.layout-view{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

    > header{
        height: @head-height;
        padding: 0 12px;
        display: flex;
        align-items: center;
        background: @header-color;
        margin-bottom: 12px;
    }

    > main{
        flex: 1;
        overflow: hidden;
    }

    > footer{
        background: @footer-color;
    }
}
</style>