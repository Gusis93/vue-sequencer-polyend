import Vue from 'vue';
import { State, Steps, Payload } from './types';
import { ActionContext } from 'vuex';

const returnArray = () => Array(16).fill({ selected: false, animate: false, instrument: 'kick', key: 'C3' });
const tracksArray = () => [...Array(4)].map((track, i) => ({ id: i, steps: returnArray() }));

const state: State = {
  loadedPattern: 0,
  patterns: [{
    id: 0,
    tracks: tracksArray()
  }],
};

const actions = {
  modifyStep({ commit }: ActionContext<State, State>, { ...args }: Payload) {
    const { patterns, loadedPattern } = state;
    const { track, step } = args;
    const stepInfo = patterns[loadedPattern].tracks[track].steps[step];
    
    commit('modifyStep', { ...args, stepInfo });
  },
  modifySeveralSteps({ commit, state }: ActionContext<State, State>, { ...args }: Payload) {
    const { patterns, loadedPattern } = state;
    const { track, params } = args;
    const trackSteps = patterns[loadedPattern].tracks[track].steps

    const newSteps = trackSteps.map((el: Steps) => {
      return { ...el, ...params };
    });
    commit('modifySeveralSteps', { ...args, newSteps });
  }
};

const mutations = {
  modifyStep({ patterns, loadedPattern }: State, { track, step, action, value, stepInfo }: Payload) {
    Vue.set(patterns[loadedPattern].tracks[track].steps, step, { ...stepInfo, [action]: value });
  },
  addStep({ patterns, loadedPattern }: State, { track, step, stepInfo }: Payload) {
    Vue.set(patterns[loadedPattern].tracks[track].steps, step, stepInfo);
  },
  modifySeveralSteps({ patterns, loadedPattern }: State, { track, newSteps }: Payload) {
    patterns[loadedPattern].tracks[track].steps = newSteps
  },
  selectAllSteps({ patterns, loadedPattern }: State, track: number) {
    const trackSteps = patterns[loadedPattern].tracks[track].steps

    patterns[loadedPattern].tracks[track].steps = trackSteps.map((step: Steps) => {
      const { selected, key: stepKey, instrument: stepInstrument } = step;

      if (!selected) {
        const key: string = stepKey || 'C3';
        const instrument: string = stepInstrument || 'kick';

        return {
          selected: true,
          animate: false,
          key,
          instrument
        };
      }

      return step;
    });
  },
};

const getters = {
  tracks: (state: State) => state.patterns[state.loadedPattern].tracks
};

const patterns = {
  state,
  actions,
  mutations,
  getters,
};

export default patterns;