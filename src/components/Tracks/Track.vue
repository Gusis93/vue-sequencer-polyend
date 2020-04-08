<template>
  <div class="track__base">
    <select id="instrumentSelectAll">
      <option
        v-for="(instrument, i) in instruments"
        v-bind:key="instrument.name"
        :value="i"
      >{{instrument.name}}</option>
    </select>

    <label for="instrumentSelectAll">Select all instruments</label>

    <button>Select all steps</button>

    <Step
      v-for="(step, stepN) in track.steps"
      v-bind:key="'track-' + track.id + '-step-' +  stepN"
      :step="step"
      :stepN="stepN"
      :track="track.id"
      :instruments="instruments"
    />
    
    -----------------------------------------------------------------------------
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';

import { Sequence, MembraneSynth, NoiseSynth, MonoSynth } from 'tone';

import Step from '../Steps/Step.vue';

export default Vue.extend({
  name: 'Track',
  components: {
    Step
  },
  data() {
    return {
      nOfSteps: 16,
      instruments: [
        {
          name: 'Kick',
          allowsNotes: true,
          synth: new MembraneSynth({
            octaves: 10
          }).toDestination()
        },
        {
          name: 'Snare',
          allowsNotes: false,
          synth: new NoiseSynth({
            octaves: 10
          }).toDestination()
        },
        {
          name: 'Bass',
          allowsNotes: true,
          synth: new MonoSynth({
            volume: -10,
            envelope: {
              attack: 0.1,
              decay: 0.3,
              release: 2
            },
            filterEnvelope: {
              attack: 0.001,
              decay: 0.01,
              sustain: 0.5,
              baseFrequency: 200,
              octaves: 2.6
            }
          }).toDestination()
        }
      ],
      sequence: ''
    };
  },
  methods: {
    playSequence(time: any, col: any) {
      if (this.track.steps[col].selected) {
        const { key, instrument } = this.track.steps[col];
        const { allowsNotes, synth } = this.instruments[instrument];

        if (allowsNotes) {
          synth.triggerAttackRelease(key, '16n', time);
        } else {
          synth.triggerAttack(time);
        }
      }
    }
  },
  created() {
    this.sequence = new Sequence(
      this.playSequence,
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      '16n'
    ).start(0);
  },
  computed: {
    ...mapGetters(['isPlaying'])
  },
  props: {
    track: Object
  }
});
</script>
