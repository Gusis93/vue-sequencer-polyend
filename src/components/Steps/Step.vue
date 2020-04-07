<template>
  <div class="step__base">
    <select v-model="key" id="keySelect">
      <option value="C5">C5</option>
      <option value="A#">A#</option>
      <option value="B">B</option>
    </select>
    <select v-model="instrument" id="instrumentSelect">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>

    <button @click="addStep">Create step</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Step',
  data() {
    return {
      key: 'C5',
      instrument: 1
    };
  },
  methods: {
    addStep() {
      this.$store.commit('addStep', {
        step: this.step,
        track: this.track,
        info: {
          key: this.key,
          instrument: Number(this.instrument)
        }
      });
    }
  },
  props: {
    step: Number,
    track: Number
  }
});
</script>
