import axios from "axios";
const state = {
  films: [],
};
const getters = {
  filmList: (state) => state.films,
};
const actions = {
  async fetchFilms({ commit }) {
    const response = await axios.get("https://swapi.dev/api/films/");
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
