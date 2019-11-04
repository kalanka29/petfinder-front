/**
 * @author Kalanka Siyambalapitiya
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

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
  {
    path: "pet-adoption/cat-adoption/",
    name: "dogs",
    component: () => import('@/views/CatAdoption.vue')
  },
  {
    path: "pet-adoption/dog-adoption/",
    name: "dogs",
    component: () => import('@/views/DogAdoption.vue')
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
