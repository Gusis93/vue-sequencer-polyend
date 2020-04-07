const state = {
  instruments: []
};

const mutations = {
  createInstruments: (state: any, instrument: any) => {
    state.instruments.push(instrument);
  },
}

const actions = {
  createInstruments({ commit }: any, payload: any) {
    console.log('action', payload);

    setTimeout(() => {
      commit('createInstruments', payload)
    }, 5000);
  }
}

const getters = {
  instruments: (state: any) => state.instruments
};

const instruments = {
  state,
  mutations,
  actions,
  getters,
};


export default instruments;