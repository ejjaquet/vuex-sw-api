import axios from "axios";
const state = {
  vehicles: [],
  vehicle: {},
  loadingStatus: false,
};
const getters = {
  vehicleList: (state) => state.vehicles,
  vehicleDetail: (state) => state.vehicle,
  loadingStatus: (state) => state.loadingStatus,
};
const apiUrl = `${process.env.VUE_APP_API_URL}/vehicles/`;
const actions = {
  async fetchVehicles({ commit }) {
    commit("loadingStatus", true);
    const response = await axios.get(apiUrl);
    const returnList = response.data.results.map((el) => {
      el.vehicleId = el.url.split("/")[5];
      return el;
    });
    commit("loadingStatus", false);
    commit("setVehicles", returnList);
  },
  async fetchVehicleDetail({ commit }, payload) {
    commit("loadingStatus", true);
    const response = await axios.get(`${apiUrl}${payload}/`);
    commit("loadingStatus", false);
    commit("setVehicleDetail", response.data);
  },
};
const mutations = {
  setVehicles: (state, vehicles) => (state.vehicles = vehicles),
  setVehicleDetail: (state, vehicle) => (state.vehicle = vehicle),
  loadingStatus: (state, loadingStatus) =>
    (state.loadingStatus = loadingStatus),
};
export default {
  state,
  getters,
  actions,
  mutations,
};
