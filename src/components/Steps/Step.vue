<template>
  <div class="step__base">
    <!-- TODO snare shouldn't show key selection as is not possible -->
    
    <v-select
      @input="handleSelectChange"
      v-model="key"
      class="keySelect"
      :options="semiTonesArray"
      :components="{OpenIndicator}"
      :clearable="false"
      :searchable="false"
    ></v-select>

    <v-select
      @input="handleSelectChange"
      v-model="instrument"
      label="name"
      :options="instruments"
      :clearable="false"
      :searchable="false"
      :components="{OpenIndicator}"
      :reduce="instrument => instrument.id"
    ></v-select>

    <label class="label" >
      <input
        v-model="isStepSelected"
        @change="toggleStep"
        class="isacheck"
        type="checkbox"
      />

      <span class="marked"></span>
    </label>
  </div>
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
  data() {
    return {
      key: 'C3',
      instrument: 'kick',
      isStepSelected: false,
      OpenIndicator: {
        render: (createElement: any) =>
          createElement('span', { class: { toggle: true } })
      }
    };
  },
  computed: {
    ...mapGetters(['semiTonesArray'])
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
          instrument: this.instrument
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

<style lang="scss">
.marked {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  border: 1px solid #92859C;;
}

input:checked ~ .marked {
  background-color: #92859C;
  box-shadow: inset 1px 1px 1px 2px;
}

.isacheck {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.label {
  display: block;
  position: relative;
  padding-left: 25px;
  height: 25px;;
  cursor: pointer;
  font-size: 17px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.step {
  &__base {
    display: flex;
    align-items: center;
    height: 35px;
  }
}

.v-select {
  position: relative;
  margin-right: 10px;
}

.vs__dropdown-toggle {
  border-bottom: 1px dashed white;
  cursor: pointer;
}

.vs__search {
  display: none;
}

.vs__dropdown-menu {
  padding: 4px;
  display: block;
  box-sizing: border-box;
  position: absolute;
  top: calc(100% - 1px);
  left: 0;
  z-index: 1000;
  margin: 0;
  width: 100%;
  max-height: 350px;
  overflow-y: auto;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(60, 60, 60, 0.26);
  text-align: left;
  list-style: none;
  background: #fff;

  li {
    font-family: 'Source Sans Pro';
    font-size: 14px;
    cursor: pointer;

    &:hover {
      background: #458b85;
    }
  }
}

.vs__actions {
  display: none;
}

.vs__selected-options {
  display: flex;
  flex-basis: 100%;
  flex-grow: 1;
  flex-wrap: wrap;
  padding: 0 2px;
  position: relative;
  width: 60px;

  .keySelect & {
    width: 40px;
  }
}

.vs__selected {
  display: flex;
  align-items: center;
  border-radius: 4px;
  color: #333;
  line-height: 1.4;
  margin: 4px 2px 0;
  padding: 0 0.25em;
  font-family: 'Source Sans Pro';
  font-weight: 600;
  font-size: 14px;
  color: #b1b480;

  .keySelect & {
    color: #458b85;
  }
}
</style>
