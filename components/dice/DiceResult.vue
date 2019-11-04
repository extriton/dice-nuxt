<template>
  <div class="dice-result">
    <div class="dice-honeycomb-wrap">
      <div class="dice-honeycomb-img" :class="classObj">
        <img src="/honeycomb_yellow.png" class="yellow" />
        <img src="/honeycomb_green.png" class="green" />
        <img src="/honeycomb_red.png" class="red" />
      </div>
      <DiceHoneycomb
        :digit="parseInt(result.charAt(0))"
        :delay="0"
        :game-counter="gameCounter"
      />
    </div>
    <div class="dice-honeycomb-wrap">
      <div class="dice-honeycomb-img" :class="classObj">
        <img src="/honeycomb_yellow.png" class="yellow" />
        <img src="/honeycomb_green.png" class="green" />
        <img src="/honeycomb_red.png" class="red" />
      </div>
      <DiceHoneycomb
        :digit="parseInt(result.charAt(1))"
        :delay="100"
        :game-counter="gameCounter"
      />
    </div>
    <div class="dice-honeycomb-wrap">
      <div class="dice-honeycomb-img" :class="classObj">
        <img src="/honeycomb_yellow.png" class="yellow" />
        <img src="/honeycomb_green.png" class="green" />
        <img src="/honeycomb_red.png" class="red" />
      </div>
      <DiceHoneycomb
        :digit="parseInt(result.charAt(2))"
        :delay="200"
        :game-counter="gameCounter"
      />
    </div>
    <div class="dice-honeycomb-wrap">
      <div class="dice-honeycomb-img" :class="classObj">
        <img src="/honeycomb_yellow.png" class="yellow" />
        <img src="/honeycomb_green.png" class="green" />
        <img src="/honeycomb_red.png" class="red" />
      </div>
      <DiceHoneycomb
        :digit="parseInt(result.charAt(3))"
        :delay="300"
        :game-counter="gameCounter"
      />
    </div>
    <div class="clearfix" />
    <div class="dice-result-dot" :class="classObj" />
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

.dice-honeycomb-img {
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

.dice-honeycomb-img .yellow {
  transition: opacity .1s ease-out;
}

.dice-honeycomb-img .green,
.dice-honeycomb-img .red {
  transition: opacity .1s ease-out 1.2s;
}

.dice-honeycomb-img.default .yellow { opacity: 1; }
.dice-honeycomb-img.default .green { opacity: 0; }
.dice-honeycomb-img.default .red { opacity: 0; }
.dice-honeycomb-img.win .yellow { opacity: 0; }
.dice-honeycomb-img.win .green { opacity: 1; }
.dice-honeycomb-img.win .red { opacity: 0; }
.dice-honeycomb-img.lose .yellow { opacity: 0; }
.dice-honeycomb-img.lose .green { opacity: 0; }
.dice-honeycomb-img.lose .red { opacity: 1; }

/*
.dice-honeycomb-img.default {
  background: url('~assets/honeycomb_yellow.png') no-repeat;
  background-size: contain;
  -webkit-transition: background-image .1s ease-out;
  -moz-transition: background-image .1s ease-out;
  -o-transition: background-image .1s ease-out;
  transition: background-image .1s ease-out;
}

.dice-honeycomb-img.win {
  background: url('~assets/honeycomb_green.png') no-repeat;
  background-size: contain;
  -webkit-transition: background-image .1s ease-out 1.2s;
  -moz-transition: background-image .1s ease-out 1.2s;
  -o-transition: background-image .1s ease-out 1.2s;
  transition: background-image .1s ease-out 1.2s;
  transition-delay: 1.2s;
}

.dice-honeycomb-img.lose {
  background: url('~assets/honeycomb_red.png') no-repeat;
  background-size: contain;
  -webkit-transition: background-image .1s ease-out 1.2s;
  -moz-transition: background-image .1s ease-out 1.2s;
  -o-transition: background-image .1s ease-out 1.2s;
  transition: background-image .1s ease-out 1.2s;
  transition-delay: 1.2s;
}
*/
.dice-result-dot {
  width: 14px;
  height: 17px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

.dice-result-dot.default {
  background: url('~assets/dot_yellow.png') no-repeat transparent;
  transition: all .1s ease-out;
}

.dice-result-dot.win {
  background: url('~assets/dot_green.png') no-repeat transparent;
  transition: all .1s ease-out 1.2s;
}

.dice-result-dot.lose {
  background: url('~assets/dot_red.png') no-repeat transparent;
  transition: all .1s ease-out 1.2s;
}

.clearfix {
  clear: both;
}
</style>
