<template>
  <div class="stepsDisplay__wrapper">
    <ol class="stepsDisplay__display">
      <li v-for="i in 16" v-bind:key="'step-display-' + i" class="stepsDisplay__item">{{i}}</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'StepsDisplay'
};
</script>

<style lang="scss">
.stepsDisplay {
  &__display {
    color: $white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  &__item {
    font-family: 'Source Sans Pro';
    font-size: 14px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:first-child {
      padding-top: 50px;
    }
  }

  &__wrapper {
    background: $grey;
    padding: 10px;

    &:last-child {
      border-left: 4px solid;
    }
  }
}
</style>