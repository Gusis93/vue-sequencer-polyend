import { State, StepA } from './types';

const originalState: State = {
  tracks: [],
};

const mutations = {
  addStep({ tracks }: any, { trackId, stepInfo }: StepA) { // TODO Change any type
    const track = tracks.find((el: any) => el.track === trackId);

    if (track) {
      const step = track.steps.find((el: any) => el.step === stepInfo.step);

      if (step) {
        step.instrument = stepInfo.instrument;
        step.key = stepInfo.key;
      } else {
        track.steps.push(stepInfo);
      }
    } else {
      tracks.push({
        track: trackId,
        steps: [stepInfo],
      });
    }
  },
};

// const actions = {
//   addStep()
// };

const tracks = {
  state: originalState,
  mutations,
  // actions,
};

export default tracks;
