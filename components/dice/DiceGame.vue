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
          :game-counter="gameCounter"
          :result-type="resultType"
        />
      </div>
      <!-- History -->
      <div class="dice-history-wrapper">
        <DiceHistory
          :history="history"
          :game-counter="gameCounter"
        />
        <div class="dice-reverse-wrapper">
          <DiceReverse
            @reverse="reverse"
          />
        </div>
      </div>
      <div class="clearfix" />
    </div>
    <!-- Slider -->
    <div class="dice-slider-wrapper">
      <DiceSlider
        :user-value="userValue"
        :game-value="gameValue"
        :reversed="reversed"
        :game-counter="gameCounter"
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
      gameValue: 0,
      reversed: false,
      score: 350.2,
      resultType: 0, // resultType: 0 - default, 1 - win, 2 - lose
      history: [],
      gameCounter: 0
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
      // Сбрасываем в дефолт стили и классы элементов
      this.resultType = 0
      // Эмуляция получения ответа с сервера
      this.onServerResponse()
    },
    // Эмуляция получения ответа с сервера
    onServerResponse () {
      this.gameValue = this.generateResult()
      this.gameCounter++

      let tmp
      tmp = this.gameValue / 100
      if ((tmp <= this.userValue && this.reversed) || (tmp >= this.userValue && !this.reversed)) {
        tmp *= -1
      }
      this.history.push(tmp)

      setTimeout(() => {
        const snd = new Audio()
        if (tmp > 0) {
          this.resultType = 1
          snd.src = 'Win.mp3'
        } else {
          this.resultType = 2
          snd.src = 'Lose.mp3'
        }
        snd.volume = 0.4
        snd.autoplay = true
      }, 1200)
    },
    // Заглушка генерирующая рандомное число 0 - 9999
    generateResult () {
      return parseInt(Math.random() * 10000)
    }
  }
}
</script>

<style>
@import url('~/assets/fonts/source_sans_pro.css');

.dice-game {
  font-family: "Source Sans Pro", sans-serif;
  width: 813px;
  height: 465px;
  border: 1px solid #000000;
  border-radius: 7px;
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
  width: 121px;
  float: left;
}

.dice-result-wrapper {
  width: 504px;
  float: left;
}

.dice-history-wrapper {
  width: 53px;
  float: right;
}

.dice-history-wrapper .dice-reverse-wrapper {
  display: none;
}

.dice-slider-wrapper {
  width: 743px;
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

.clearfix {
  clear: both;
}

/* 414px  iPhone 6/7/8 */
@media (width: 414px) {
  .dice-game {
    width: 100%;
    height: auto;
    border: 0;
    border-radius: 0;
    background-color: #291a43;
    padding: 15px 10px 15px 9px;
  }

  .dice-score-wrapper {
    width: 100%;
    margin: 0 0 16px 0;
  }

  .dice-result-block {
    width: 100%;
    height: auto;
    margin: 0 auto;
  }

  .dice-user-value-wrapper {
    width: 100%;
    float: none;
    margin-bottom: 5px;
  }

  .dice-result-wrapper {
    width: 100%;
    float: none;
    margin-bottom: 40px;
  }

  .dice-history-wrapper {
    width: 100%;
    float: none;
    position: relative;
    margin-bottom: 15px;
  }

  .dice-history-wrapper .dice-reverse-wrapper {
    display: block;
    width: 34px;
    height: 34px;
    position: absolute;
    right: -5px;
    top: -5px;
  }

  .dice-slider-wrapper {
    width: 100%;
    margin-bottom: 14px;
  }

  .dice-slider-wrapper .dice-reverse-wrapper {
    display: none;
  }

}
</style>
