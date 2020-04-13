<template>
  <div class="track__controls">
    <v-select
      @input="selectAllKeys"
      v-model="key"
      class="keySelect"
      :options="semiTonesArray"
      :clearable="false"
      :searchable="false"
    ></v-select>

    <v-select
      @input="selectAllInstruments"
      v-model="instrument"
      label="name"
      :options="instruments"
      :clearable="false"
      :searchable="false"
      :reduce="instrument => instrument.id"
    ></v-select>

    <label class="label">
      <input v-model="allSelected" class="isacheck" type="checkbox" @change="toggleSteps" />

      <span class="marked"></span>
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
      this.$store.commit('selectAllKeys', {
        track: this.track,
        key: this.key
      });
    },
    selectAllInstruments() {
      this.$store.commit('selectAllInstruments', {
        track: this.track,
        instrument: this.instrument
      });
    },
    toggleSteps() {
      if (this.allSelected) {
        this.$store.commit('selectAllSteps', this.track);
        return;
      }

      this.$store.commit('deselectSteps', this.track);
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