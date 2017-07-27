import Vue from 'vue'
import Router from 'vue-router'
// import Write from '@/components/Write'
import EditMain from '@/components/EditMain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'EditMain',
      component: EditMain
    }
  ]
})
