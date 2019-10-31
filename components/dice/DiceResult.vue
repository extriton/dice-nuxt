<template>
  <div class="dice-result">
    <div class="dice-result-item">
      <div class="dice-result-item-value">
        {{ result.charAt(0) }}
      </div>
    </div>
    <div class="dice-result-item">
      <div class="dice-result-item-value">
        {{ result.charAt(1) }}
      </div>
    </div>
    <div class="dice-result-item">
      <div class="dice-result-item-value">
        {{ result.charAt(2) }}
      </div>
    </div>
    <div class="dice-result-item">
      <div class="dice-result-item-value">
        {{ result.charAt(3) }}
      </div>
    </div>
    <div class="clearfix" />
    <div class="dice-result-dot" />
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
  background: url('~assets/honeycomb.png') no-repeat transparent;
  float: left;
}

.dice-result-item:nth-child(4) {
  margin-right: 0;
}

.dice-result-item-value {
  width: 35px;
  height: 66px;
  font-size: 65px;
  color: #fff;
  margin: 33px 0 0 42px;
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
