import axios from "axios";

const getNumberOfPages = (count) => Math.ceil(count / 10);

const addIdsToObjects = (data) =>
  data.map((obj) => {
    // Strip id from url property and add it to object
    const id = Number(obj.url.match(/\d+/)[0]);
    return { ...obj, id };
  });

const state = {
  vehicles: [],
  vehicle: {},
  loadingStatusVehicles: false,
  vehiclesPage: 1,
  vehiclesNrOfPages: 1,
};

const getters = {
  vehicleList: (state) => state.vehicles,
  vehicleDetail: (state) => state.vehicle,
  loadingStatusVehicles: (state) => state.loadingStatusVehicles,
  vehiclesPage: (state) => state.vehiclesPage,
  vehiclesNrOfPages: (state) => state.vehiclesNrOfPages,
};

const apiUrl = `${process.env.VUE_APP_API_URL}/vehicles/`;

const actions = {
  async fetchVehicles({ commit }, page) {
    commit("loadingStatusVehicles", true);
    const response = await axios.get(`${apiUrl}?page=${page}`);
    const returnList = addIdsToObjects(response.data.results);
    commit("loadingStatusVehicles", false);
    commit("setVehiclesPage", page);
    commit("setVehiclesNrOfPages", getNumberOfPages(response.data.count));
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
  setVehiclesPage: (state, vehiclesPage) => (state.vehiclesPage = vehiclesPage),
  setVehiclesNrOfPages: (state, vehiclesNrOfPages) =>
    (state.vehiclesNrOfPages = vehiclesNrOfPages),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
