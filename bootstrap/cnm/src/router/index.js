import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/test'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Left from '@/components/left'
import MainPage from '@/components/MainPage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/header',
      name: 'Header',
      component: Header
    },
    {
      path: '/footer',
      name: 'Footer',
      component: Footer
    },
    {
      path: '/left',
      name: 'Left',
      component: Left
    },
    {
      path: '/mainPage',
      name: 'MainPage',
      component: MainPage
    }
  ]
})
