<template>
  <div class="page">
    <div class="dice-game-wrapper">
      <DiceGame />
    </div>
  </div>
</template>

<script>
import DiceGame from '~/components/dice/DiceGame.vue'

export default {
  head: {
    title: 'Dice'
  },
  components: {
    DiceGame
  }
}
</script>
<style>
.page {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  white-space: nowrap;
  text-align: center;
  font-size: 0;
  background-color: #381960;
}

.page:before {
  height: 100%;
  display: inline-block;
  vertical-align: middle;
  content: '';
}

.dice-game-wrapper {
  display: inline-block;
  white-space: normal;
  vertical-align: middle;
  text-align: left;
}
</style>
