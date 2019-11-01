<template>
  <div class="dice-result">
    <div class="dice-result-item">
      <div class="clip-wrap">
        <div class="dice-result-item-value">
          {{ result.charAt(0) }}
        </div>
      </div>
    </div>
    <div class="dice-result-item">
      <div class="clip-wrap">
        <div class="dice-result-item-value">
          {{ result.charAt(1) }}
        </div>
      </div>
    </div>
    <div class="dice-result-item">
      <div class="clip-wrap">
        <div class="dice-result-item-value">
          {{ result.charAt(2) }}
        </div>
      </div>
    </div>
    <div class="dice-result-item">
      <div class="clip-wrap">
        <div class="dice-result-item-value">
          {{ result.charAt(3) }}
        </div>
      </div>
    </div>
    <div class="clearfix" />
    <div class="dice-result-dot" />
    <svg class="clip-svg">
      <defs>
        <clipPath id="clip-svg" clipPathUnits="objectBoundingBox">
          <polygon points="0.5 0, 1 0.33, 1 0.66, 0.5 1, 0 0.66, 0 0.33" />
        </clipPath>
      </defs>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'DiceResult',
  props: {
    gameValue: {
      type: Number,
      required: true
    },
    gameCounter: {
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

.dice-result-item {
  width: 117px;
  height: 134px;
  margin-right: 12px;
  background: url('~assets/honeycomb_yellow.png') no-repeat transparent;
  float: left;
}

.dice-result-item:nth-child(4) {
  margin-right: 0;
}

.clip-wrap {
  width: 101px;
  height: 107px;
  margin-top: 14px;
  margin-left: 8px;
  -webkit-clip-path: url("#clip-svg");
  clip-path: url("#clip-svg");
}

.dice-result-item-value {
  position: relative;
  width: 35px;
  height: 66px;
  font-size: 65px;
  color: #fff;
  margin: 33px 0 0 34px;
  line-height: 1;
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

.clearfix {
  clear: both;
}
</style>
