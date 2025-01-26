const state = {
  name: "Neeraj2222",
};

const mutations = {
  setName(state: any, name: string) {
    state.name = name;
  },
};

const actions = {
  setName({ commit }: any, name: string) {
    commit("setName", name);
  },
};

const getters = {
  name: (state: any) => state.name,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
