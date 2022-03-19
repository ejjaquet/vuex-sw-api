import axios from "axios";
const state = {
  vehicles: [],
};
const getters = {
  vehicleList: (state) => state.vehicles,
};
const apiUrl = `${process.env.VUE_APP_API_URL}/vehicles/`;
const actions = {
  async fetchVehicles({ commit }) {
    const response = await axios.get(apiUrl);
    commit("setVehicles", response.data.results);
  },
};
const mutations = {
  setVehicles: (state, vehicles) => (state.vehicles = vehicles),
};
export default {
  state,
  getters,
  actions,
  mutations,
};
