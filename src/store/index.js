import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        props: {}, // 总平台信息
        userInfo: {}, // 当前登录用户信息
        spinning: false, // 页面加载中
        buttonList: [], // 按钮列表
        btns: {}, // 按钮列表（方便查询）
    },
    mutations: {
        // 用户信息
        SET_USERINFO(state, userInfo) {
            state.userInfo = userInfo;
        },
        // 页面加载中
        SET_SPIN(state, v) {
            state.spinning = v;
        },
        // 获取总平台信息
        SET_PROPS(state, obj = {}) {
            state.props = { ...obj };
        },
        // 按钮列表
        SET_BTNS(state, v) {
            state.buttonList = v;
            let o = {};
            for (let e of v) {
                o[e.butPermission] = e;
            }
            state.btns = o;
        },
    },
    actions: {
    },
    modules: {
    }
})
