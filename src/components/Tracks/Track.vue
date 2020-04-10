<template>
  <div class="track__base">
    <!-- TODO mute buttons for tracks / instruments -->
    <!-- TODO select all buttons for steps / instruments -->
    <Step
      v-for="(step, stepNumber) in track.steps"
      v-bind:key="'track-' + track.id + '-step-' +  stepNumber"
      :step="step"
      :stepN="stepNumber"
      :track="track.id"
      :instruments="instruments"
    />
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
          id: 'kick',
          name: 'Kick',
          allowsNotes: true,
          synth: new MembraneSynth({
            octaves: 10
          }).toDestination()
        },
        {
          id: 'snare',
          name: 'Snare',
          allowsNotes: false,
          synth: new NoiseSynth({
            octaves: 10
          }).toDestination()
        },
        {
          id: 'bass',
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
        const { allowsNotes, synth } = this.instruments.find(
          el => el.id === instrument
        );

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

<style lang="scss" scoped>
.track {
  &__base {
    background: #414141 ;
    padding: 10px;
    border-left: 4px solid;
  }
}
</style>
