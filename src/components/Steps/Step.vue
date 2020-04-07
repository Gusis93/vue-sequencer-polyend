<template>
  <div class="step__base">
    <Tracks :step="step"/>
    -------------------------
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Tracks from '../Tracks/Tracks.vue';

export default Vue.extend({
  name: 'Step',
  props: {
    step: Number
  },
  components: {
    Tracks,
  },
});
</script>

<style>

</style>
