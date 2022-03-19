<template>
  <div class="home">
    <film-items></film-items>
  </div>
</template>

<script>
// @ is an alias to /src
import FilmItems from "@/components/FilmItems.vue";

export default {
  name: "HomeView",
  components: {
    FilmItems,
  },
};
</script>
