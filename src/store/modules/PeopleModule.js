import axios from "axios";
const state = {
  people: [],
  person: {},
};
const getters = {
  peopleList: (state) => state.people,
  personDetail: (state) => state.person,
};
const apiUrl = `${process.env.VUE_APP_API_URL}/people/`;
const actions = {
  async fetchPeople({ commit }) {
    const response = await axios.get(apiUrl);
    const returnList = response.data.results.map((el) => {
      el.personId = el.url.split("/")[5];
      return el;
    });
    commit("setPeople", returnList);
  },
  async fetchPerson({ commit }, payload) {
    const response = await axios.get(`${apiUrl}${payload}/`);
    commit("setPerson", response.data);
  },
};
const mutations = {
  setPeople: (state, people) => (state.people = people),
  setPerson: (state, person) => (state.person = person),
};
export default {
  state,
  getters,
  actions,
  mutations,
};
