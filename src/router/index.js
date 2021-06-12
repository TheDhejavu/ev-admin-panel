import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'dahsboard',
    component: () => import('@/views/Dashboard/Dashboard.vue'),
  },
  {
    path: '/elections',
    name: 'elections',
    component: () => import('@/views/Elections/Elections.vue'),
  },
  {
    path: '/elections/candidates',
    name: '',
    component: () => import('@/views/Elections/Candidates.vue'),
  },
  {
    path: '/consensus-group',
    name: '',
    component: () => import('@/views/Groups/Groups.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/Login.vue'),
  },
  {
    path: '*',
    name: 'not-found',
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'active',
  routes,
});

export default router;
