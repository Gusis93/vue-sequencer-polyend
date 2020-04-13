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
import Patterns from './Patterns/Patterns.vue';

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
.tracker {
  &__base {
    height: 100%;
    background-image: linear-gradient(0deg, $gradient-black, $gradient-black-light);
    display: flex;
    padding: 40px 20px;
    align-items: center;
    flex-direction: column;
  }
}
</style>
