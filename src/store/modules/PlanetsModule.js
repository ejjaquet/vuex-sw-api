import axios from "axios";

const getNumberOfPages = (count) => Math.ceil(count / 10);

const addIdsToObjects = (data) =>
  data.map((obj) => {
    // Strip id from url property and add it to object
    const id = Number(obj.url.match(/\d+/)[0]);
    return { ...obj, id };
  });

const state = {
  planets: [],
  planet: {},
  loadingStatusPlanets: false,
  planetsPage: 1,
  planetsNrOfPages: 1,
};

const getters = {
  planetList: (state) => state.planets,
  planetDetail: (state) => state.planet,
  loadingStatusPlanets: (state) => state.loadingStatusPlanets,
  planetsPage: (state) => state.planetsPage,
  planetsNrOfPages: (state) => state.planetsNrOfPages,
};

const apiUrl = `${process.env.VUE_APP_API_URL}/planets/`;

const actions = {
  async fetchPlanets({ commit }, page) {
    commit("loadingStatusPlanets", true);
    const response = await axios.get(apiUrl);
    const returnList = addIdsToObjects(response.data.results);
    commit("loadingStatusPlanets", false);
    commit("setPlanetsPage", page);
    commit("setPlanetsNrOfPages", getNumberOfPages(response.data.count));
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
  setPlanetsPage: (state, planetsPage) => (state.planetsPage = planetsPage),
  setPlanetsNrOfPages: (state, planetsNrOfPages) =>
    (state.planetsNrOfPages = planetsNrOfPages),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
