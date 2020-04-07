import { State, StepA } from './types';

const originalState: State = {
  nOfSteps: 16,
  steps: [...Array(16)],
};

const mutations = {
  addStep({ steps }: any, { step, tracksInfo }: StepA) { // TODO Change any type
    const stepsA = steps.find((el: any) => el && el.step === step);

    if (stepsA) {
      const track = stepsA.tracks.find((el: any) => el.id === tracksInfo.id);

      if (track) {
        track.instrument = tracksInfo.instrument;
        track.key = tracksInfo.key;
      } else {
        stepsA.tracks.push(tracksInfo);
      }
    } else {
      steps[step - 1] = {
        step,
        tracks: [tracksInfo]
      };
    }
  },
};

const steps = {
  state: originalState,
  mutations,
  getters: {
    nOfSteps: (state: State) => state.nOfSteps,
    sequence: (state: State) => state.steps,
  }
};

export default steps;
