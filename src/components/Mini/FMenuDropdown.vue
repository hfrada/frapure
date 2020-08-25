<template>
  <li :class="`pure-menu-item pure-menu-has-children pure-menu-allow-hover ${ disabled ? 'pure-menu-disabled' : '' }`">
    <a :class="`pure-menu-link ${ ['dark', 'primary', 'success', 'danger', 'warning'].includes(theme) ? 'f-menu-dark' : 'f-menu-light' }`"><slot></slot></a>
    <ul :class="`pure-menu-children f-bg-${ theme } ${ ['dark', 'primary', 'success', 'danger', 'warning'].includes(theme) ? 'f-menu-dark' : 'f-menu-light' }`">
      <f-menu-list v-for="(item, i) in items" :key="i" :link="item.link" :disabled="disabled">{{ item.name }}</f-menu-list>
    </ul>
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
    },
    items: {
      type: Array,
      default: function() {return {}}
    },
    theme: {
      type: String,
      default: function() {return 'light'}
    }
  }
}
</script>
<style scoped>
.pure-menu-disabled {
  padding: 0px;
}
.pure-menu-has-children a:hover {
  color: #1a1f24;
}
.pure-menu-disabled a:hover {
  color: #777;
}
</style>
