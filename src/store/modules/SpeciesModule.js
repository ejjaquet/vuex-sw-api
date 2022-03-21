import axios from "axios";
const state = {
  species: [],
  speciesDetail: {},
  loadingStatus: false,
};
const getters = {
  speciesList: (state) => state.species,
  speciesDetail: (state) => state.speciesDetail,
  loadingStatus: (state) => state.loadingStatus,
};
const apiUrl = `${process.env.VUE_APP_API_URL}/species/`;
const actions = {
  async fetchSpecies({ commit }) {
    commit("loadingStatus", true);
    const response = await axios.get(apiUrl);
    const returnList = response.data.results.map((el) => {
      el.speciesId = el.url.split("/")[5];
      return el;
    });
    commit("loadingStatus", false);
    commit("setSpecies", returnList);
  },
  async fetchSpeciesDetail({ commit }, payload) {
    commit("loadingStatus", true);
    const response = await axios.get(`${apiUrl}${payload}/`);
    commit("loadingStatus", false);
    commit("setSpeciesDetail", response.data);
  },
};
const mutations = {
  setSpecies: (state, species) => (state.species = species),
  setSpeciesDetail: (state, speciesDetail) =>
    (state.speciesDetail = speciesDetail),
  loadingStatus: (state, loadingStatus) =>
    (state.loadingStatus = loadingStatus),
};
export default {
  state,
  getters,
  actions,
  mutations,
};
