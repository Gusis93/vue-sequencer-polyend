export interface State {
  isPlaying: boolean,
  semiTonesArray: Array<string>
  volume: number,
  tempo: number
}

export interface Payload {
  transportParam: 'volume' | 'tempo',
  value: number
}