<template>
  <div class="people">
    <people-item />
  </div>
</template>

<script>
import PeopleItem from "@/components/PeopleItem.vue";
export default {
  components: { PeopleItem },
  name: "PersonDetailView",
};
</script>
