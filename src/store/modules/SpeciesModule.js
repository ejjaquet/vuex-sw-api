import axios from "axios";
const state = {
  species: [],
  speciesDetail: {},
  loadingStatusSpecies: false,
};
const getters = {
  speciesList: (state) => state.species,
  speciesDetail: (state) => state.speciesDetail,
  loadingStatusSpecies: (state) => state.loadingStatusSpecies,
};
const apiUrl = `${process.env.VUE_APP_API_URL}/species/`;
const actions = {
  async fetchSpecies({ commit }) {
    commit("loadingStatusSpecies", true);
    const response = await axios.get(apiUrl);
    const returnList = response.data.results.map((el) => {
      el.speciesId = el.url.split("/")[5];
      return el;
    });
    commit("loadingStatusSpecies", false);
    commit("setSpecies", returnList);
  },
  async fetchSpeciesDetail({ commit }, payload) {
    commit("loadingStatusSpecies", true);
    const response = await axios.get(`${apiUrl}${payload}/`);
    commit("loadingStatusSpecies", false);
    commit("setSpeciesDetail", response.data);
  },
};
const mutations = {
  setSpecies: (state, species) => (state.species = species),
  setSpeciesDetail: (state, speciesDetail) =>
    (state.speciesDetail = speciesDetail),
  loadingStatusSpecies: (state, loadingStatusSpecies) =>
    (state.loadingStatusSpecies = loadingStatusSpecies),
};
export default {
  state,
  getters,
  actions,
  mutations,
};
