<template>
  <f-input-group-label class="input-group-icon">
    <f-button style="border-radius: 0" :type="type"><slot></slot></f-button>
  </f-input-group-label>
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
    background:#eee;
    color: #777;
    padding: 0 !important;
  }
</style>
