<template>
  <div class="tracker__base">
    <div class="tracker__wrapper">
      <Controls />
      <Patterns />
    </div>
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
  background: #f4f4f1;
}

.tracker {
  &__base {
    height: 100%;
    background-image: linear-gradient(0deg, #3b3b43, #1b191a);
    display: flex;
    padding: 40px 20px;
    align-items: center;
    flex-direction: column;
  }
}
</style>
