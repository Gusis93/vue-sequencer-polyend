<template>
  <div class="pattern__base">
    <div class="stepsDisplay__wrapper">
      <ul class="stepsDisplay__display">
        <li v-for="i in 16" v-bind:key="'step-display-' + i">{{i}}</li>
      </ul>
    </div>

    <div class="tracks__wrapper">
      <Track v-for="track in tracks" v-bind:key="'track-' + track.id" :track="track" />
    </div>

    <div class="stepsDisplay__wrapper">
      <ul class="stepsDisplay__display">
        <li v-for="i in 16" v-bind:key="'step-display-' + i">{{i}}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Track from './Track/Track.vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
  name: 'Patterns',
  components: {
    Track
  },
  computed: {
    ...mapGetters(['tracks'])
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.pattern {
  &__base {
    display: flex;
    padding: 10px;
    box-shadow: 2px 3px 10px;
    margin-top: 10px;
  }
}

.tracks {
  &__wrapper {
    display: flex;
  }
}

.stepsDisplay {
  &__display {
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    li {
      font-family: 'Source Sans Pro';
      font-size: 14px;
      height: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  &__wrapper {
    background: #2B2B2B;
    padding: 10px;

    &:last-child {
      border-left: 4px solid;
    }
  }
}
</style>
