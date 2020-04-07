<template>
  <div class="track__base">
    <Step v-for="n in nOfSteps" v-bind:key="n" :step="n - 1" :track="track.id" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';

import Step from '../Steps/Step.vue';

export default Vue.extend({
  name: 'Track',
  components: {
    Step
  },
  data() {
    return {
      nOfSteps: 16
    };
  },
  watch: {
    isPlaying(playing) {
      if (playing) {
        console.log('Toggle Sequence');
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
