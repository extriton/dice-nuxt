<template>
  <div class="dice-user-value">
    <span class="value">{{ formatUserValue }}</span>
    <span class="reversed">{{ formatReversed }}</span>
  </div>
</template>

<script>
export default {
  name: 'DiceUserValue',
  props: {
    userValue: {
      type: Number,
      required: true
    },
    reversed: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    // Форматирует userValue для вывода на экран
    formatUserValue () {
      return parseFloat(this.userValue).toFixed(2)
    },
    // Форматирует reversed для вывода на экран
    formatReversed () {
      return this.reversed ? ' <' : ' >'
    }
  }
}
</script>

<style>
.dice-user-value {
  margin-top: 67px;
  font-size: 28px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  color: #5e516d;
}
</style>
