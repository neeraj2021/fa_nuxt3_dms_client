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
      <h1>{{ $uuid }}</h1>
      <h1>Count - {{ count }}</h1>
      <h1>Name - {{ name2 }}</h1>
    </form>
  </div>
</template>

<script lang="ts">
import BaseMixin from "~/mixins/BaseMixin";
import { mapGetters } from "vuex";

export default defineComponent({
  mixins: [BaseMixin],
  data() {
    return {
      name: "Nuxt.jssss",
      locale: this.$i18n.locale,
    };
  },

  computed: {
    ...mapGetters("neeraj", {
      // count: "count",
      name2: "name",
    }),
  },

  watch: {
    locale(newLocale) {
      this.$i18n.locale = newLocale;
    },
  },

  methods: {
    changeName() {
      this.name = "Nuxt.js";
      console.log(this.$store.state.base.count);
    },
  },
});
</script>
