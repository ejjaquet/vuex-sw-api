import axios from "axios";
const state = {
  films: [],
  film: {},
  loadingStatusFilms: false,
};
const getters = {
  filmList: (state) => state.films,
  filmDetail: (state) => state.film,
  loadingStatusFilms: (state) => state.loadingStatusFilms,
};
const apiUrl = `${process.env.VUE_APP_API_URL}/films/`;
const actions = {
  async fetchFilms({ commit }) {
    commit("loadingStatusFilms", true);
    const response = await axios.get(apiUrl);
    const returnList = response.data.results.map((el) => {
      el.filmId = el.url.split("/")[5];
      return el;
    });
    commit("loadingStatusFilms", false);
    commit("setFilms", returnList);
  },
  async fetchFilmDetail({ commit }, payload) {
    commit("loadingStatusFilms", true);
    const response = await axios.get(`${apiUrl}${payload}/`);
    commit("loadingStatusFilms", false);
    commit("setFilmDetail", response.data);
  },
};
const mutations = {
  setFilms: (state, films) => (state.films = films),
  setFilmDetail: (state, film) => (state.film = film),
  loadingStatusFilms: (state, loadingStatusFilms) =>
    (state.loadingStatusFilms = loadingStatusFilms),
};
export default {
  state,
  getters,
  actions,
  mutations,
};
