<template>
  <div class="container my-12 mx-auto px-4 md:px-12">
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
              <a class="no-underline hover:underline text-black" href="#">
                {{ person.name }}
              </a>
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
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "PeopleItems",
  methods: {
    ...mapActions(["fetchPeople"]),
  },
  computed: mapGetters(["peopleList"]),
  created() {
    this.fetchPeople();
  },
};
</script>
