import axios from "axios";
const state = {
  planets: [],
  planet: {},
  loadingStatus: false,
};
const getters = {
  planetList: (state) => state.planets,
  planetDetail: (state) => state.planet,
  loadingStatus: (state) => state.loadingStatus,
};
const apiUrl = `${process.env.VUE_APP_API_URL}/planets/`;
const actions = {
  async fetchPlanets({ commit }) {
    commit("loadingStatus", true);
    const response = await axios.get(apiUrl);
    const returnList = response.data.results.map((el) => {
      el.planetId = el.url.split("/")[5];
      return el;
    });
    commit("loadingStatus", false);
    commit("setPlanets", returnList);
  },
  async fetchPlanetDetail({ commit }, payload) {
    commit("loadingStatus", true);
    const response = await axios.get(`${apiUrl}${payload}/`);
    commit("loadingStatus", false);
    commit("setPlanetDetail", response.data);
  },
};
const mutations = {
  setPlanets: (state, planets) => (state.planets = planets),
  setPlanetDetail: (state, planet) => (state.planet = planet),
  loadingStatus: (state, loadingStatus) =>
    (state.loadingStatus = loadingStatus),
};
export default {
  state,
  getters,
  actions,
  mutations,
};
