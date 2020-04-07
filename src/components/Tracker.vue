<template>
  <div class="tracker__base">
    <Steps />
    <Controls />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Steps from './Steps/Steps.vue';
import Controls from './Controls/Controls.vue';

export default Vue.extend({
  name: 'Tracker',
  components: {
    Steps,
    Controls,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
