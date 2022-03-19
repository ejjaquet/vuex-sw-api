<template>
  <div>
    <ul class="list-group mt-5">
      <li
        class="list-group-item list-group-item-action"
        v-for="vehicle in vehicleList"
        :key="vehicle.id"
      >
        <div class="d-flex w-100 justify-content-between">
          <h3>{{ vehicle.name }}</h3>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "VehicleItems",
  methods: {
    ...mapActions(["fetchVehicles"]),
  },
  computed: mapGetters(["vehicleList"]),
  created() {
    this.fetchVehicles();
  },
};
</script>

<style scoped lang="scss"></style>
