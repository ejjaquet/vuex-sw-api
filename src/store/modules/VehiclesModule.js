import axios from "axios";
const state = {
  vehicles: [],
  vehicle: {},
};
const getters = {
  vehicleList: (state) => state.vehicles,
  vehicleDetail: (state) => state.vehicle,
};
const apiUrl = `${process.env.VUE_APP_API_URL}/vehicles/`;
const actions = {
  async fetchVehicles({ commit }) {
    const response = await axios.get(apiUrl);
    const returnList = response.data.results.map((el) => {
      el.vehicleId = el.url.split("/")[5];
      return el;
    });
    commit("setVehicles", returnList);
  },
  async fetchVehicleDetail({ commit }, payload) {
    const response = await axios.get(`${apiUrl}${payload}/`);
    commit("setVehicleDetail", response.data);
  },
};
const mutations = {
  setVehicles: (state, vehicles) => (state.vehicles = vehicles),
  setVehicleDetail: (state, vehicle) => (state.vehicle = vehicle),
};
export default {
  state,
  getters,
  actions,
  mutations,
};
