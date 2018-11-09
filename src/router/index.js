import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/Auth/Banner';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Layout',
      component: Login,
    },
  ],
});
