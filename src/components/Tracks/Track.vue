<template>
  <div class="track__base">
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
  name: 'Track',
  data() {
    return {
      key: 'C5',
      instrument: 1,
    };
  },
  props: {
    id: String,
  },
  methods: {
    addStep() {
      this.$store.commit('addStep', {
        trackId: this.id,
        stepInfo: {
          step: 1,
          key: this.key,
          instrument: Number(this.instrument),
        },
      });
    },
  },
});
</script>

<style>
</style>
