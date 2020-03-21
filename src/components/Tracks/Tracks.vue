<template>
  <div class="tracks__base">
    <Track id="1" />
    <Track id="2" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Track from './Track.vue';

export default Vue.extend({
  name: 'Tracks',
  components: {
    Track,
  },
});
</script>

<style>
</style>
