<template>
  <div>
    <ul class="list-group mt-5">
      <li
        class="list-group-item list-group-item-action"
        v-for="starship in starshipList"
        :key="starship.id"
      >
        <div class="d-flex w-100 justify-content-between">
          <h3>{{ starship.name }}</h3>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "StarshipItems",
  methods: {
    ...mapActions(["fetchStarships"]),
  },
  computed: mapGetters(["starshipList"]),
  created() {
    this.fetchStarships();
  },
};
</script>

<style scoped lang="scss"></style>
