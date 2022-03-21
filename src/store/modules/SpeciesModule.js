import axios from "axios";
const state = {
  species: [],
  speciesDetail: {},
};
const getters = {
  speciesList: (state) => state.species,
  speciesDetail: (state) => state.speciesDetail,
};
const apiUrl = `${process.env.VUE_APP_API_URL}/species/`;
const actions = {
  async fetchSpecies({ commit }) {
    const response = await axios.get(apiUrl);
    const returnList = response.data.results.map((el) => {
      el.speciesId = el.url.split("/")[5];
      return el;
    });
    commit("setSpecies", returnList);
  },
  async fetchSpeciesDetail({ commit }, payload) {
    const response = await axios.get(`${apiUrl}${payload}/`);
    commit("setSpeciesDetail", response.data);
  },
};
const mutations = {
  setSpecies: (state, species) => (state.species = species),
  setSpeciesDetail: (state, speciesDetail) =>
    (state.speciesDetail = speciesDetail),
};
export default {
  state,
  getters,
  actions,
  mutations,
};
