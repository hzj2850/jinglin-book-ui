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
        jdzxList: [], // 鉴定中心列表
        majorList: [], // 鉴定专业
        partyList: [], // 委托单位
        receiverList: [], // 受理人
        surveyorList: [], // 检验人
        operatorList: [], // 操作人
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
        // 鉴定中心
        SET_JDZX(state, v) {
            state.jdzxList = v;
        },
        // 鉴定专业
        set_major(state, v) {
            state.majorList.push(v);
        },
        // 委托单位
        set_party(state, v) {
            state.partyList.push(v);
        },
        // 受理人
        set_receiver(state, v) {
            state.receiverList.push(v);
        },
        // 检验人
        set_surveyor(state, v) {
            state.surveyorList.push(v);
        },
        // 操作人
        set_operator(state, v) {
            state.operatorList.push(v);
        }
    },
    actions: {
    },
    modules: {
    }
})
