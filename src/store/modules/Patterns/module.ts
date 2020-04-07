const state = {
  loadedPattern: 0,
  patterns: [{
    id: 0,
    tracks: [
      {
        id: 0,
        steps: [...Array(16)],
      },
      {
        id: 1,
        steps: [...Array(16)],
      }
    ]
  }],
};

const mutations = {
  addStep({ patterns, loadedPattern }: any, info: any) { // TODO Change any type
    patterns[loadedPattern].tracks[info.track].steps[info.step] = info.info;
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