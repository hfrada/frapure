import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App.vue'
import '@/components/main.js'
// import 'purecss'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {
    path: "/about",
    name: "About",
    component: () => import("./App.vue")
  }
]

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
