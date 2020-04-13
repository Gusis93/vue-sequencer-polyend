<template>
  <div class="pattern__base">
    <steps-display />

    <div class="tracks__wrapper">
      <Track v-for="track in tracks" v-bind:key="'track-' + track.id" :track="track" />
    </div>

    <steps-display />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';

import Track from '../Track/Track.vue';
import StepsDisplay from './StepsDisplay.vue';

export default Vue.extend({
  name: 'Patterns',
  components: {
    Track,
    StepsDisplay
  },
  computed: {
    ...mapGetters(['tracks'])
  }
});
</script>

<style lang="scss">
.pattern {
  &__base {
    display: flex;
    padding: 10px;
    box-shadow: 2px 3px 10px;
    margin-top: 10px;
  }
}

.tracks__wrapper {
  display: flex;
}
</style>
