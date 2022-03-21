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
    path: "/films/:id",
    name: "filmdetail",
    component: () =>
      import(/* webpackChunkName: "planets" */ "../views/FilmsDetailView.vue"),
  },
  {
    path: "/planets",
    name: "planets",
    component: () =>
      import(/* webpackChunkName: "planets" */ "../views/PlanetsView.vue"),
  },
  {
    path: "/planets/:id",
    name: "planetdetail",
    component: () =>
      import(/* webpackChunkName: "planets" */ "../views/PlanetDetailView.vue"),
  },
  {
    path: "/starships",
    name: "starships",
    component: () =>
      import(/* webpackChunkName: "starships" */ "../views/StarshipsView.vue"),
  },
  {
    path: "/vehicles",
    name: "vehicles",
    component: () =>
      import(/* webpackChunkName: "vehicles" */ "../views/VehiclesView.vue"),
  },
  {
    path: "/people",
    name: "people",
    component: () =>
      import(/* webpackChunkName: "peoples" */ "../views/PeoplesView.vue"),
  },
  {
    path: "/people/:id",
    name: "persondetail",
    component: () =>
      import(/* webpackChunkName: "planets" */ "../views/PersonDetailView.vue"),
  },
  {
    path: "/species",
    name: "species",
    component: () =>
      import(/* webpackChunkName: "species" */ "../views/SpeciesView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
