<template>
  <div class="controls__base">
    <button @click="togglePlay">Play</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Transport } from 'tone';

export default Vue.extend({
  name: 'Controls',
  methods: {
    togglePlay() {
      this.$store.commit('togglePlay');
      
      Transport.bpm.value = 90;
      Transport.start();
    }
  }
});
</script>

<style>
</style>
