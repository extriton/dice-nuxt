<template>
  <div class="dice-slider">
    <ul class="caption">
      <li
        v-for="item in captionItems"
        :key="'c' + item"
        class="caption-item"
        :style="setCaptionItemStyle(item)"
      >
        {{ item }}
      </li>
    </ul>
    <div class="rule-wrapper">
      <div
        class="runner"
        :class="{ dragged: drag }"
        :style="setRunnerStyle()"
        @mousedown.left="startDrag"
        @mousemove="doDrag"
        @mouseup.left="stopDrag"
        @mouseleave="stopDrag"
      >
        {{ runnerValue }}
      </div>
      <ul class="rule" @click.capture="shiftRunner">
        <li
          v-for="item in 101"
          :key="'n' + item"
          class="rule-item"
          :style="setRuleItemStyle(item)"
        />
      </ul>
    </div>
    <div class="dice-reverse-wrapper">
      <DiceReverse />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import DiceReverse from '~/components/dice/DiceReverse.vue'

export default {
  name: 'DiceSlider',
  components: {
    DiceReverse
  },
  data () {
    return {
      captionItems: [0, 25, 50, 75, 100],
      drag: false
    }
  },
  computed: {
    // Возвращает значение отображаемое внутри триггера если он перетягивается мышкой
    runnerValue () {
      if (this.drag) {
        return this.USER_VALUE
      } else {
        return ''
      }
    },
    ...mapGetters({
      USER_VALUE: 'dice/USER_VALUE',
      REVERSE: 'dice/REVERSE'
    })
  },
  methods: {
    // Позиционирует числа заголовка captionItems[] в заивсимости от значения
    setCaptionItemStyle (value) {
      const style = {
        left: value + '%'
      }
      return style
    },
    // Позиционирует деления линейки
    setRuleItemStyle (value) {
      const style = {
        left: `calc((100% - 3px) / 100 * ${value - 1})`,
        backgroundColor: '#50CC00'
      }

      if ((value < this.USER_VALUE + 1 && this.REVERSE) || (value > this.USER_VALUE + 1 && !this.REVERSE)) {
        style.backgroundColor = 'red'
      }

      const dx = Math.abs(value - this.USER_VALUE - 1)
      if (dx <= 4) {
        const y = Math.sqrt(25 - dx * dx)
        style.top = `calc(${y * 27}% - 16px)`
      }

      return style
    },
    // Позиционирует триггер
    setRunnerStyle () {
      const style = {
        left: this.USER_VALUE + '%'
      }
      return style
    },
    // Начало перетягивания триггера мышкой
    startDrag () {
      this.drag = true
    },
    // Завршение перетягивания триггера мышкой
    stopDrag () {
      this.drag = false
    },
    // Перетягивания триггера мышкой
    doDrag (e) {
      if (this.drag) {
        let newValue
        newValue = parseInt((e.offsetX + e.target.offsetLeft - e.target.offsetWidth / 2) / e.target.parentNode.offsetWidth * 10000) / 100
        if (newValue < 0) { newValue = 0 }
        if (newValue > 100) { newValue = 100 }
        this.SET_USER_VALUE(newValue)
      }
    },
    // Перемещение триггера при клике по линейке
    shiftRunner (e) {
      let newValue

      if (e.target._prevClass === 'rule-item') {
        newValue = parseInt((e.offsetX + e.target.offsetLeft) / e.target.parentNode.offsetWidth * 10000) / 100
      } else {
        newValue = parseInt(e.offsetX / e.target.offsetWidth * 10000) / 100
      }

      const deltaValue = (newValue - this.USER_VALUE) / 20
      const intervalId = setInterval(() => {
        if (this.USER_VALUE === newValue) {
          clearInterval(intervalId)
          return
        }
        if ((deltaValue > 0 && this.USER_VALUE + deltaValue > newValue) ||
          (deltaValue < 0 && this.USER_VALUE + deltaValue < newValue)) {
          this.SET_USER_VALUE(newValue)
        } else {
          this.SET_USER_VALUE(this.USER_VALUE + deltaValue)
        }
      }, 10)
    },
    ...mapMutations({
      SET_USER_VALUE: 'dice/SET_USER_VALUE'
    })
  }
}
</script>

<style>
.dice-slider {
  width: 743px;
  height: 80px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.25);
  padding: 12px 24px 0 24px;;
  box-sizing: border-box;
  position: relative;
  margin: 0 auto;
}

.dice-slider .caption {
  position: relative;
  height: 16px;
}

.dice-slider .caption .caption-item {
  position: absolute;
  height: 16px;
  opacity: 0.5;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: #a698af;
  transform: translateX(-50%);
}

.dice-slider .caption .caption-item:last-child {
  transform: translateX(-100%);
}

.dice-slider .rule-wrapper {
  position: relative;
  margin-top: 12px;
}

.dice-slider .rule-wrapper .rule {
  position: relative;
  width: 100%;
  height: 23px;
  box-sizing: border-box;
  margin-bottom: 40px;
}

.dice-slider .rule-wrapper .rule:hover {
  cursor: pointer;
}

.dice-slider .rule-wrapper .rule .rule-item {
  width: 20px;
  position: absolute;
  top: 0;
  width: 2px;
  height: 8px;
}

.dice-slider .rule-wrapper .runner {
  position: absolute;
  top: -20px;
  width: 28px;
  height: 28px;
  line-height: 28px;
  font-size: 12px;
  border-radius: 100%;
  color: 291944;
  text-align: center;
  transform: translateX(-50%);
  background: url('~assets/arrows.png') no-repeat #FFF;
  background-position: 4px 10px;
}

.dice-slider .rule-wrapper .runner:hover {
  background-color: #FFEF00;
  cursor: pointer;
}

.dice-slider .rule-wrapper .runner.dragged {
  background-color: #FFEF00;
  cursor: pointer;
  background-image: none;
}

.dice-slider .dice-reverse-wrapper {
  width: 29px;
  height: 29px;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
}
</style>
