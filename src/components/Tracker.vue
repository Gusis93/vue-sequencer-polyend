<template>
  <div class="tracker__base">
    <Steps />
    <Tracks />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Steps from './Steps.vue';
import Tracks from './Tracks/Tracks.vue';

export default Vue.extend({
  name: 'Tracker',
  components: {
    Steps,
    Tracks,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
