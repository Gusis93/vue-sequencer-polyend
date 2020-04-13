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
          synth: new NoiseSynth({
            octaves: 10
          }).toDestination()
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
      sequence: ''
    };
  },
  methods: {
    toggleMute(mute: boolean) {
      Vue.set(this.sequence, 'mute', true);
    },
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

        Draw.schedule(() => {
          this.$store.commit('renderAnimation', {
            track: this.track.id,
            step: col
          });

          setTimeout(() => {
            this.$store.commit('renderAnimationFalse', {
              track: this.track.id,
              step: col
            });
          }, 500);
        }, time);
      }
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
