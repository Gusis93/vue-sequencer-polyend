<template>
  <div class="pattern__base">
    <Track v-for="track in tracks" v-bind:key="'track-' + track.id" :track="track" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Track from './Tracks/Track.vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
  name: 'Patterns',
  components: {
    Track
  },
  computed: {
    ...mapGetters(['tracks'])
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
