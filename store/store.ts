import { createStore } from "vuex";
import neeraj from "./neeraj";
import base from "./base";

export default createStore({
  modules: {
    base: base,
    neeraj: neeraj,
  },
});
