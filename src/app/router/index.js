import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
  },
  {
    path: '/fundamentals',
    name: 'fundamentals',
    component: () => import(/* webpackChunkName: "foundations" */ '../views/FundamentalsView.vue')
  },
  {
    path: '/components',
    name: 'components',
    component: () => import(/* webpackChunkName: "components" */ '../views/ComponentsView.vue')
  },
  {
    path: '/charts',
    name: 'charts',
    component: () => import(/* webpackChunkName: "charts" */ '../views/ChartsView.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
