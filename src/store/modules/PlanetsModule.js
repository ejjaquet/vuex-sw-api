import axios from "axios";
const state = {
  planets: [],
  planet: {},
  loadingStatusPlanets: false,
};
const getters = {
  planetList: (state) => state.planets,
  planetDetail: (state) => state.planet,
  loadingStatusPlanets: (state) => state.loadingStatusPlanets,
};
const apiUrl = `${process.env.VUE_APP_API_URL}/planets/`;
const actions = {
  async fetchPlanets({ commit }) {
    commit("loadingStatusPlanets", true);
    const response = await axios.get(apiUrl);
    const returnList = response.data.results.map((el) => {
      el.planetId = el.url.split("/")[5];
      return el;
    });
    commit("loadingStatusPlanets", false);
    commit("setPlanets", returnList);
  },
  async fetchPlanetDetail({ commit }, payload) {
    commit("loadingStatusPlanets", true);
    const response = await axios.get(`${apiUrl}${payload}/`);
    commit("loadingStatusPlanets", false);
    commit("setPlanetDetail", response.data);
  },
};
const mutations = {
  setPlanets: (state, planets) => (state.planets = planets),
  setPlanetDetail: (state, planet) => (state.planet = planet),
  loadingStatusPlanets: (state, loadingStatusPlanets) =>
    (state.loadingStatusPlanets = loadingStatusPlanets),
};
export default {
  state,
  getters,
  actions,
  mutations,
};
