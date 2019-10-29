<template>
  <div
    class="dice-reverse"
    @click="reverse"
  />
</template>

<script>
export default {
  name: 'DiceReverse',
  methods: {
    reverse () {
      this.$emit('reverse')
    }
  }
}
</script>

<style>
.dice-reverse {
    width: 29px;
    height: 29px;
    border: 5px solid #291a43;
    border-radius: 100%;
    background: url('~assets/change.png') no-repeat #3e3156;
    background-position: 1px 1px;
}
.dice-reverse:hover {
  cursor: pointer;
}
</style>
