<template>
  <div>
    <h1 class="bg-red-500">Home</h1>
    <p>My name is {{ name }}</p>
    <button @click="changeName">Change name</button>
    <p>This is the {{ message }}</p>
    <form>
      <select v-model="locale">
        <option value="en">en</option>
        <option value="hi">hi</option>
      </select>
      <p>{{ $t("welcome") }}</p>
      <p>{{ $t("hello") }}</p>
    </form>
  </div>
</template>

<script lang="ts">
import BaseMixin from "~/mixins/BaseMixin";

export default defineComponent({
  mixins: [BaseMixin],
  data() {
    return {
      name: "Nuxt.jssss",
      locale: this.$i18n.locale,
    };
  },

  watch: {
    locale(newLocale) {
      this.$i18n.locale = newLocale;
    },
  },

  methods: {
    changeName() {
      this.name = "Nuxt.js";
    },
  },
});
</script>
