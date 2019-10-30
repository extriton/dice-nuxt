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
      <!-- History -->
      <div class="dice-history-wrapper">
        <DiceHistory
          :history="history"
        />
      </div>
      <div class="clearfix"></div>
    </div>
    <!-- Slider -->
    <div class="dice-slider-wrapper">
      <DiceSlider
        :user-value="userValue"
        :reversed="reversed"
        @changeUserValue="changeUserValue"
      />
      <div class="dice-reverse-wrapper">
        <DiceReverse
          @reverse="reverse"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DiceScore from '~/components/dice/DiceScore.vue'
import DiceUserValue from '~/components/dice/DiceUserValue.vue'
import DiceHistory from '~/components/dice/DiceHistory.vue'
import DiceSlider from '~/components/dice/DiceSlider.vue'
import DiceReverse from '~/components/dice/DiceReverse.vue'

export default {
  name: 'DiceGame',
  components: {
    DiceScore,
    DiceUserValue,
    DiceHistory,
    DiceSlider,
    DiceReverse
  },
  data () {
    return {
      userValue: 50,
      gameValue: 0,
      reversed: false,
      score: 350.2,
      result: 0,
      // resultType: 0 - default, 1 - win, 2 - lose
      resultType: 2,
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
  height: 134px;
  margin: 0 auto 50px auto;
  /*border: 1px solid grey; */
}

.dice-user-value-wrapper {
  display: block;
  width: 121px;
  float: left;
}

.dice-history-wrapper {
  display: block;
  width: 53px;
  height: 134px;
  border: 1px solid #555;
  float: right;
  display: none;
}

.dice-slider-wrapper {
  width: 743px;
  margin: 0 auto;
  position: relative;
}

.dice-slider-wrapper .dice-reverse-wrapper {
  width: 34px;
  height: 34px;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
}

.clearfix {
  clear: both;
}
</style>
