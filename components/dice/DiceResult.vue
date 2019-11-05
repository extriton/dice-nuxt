<template>
  <div class="dice-result">
    <div class="dice-honeycomb-wrap">
      <div class="dice-honeycomb-img" :class="classObj">
        <img src="/honeycomb_yellow.png" class="yellow">
        <img src="/honeycomb_green.png" class="green">
        <img src="/honeycomb_red.png" class="red">
      </div>
      <DiceHoneycomb
        :digit="parseInt(result.charAt(0))"
        :delay="0"
        :game-counter="gameCounter"
      />
    </div>
    <div class="dice-honeycomb-wrap">
      <div class="dice-honeycomb-img" :class="classObj">
        <img src="/honeycomb_yellow.png" class="yellow">
        <img src="/honeycomb_green.png" class="green">
        <img src="/honeycomb_red.png" class="red">
      </div>
      <DiceHoneycomb
        :digit="parseInt(result.charAt(1))"
        :delay="100"
        :game-counter="gameCounter"
      />
    </div>
    <div class="dice-honeycomb-wrap">
      <div class="dice-honeycomb-img" :class="classObj">
        <img src="/honeycomb_yellow.png" class="yellow">
        <img src="/honeycomb_green.png" class="green">
        <img src="/honeycomb_red.png" class="red">
      </div>
      <DiceHoneycomb
        :digit="parseInt(result.charAt(2))"
        :delay="200"
        :game-counter="gameCounter"
      />
    </div>
    <div class="dice-honeycomb-wrap">
      <div class="dice-honeycomb-img" :class="classObj">
        <img src="/honeycomb_yellow.png" class="yellow">
        <img src="/honeycomb_green.png" class="green">
        <img src="/honeycomb_red.png" class="red">
      </div>
      <DiceHoneycomb
        :digit="parseInt(result.charAt(3))"
        :delay="300"
        :game-counter="gameCounter"
      />
    </div>
    <div class="clearfix" />
    <div class="dice-result-dot">
      <div class="dice-dot-img" :class="classObj">
        <img src="/dot_yellow.png" class="yellow">
        <img src="/dot_green.png" class="green">
        <img src="/dot_red.png" class="red">
      </div>
    </div>
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
    },
    // Выставлеят класс для блока и корнеров в зависиомсти от типа результата
    classObj () {
      return {
        'default': this.resultType === 0,
        'win': this.resultType === 1,
        'lose': this.resultType === 2
      }
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

.dice-result img {
  transition: opacity .1s ease-out;
  opacity: 0;
}

.dice-honeycomb-wrap {
  position: relative;
  width: 117px;
  height: 134px;
  margin-right: 12px;
  float: left;
}

.dice-honeycomb-wrap:nth-child(4) {
  margin-right: 0;
}

.dice-honeycomb-img,
.dice-dot-img {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
}

.dice-honeycomb-img img {
  position: absolute;
  top: 0;
  left: 0;
  width: 117px;
  height: 134px;
}

.dice-result-dot {
  width: 20px;
  height: 22px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
}

.dice-dot-img img {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 22px;
}

.dice-honeycomb-img.default .yellow,
.dice-honeycomb-img.win .green,
.dice-honeycomb-img.lose .red,
.dice-dot-img.default .yellow,
.dice-dot-img.win .green,
.dice-dot-img.lose .red {
  opacity: 1;
}

.clearfix {
  clear: both;
}
</style>
