<template>
  <div id="main">
    <div class="hero__base">
      <h1>Step Sequencer</h1>
      <p>
        Small sequencer with 4 tracks and 16 steps inspired by the
        <a
          href="https://polyend.com/tracker/"
          target="_blank"
        >
          <span class="hero__highlight">Polyend Tracker</span>
        </a> sequence mode with 3 selectable instruments and frequency change
        , done with
        <span
          class="hero__highlight"
        >Vue</span> +
        <a href="http://tonejs.github.io/" target="_blank">
          <span class="hero__highlight">Tone.js</span>
        </a>
      </p>
    </div>

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
.hero {
  &__base {
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  &__highlight {
    color: $blue;
  }
}

h1 {
  font-family: 'Source Sans Pro';
  font-weight: 400;
  font-size: 52px;
  color: $font;
}

p {
  font-family: 'Source Sans Pro';
  font-weight: 400;
  font-size: 30px;
  color: $light-grey;
  padding-top: 30px;
  width: 50%;
}

a {
  text-decoration: none;
}
</style>
