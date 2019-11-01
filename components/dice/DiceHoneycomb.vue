<template>
  <div class="dice-honeycomb">
    <div class="clip-wrap">
      <div class="dice-honeycomb-digit">
        {{ digit }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DiceHoneycomb',
  props: {
    digit: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.dice-honeycomb {
  width: 117px;
  height: 134px;
}

.clip-wrap {
  width: 101px;
  height: 107px;
  margin-top: 14px;
  margin-left: 8px;
  -webkit-clip-path: url("#clip-svg");
  clip-path: url("#clip-svg");
}

.dice-honeycomb-digit {
  position: relative;
  width: 35px;
  height: 66px;
  font-size: 65px;
  font-weight: bold;
  color: #fff;
  margin: 0 0 0 34px;
  line-height: 103px;
}
</style>
