import { State } from './types';

const state: State = {
  isPlaying: false,
}

const mutations = {
  togglePlay(state: State) {
    state.isPlaying = !state.isPlaying;
  }
}

const getters = {
  isPlaying: (state: State) => state.isPlaying
}

const tracker = {
  state,
  mutations,
  getters,
}

export default tracker;