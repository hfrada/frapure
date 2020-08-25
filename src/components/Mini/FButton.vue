<template>
  <button :class="`pure-button pure-button-primary f-bg-${ type } ${ block ? 'f-w-100' : '' }`"><slot>{{ text }}</slot></button>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: function() {return 'primary'}
    },
    text: {
      type: String,
      default: function() {return ''}
    },
    block: {
      type: Boolean,
      default: function() {return false}
    }
  }
}
</script>
