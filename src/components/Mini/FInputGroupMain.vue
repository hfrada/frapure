<template>
  <div class="input-group-area"><slot></slot></div>
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
  .input-group-area{
    width:100%;
  }
</style>
