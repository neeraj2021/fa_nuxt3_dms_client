<template>
  <div>
    <h1 class="bg-red-500">Home</h1>
    <p>My name is {{ name2 }}</p>
    <button @click="changeName">Change name</button>
    <div>
      <toggle-button
        v-model="value"
        @change="() => console.log('changed', value)"
        offLabel="Off"
        onLabel="On"
      ></toggle-button>
    </div>
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
import mixins from "../utils";

// Using Options API
export default mixins(BaseMixin).extends({
  data() {
    return {
      name: "Nuxt.jssss",
      locale: this.$i18n.locale,
      value: "",
    };
  },

  computed: {
    ...mapGetters("neeraj", {
      count: "count",
      name2: "name",
    }),

    ...mapGetters("base", {
      count: "count",
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
      console.log(this.message);
      this.$store.commit("base/increment");
    },
  },
});
</script>
