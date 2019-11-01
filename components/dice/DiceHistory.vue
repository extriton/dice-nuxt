<template>
  <div class="dice-history">
    <transition name="list">
      <ul :key="gameCounter">
        <li
          v-for="item in formatHistory"
          :key="item"
          class="dice-history-item"
          :class="{ lose: item < 0 }"
        >
          {{ item | formatItem }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'DiceHistory',
  filters: {
    formatItem (value) {
      return Math.abs(value).toFixed(2)
    }
  },
  props: {
    history: {
      type: Array,
      required: true
    },
    gameCounter: {
      type: Number,
      required: true
    }
  },
  computed: {
    formatHistory () {
      return this.history.slice(-5).reverse()
    }
  }
}
</script>

<style>
.dice-history {
  width: 53px;
  max-height: 133px;
  padding-top: 8px;
  overflow: hidden;
}

.dice-history-item {
  display: block;
  height: 22px;
  padding: 3px;
  border-radius: 11.5px;
  background-color: rgba(255, 255, 255, 0.1);
  margin-bottom: 10px;
  text-align: center;
  color: #91ff4a;
  font-size: 12px;
  line-height: 16px;
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

.list-enter .dice-history-item:nth-child(1) { opacity: 1 }
.list-enter .dice-history-item:nth-child(2) { opacity: 1 }
.list-enter .dice-history-item:nth-child(3) { opacity: 0.7 }
.list-enter .dice-history-item:nth-child(4) { opacity: 0.3 }
.list-enter .dice-history-item:nth-child(5) { opacity: 0.1 }

.list-enter-to .dice-history-item:nth-child(1) { opacity: 1 }
.list-enter-to .dice-history-item:nth-child(2) { opacity: 0.7 }
.list-enter-to .dice-history-item:nth-child(3) { opacity: 0.3 }
.list-enter-to .dice-history-item:nth-child(4) { opacity: 0.1 }
.list-enter-to .dice-history-item:nth-child(5) { opacity: 0 }

.list-enter-active .dice-history-item {
  transition: opacity .25s ease-out 1.3s;
}

/* Transition styles */
.list-enter-active { transition: transform .25s ease-out 1.3s; }
.list-enter { transform: translateY(-32px); }
.list-enter-to { transform: translateY(0); }
</style>
