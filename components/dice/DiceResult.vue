<template>
  <div class="dice-result">
    {{ result }}
  </div>
</template>

<script>
export default {
  name: 'DiceResult',
  props: {
    gameValue: {
      type: Number,
      required: true
    },
    gameCounter: {
      type: Number,
      required: true
    }
  },
  computed: {
    result () {
      const zeros = '0000'
      let res
      if (this.gameCounter === 0) {
        res = (parseInt(Math.random() * 10000)).toString()
      } else {
        res = this.gameValue.toString()
      }

      if (res.length < 4) {
        res = zeros.substr(0, 4 - res.length) + res
      }

      return res
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
