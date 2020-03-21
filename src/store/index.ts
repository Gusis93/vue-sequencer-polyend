import Vue from 'vue';
import Vuex from 'vuex';
import tracker from './modules/Tracker/module';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    tracker,
  },
});
