export default {
  namespaced: true,
  state: {
    name: "Neeraj2222",
  },

  mutations: {
    setName(state: any, name: string) {
      state.name = name;
    },
  },

  actions: {
    setName({ commit }: any, name: string) {
      commit("setName", name);
    },
  },

  getters: {
    name: (state: any) => state.name,
  },
};
