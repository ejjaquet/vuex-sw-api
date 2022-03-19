import Vue from "vue";
import Vuex from "vuex";

import FilmsModule from "./modules/FilmsModule";
import PlanetsModule from "./modules/PlanetsModule";
import StarshipsModule from "./modules/StarshipsModule";
import VehiclesModule from "./modules/VehiclesModule";
import PeopleModule from "./modules/PeopleModule";
import SpeciesModule from "./modules/SpeciesModule";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    FilmsModule,
    PlanetsModule,
    StarshipsModule,
    VehiclesModule,
    PeopleModule,
    SpeciesModule,
  },
});
