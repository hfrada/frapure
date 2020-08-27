<template>
  <div class="f-input-group" :style="{ '--mainColor': `var(--${type})` }"><slot></slot></div>
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
.f-input-group{
  display: table;
  border-collapse: collapse;
  width:99%;
}
.f-input-group > div{
  display: table-cell;
  border: 1px solid var(--mainColor);
  vertical-align: middle;
}
</style>
