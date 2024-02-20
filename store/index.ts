import { createStore } from "vuex";
import baseStore from "./base";
import nameStore from "./neeraj";

export default createStore({
  modules: {
    base: baseStore,
    neeraj: nameStore,
  },
});
