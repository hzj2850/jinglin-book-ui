<template>
    <a-config-provider :locale="zh_CN">
        <div id="app">
            <a-spin :spinning="spinning" :tip="tipText" size="large">
                <template v-if="pageShow">
                    <keep-alive>
                        <router-view v-if="keepAlive" />
                    </keep-alive>
                    <router-view v-if="!keepAlive" />
                </template>
                <div v-else></div>
            </a-spin>
        </div>
    </a-config-provider>
</template>

<script>
import zh_CN from "ant-design-vue/lib/locale-provider/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn");

import { getUserInfo, getBtns } from '@/api/index';

export default {
    name: "app",
    data() {
        return {
            zh_CN,
            pageShow: true, // 页面是否显示
        };
    },
    computed: {
        keepAlive() {
            return this.$route.meta.keepAlive;
        },
        spinning() {
            const v = this.$store.state.spinning;
            return !!v;
        },
        tipText() {
            const v = this.$store.state.spinning;
            if(v == true) return '加载中';
            if(v == false) return '加载中';
            if(!v) return '加载中';
            return v + '';
        },
    },
    async created() {
        // 开启加载中
        this.$store.commit("SET_SPIN", "获取用户信息");
        await this.getUserInfo();
        await this.getbtns();
        // 关闭加载中
        this.$store.commit("SET_SPIN", false);
        this.pageShow = true;
    },
    methods: {
        // 获取当前用户信息
        getUserInfo() {
            return getUserInfo().then(res => {
                if(res.code == 20000) {
                    this.$store.commit('SET_USERINFO', res.data);
                } else {
                    this.$message.destroy();
                    this.$message.error(res.message);
                }
            })
        },
        // 获取项目配置的按钮信息
        getbtns() {
            const uid = this.$store.state.userInfo.id;
            const code = this.$store.state.props.sys_code;
            return getBtns({uid, code}).then(res => {
                if(res.code == 20000) {
                    const obj = res.data || {};
                    this.$store.commit('SET_BTNS', obj.buttonList || []);
                } else {
                    this.$message.destroy();
                    this.$message.error(res.message);
                }
            })
        },
    }
};
</script>

<style lang="less" scoped>
#app{
    background: #f1f1f1;
    color: #333;
    height: 100%;
    width: 100%;
    > .ant-spin-nested-loading{
        height: 100%;
        /deep/ .ant-spin-container{
            height: 100%;
            font-size: @font-size-base;
        }
        /deep/ .ant-spin-text{
            font-size: 18px;
            font-weight: initial;
            margin-top: 10px;
        }
    }
}
</style>
