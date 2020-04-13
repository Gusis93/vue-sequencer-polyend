<template>
  <li :class="{step__base: true, animate: step.animate}">
    <v-select
      v-model="key"
      class="step__keySelect"
      :options="semiTonesArray"
      :clearable="false"
      :searchable="false"
      :disabled="instrument === 'snare'"
    ></v-select>

    <v-select
      v-model="instrument"
      label="name"
      :options="instruments"
      class="step__instrumentSelect"
      :clearable="false"
      :searchable="false"
      :reduce="instrument => instrument.id"
    ></v-select>

    <label class="step__selectCheckboxLabel">
      <input v-model="isSelected" class="step__selectCheckbox" type="checkbox" />

      <span class="step__selectCheckboxMark"></span>
    </label>
  </li>
</template>

<script lang="ts">
import Vue from 'vue';
import vSelect from 'vue-select';
import { mapGetters } from 'vuex';

export default Vue.extend({
  name: 'Step',
  components: {
    vSelect
  },
  computed: {
    ...mapGetters(['semiTonesArray']),
    isSelected: {
      get() {
        return this.step.selected;
      },
      set(stepSelected) {
        if (stepSelected) {
          (this as any).addStep();
          return;
        }

        (this as any).modifyStep('selected', false);
      }
    },
    key: {
      get(): string {
        return this.step.key;
      },
      set(key: string) {
        (this as any).modifyStep('key', key);
      }
    },
    instrument: {
      get(): string {
        return this.step.instrument;
      },
      set(instrument): void {
        (this as any).modifyStep('instrument', instrument);
      }
    }
  },
  methods: {
    modifyStep(action: string, value: [string, boolean]) {
      this.$store.dispatch('modifyStep', {
        step: this.stepN,
        track: this.track,
        action,
        value
      });
    },
    addStep: function() {
      this.$store.commit('addStep', {
        step: this.stepN,
        track: this.track,
        stepInfo: {
          selected: true,
          animate: false,
          key: this.key,
          instrument: this.instrument
        }
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

<style lang="scss">
@import "../../styles/vs-select.scss";

@keyframes transportPlaying {
  0%,
  100% {
    box-shadow: inset 1px 1px 1px 2px;
    background-color: $pink;
  }
  50% {
    box-shadow: inset -1px -1px 1px 2px;
    background-color: $blue;
  }
}

.step {
  &__base {
    display: flex;
    align-items: center;
    height: 35px;
  }

  &__selectCheckboxLabel {
    display: block;
    position: relative;
    padding-left: 25px;
    height: 25px;
    cursor: pointer;
    font-size: 17px;
    user-select: none;
  }

  &__selectCheckbox {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  &__selectCheckboxMark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    border: 1px solid $pink;

    .step__selectCheckbox:checked ~ & {
      background-color: $pink;
      box-shadow: inset 1px 1px 1px 2px;

      .animate & {
        animation: transportPlaying 500ms;
        animation-timing-function: ease-in-out;
        animation-direction: alternate;
      }
    }
  }
}
</style>
