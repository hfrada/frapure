<template>
  <table :class="`pure-table ${ ['horizontal', 'all'].includes(border) ? 'pure-table-' + (border === 'all' ? 'bordered' : 'horizontal') : '' }`" style="width: 100%; text-align: left">
    <thead>
      <tr>
        <th v-for="(head, i) in header" :key="i">{{ head.name }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(dat, i) in data" :key="i" :class="striped && i % 2 !== 0 ? 'pure-table-odd' : ''">
        <td v-for="(head, i) in header" :key="i">
          <slot :fkey="head.key" :item="dat">
            {{ dat[head.key] }}
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  props: {
    header: {
      type: Array,
      default: function() {return []}
    },
    data: {
      type: Array,
      default: function() {return []}
    },
    striped: {
      type: Boolean,
      default: function() {return false}
    },
    border: {
      type: String,
      default: function() {return 'vertical'}
    }
  }
}
</script>