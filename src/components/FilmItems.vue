<template>
  <div v-if="loadingStatusFilms">
    <vue-spinner line-fg-color="#facc15" />
  </div>
  <div v-else class="container my-12 mx-auto px-4 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <!-- Column -->
      <div
        class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
        v-for="film in filmList"
        :key="film.id"
      >
        <!-- Article -->
        <router-link
          class="no-underline hover:underline text-black"
          :to="{ name: 'filmdetail', params: { id: film.id } }"
        >
          <article class="overflow-hidden rounded-lg shadow-lg">
            <img
              class="w-full"
              :src="'/assets/images/films/' + film.id + '.jpg'"
            />
            <header
              class="flex items-center justify-between leading-tight p-2 md:p-4"
            >
              <h1 class="text-lg">
                {{ film.title }}
              </h1>
              <p class="text-grey-darker text-sm">
                {{ $date(film.release_date).format("DD/MM/YYYY") }}
              </p>
            </header>

            <footer
              class="flex items-center justify-between leading-none p-2 md:p-4"
            >
              <p class="ml-2 text-sm">{{ film.director }}</p>
            </footer>
          </article>
        </router-link>
        <!-- END Article -->
      </div>
      <!-- END Column -->
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Spinner from "vue-simple-spinner";
export default {
  name: "FilmItems",
  components: {
    vueSpinner: Spinner,
  },
  methods: {
    ...mapActions(["fetchFilms"]),
  },
  computed: {
    ...mapGetters(["filmList", "loadingStatusFilms"]),
  },
  created() {
    this.fetchFilms();
  },
};
</script>
