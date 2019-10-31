<template>
  <div class="dice-result">
    {{ gameValue / 100 }}
  </div>
</template>

<script>
export default {
  name: 'DiceResult',
  props: {
    gameValue: {
      type: Number,
      required: true
    }
  }
}
</script>

<style>
.dice-result {
  width: 504px;
  height: 133px;
  padding: 20px;
  background-color: #aaa;
}
</style>
