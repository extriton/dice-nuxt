<template>
  <div class="dice-score">
    <div class="left-corner">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="30" viewBox="0 0 24 30">
        <path :fill="cornerStyle.color" :fill-opacity="cornerStyle.opacity" fill-rule="nonzero" d="M3 0A3 3 0 0 0 .504 4.664L7.394 15 .505 25.336A3 3 0 0 0 3 30h18a3 3 0 0 0 3-3v-1h-.999L23 27a2 2 0 0 1-1.85 1.995L21 29H3a2 2 0 0 1-1.664-3.11l6.89-10.335a1 1 0 0 0 0-1.11L1.337 4.11A2 2 0 0 1 3 1h8V0z" />
      </svg>
    </div>
    <div
      class="dice-score-value"
      :style="borderStyle"
    >
      Выигрыш: <span class="value">{{ formatScore }} &#8381;</span>
    </div>
    <div class="right-corner">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="30" viewBox="0 0 24 30">
        <path :fill="cornerStyle.color" :fill-opacity="cornerStyle.opacity" fill-rule="nonzero" d="M21 0a3 3 0 0 1 2.496 4.664L16.606 15l6.89 10.336A3 3 0 0 1 21 30H3a3 3 0 0 1-3-3v-1h.999L1 27a2 2 0 0 0 1.85 1.995L3 29h18a2 2 0 0 0 1.664-3.11l-6.89-10.335a1 1 0 0 1 0-1.11l6.89-10.336A2 2 0 0 0 21 1h-8V0z" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DiceScore',
  props: {
    score: {
      type: Number,
      required: true
    },
    resultType: {
      type: Number,
      required: true
    }
  },
  computed: {
    // Форматирует сумму
    formatScore () {
      return parseFloat(this.score).toFixed(2)
    },
    // Возвращает объект стиля (color, opacity) для svg corner в зависимости от результат игры
    cornerStyle () {
      // Default
      const style = {
        color: '#FFF',
        opacity: 0.1
      }
      // Win
      if (this.resultType === 1) {
        style.color = '#64FF00'
        style.opacity = 0.3
      }
      // Lose
      if (this.resultType === 2) {
        style.color = '#FF3E3E'
        style.opacity = 0.3
      }
      return style
    },
    // Возвращает объект стиля (color) для рамки центрального блока
    borderStyle () {
      // Default
      const style = {
        borderColor: 'rgba(255, 255, 255, 0.1)'
      }
      // Win
      if (this.resultType === 1) {
        style.borderColor = 'rgba(100, 255, 0, 0.3)'
      }
      // Lose
      if (this.resultType === 2) {
        style.borderColor = 'rgba(255, 62, 62, 0.4)'
      }
      return style
    }
  }
}
</script>

<style>
.dice-score {
  width: 237px;
  height: 30px;
  margin: 0 auto;
  position: relative;
}

.dice-score .dice-score-value {
  position: absolute;
  left: 13px;
  display: inline-block;
  width: 211px;
  height: 30px;
  line-height: 30px;
  border-radius: 5px;
  border: solid 1px rgba(255, 255, 255, 0.1);
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  color: #a698af;
  text-align: center;
}

.dice-score .dice-score-value .value {
    font-weight: bold;
    color: #fff;
}

.dice-score .left-corner,
.dice-score .right-corner {
    display: inline-block;
    width: 24px;
    height: 30px;
    position: absolute;
    top: 6px;
}

.dice-score .left-corner {
    left: 0;
}

.dice-score .right-corner {
    right: 0;
}
</style>
