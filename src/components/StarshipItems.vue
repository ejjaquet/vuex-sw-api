<template>
  <div v-if="loadingStatusStarships" class="loading-div">
    <vue-spinner line-fg-color="#facc15" />
  </div>
  <div v-else class="container my-12 mx-auto px-4 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <!-- Column -->
      <div
        class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
        v-for="starship in starshipList"
        :key="starship.id"
      >
        <!-- Article -->
        <article class="overflow-hidden rounded-lg shadow-lg">
          <header
            class="flex items-center justify-between leading-tight p-2 md:p-4"
          >
            <h1 class="text-lg">
              <router-link
                class="no-underline hover:underline text-black"
                :to="{
                  name: 'starshipdetail',
                  params: { id: starship.id },
                }"
                >{{ starship.name }}</router-link
              >
            </h1>
            <p class="text-grey-darker text-sm">
              {{ $date(starship.created).format("DD/MM/YYYY") }}
            </p>
          </header>

          <footer
            class="flex items-center justify-between leading-none p-2 md:p-4"
          >
            <p class="ml-2 text-sm">Model: {{ starship.model }}</p>
          </footer>
        </article>
        <!-- END Article -->
      </div>
      <!-- END Column -->
    </div>
    <pagination-bar
      name="starships"
      :numberOfPages="starshipsNrOfPages"
      :page="starshipsPage"
    />
  </div>
</template>

<script>
import router from "@/router/index";
import { mapGetters, mapActions } from "vuex";
import Spinner from "vue-simple-spinner";
import PaginationBar from "./layout/PaginationBar";

export default {
  name: "StarshipItems",
  components: {
    vueSpinner: Spinner,
    PaginationBar,
  },
  methods: {
    ...mapActions(["fetchStarships"]),
  },
  computed: mapGetters([
    "starshipList",
    "loadingStatusStarships",
    "starshipsNrOfPages",
    "starshipsPage",
  ]),
  created() {
    let page = this.starshipsPage;
    if (router.currentRoute.query.page) {
      page = router.currentRoute.query.page;
    }
    this.fetchStarships(page);
  },
  watch: {
    $route() {
      let page = this.starshipsPage;
      if (router.currentRoute.query.page) {
        page = router.currentRoute.query.page;
      }
      this.fetchStarships(page);
    },
  },
};
</script>
