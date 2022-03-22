import axios from "axios";
const state = {
  starships: [],
  starship: {},
  loadingStatusStarships: false,
};
const getters = {
  starshipList: (state) => state.starships,
  starshipDetail: (state) => state.starship,
  loadingStatusStarships: (state) => state.loadingStatusStarships,
};
const apiUrl = `${process.env.VUE_APP_API_URL}/starships/`;
const actions = {
  async fetchStarships({ commit }) {
    commit("loadingStatusStarships", true);
    const response = await axios.get(apiUrl);
    const returnList = response.data.results.map((el) => {
      el.starshipId = el.url.split("/")[5];
      return el;
    });
    commit("loadingStatusStarships", false);
    commit("setStarships", returnList);
  },
  async fetchStarshipDetail({ commit }, payload) {
    commit("loadingStatusStarships", true);
    const response = await axios.get(`${apiUrl}${payload}/`);
    commit("loadingStatusStarships", false);
    commit("setStarshipDetail", response.data);
  },
};
const mutations = {
  setStarships: (state, starships) => (state.starships = starships),
  setStarshipDetail: (state, starship) => (state.starship = starship),
  loadingStatusStarships: (state, loadingStatusStarships) =>
    (state.loadingStatusStarships = loadingStatusStarships),
};
export default {
  state,
  getters,
  actions,
  mutations,
};
