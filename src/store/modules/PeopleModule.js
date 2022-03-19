import axios from "axios";
const state = {
  people: [],
};
const getters = {
  peopleList: (state) => state.people,
};
const apiUrl = `${process.env.VUE_APP_API_URL}/people/`;
const actions = {
  async fetchPeople({ commit }) {
    const response = await axios.get(apiUrl);
    commit("setPeople", response.data.results);
  },
};
const mutations = {
  setPeople: (state, people) => (state.people = people),
};
export default {
  state,
  getters,
  actions,
  mutations,
};
