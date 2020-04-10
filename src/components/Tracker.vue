<template>
  <div class="tracker__base">
    <Patterns />
    <Controls />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Controls from './Controls/Controls.vue';
import Patterns from './Patterns.vue';

// Styles
import '../styles/reset.css';
import '../styles/fonts.css';

export default Vue.extend({
  name: 'Tracker',
  components: {
    Controls,
    Patterns
  }
});
</script>

<style lang="scss">
html {
  height: 100%;
  background: #1c1a18;
}

body {
  height: 100%;
}

.tracker {
  &__base {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}
</style>
