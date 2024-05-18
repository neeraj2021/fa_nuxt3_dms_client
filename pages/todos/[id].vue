<template>
  <div>
    <pre>{{ todo }}</pre>
    <button @click="fetchTodo">Fetch todo</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      todo: { id: 1, title: "Buy the milk" },
      id: "1" as string | string[],
    };
  },

  mounted() {
    this.id = this.$route.params.id;
  },

  methods: {
    async fetchTodo() {
      const { data } = await this.$axios.get(`/todos/${this.id}`);

      const { data: neeraj } = await this.$axiosInventory.get(
        `/todos/${this.id}`
      );

      this.todo = data;
    },
  },
});
</script>
