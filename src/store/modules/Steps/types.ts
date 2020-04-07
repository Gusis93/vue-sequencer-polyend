interface Track {
  id: number,
  instrument: number,
  key: string,
}

export interface StepA {
  step: number,
  tracksInfo: Track,
};

interface Steps {
  step: number
  tracks: Track,
}

export interface State {
  nOfSteps: number
  steps: Steps[],
}

