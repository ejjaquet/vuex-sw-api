import axios from "axios";
const state = {
  starships: [],
  starship: {},
};
const getters = {
  starshipList: (state) => state.starships,
  starshipDetail: (state) => state.starship,
};
const apiUrl = `${process.env.VUE_APP_API_URL}/starships/`;
const actions = {
  async fetchStarships({ commit }) {
    const response = await axios.get(apiUrl);
    const returnList = response.data.results.map((el) => {
      el.starshipId = el.url.split("/")[5];
      return el;
    });
    commit("setStarships", returnList);
  },
  async fetchStarshipDetail({ commit }, payload) {
    const response = await axios.get(`${apiUrl}${payload}/`);
    commit("setStarshipDetail", response.data);
  },
};
const mutations = {
  setStarships: (state, starships) => (state.starships = starships),
  setStarshipDetail: (state, starship) => (state.starship = starship),
};
export default {
  state,
  getters,
  actions,
  mutations,
};
