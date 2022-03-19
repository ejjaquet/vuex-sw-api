import Vue from "vue";
import VueRouter from "vue-router";
import FilmsView from "../views/FilmsView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "films",
    component: FilmsView,
  },
  {
    path: "/planets",
    name: "planets",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PlanetsView.vue"),
  },
  {
    path: "/starships",
    name: "starships",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/StarshipsView.vue"),
  },
  {
    path: "/vehicles",
    name: "vehicles",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/VehiclesView.vue"),
  },
  {
    path: "/people",
    name: "people",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PeoplesView.vue"),
  },
  {
    path: "/species",
    name: "species",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SpeciesView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
