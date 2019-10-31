import Vue from 'vue'
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'


Vue.use(ElementUI);
Vue.config.productionTip = false

// router.beforeEach((to, from, next) => {
//   if(to.path != '/'){
//     getToken(){
//       if(){}
//     }
//   }
//   // let token = router.app.$storage.fetch("token");
//   // let needAuth = to.matched.some(item => item.meta.login);
//   // if(!token && needAuth) return next({path: "/login"});
//   // next();
// });
// beforeEach函数有三个参数：
// to:router即将进入的路由对象
// from:当前导航即将离开的路由
// next:Function,进行管道中的一个钩子，如果执行完了，则导航的状态就是 confirmed （确认的）；否则为false，终止导航。
// afterEach函数不用传next()函数

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
