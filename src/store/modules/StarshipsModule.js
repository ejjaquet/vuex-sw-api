import axios from "axios";
const state = {
  starships: [],
  starship: {},
  loadingStatus: false,
};
const getters = {
  starshipList: (state) => state.starships,
  starshipDetail: (state) => state.starship,
  loadingStatus: (state) => state.loadingStatus,
};
const apiUrl = `${process.env.VUE_APP_API_URL}/starships/`;
const actions = {
  async fetchStarships({ commit }) {
    commit("loadingStatus", true);
    const response = await axios.get(apiUrl);
    const returnList = response.data.results.map((el) => {
      el.starshipId = el.url.split("/")[5];
      return el;
    });
    commit("loadingStatus", false);
    commit("setStarships", returnList);
  },
  async fetchStarshipDetail({ commit }, payload) {
    commit("loadingStatus", true);
    const response = await axios.get(`${apiUrl}${payload}/`);
    commit("loadingStatus", false);
    commit("setStarshipDetail", response.data);
  },
};
const mutations = {
  setStarships: (state, starships) => (state.starships = starships),
  setStarshipDetail: (state, starship) => (state.starship = starship),
  loadingStatus: (state, loadingStatus) =>
    (state.loadingStatus = loadingStatus),
};
export default {
  state,
  getters,
  actions,
  mutations,
};
