<template>
  <div :class="`pure-menu f-bg-${ theme } ${ ['dark', 'primary', 'success', 'danger', 'warning'].includes(theme) ? 'f-menu-dark' : 'f-menu-light' } ${ scrollable ? 'pure-menu-scrollable' : '' } ${ horizontal ? 'pure-menu-horizontal' : '' }`">
    <ul class="pure-menu-list"><slot></slot></ul>
  </div>
</template>
<script>
export default {
  props: {
    theme: {
      type: String,
      default: function() {return 'light'}
    },
    scrollable: {
      type: Boolean,
      default: function() {return false}
    },
    horizontal: {
      type: Boolean,
      default: function() {return false}
    }
  }
}
</script>
<style>
.f-menu-light .pure-menu-list .pure-menu-heading, .f-menu-light .pure-menu-list .pure-menu-item a {
  color: #1a1f24;
}
.f-menu-dark .pure-menu-list .pure-menu-heading, .f-menu-dark .pure-menu-list .pure-menu-item a {
  color: #fcfcfc;
}
</style>
