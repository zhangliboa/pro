// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// // 全局导航过滤
// router.beforeEach((to, from, next) => {
//   let user = localStorage.getItem('mytoken')
//   if (user) {
//     // 允许通过
//     next()
//   } else {
//     // 登录的路由是不需要验证权限的
//     if (to.path !== '/login') {
//       next({path: '/login'})
//     } else {
//       // 是登录页，直接跳转到登录页面
//       next()
//     }
//   }
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
