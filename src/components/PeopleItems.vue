<template>
  <div>
    <ul class="list-group mt-5">
      <li
        class="list-group-item list-group-item-action"
        v-for="person in peopleList"
        :key="person.id"
      >
        <div class="d-flex w-100 justify-content-between">
          <h3>{{ person.name }}</h3>
        </div>
      </li>
    </ul>
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

<style scoped lang="scss"></style>
