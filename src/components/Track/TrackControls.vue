<template>
  <div class="track__controls">
    <v-select
      @input="selectAllKeys"
      v-model="key"
      class="step__keySelect"
      :options="semiTonesArray"
      :clearable="false"
      :searchable="false"
    ></v-select>

    <v-select
      @input="selectAllInstruments"
      v-model="instrument"
      label="name"
      class="step__instrumentSelect"
      :options="instruments"
      :clearable="false"
      :searchable="false"
      :reduce="instrument => instrument.id"
    ></v-select>

    <label class="step__selectCheckboxLabel">
      <input v-model="allSelected" class="step__selectCheckbox" type="checkbox" @change="toggleSteps" />

      <span class="step__selectCheckboxMark"></span>
    </label>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import vSelect from 'vue-select';

export default {
  name: 'TrackControls',
  components: {
    vSelect
  },
  data() {
    return {
      allSelected: false,
      key: 'C3',
      instrument: 'kick'
    };
  },
  computed: {
    ...mapGetters(['semiTonesArray'])
  },
  methods: {
    selectAllKeys() {
      this.modifyParams({ key: this.key });
    },
    selectAllInstruments() {
      this.modifyParams({ instrument: this.instrument });
    },
    modifyParams(params) {
      this.$store.dispatch('modifySeveralSteps', {
        track: this.track,
        params
      });
    },
    toggleSteps() {
      if (this.allSelected) {
        this.$store.commit('selectAllSteps', this.track);
        return;
      }

      this.modifyParams({ selected: false, animate: false });
    }
  },
  props: {
    track: Number,
    instruments: Array
  }
};
</script>

<style lang="scss">
.track {
  &__controls {
    display: flex;
    justify-content: flex-end;
  }
}
</style>