<template>
  <div v-if="loadingStatusSpecies" class="loading-div">
    <vue-spinner line-fg-color="#facc15" />
  </div>
  <div v-else>
    <h1 class="text-4xl font-bold">{{ speciesDetail.name }}</h1>
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full">
              <tbody>
                <tr class="bg-gray-100 border-b">
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >
                    Average height
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    {{ speciesDetail.average_height }}
                  </td>
                </tr>
                <tr class="bg-white border-b">
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >
                    Average lifespan
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    {{ speciesDetail.average_lifespan }}
                  </td>
                </tr>
                <tr class="bg-gray-100 border-b">
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >
                    Classification
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    {{ speciesDetail.classification }}
                  </td>
                </tr>
                <tr class="bg-white border-b">
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >
                    Designation
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    {{ speciesDetail.designation }}
                  </td>
                </tr>
                <tr class="bg-gray-100 border-b">
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >
                    Eye colors
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    {{ speciesDetail.eye_colors }}
                  </td>
                </tr>
                <tr class="bg-white border-b">
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >
                    Hair colors
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    {{ speciesDetail.hair_colors }}
                  </td>
                </tr>
                <tr class="bg-gray-100 border-b">
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >
                    Language
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    {{ speciesDetail.language }}
                  </td>
                </tr>
                <tr class="bg-white border-b">
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >
                    Skin colors
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    {{ speciesDetail.skin_colors }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Spinner from "vue-simple-spinner";
export default {
  name: "SpeciesItem",
  components: {
    vueSpinner: Spinner,
  },
  methods: {
    ...mapActions(["fetchSpeciesDetail"]),
  },
  computed: {
    ...mapGetters(["speciesDetail", "loadingStatusSpecies"]),
  },
  created() {
    this.fetchSpeciesDetail(this.$route.params.id);
  },
};
</script>
