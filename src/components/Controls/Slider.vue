<template>
  <div class="slider__wrapper">
    <div class="slider__labels">
      <span>{{label}}</span>
      <span v-if="showValue">{{sliderValue}} {{valueLabel}}</span>
    </div>

    <vue-slider
      class="slider__slider"
      v-model="sliderValue"
      :drag-on-click="true"
      :useKeyboard="true"
      :tooltip="'none'"
      :min="min"
      :max="max"
      :interval="interval"
      :process-style="{ backgroundColor: '#458B85' }"
    >
      <template v-slot:dot="{ value, focus }">
        <div :class="['slider__dot', { focus }]"></div>
      </template>
    </vue-slider>
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/antd.css';

export default {
  name: 'Slider',
  computed: {
    sliderValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$store.commit('modifyTransportParam', {
          transportParam: this.method,
          value: val
        });
      }
    }
  },
  components: {
    VueSlider
  },
  props: {
    label: String,
    valueLabel: String,
    min: Number,
    max: Number,
    mutation: Function,
    value: Number,
    method: String,
    interval: Number,
    showValue: {
      default: true,
      type: Boolean
    }
  }
};
</script>

<style lang="scss">
.slider {
  &__wrapper {
    width: 153px;
    color: $white;
    padding: 0 10px;
  }

  &__labels {
    display: flex;
    justify-content: space-around;
    font-family: 'Source Sans Pro';
    font-weight: 400;
    font-size: 15px;
    color: $blue;
  }

  &__slider {
    flex: 1;
    max-width: 153px;
    padding-top: 15px !important;

    &:not(:last-child) {
      margin-right: 5px;
    }

    .vue-slider-rail {
      height: 2px;
      border-radius: 0;
    }
  }

  &__dot {
    width: 100%;
    height: 100%;
    border-radius: 0;
    background-color: #458b85;
    transition: all 0.3s;
  }
}
</style>