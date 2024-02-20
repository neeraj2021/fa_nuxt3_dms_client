export default {
  namespaced: true,
  state: {
    count: 4646546,
  },

  mutations: {
    increment(state: any) {
      state.count++;
    },

    decrement(state: any) {
      state.count--;
    },

    reset(state: any) {
      state.count = 0;
    },

    set(state: any, value: number) {
      state.count = value;
    },
  },

  actions: {
    increment({ context }: any) {
      context("increment");
    },

    decrement({ context }: any) {
      context("decrement");
    },

    reset({ context }: any) {
      context("reset");
    },

    set({ context }: any, value: number) {
      context("set", value);
    },
  },

  getters: {
    count: (state: any) => state.count,
  },
};
