<template>
  <div :class="`input-group-icon f-bg-${ type }`"><slot></slot></div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: function() {return 'primary'}
    }
  }
}
</script>
<style scoped>
  .input-group-icon{
    padding: 0 12px
  }
</style>
