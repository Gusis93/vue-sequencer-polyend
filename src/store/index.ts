import Vue from 'vue';
import Vuex from 'vuex';
import tracker from './modules/Tracker/module';
import steps from './modules/Steps/module';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    steps,
    tracker,
  },
});