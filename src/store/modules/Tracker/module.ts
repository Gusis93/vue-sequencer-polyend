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
  volume: 0,
  tempo: 120
}

const mutations = {
  togglePlay(state: State) {
    state.isPlaying = !state.isPlaying;
  },
  modifyTransportParam(state: State, { transportParam, value }: any) {
    state[transportParam] = value
  }
}

const getters = {
  isPlaying: (state: State) => state.isPlaying,
  semiTonesArray: (state: State) => state.semiTonesArray,
  volume: (state: State) => state.volume,
  tempo: (state: State) => state.tempo,
}

const tracker = {
  state,
  mutations,
  getters,
}

export default tracker;