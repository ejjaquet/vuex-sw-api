import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import FilmsView from "../views/FilmsView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      breadcrumb: [{ name: "Home" }],
    },
  },
  {
    path: "/films",
    name: "films",
    component: FilmsView,
    meta: {
      breadcrumb: [{ name: "Home", link: "/" }, { name: "Films" }],
    },
  },
  {
    path: "/films/:id",
    name: "filmdetail",
    meta: {
      breadcrumb: [
        { name: "Home", link: "/" },
        { name: "Films", link: "/films" },
        { name: "Film details" },
      ],
    },
    component: () =>
      import(/* webpackChunkName: "film" */ "../views/FilmsDetailView.vue"),
  },
  {
    path: "/planets",
    name: "planets",
    meta: {
      breadcrumb: [{ name: "Home", link: "/" }, { name: "Planets" }],
    },
    component: () =>
      import(/* webpackChunkName: "planets" */ "../views/PlanetsView.vue"),
  },
  {
    path: "/planets/:id",
    name: "planetdetail",
    meta: {
      breadcrumb: [
        { name: "Home", link: "/" },
        { name: "Planets", link: "/planets" },
        { name: "Planet details" },
      ],
    },
    component: () =>
      import(/* webpackChunkName: "planet" */ "../views/PlanetDetailView.vue"),
  },
  {
    path: "/starships",
    name: "starships",
    meta: {
      breadcrumb: [{ name: "Home", link: "/" }, { name: "Starships" }],
    },
    component: () =>
      import(/* webpackChunkName: "starships" */ "../views/StarshipsView.vue"),
  },
  {
    path: "/starships/:id",
    name: "starshipdetail",
    meta: {
      breadcrumb: [
        { name: "Home", link: "/" },
        { name: "Starships", link: "/starships" },
        { name: "Starship details" },
      ],
    },
    component: () =>
      import(
        /* webpackChunkName: "starshipDetail" */ "../views/StarshipDetailView.vue"
      ),
  },
  {
    path: "/vehicles",
    name: "vehicles",
    meta: {
      breadcrumb: [{ name: "Home", link: "/" }, { name: "Vehicles" }],
    },
    component: () =>
      import(/* webpackChunkName: "vehicles" */ "../views/VehiclesView.vue"),
  },
  {
    path: "/vehicles/:id",
    name: "vehicledetail",
    meta: {
      breadcrumb: [
        { name: "Home", link: "/" },
        { name: "Vehicles", link: "/vehicles" },
        { name: "Vehicle details" },
      ],
    },
    component: () =>
      import(
        /* webpackChunkName: "vehicleDetail" */ "../views/VehicleDetailView.vue"
      ),
  },
  {
    path: "/people",
    name: "people",
    meta: {
      breadcrumb: [{ name: "Home", link: "/" }, { name: "People" }],
    },
    component: () =>
      import(/* webpackChunkName: "peoples" */ "../views/PeoplesView.vue"),
  },
  {
    path: "/people/:id",
    name: "persondetail",
    meta: {
      breadcrumb: [
        { name: "Home", link: "/" },
        { name: "People", link: "/people" },
        { name: "Person details" },
      ],
    },
    component: () =>
      import(/* webpackChunkName: "person" */ "../views/PersonDetailView.vue"),
  },
  {
    path: "/species",
    name: "species",
    meta: {
      breadcrumb: [{ name: "Home", link: "/" }, { name: "Species" }],
    },
    component: () =>
      import(/* webpackChunkName: "species" */ "../views/SpeciesView.vue"),
  },
  {
    path: "/species/:id",
    name: "speciesdetail",
    meta: {
      breadcrumb: [
        { name: "Home", link: "home" },
        { name: "Species", link: "/species" },
        { name: "Species detail" },
      ],
    },
    component: () =>
      import(
        /* webpackChunkName: "speciesDetail" */ "../views/SpeciesDetailView.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
