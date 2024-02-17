<template>
  <div>
    <h1 class="bg-red-500">Home</h1>
    <p>My name is {{ name }}</p>
    <button @click="changeName">Change name</button>
    <p>This is the {{ message }}</p>
  </div>
</template>

<script lang="ts">
import BaseMixin from "~/mixins/BaseMixin";

export default defineComponent({
  mixins: [BaseMixin],
  data() {
    return {
      name: "Nuxt.jssss",
    };
  },

  methods: {
    changeName() {
      this.name = "Nuxt.js";
    },
  },
});
</script>
