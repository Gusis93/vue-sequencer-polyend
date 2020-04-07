<template>
  <div class="track__base">
    <Step v-for="n in nOfSteps" v-bind:key="n" :step="n - 1" :track="track.id" />-----------------------------------------------------------------------------
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';

import * as Tone from 'tone';

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
          synth: new Tone.MembraneSynth({
            octaves: 10
          }).toMaster()
        },
        {
          name: 'Snare',
          synth: new Tone.NoiseSynth({
            octaves: 10
          }).toMaster()
        }
      ]
    };
  },
  watch: {
    isPlaying(playing) {
      Tone.start();

      if (playing) {
        const loop = new Tone.Sequence(
          (time: any, col: any) => {
            if (this.track.steps[col]) {
              console.log(this.track.steps[col])
              console.log(this.instruments[this.track.steps[col].instrument - 1])
              
              if (this.instruments[this.track.steps[col].instrument - 1].name !== 'Snare') {
                this.instruments[this.track.steps[col].instrument - 1].synth.triggerAttackRelease(this.track.steps[col].key, '8n', time);
              } else {
                this.instruments[this.track.steps[col].instrument - 1].synth.triggerAttack(time);
              }
            }
          },
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          '16n'
        ).start(0);
      }
    }
  },
  computed: {
    ...mapGetters(['isPlaying'])
  },
  props: {
    track: Object
  }
});
</script>
