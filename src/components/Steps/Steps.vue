<template>
  <div class="steps__base">
    <Step v-for="n in nOfSteps" v-bind:key="n" :step="n" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Step from './Step.vue';

export default Vue.extend({
  name: 'Steps',
  components: {
    Step,
  },
});
</script>
