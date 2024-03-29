import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Menu from '@/components/Menu'
import Admin from '@/components/Admin'
import About from '@/components/about/About'
import Login from '@/components/Login'
import Register from '@/components/Register'

// 二级路由
import Contact from '@/components/about/Contact'
import Delivery from '@/components/about/Delivery'
import History from '@/components/about/History'
import OrderingGuide from '@/components/about/OrderingGuide'

// 三级路由
import Phone from '@/components/about/contact/Phone'
import Person from '@/components/about/contact/Person'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homeLink',
      component: Home
    },
    {
      path: '/menu',
      name: 'menuLink',
      component: Menu
    },
    {
      path: '/admin',
      name: 'adminLink',
      component: Admin
    },
    {
      path: '/about',
      name: 'aboutLink',
      component: About,
      redirect:'/about/contact',
      children:[
       {path:'/about/contact',name:'contactLink',component:Contact,redirect:'/person',children:[
         {path:'/phone',name:'phoneNumber',component:Phone},
         {path:'/person',name:'personName',component:Person}
       ]},
       {path:'/delivery',name:'deliveryLink',component:Delivery},
       {path:'/history',name:'historyLink',component:History},
       {path:'/orderingGuide',name:'orderingGuideLink',component:OrderingGuide}
      ]
    },
    {
      path: '/login',
      name: 'loginLink',
      component: Login
    },
    {
      path: '/register',
      name: 'registerLink',
      component: Register
    },
    {
      path: '*',
      redirect:'/'
    }
  ],
  mode:"history"
})
