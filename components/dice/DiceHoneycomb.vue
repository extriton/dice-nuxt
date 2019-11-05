<template>
  <div class="dice-honeycomb">
    <div class="clip-wrap">
      <transition
        name="odometr"
        @before-enter="beforeEnter"
      >
        <ul
          ref="digits"
          :key="gameCounter"
          class="dice-honeycomb-digits"
          :class="classObj"
        >
          <li
            v-for="(item, index) in outArray"
            :key="'d' + index"
            class="dice-honeycomb-digit"
          >
            {{ item }}
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DiceHoneycomb',
  props: {
    digit: {
      type: Number,
      required: true
    },
    delay: {
      type: Number,
      required: true
    },
    gameCounter: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      digitsArray: [this.digit],
      animated: false
    }
  },
  computed: {
    outArray () {
      return this.digitsArray
    },
    classObj () {
      const styleName = 'delay-' + this.delay
      return {
        [styleName]: true,
        animated: this.animated
      }
    }
  },
  methods: {
    beforeEnter () {
      // Создаём массив цифр
      const digitsArray = []
      const oldDigit = this.digitsArray[this.digitsArray.length - 1]
      for (let i = oldDigit; i >= 0; i--) {
        digitsArray.push(i)
      }
      for (let i = 9; i >= 0; i--) {
        digitsArray.push(i)
      }
      for (let i = 9; i >= parseInt(this.digit); i--) {
        digitsArray.push(i)
      }
      this.digitsArray = digitsArray

      // Запускаем отолженную анимацию
      setTimeout(() => {
        this.animated = true
        this.digitsArray = this.digitsArray.slice(-1)
        setTimeout(() => {
          this.animated = false
        }, 200)
      }, 1000 + this.delay)
    }
  }
}
</script>

<style>
.dice-honeycomb {
  width: 117px;
  height: 134px;
  overflow: hidden;
}

.clip-wrap {
  width: 101px;
  height: 107px;
  margin-top: 14px;
  margin-left: 8px;
  overflow: hidden;
}

.dice-honeycomb-digit {
  position: relative;
  width: 35px;
  height: 107px;
  font-size: 65px;
  font-weight: bold;
  color: #fff;
  margin: 0 0 0 34px;
  line-height: 103px;
}

.odometr-enter-active {
  transition: transform 1s cubic-bezier(0.29, 0.01, .02, 0.99);
}
.odometr-enter-active.delay-100 { transition-delay: .1s }
.odometr-enter-active.delay-200 { transition-delay: .2s }
.odometr-enter-active.delay-300 { transition-delay: .3s }

.odometr-enter { transform: translateY(0); }
.odometr-enter-to { transform: translateY(calc(-100% + 100px)); }

.animated {
  animation: bounce .2s infinite;
}

@keyframes bounce {
  0% {
      transform: translateY(-7px);
  }
  20% {
      transform: translateY(-7px);
  }
  40% {
      transform: translateY(-6px);
  }
  60% {
      transform: translateY(-3px);
  }
  80% {
      transform: translateY(3px);
  }
  100% {
      transform: translateY(0);
  }
}

/* 414px  iPhone 6/7/8 */
@media (width: 414px) {
  .dice-honeycomb {
    width: 96px;
    height: 110px;
    overflow: hidden;
  }

  .clip-wrap {
    width: 80px;
    height: 86px;
    margin-top: 13px;
    margin-left: 2px;
    overflow: hidden;
  }

  .dice-honeycomb-digit {
    position: relative;
    width: 29px;
    height: 80px;
    font-size: 53px;
    font-weight: bold;
    color: #fff;
    margin: 0 0 0 34px;
    line-height: 76px;
  }

  .odometr-enter-to { transform: translateY(calc(-100% + 71px)); }
}
</style>
