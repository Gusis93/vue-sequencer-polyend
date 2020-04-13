<template>
  <div id="main">
    <h1>Polyend Tracker based sequencer</h1>

    <Tracker />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Tracker from './components/Tracker.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Tracker
  }
});
</script>

<style lang="scss" scoped>
h1 {
  font-family: 'Source Sans Pro';
  font-weight: 300;
  font-size: 52px;
  color: #76A9AC;
  padding: 50px;
}
</style>
