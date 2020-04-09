<template>
  <div class="controls__base">
    <button @click="togglePlay">Play</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import * as Tone from 'tone';
import { mapGetters } from 'vuex';

export default Vue.extend({
  name: 'Controls',
  computed: {
    ...mapGetters(['isPlaying'])
  },
  methods: {
    async togglePlay() {
       await Tone.start();

      this.$store.commit('togglePlay');

      Tone.Transport.bpm.value = 90;
      
      if (this.isPlaying) {
        Tone.Transport.start('+0.1');
        return;
      } 

      Tone.Transport.stop();
    }
  }
});
</script>

<style>
</style>
