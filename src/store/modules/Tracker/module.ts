import { State } from './types';

const createSemiTonesArray = () => {
  const semiToneArray = [];
  const tones = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
  const semitones = 3;

  for (let i = 0; i < semitones; i += 1) {
    for (let j = 0, len = tones.length; j < len; j += 1) {
      semiToneArray.push(`${tones[j]}${i + 1}`, `${tones[j]}#${i + 1}`);
    }
  }

  return semiToneArray;
};

const state: State = {
  isPlaying: false,
  semiTonesArray: createSemiTonesArray(),
}

const mutations = {
  togglePlay(state: State) {
    state.isPlaying = !state.isPlaying;
  }
}

const getters = {
  isPlaying: (state: State) => state.isPlaying,
  semiTonesArray: (state: State) => state.semiTonesArray,
}

const tracker = {
  state,
  mutations,
  getters,
}

export default tracker;