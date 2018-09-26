import Vue from 'vue';
import Router from 'vue-router'


import Home from '../home/Home.vue';
import About from '../about/About.vue';


Vue.use(Router);


export default new Router({
  routes:[
    {
      path: '/',
      name : 'Home',
      component: Home
    },
    {
      path :'/about',
      name : 'About',
      component :About
    }
  ]
})
