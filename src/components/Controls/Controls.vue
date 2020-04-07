<template>
  <div class="controls__base">
    <button @click="togglePlay">Play</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Controls',
  methods: {
    togglePlay() {
      this.$store.commit('togglePlay');
    }
  }
});
</script>

<style>
</style>
