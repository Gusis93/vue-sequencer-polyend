<template>
  <div class="controls__base">
    <button class="controls__playPause" @click="togglePlay">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z" :fill="!isPlaying ?  '#458B85' : 'none'" />
        <path d="M6 6h12v12H6z" :fill="isPlaying ?  '#458B85' : 'none'" />
      </svg>
    </button>

    <Slider
      method="volume"
      label="Volume"
      :min="-60"
      :max="0"
      :value="volume"
      :interval="0.1"
      :showValue="false"
    />
    <Slider method="tempo" label="Tempo" valueLabel="bpm" :min="60" :max="240" :value="tempo" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import * as Tone from 'tone';
import { mapGetters } from 'vuex';

import Slider from './Slider.vue';

export default Vue.extend({
  name: 'Controls',
  components: {
    Slider
  },
  computed: {
    ...mapGetters(['isPlaying', 'tempo', 'volume'])
  },
  watch: {
    tempo(bpm) {
      Tone.Transport.bpm.value = bpm;
    },
    volume(volume) {
      Tone.Destination.volume.value = volume;
    }
  },
  methods: {
    async togglePlay() {
      await Tone.start();

      this.$store.commit('togglePlay');

      if (this.isPlaying) {
        Tone.Transport.start('+0.1');
        return;
      }

      Tone.Transport.stop();
    }
  }
});
</script>

<style lang="scss">
.controls {
  &__base {
    display: flex;
    align-items: center;
  }

  &__playPause {
    padding-left: 10px;
    border: none;
    color: white;
    background: none;
    outline: none;
    cursor: pointer;
  }
}
</style>
