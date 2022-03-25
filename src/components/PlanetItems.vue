<template>
  <div v-if="loadingStatusPlanets" class="loading-div">
    <vue-spinner line-fg-color="#facc15" />
  </div>
  <div v-else class="container my-12 mx-auto px-4 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <!-- Column -->
      <div
        class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5"
        v-for="planet in planetList"
        :key="planet.id"
      >
        <!-- Article -->
        <router-link
          class="no-underline hover:underline text-black"
          :to="{ name: 'planetdetail', params: { id: planet.id } }"
        >
          <article class="overflow-hidden rounded-lg shadow-lg">
            <img
              class="w-full"
              :src="'/assets/images/planets/' + planet.id + '.jpg'"
            />
            <header
              class="flex items-center justify-between leading-tight p-2 md:p-4"
            >
              <h1 class="text-lg">
                {{ planet.name }}
              </h1>
              <p class="text-grey-darker text-sm">
                {{ $date(planet.created).format("DD/MM/YYYY") }}
              </p>
            </header>

            <footer
              class="flex items-center justify-between leading-none p-2 md:p-4"
            >
              <p class="ml-2 text-sm">Population: {{ planet.population }}</p>
            </footer>
          </article>
        </router-link>
        <!-- END Article -->
      </div>
      <!-- END Column -->
    </div>
    <pagination-bar
      name="planets"
      :numberOfPages="planetsNrOfPages"
      :page="planetsPage"
    />
  </div>
</template>

<script>
import router from "@/router/index";
import { mapGetters, mapActions } from "vuex";
import Spinner from "vue-simple-spinner";
import PaginationBar from "./layout/PaginationBar";

export default {
  name: "PlanetItems",
  components: {
    vueSpinner: Spinner,
    PaginationBar,
  },
  methods: {
    ...mapActions(["fetchPlanets"]),
  },
  computed: mapGetters([
    "planetList",
    "loadingStatusPlanets",
    "planetsNrOfPages",
    "planetsPage",
  ]),
  created() {
    let page = this.planetsPage;
    if (router.currentRoute.query.page) {
      page = router.currentRoute.query.page;
    }
    this.fetchPlanets(page);
  },
  watch: {
    $route() {
      let page = this.planetsPage;
      if (router.currentRoute.query.page) {
        page = router.currentRoute.query.page;
      }
      this.fetchPlanets(page);
    },
  },
};
</script>
