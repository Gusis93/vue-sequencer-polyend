import Vue from 'vue';
import Vuex from 'vuex';
import tracker from './modules/Tracker/module';
import patterns from './modules/Patterns/module';
import instruments from './modules/Instruments/module';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    tracker,
    patterns,
    instruments,
  },
});