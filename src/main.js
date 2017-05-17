import Vue from 'vue'
import VueRouter from "vue-router"
import VueResource from 'vue-resource'
import App from './component/App.vue'
import Sun from './component/Sun.vue'
import Acomponent from './component/Acomponent.vue'


Vue.use(VueRouter);
Vue.use(VueResource);


const router = new VueRouter({
  routes: [
    {
      path: '',
      component: App
    },
    {
      path: '/first',
      component: Acomponent
    },
    {
      path: '/second',
      component: Sun
    }
  ]
})

window.app = new Vue({
  router: router,
  el: '#app'
}).$mount('#app')
