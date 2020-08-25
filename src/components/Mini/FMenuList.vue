<template>
  <li :class="`pure-menu-item ${ disabled ? 'pure-menu-disabled' : '' }`">
    <a v-if="!disabled && link !== '#'" :href="link" class="pure-menu-link">
      <slot></slot>
    </a>
    <a v-else class="pure-menu-link"><slot></slot></a>
  </li>
</template>
<script>
export default {
  props: {
    link: {
      type: String,
      default: function() {return '#'}
    },
    disabled: {
      type: Boolean,
      default: function() {return false}
    }
  }
}
</script>
<style scoped>
.pure-menu-disabled {
  padding: 0px;
}
a:hover {
  color: #1a1f24 !important;
}
.pure-menu-disabled a:hover {
  color: #777 !important;
}
</style>
