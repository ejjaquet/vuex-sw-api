import axios from "axios";
const state = {
  films: [],
  film: {},
  loadingStatus: false,
};
const getters = {
  filmList: (state) => state.films,
  filmDetail: (state) => state.film,
  loadingStatus: (state) => state.loadingStatus,
};
const apiUrl = `${process.env.VUE_APP_API_URL}/films/`;
const actions = {
  async fetchFilms({ commit }) {
    commit("loadingStatus", true);
    const response = await axios.get(apiUrl);
    const returnList = response.data.results.map((el) => {
      el.filmId = el.url.split("/")[5];
      return el;
    });
    commit("loadingStatus", false);
    commit("setFilms", returnList);
  },
  async fetchFilmDetail({ commit }, payload) {
    commit("loadingStatus", true);
    const response = await axios.get(`${apiUrl}${payload}/`);
    commit("loadingStatus", false);
    commit("setFilmDetail", response.data);
  },
};
const mutations = {
  setFilms: (state, films) => (state.films = films),
  setFilmDetail: (state, film) => (state.film = film),
  loadingStatus: (state, loadingStatus) =>
    (state.loadingStatus = loadingStatus),
};
export default {
  state,
  getters,
  actions,
  mutations,
};
