import Vue from 'vue';

const returnArray = () => Array(16).fill({ selected: false, animate: false, instrument: 'kick', key: 'C3' });

const state = {
  loadedPattern: 0,
  patterns: [{
    id: 0,
    tracks: [
      {
        id: 0,
        steps: returnArray(),
      },
      {
        id: 1,
        steps: returnArray(),
      },
      {
        id: 2,
        steps: returnArray(),
      },
      {
        id: 3,
        steps: returnArray(),
      }
    ]
  }],
};

const mutations = {
  addStep({ patterns, loadedPattern }: any, info: any) { // TODO Change any type
    Vue.set(patterns[loadedPattern].tracks[info.track].steps, info.step, info.info);
  },
  deleteStep({ patterns, loadedPattern }: any, info: any) { // TODO Change any type
    patterns[loadedPattern].tracks[info.track].steps[info.step].selected = false;
  },
  renderAnimation({ patterns, loadedPattern }: any, info: any) { // TODO Change any type
    patterns[loadedPattern].tracks[info.track].steps[info.step].animate = true;
  },
  renderAnimationFalse({ patterns, loadedPattern }: any, info: any) { // TODO Change any type
    patterns[loadedPattern].tracks[info.track].steps[info.step].animate = false;
  },
  selectAllSteps({ patterns, loadedPattern }: any, track: any) {
    const trackSteps = patterns[loadedPattern].tracks[track].steps

    patterns[loadedPattern].tracks[track].steps = trackSteps.map((el: any) => {
      if (!el.selected) {
        const key = el.key || 'C3';
        const instrument = el.instrument || 'kick';

        return {
          selected: true,
          animate: false,
          key,
          instrument
        }
      }

      return el;
    });
  },
  deselectSteps({ patterns, loadedPattern }: any, track: any) {
    const trackSteps = patterns[loadedPattern].tracks[track].steps

    patterns[loadedPattern].tracks[track].steps = trackSteps.map((el: any) => {
      return { ...el, selected: false, animate: false };
    });
  },
  selectAllKeys({ patterns, loadedPattern }: any, { track, key }: any) {
    const trackSteps = patterns[loadedPattern].tracks[track].steps

    patterns[loadedPattern].tracks[track].steps = trackSteps.map((el: any) => {
      return { ...el, key };
    });
  },
  selectAllInstruments({ patterns, loadedPattern }: any, { track, instrument }: any) {
    const trackSteps = patterns[loadedPattern].tracks[track].steps

    patterns[loadedPattern].tracks[track].steps = trackSteps.map((el: any) => {
      return { ...el, instrument };
    });
  }
};

const getters = {
  tracks: (state: any) => state.patterns[state.loadedPattern].tracks
};

const patterns = {
  state,
  mutations,
  getters,
};

export default patterns;