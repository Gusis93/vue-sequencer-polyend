<template>
  <div class="step__base">
    {{stepN}}

    <select @change="handleSelectChange" v-model="key" id="keySelect">
      <template v-for="semitone in semitones">
        <template v-for="tone in tones">
          <option v-bind:key="tone + '' + semitone" :value="tone + semitone">{{tone + semitone}}</option>
          <option v-bind:key="tone + '#' + semitone" :value="tone + '#' + semitone">{{tone + '#' + semitone}}</option>
        </template>
      </template>
    </select>

    <select @change="handleSelectChange" v-model="instrument" id="instrumentSelect">
      <option
        v-for="(instrument, i) in instruments"
        v-bind:key="instrument.name"
        :value="i"
      >{{instrument.name}}</option>
    </select>

    <input
      v-model="isStepSelected"
      @change="toggleStep"
      type="checkbox"
      id="stepSelection"
      name="stepSelection"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Step',
  data() {
    return {
      key: 'C1',
      instrument: 0,
      tones: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
      semitones: 3,
      isStepSelected: false
    };
  },
  methods: {
    handleSelectChange() {
      if (this.isStepSelected) {
        this.addStep();
      }
    },
    toggleStep() {
      if (this.isStepSelected) {
        this.addStep();
        return;
      }

      this.deleteStep();
    },
    addStep() {
      this.$store.commit('addStep', {
        step: this.stepN,
        track: this.track,
        info: {
          selected: true,
          key: this.key,
          instrument: Number(this.instrument)
        }
      });
    },
    deleteStep() {
      this.$store.commit('deleteStep', {
        step: this.stepN,
        track: this.track
      });
    }
  },
  props: {
    step: [String, Object],
    stepN: Number,
    track: Number,
    instruments: Array
  }
});
</script>
