<template>
  <div
    class="dice-slider"
    @mousemove="doDrag"
    @mouseleave="stopDrag"
    @mouseup.left="stopDrag"
  >
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
        @mousedown.left.self="startDrag"
      >
        {{ runnerValue }}
      </div>
      <ul
        class="rule"
        @click.capture="shiftRunner"
        ref="rule"
      >
        <li
          v-for="item in 101"
          :key="'n' + item"
          class="rule-item"
          :style="setRuleItemStyle(item)"
        />
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DiceSlider',
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
  data () {
    return {
      captionItems: [0, 25, 50, 75, 100],
      drag: false,
      ruleWidth: 0,
      startDragX: 0,
      startDragValue: 0
    }
  },
  computed: {
    // Возвращает значение отображаемое внутри триггера если он перетягивается мышкой
    runnerValue () {
      if (this.drag) {
        return parseInt(this.userValue)
      } else {
        return ''
      }
    }
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

      if ((value < this.userValue + 1 && this.reversed) || (value > this.userValue + 1 && !this.reversed)) {
        style.backgroundColor = 'red'
      }

      const dx = Math.abs(value - this.userValue - 1)
      if (dx <= 4) {
        const y = Math.sqrt(25 - dx * dx)
        style.top = `calc(${(y - 1) * 32}% - 14px)`
      }

      return style
    },
    // Позиционирует триггер
    setRunnerStyle () {
      const style = {
        left: this.userValue + '%'
      }
      return style
    },
    // Начало перетягивания триггера мышкой
    startDrag (e) {
      this.startDragX = e.clientX
      this.startDragValue = this.userValue
      this.ruleWidth = this.$refs.rule.getBoundingClientRect().width
      this.drag = true
    },
    // Завршение перетягивания триггера мышкой
    stopDrag (e) {
      this.drag = false
    },
    // Перетягивание триггера мышкой
    doDrag (e) {
      if (this.drag) {
        let newValue = this.startDragValue + (e.clientX - this.startDragX) / this.ruleWidth * 100
        // this.clientX = e.clientX
        newValue = parseInt(newValue * 100) / 100
        // newValue = parseInt((e.offsetX + e.target.offsetLeft - e.target.offsetWidth / 2) / e.target.parentNode.offsetWidth * 10000) / 100
        if (newValue < 0) { newValue = 0 }
        if (newValue > 100) { newValue = 100 }
        this.changeUserValue(newValue)
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

      const deltaValue = (newValue - this.userValue) / 20
      const intervalId = setInterval(() => {
        if (this.userValue === newValue) {
          clearInterval(intervalId)
          return
        }
        if ((deltaValue > 0 && this.userValue + deltaValue > newValue) ||
          (deltaValue < 0 && this.userValue + deltaValue < newValue)) {
          this.changeUserValue(newValue)
        } else {
          this.changeUserValue(this.userValue + deltaValue)
        }
      }, 10)
    },
    // Эмит события родителю на изменение userValue
    changeUserValue (value) {
      this.$emit('changeUserValue', value)
    }
  }
}
</script>

<style>
.dice-slider {
  height: 80px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.25);
  padding: 12px 24px 0 24px;;
  box-sizing: border-box;
  position: relative;
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
</style>
