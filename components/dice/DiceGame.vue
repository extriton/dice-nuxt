<template>
  <div class="dice-game">
    <div class="dice-slider-wrapper">
      <DiceSlider />
    </div>
  </div>
</template>

<script>
import DiceSlider from '~/components/dice/DiceSlider.vue'

export default {
  name: 'DiceGame',
  components: {
    DiceSlider
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap');
.dice-game {
  font-family: 'Source Sans Pro', sans-serif;
  width: 813px;
  height: 465px;
  border-radius: 7px;
  border: solid 1px #000000;
  background-color: #291a43;
  padding-top: 20px;
}
</style>
