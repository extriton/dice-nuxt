<template>
  <div class="dice-honeycomb">
    <div class="clip-wrap">
      <div class="dice-honeycomb-digit">
        {{ digit }}
      </div>
    </div>
    <!--
    <svg class="clip-svg">
      <defs>
        <clipPath id="clip-svg" clipPathUnits="objectBoundingBox">
          <polygon points="0.5 0, 1 0.3, 1 0.7, 0.5 1, 0 0.7, 0 0.3" />
        </clipPath>
      </defs>
    </svg>
    -->
  </div>
</template>

<script>
export default {
  name: 'DiceHoneycomb',
  props: {
    digit: {
      type: String,
      required: true
    },
    resultType: {
      type: Number,
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
