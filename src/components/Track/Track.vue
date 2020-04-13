<template>
  <div class="track__base">
    <track-controls :track="track.id" :instruments="instruments"></track-controls>

    <ul class="steps__wrapper">
      <Step
        v-for="(step, stepNumber) in track.steps"
        v-bind:key="'track-' + track.id + '-step-' +  stepNumber"
        :step="step"
        :stepN="stepNumber"
        :track="track.id"
        :instruments="instruments"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';

import { Sequence, MembraneSynth, NoiseSynth, MonoSynth, Draw } from 'tone';

import Step from '../Steps/Step.vue';
import TrackControls from './TrackControls.vue';

export default Vue.extend({
  name: 'Track',
  components: {
    Step,
    TrackControls
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
          synth: new NoiseSynth().toDestination()
        },
        {
          id: 'bass',
          name: 'Bass',
          allowsNotes: true,
          synth: new MonoSynth({
            oscillator: {
              type: 'square'
            },
            envelope: {
              attack: 0.1
            }
          }).toDestination()
        }
      ],
      sequence: new Sequence()
    };
  },
  methods: {
    playSequence(time: number, col: number) {
      if (this.track.steps[col].selected) {
        const { key, instrument: selectedInstrument } = this.track.steps[col];
        const instrument = this.instruments.find(
          instrument => instrument.id === selectedInstrument
        );

        if (typeof instrument === 'undefined') {
          return;
        }

        if (instrument.allowsNotes) {
          instrument.synth.triggerAttackRelease(key, '16n', time);
        } else {
          instrument.synth.triggerAttack(time);
        }

        Draw.schedule(() => {
          this.animate(true, col);
          setTimeout(() => { this.animate(false, col); }, 500);
        }, time);
      }
    },
    animate(animate: boolean, col: number) {
      this.$store.dispatch('modifyStep', {
        step: col,
        track: this.track.id,
        action: 'animate',
        value: animate
      });
    }
  },
  computed: {
    ...mapGetters(['isPlaying'])
  },
  watch: {
    isPlaying(play) {
      if (play) {
        this.sequence.start(0);
        return;
      }

      this.sequence.stop();
    }
  },
  created() {
    this.sequence = new Sequence(
      this.playSequence,
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      '16n'
    );
  },
  props: {
    track: Object
  }
});
</script>

<style lang="scss" scoped>
.track {
  &__base {
    background: #2b2b2b;
    padding: 40px 20px;
    padding: 10px;
    border-left: 4px solid;
  }
}

.steps {
  &__wrapper {
    border-top: 1px solid;
    margin-top: 10px;
    padding-top: 10px;
  }
}
</style>
