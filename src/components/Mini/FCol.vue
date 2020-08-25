<template>
  <div :class="`pure-u-${ span }-${ scale }`"><slot></slot></div>
</template>
<script>
export default {
  props: {
    scale: {
      type: Number,
      default: function() {return 24}
    },
    span: {
      type: Number,
      default: function() {return 24}
    }
  }
}
</script>
<style scoped>
  div {
    box-sizing: border-box;
    padding: 10px 5px;
  }
</style>
