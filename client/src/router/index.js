import Vue from 'vue';
import Router from 'vue-router';
import AppHelloWorld from '@/components/AppHelloWorld';
import AppRegister from '@/components/AppRegister';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: AppHelloWorld,
    },
    {
      path: '/register',
      name: 'register',
      component: AppRegister,
    },
  ],
});
