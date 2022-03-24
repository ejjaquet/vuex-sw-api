<template>
  <div v-if="loadingStatusPeople" class="loading-div">
    <vue-spinner line-fg-color="#facc15" />
  </div>
  <div v-else class="container my-12 mx-auto px-4 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <!-- Column -->
      <div
        class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
        v-for="person in peopleList"
        :key="person.id"
      >
        <!-- Article -->
        <article class="overflow-hidden rounded-lg shadow-lg">
          <header
            class="flex items-center justify-between leading-tight p-2 md:p-4"
          >
            <h1 class="text-lg">
              <router-link
                class="no-underline hover:underline text-black"
                :to="{ name: 'persondetail', params: { id: person.id } }"
                >{{ person.name }}</router-link
              >
            </h1>
            <p class="text-grey-darker text-sm">
              {{ $date(person.created).format("DD/MM/YYYY") }}
            </p>
          </header>

          <footer
            class="flex items-center justify-between leading-none p-2 md:p-4"
          >
            <p class="ml-2 text-sm">Gender: {{ person.gender }}</p>
          </footer>
        </article>
        <!-- END Article -->
      </div>
      <!-- END Column -->
    </div>
    <pagination-bar
      name="people"
      :numberOfPages="peopleNrOfPages"
      :page="peoplePage"
    />
  </div>
</template>

<script>
import router from "@/router/index";
import { mapGetters, mapActions } from "vuex";
import Spinner from "vue-simple-spinner";
import PaginationBar from "./layout/PaginationBar";

export default {
  name: "PeopleItems",
  components: {
    vueSpinner: Spinner,
    PaginationBar,
  },
  methods: {
    ...mapActions(["fetchPeople"]),
  },
  computed: mapGetters([
    "peopleList",
    "loadingStatusPeople",
    "peopleNrOfPages",
    "peoplePage",
  ]),
  created() {
    let page = this.peoplePage;
    if (router.currentRoute.query.page) {
      page = router.currentRoute.query.page;
    }
    this.fetchPeople(page);
  },
  watch: {
    $route() {
      let page = this.peoplePage;
      if (router.currentRoute.query.page) {
        page = router.currentRoute.query.page;
      }
      this.fetchPeople(page);
    },
  },
};
</script>
