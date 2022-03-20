<template>
  <div class="home">
    <film-item />
  </div>
</template>

<script>
import FilmItem from "@/components/FilmItem.vue";
export default {
  components: { FilmItem },
  name: "FilmsDetailView",
};
</script>
