<template>
  <div>
    <ul class="list-group mt-5">
      <li
        class="list-group-item list-group-item-action"
        v-for="planet in planetList"
        :key="planet.id"
      >
        <div class="d-flex w-100 justify-content-between">
          <h3>{{ planet.name }}</h3>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "PlanetItems",
  methods: {
    ...mapActions(["fetchPlanets"]),
  },
  computed: mapGetters(["planetList"]),
  created() {
    this.fetchPlanets();
  },
};
</script>

<style scoped lang="scss"></style>
