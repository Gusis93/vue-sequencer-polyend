export interface Payload {
  track: number,
  step: number,
  stepInfo: Steps,
  key: string,
  instrument: string,
  value: string,
  action: 'key' | 'instrument',
  newSteps: Steps[],
  params: Steps
}

export interface Steps {
  selected: boolean,
  animate: boolean,
  instrument: string,
  key: string
}

interface Tracks {
  id: number,
  steps: Steps[]
}

interface Patterns {
  id: number,
  tracks: Tracks[]
}

export interface State {
  loadedPattern: number,
  patterns: Patterns[]
}