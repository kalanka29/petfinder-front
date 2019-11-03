import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Search from "../views/Search.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/search/cats",
    name: "cats",
    component: () => import('@/views/Cats.vue')
  },
  {
    path: "/search/dogs",
    name: "dogs",
    component: () => import('@/views/Dogs.vue')
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
