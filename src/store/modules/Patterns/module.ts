const returnArray = () => Array(16).fill({ selected: false });

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
    patterns[loadedPattern].tracks[info.track].steps[info.step] = info.info;
  },
  deleteStep({ patterns, loadedPattern }: any, info: any) { // TODO Change any type
    patterns[loadedPattern].tracks[info.track].steps[info.step].selected = false;
  },
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