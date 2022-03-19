import axios from "axios";
const state = {
  species: [],
};
const getters = {
  speciesList: (state) => state.species,
};
const apiUrl = `${process.env.VUE_APP_API_URL}/species/`;
const actions = {
  async fetchSpecies({ commit }) {
    const response = await axios.get(apiUrl);
    commit("setSpecies", response.data.results);
  },
};
const mutations = {
  setSpecies: (state, species) => (state.species = species),
};
export default {
  state,
  getters,
  actions,
  mutations,
};
