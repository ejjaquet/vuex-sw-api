import axios from "axios";

const getNumberOfPages = (count) => Math.ceil(count / 10);

const addIdsToObjects = (data) =>
  data.map((obj) => {
    // Strip id from url property and add it to object
    const id = Number(obj.url.match(/\d+/)[0]);
    return { ...obj, id };
  });

const state = {
  starships: [],
  starship: {},
  loadingStatusStarships: false,
  starshipsPage: 1,
  starshipsNrOfPages: 1,
};

const getters = {
  starshipList: (state) => state.starships,
  starshipDetail: (state) => state.starship,
  loadingStatusStarships: (state) => state.loadingStatusStarships,
  starshipsPage: (state) => state.starshipsPage,
  starshipsNrOfPages: (state) => state.starshipsNrOfPages,
};

const apiUrl = `${process.env.VUE_APP_API_URL}/starships/`;

const actions = {
  async fetchStarships({ commit }, page) {
    commit("loadingStatusStarships", true);
    const response = await axios.get(apiUrl);
    const returnList = addIdsToObjects(response.data.results);
    commit("loadingStatusStarships", false);
    commit("setStarshipsPage", page);
    commit("setStarshipsNrOfPages", getNumberOfPages(response.data.count));
    commit("setStarships", returnList);
  },
  async fetchStarshipDetail({ commit }, payload) {
    commit("loadingStatusStarships", true);
    const response = await axios.get(`${apiUrl}${payload}/`);
    commit("loadingStatusStarships", false);
    commit("setStarshipDetail", response.data);
  },
};

const mutations = {
  setStarships: (state, starships) => (state.starships = starships),
  setStarshipDetail: (state, starship) => (state.starship = starship),
  loadingStatusStarships: (state, loadingStatusStarships) =>
    (state.loadingStatusStarships = loadingStatusStarships),
  setStarshipsPage: (state, starshipsPage) =>
    (state.starshipsPage = starshipsPage),
  setStarshipsNrOfPages: (state, starshipsNrOfPages) =>
    (state.starshipsNrOfPages = starshipsNrOfPages),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
