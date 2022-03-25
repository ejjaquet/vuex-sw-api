import axios from "axios";

const getNumberOfPages = (count) => Math.ceil(count / 10);

const addIdsToObjects = (data) =>
  data.map((obj) => {
    // Strip id from url property and add it to object
    const id = Number(obj.url.match(/\d+/)[0]);
    return { ...obj, id };
  });

const state = {
  species: [],
  speciesDetail: {},
  loadingStatusSpecies: false,
  speciesPage: 1,
  speciesNrOfPages: 1,
};

const getters = {
  speciesList: (state) => state.species,
  speciesDetail: (state) => state.speciesDetail,
  loadingStatusSpecies: (state) => state.loadingStatusSpecies,
  speciesPage: (state) => state.speciesPage,
  speciesNrOfPages: (state) => state.speciesNrOfPages,
};

const apiUrl = `${process.env.VUE_APP_API_URL}/species/`;

const actions = {
  async fetchSpecies({ commit }, page) {
    commit("loadingStatusSpecies", true);
    const response = await axios.get(`${apiUrl}?page=${page}`);
    const returnList = addIdsToObjects(response.data.results);
    commit("loadingStatusSpecies", false);
    commit("setSpeciesPage", page);
    commit("setSpeciesNrOfPages", getNumberOfPages(response.data.count));
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
  setSpeciesPage: (state, speciesPage) => (state.speciesPage = speciesPage),
  setSpeciesNrOfPages: (state, speciesNrOfPages) =>
    (state.speciesNrOfPages = speciesNrOfPages),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
