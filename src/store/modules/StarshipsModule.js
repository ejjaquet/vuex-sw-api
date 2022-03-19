import axios from "axios";
const state = {
  starships: [],
};
const getters = {
  starshipList: (state) => state.starships,
};
const apiUrl = `${process.env.VUE_APP_API_URL}/starships/`;
const actions = {
  async fetchStarships({ commit }) {
    const response = await axios.get(apiUrl);
    commit("setStarships", response.data.results);
  },
};
const mutations = {
  setStarships: (state, starships) => (state.starships = starships),
};
export default {
  state,
  getters,
  actions,
  mutations,
};
