<template>
  <div>
    <ul class="list-group mt-5">
      <li
        class="list-group-item list-group-item-action"
        v-for="species in speciesList"
        :key="species.id"
      >
        <div class="d-flex w-100 justify-content-between">
          <h3>{{ species.name }}</h3>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "SpeciesItems",
  methods: {
    ...mapActions(["fetchSpecies"]),
  },
  computed: mapGetters(["speciesList"]),
  created() {
    this.fetchSpecies();
  },
};
</script>

<style scoped lang="scss"></style>
