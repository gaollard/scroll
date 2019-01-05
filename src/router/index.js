import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/scroller',
      name: 'scroller',
      component: () => import('../page/scroller')
    }
  ]
})
