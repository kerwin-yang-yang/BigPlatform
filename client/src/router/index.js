import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import result from '@/components/page/result'

import about from '@/components/page/about'
import start from '@/components/page/start'
import simple from '@/components/page/report/simple'
import professional from '@/components/page/report/professional'
import professionDetail from '@/components/page/report/professionDetail'
import simpleDetail from '@/components/page/report/simpleDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      redirect: {
        name: 'start'
      }
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children: [{
          path: '/start',
          name: 'start',
          component: start,
        },
        {
          path: '/about',
          name: 'about',
          component: about
        },
        {
          path: '/result',
          name: 'result',
          component: result,
          children: [{
              path: '/result/simple',
              name: 'simple',
              component: simple
            },
            {
              path: '/result/professional',
              name: 'professional',
              component: professional,
            },
            {
              path: '/result/professional/professionDetail',
              name: 'professionDetail',
              component: professionDetail,
            },
            {
              path: '/result/simple/simpleDetail',
              name: 'simpleDetail',
              component: simpleDetail,
            }
          ]
        }
      ]
    }



  ]
})
