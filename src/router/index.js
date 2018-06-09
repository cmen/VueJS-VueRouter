import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PageB from '@/components/PageB'
import PageC from '@/components/PageC'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'root',
      component: HelloWorld
    },
    {
      path: '/a',
      name: 'a',
      component: resolve => require(['../components/PageA'], resolve), // lazy loading
      children: [
        {
          path: 'b',
          name: 'a.b',
          component: PageB
        },
        {
          path: 'c',
          name: 'a.c',
          component: PageC
        }
      ]
    },
    {
      path: '/article/:id(\\d+)',
      name: 'article',
      component: HelloWorld
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
