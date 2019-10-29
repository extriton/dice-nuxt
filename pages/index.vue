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
  height: 100vh;
  background-color: #381960;
  padding: 100px 50px;
}

.dice-game-wrapper {
  margin: 0 auto;
  margin-left: calc((100% - 813px) / 2 );
}
</style>
