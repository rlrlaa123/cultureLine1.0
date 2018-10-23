import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// eslint-disable-next-line
export const store = new Vuex.Store({
  state: {
    categories: [],
    registerType: null,
  },
  mutations: {
    getCategories: (state, payload) => { state.categories = payload; },
    setRegisterType: (state, payload) => { state.registerType = payload; },
  },
});
