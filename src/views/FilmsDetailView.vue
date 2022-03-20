<template>
  <div class="home">
    <h1 class="text-4xl font-bold">Star Wars Movies - Detail</h1>
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
