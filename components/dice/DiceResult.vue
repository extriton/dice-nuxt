<template>
  <div class="dice-result">
    <div class="dice-honeycomb-wrap">
      <DiceHoneycomb
        :digit="result.charAt(0)"
        :result-type="resultType"
      />
    </div>
    <div class="dice-honeycomb-wrap">
      <DiceHoneycomb
        :digit="result.charAt(1)"
        :result-type="resultType"
      />
    </div>
    <div class="dice-honeycomb-wrap">
      <DiceHoneycomb
        :digit="result.charAt(2)"
        :result-type="resultType"
      />
    </div>
    <div class="dice-honeycomb-wrap">
      <DiceHoneycomb
        :digit="result.charAt(3)"
      />
    </div>
    <div class="clearfix" />
    <div class="dice-result-dot" />
    <svg class="clip-svg">
      <defs>
        <clipPath id="clip-svg" clipPathUnits="objectBoundingBox">
          <polygon points="0.5 0, 1 0.3, 1 0.7, 0.5 1, 0 0.7, 0 0.3" />
        </clipPath>
      </defs>
    </svg>
  </div>
</template>

<script>
import DiceHoneycomb from '~/components/dice/DiceHoneycomb.vue'

export default {
  name: 'DiceResult',
  components: {
    DiceHoneycomb
  },
  props: {
    gameValue: {
      type: Number,
      required: true
    },
    gameCounter: {
      type: Number,
      required: true
    },
    resultType: {
      type: Number,
      required: true
    }
  },
  computed: {
    result () {
      const zeros = '0000'
      let res
      if (this.gameCounter === 0) {
        res = (parseInt(Math.random() * 10000)).toString()
      } else {
        res = this.gameValue.toString()
      }

      if (res.length < 4) {
        res = zeros.substr(0, 4 - res.length) + res
      }

      return res
    }
  }
}
</script>

<style>
.dice-result {
  width: 504px;
  height: 134px;
  position: relative;
}

.dice-honeycomb-wrap {
  width: 117px;
  height: 134px;
  margin-right: 12px;
  float: left;
  background: url('~assets/honeycomb_yellow.png') no-repeat transparent;
  background-size: cover;
}

.dice-honeycomb-wrap:nth-child(4) {
  margin-right: 0;
}

.dice-honeycomb-wrap.win {
  background: url('~assets/honeycomb_green.png') no-repeat transparent;
  background-size: cover;
}

.dice-honeycomb-wrap.lose {
  background: url('~assets/honeycomb_red.png') no-repeat transparent;
  background-size: cover;
}

.dice-result-dot {
  width: 14px;
  height: 17px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: url('~assets/dot_yellow.png') no-repeat transparent;
}

.dice-result-dot.win {
  background: url('~assets/dot_green.png') no-repeat transparent;
}

.dice-result-dot.lose {
  background: url('~assets/dot_red.png') no-repeat transparent;
}

.clearfix {
  clear: both;
}
</style>
