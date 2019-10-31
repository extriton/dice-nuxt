<template>
  <div class="dice-game">
    <!-- Score -->
    <div class="dice-score-wrapper">
      <DiceScore
        :score="score"
        :result-type="resultType"
      />
    </div>
    <!-- Result block -->
    <div class="dice-result-block">
      <!-- User Value -->
      <div class="dice-user-value-wrapper">
        <DiceUserValue
          :user-value="userValue"
          :reversed="reversed"
        />
      </div>
      <!-- Game result -->
      <div class="dice-result-wrapper">
        <DiceResult
          :game-value="gameValue"
        />
      </div>
      <!-- History -->
      <div class="dice-history-wrapper">
        <DiceHistory
          :history="history"
        />
      </div>
      <div class="clearfix" />
    </div>
    <!-- Slider -->
    <div class="dice-slider-wrapper">
      <DiceSlider
        :user-value="userValue"
        :game-value="gameValue"
        :reversed="reversed"
        @changeUserValue="changeUserValue"
      />
      <div class="dice-reverse-wrapper">
        <DiceReverse
          @reverse="reverse"
        />
      </div>
    </div>
    <!-- Button -->
    <div class="dice-play-button-wrapper">
      <DicePlayButton
        @dicePlay="dicePlay"
      />
    </div>
  </div>
</template>

<script>
import DiceScore from '~/components/dice/DiceScore.vue'
import DiceUserValue from '~/components/dice/DiceUserValue.vue'
import DiceResult from '~/components/dice/DiceResult.vue'
import DiceHistory from '~/components/dice/DiceHistory.vue'
import DiceSlider from '~/components/dice/DiceSlider.vue'
import DiceReverse from '~/components/dice/DiceReverse.vue'
import DicePlayButton from '~/components/dice/DicePlayButton.vue'

export default {
  name: 'DiceGame',
  components: {
    DiceScore,
    DiceUserValue,
    DiceResult,
    DiceHistory,
    DiceSlider,
    DiceReverse,
    DicePlayButton
  },
  data () {
    return {
      userValue: 50,
      gameValue: -1,
      reversed: false,
      score: 350.2,
      // resultType: 0 - default, 1 - win, 2 - lose
      resultType: 0,
      history: [13.12, -15.4, -6.2, 52.30, 17.12, -5.65]
    }
  },
  methods: {
    // Реверс: больше - меньше
    reverse () {
      this.reversed = !this.reversed
    },
    // Устанавливает новое занчение userValue по событию из слайдера
    changeUserValue (value) {
      this.userValue = value
    },
    // Начинает розыгрыш
    dicePlay () {
      this.gameValue = this.generateResult()
      // For test: push random value -99.99 .. 99.99 to history array
      const tmp = (parseInt(Math.random() * 20000) - 9999) / 100
      this.history.push(tmp)
    },
    // Заглушка генерирующая рандомное число 0 - 9999
    generateResult () {
      return parseInt(Math.random() * 10000)
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap');

.dice-game {
  font-family: 'Source Sans Pro', sans-serif;
  width: 813px;
  height: 465px;
  border-radius: 7px;
  border: solid 1px #000000;
  background-color: #291a43;
  padding-top: 18px;
}

.dice-score-wrapper {
  width: 743px;
  margin: 0 auto 29px auto;
}

.dice-result-block {
  width: 743px;
  height: 133px;
  margin: 0 auto 45px auto;
}

.dice-user-value-wrapper {
  display: block;
  width: 121px;
  float: left;
}

.dice-result-wrapper {
  display: block;
  width: 504px;
  float: left;
}

.dice-history-wrapper {
  display: block;
  width: 53px;
  float: right;
}

.dice-slider-wrapper {
  width: 743px;
  margin: 0 auto;
  position: relative;
  margin: 0 auto 44px auto;
}

.dice-slider-wrapper .dice-reverse-wrapper {
  width: 34px;
  height: 34px;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
}
/*
.dice-play-button-wrapper {
  height: 50px;
}
*/

.clearfix {
  clear: both;
}
</style>
