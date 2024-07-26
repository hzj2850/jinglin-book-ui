// 兼容IE
import '@babel/polyfill'

import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

// ul库 【Ant Design Vue】
import Antd from './utils/ant'
Vue.use(Antd);

// 轮播图
import Viewer from './utils/v-viewer'
Vue.use(Viewer);

// 图片懒加载
import VLazy from './utils/vLazy'
Vue.use(VLazy);

Vue.config.productionTip = false

function render() {
  // 调用APP中的加载动画
  Vue.prototype.$loading = (v) => {
    store.commit("SET_SPIN", v);
  }

  new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('#app')
}


// 运行环境判断
if (window.__MICRO_APP_ENVIRONMENT__) {
  const props = window.microApp.getData();
  store.commit('SET_PROPS', props);
  render(props);
} else {
  render();
}

// 路由跳转
window.microApp && window.microApp.addDataListener(data => {
  if (data.path) {
    router.push({
      name: data.path,
      query: {
        title: data.code.name,
        name: data.code.pageTitle,
        sign: data.code.permission,
        menuId: data.code.id,
        time: +new Date(),
        id: data.code.businessId,
        ...data.code.parameter
      }
    })
  }
})
