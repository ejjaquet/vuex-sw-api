import axios from "axios";
const state = {
  people: [],
  person: {},
  loadingStatus: false,
};
const getters = {
  peopleList: (state) => state.people,
  personDetail: (state) => state.person,
  loadingStatus: (state) => state.loadingStatus,
};
const apiUrl = `${process.env.VUE_APP_API_URL}/people/`;
const actions = {
  async fetchPeople({ commit }) {
    commit("loadingStatus", true);
    const response = await axios.get(apiUrl);
    const returnList = response.data.results.map((el) => {
      el.personId = el.url.split("/")[5];
      return el;
    });
    commit("loadingStatus", false);
    commit("setPeople", returnList);
  },
  async fetchPerson({ commit }, payload) {
    commit("loadingStatus", true);
    const response = await axios.get(`${apiUrl}${payload}/`);
    commit("loadingStatus", false);
    commit("setPerson", response.data);
  },
};
const mutations = {
  setPeople: (state, people) => (state.people = people),
  setPerson: (state, person) => (state.person = person),
  loadingStatus: (state, loadingStatus) =>
    (state.loadingStatus = loadingStatus),
};
export default {
  state,
  getters,
  actions,
  mutations,
};
