<template>
  <div class="dice-honeycomb">
    <div class="clip-wrap">
      <transition name="odometr">
        <ul
          ref="digits"
          :key="transitionKey"
          class="dice-honeycomb-digits"
          :class="{animated: animated}"
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
      transitionKey: false,
      digitsArray: [this.digit],
      animated: false
    }
  },
  computed: {
    outArray () {
      return this.digitsArray
    }
  },
  watch: {
    gameCounter (val) {
      if (val > 0) {
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
        /*
        if (this.digit > 0) {
          digitsArray.push(this.digit - 1)
        } else {
          digitsArray.push(9)
        }
        */
        this.digitsArray = digitsArray

        setTimeout(() => {
          this.transitionKey = !this.transitionKey
          setTimeout(() => {
            this.digitsArray = this.digitsArray.slice(-1)
            this.animated = true
            setTimeout(() => {
              this.animated = false
            }, 200)
          }, 1000)
        }, this.delay)
      }
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
  transform: translateY(calc(-100% + 107px));
}

.odometr-enter-active {
  transition: transform 1s cubic-bezier(0.29, 0.01, .02, 0.99);
}
.odometr-enter { transform: translateY(0); }
.odometr-enter-to { transform: translateY(calc(-100% + 107px)); }

.animated {
  animation: bounce .2s infinite;
}

@keyframes bounce {
  0% {
      transform: translateY(0);
  }
  50% {
      transform: translateY(-5%);
  }
  75% {
      transform: translateY(2.5%);
  }
  100% {
      transform: translateY(0);
  }
}
</style>
