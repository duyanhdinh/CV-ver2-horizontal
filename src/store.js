import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    color: {
      c1: 'web-c1',
      c2: 'web-c2',
      c2s: 'web-c2s',
      c3: 'web-c3',
      c3s: 'web-c3s',
    },
    pre: {
      bg: 'bg-',
      text: 'text-',
      hover: 'hover:',
      border: 'border-',
    },
  },
  getters:{
    getColor: state => {
      return state.color
    },
    getPre: state => {
      return state.pre
    },
  },
  mutations: {},
  actions: {}
});
