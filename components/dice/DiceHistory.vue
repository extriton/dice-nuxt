<template>
  <ul class="dice-history">
    <li
      v-for="(item, index) in formatHistory"
      :key="'h' + index"
      class="dice-history-item"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'DiceHistory',
  props: {
    history: {
      type: Array,
      required: true
    }
  },
  computed: {
    formatHistory () {
      return this.history.slice(0, 5)
    }
  }
}
</script>

<style>
.dice-history {
  width: 53px;
  height: 134px;
  padding: 3px 0;
  overflow: hidden;
}

.dice-history-item {
  display: block;
  height: 22px;
  border-radius: 11.5px;
  background-color: rgba(255, 255, 255, 0.1);
  margin-bottom: 10px;
  text-align: center;
}

.dice-history-item:nth-child(1) { opacity: 1 }
.dice-history-item:nth-child(2) { opacity: 0.7 }
.dice-history-item:nth-child(3) { opacity: 0.3 }
.dice-history-item:nth-child(4) { opacity: 0.1 }
.dice-history-item:nth-child(5) { opacity: 0 }
</style>
