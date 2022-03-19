import Vue from "vue";
import Vuex from "vuex";

import FilmsModule from "./modules/FilmsModule";
import PlanetsModule from "./modules/PlanetsModule";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    FilmsModule,
    PlanetsModule,
  },
});
