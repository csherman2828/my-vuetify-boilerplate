import Vue from 'vue';
import VueRouter from 'vue-router';

import VueDefault from './VueDefault.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/vue-default',
    component: VueDefault,
  }
];

const router = new VueRouter({
  routes
});

export default router;
