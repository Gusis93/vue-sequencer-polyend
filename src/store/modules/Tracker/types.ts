interface Steps {
  step: number,
  key: string,
  instrument: number,
}

export interface StepA {
  trackId: string,
  stepInfo: Steps,
};

interface Tracks {
  track: string
  steps: Steps,
}

export interface State {
  tracks: Tracks[],
}