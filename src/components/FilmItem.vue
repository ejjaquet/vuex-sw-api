<template>
  <div>
    <h1>{{ filmDetail.title }}</h1>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "FilmItem",
  methods: {
    ...mapActions(["fetchFilmDetail"]),
  },
  computed: {
    ...mapGetters(["filmDetail"]),
  },
  created() {
    this.fetchFilmDetail(this.$route.params.id);
  },
};
</script>
