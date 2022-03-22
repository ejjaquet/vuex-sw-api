import axios from "axios";
const getNumberOfPages = (count) => Math.ceil(count / 10);
const state = {
  people: [],
  person: {},
  loadingStatusPeople: false,
  peoplePage: 1,
  peopleNrOfPages: 1,
};
const getters = {
  peopleList: (state) => state.people,
  personDetail: (state) => state.person,
  loadingStatusPeople: (state) => state.loadingStatusPeople,
  peoplePage: (state) => state.peoplePage,
  peopleNrOfPages: (state) => state.peopleNrOfPages,
};
const apiUrl = `${process.env.VUE_APP_API_URL}/people/`;
const actions = {
  async fetchPeople({ commit }, page) {
    console.log("Page: " + page);
    commit("loadingStatusPeople", true);
    const response = await axios.get(`${apiUrl}?page=${page}`);
    const returnList = response.data.results.map((el) => {
      el.personId = el.url.split("/")[5];
      return el;
    });
    commit("loadingStatusPeople", false);
    commit("setNrOfPages", getNumberOfPages(response.data.count));
    commit("setPeople", returnList);
  },
  async fetchPerson({ commit }, payload) {
    commit("loadingStatusPeople", true);
    const response = await axios.get(`${apiUrl}${payload}/`);
    commit("loadingStatusPeople", false);
    commit("setPerson", response.data);
  },
};
const mutations = {
  setPeople: (state, people) => (state.people = people),
  setPerson: (state, person) => (state.person = person),
  loadingStatusPeople: (state, loadingStatusPeople) =>
    (state.loadingStatusPeople = loadingStatusPeople),
  setPeoplePage: (state, peoplePage) => (state.peoplePage = peoplePage),
  setPeopleNrOfPages: (state, peopleNrOfPages) =>
    (state.peopleNrOfPages = peopleNrOfPages),
};
export default {
  state,
  getters,
  actions,
  mutations,
};
