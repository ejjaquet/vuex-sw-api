<template>
  <div>
    <ul class="list-group mt-5">
      <li
        class="list-group-item list-group-item-action"
        v-for="film in filmList"
        :key="film.episode_id"
      >
        <div class="d-flex w-100 justify-content-between">
          <h3>{{ film.title }}</h3>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "FilmList",
  methods: {
    ...mapActions(["fetchFilms"]),
  },
  computed: mapGetters(["filmList"]),
  created() {
    this.fetchFilms();
  },
};
</script>

<style scoped lang="scss"></style>
