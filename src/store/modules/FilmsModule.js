import axios from "axios";
const state = {
  films: [],
  film: {},
};
const getters = {
  filmList: (state) => state.films,
  filmDetail: (state) => state.film,
};
const apiUrl = `${process.env.VUE_APP_API_URL}/films/`;
const actions = {
  async fetchFilms({ commit }) {
    const response = await axios.get(apiUrl);
    const returnList = response.data.results.map((el) => {
      el.filmId = el.url.split("/")[5];
      return el;
    });
    commit("setFilms", returnList);
  },
  async fetchFilmDetail({ commit }, payload) {
    const response = await axios.get(`${apiUrl}${payload}/`);
    commit("setFilmDetail", response.data);
  },
};
const mutations = {
  setFilms: (state, films) => (state.films = films),
  setFilmDetail: (state, film) => (state.film = film),
};
export default {
  state,
  getters,
  actions,
  mutations,
};
