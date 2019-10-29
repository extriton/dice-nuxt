<template>
  <DiceGame />
</template>

<script>
import DiceGame from '~/components/dice/DiceGame.vue'

export default {
  head: {
    title: 'Dice (test)',
    link: [
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' }
    ]
  },
  components: {
    DiceGame
  }
}
</script>
<style lang="scss">
* {
  -moz-user-select: none;
  -webkit-user-select: none;
}
body {
  margin: 0;
}
</style>
