import axios from "axios";
const state = {
  films: [],
};
const getters = {
  filmList: (state) => state.films,
};
const apiUrl = `${process.env.VUE_APP_API_URL}/films/`;
const actions = {
  async fetchFilms({ commit }) {
    const response = await axios.get(apiUrl);
    commit("setFilms", response.data.results);
  },
};
const mutations = {
  setFilms: (state, films) => (state.films = films),
};
export default {
  state,
  getters,
  actions,
  mutations,
};
