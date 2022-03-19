import axios from "axios";
const state = {
  planets: [],
};
const getters = {
  planetList: (state) => state.planets,
};
const apiUrl = `${process.env.VUE_APP_API_URL}/planets/`;
const actions = {
  async fetchPlanets({ commit }) {
    const response = await axios.get(apiUrl);
    commit("setPlanets", response.data.results);
  },
};
const mutations = {
  setPlanets: (state, planets) => (state.planets = planets),
};
export default {
  state,
  getters,
  actions,
  mutations,
};
