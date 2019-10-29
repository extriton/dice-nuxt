<template>
  <div
    class="dice-reverse"
    @click="invertReverse"
  >
    <i class="fa fa-exchange" />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'DiceReverse',
  methods: {
    invertReverse () {
      this.INVERT_REVERSE()
    },
    ...mapMutations({
      INVERT_REVERSE: 'dice/INVERT_REVERSE'
    })
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
}
.dice-reverse:hover {
  cursor: pointer;
}
</style>
