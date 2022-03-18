import Vue from "vue";
import Vuex from "vuex";

import FilmsModule from "./modules/FilmsModule";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    FilmsModule,
  },
});
