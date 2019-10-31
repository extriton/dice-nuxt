<template>
  <ul class="dice-history">
    <li
      v-for="(item, index) in formatHistory"
      :key="'h' + index"
      class="dice-history-item"
      :class="{ lose: item < 0 }"
    >
      {{ item | formatItem}}
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
      return this.history.slice(-5).reverse()
    }
  },
  filters: {
    formatItem (value) {
      return Math.abs(value).toFixed(2)
    }
  }
}
</script>

<style>
.dice-history {
  width: 53px;
  height: 133px;
  padding-top: 8px;
  overflow: hidden;
}

.dice-history-item {
  display: block;
  height: 22px;
  padding: 3px 13px;
  border-radius: 11.5px;
  background-color: rgba(255, 255, 255, 0.1);
  margin-bottom: 10px;
  text-align: center;
  color: #91ff4a;
  font-size: 12px;
  line-height: 1.33;
  font-weight: normal;
}

.dice-history-item.lose {
  color: #ff6764;
}

.dice-history-item:nth-child(1) { opacity: 1 }
.dice-history-item:nth-child(2) { opacity: 0.7 }
.dice-history-item:nth-child(3) { opacity: 0.3 }
.dice-history-item:nth-child(4) { opacity: 0.1 }
.dice-history-item:nth-child(5) { opacity: 0 }
</style>
