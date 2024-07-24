import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.meta.keepAlive && savedPosition) return savedPosition;
    return { x: 0, y: 0 };
  }
});

/* 路由拦截 */
router.beforeEach((to, from, next) => {
  next();
})

export default router
