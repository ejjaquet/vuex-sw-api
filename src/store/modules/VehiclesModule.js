import axios from "axios";
const state = {
  vehicles: [],
  vehicle: {},
  loadingStatusVehicles: false,
};
const getters = {
  vehicleList: (state) => state.vehicles,
  vehicleDetail: (state) => state.vehicle,
  loadingStatusVehicles: (state) => state.loadingStatusVehicles,
};
const apiUrl = `${process.env.VUE_APP_API_URL}/vehicles/`;
const actions = {
  async fetchVehicles({ commit }) {
    commit("loadingStatusVehicles", true);
    const response = await axios.get(apiUrl);
    const returnList = response.data.results.map((el) => {
      el.vehicleId = el.url.split("/")[5];
      return el;
    });
    commit("loadingStatusVehicles", false);
    commit("setVehicles", returnList);
  },
  async fetchVehicleDetail({ commit }, payload) {
    commit("loadingStatusVehicles", true);
    const response = await axios.get(`${apiUrl}${payload}/`);
    commit("loadingStatusVehicles", false);
    commit("setVehicleDetail", response.data);
  },
};
const mutations = {
  setVehicles: (state, vehicles) => (state.vehicles = vehicles),
  setVehicleDetail: (state, vehicle) => (state.vehicle = vehicle),
  loadingStatusVehicles: (state, loadingStatusVehicles) =>
    (state.loadingStatusVehicles = loadingStatusVehicles),
};
export default {
  state,
  getters,
  actions,
  mutations,
};
