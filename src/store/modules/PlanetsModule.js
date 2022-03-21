import axios from "axios";
const state = {
  planets: [],
  planet: {},
};
const getters = {
  planetList: (state) => state.planets,
  planetDetail: (state) => state.planet,
};
const apiUrl = `${process.env.VUE_APP_API_URL}/planets/`;
const actions = {
  async fetchPlanets({ commit }) {
    const response = await axios.get(apiUrl);
    const returnList = response.data.results.map((el) => {
      el.planetId = el.url.split("/")[5];
      return el;
    });
    commit("setPlanets", returnList);
  },
  async fetchPlanetDetail({ commit }, payload) {
    const response = await axios.get(`${apiUrl}${payload}/`);
    commit("setPlanetDetail", response.data);
  },
};
const mutations = {
  setPlanets: (state, planets) => (state.planets = planets),
  setPlanetDetail: (state, planet) => (state.planet = planet),
};
export default {
  state,
  getters,
  actions,
  mutations,
};
