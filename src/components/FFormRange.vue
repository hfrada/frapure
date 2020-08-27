<template>
  <div style="position: relative; text-align: left;">
    <label v-if="label.length > 0" :class="`f-range-label ${ !error || '--error' }`">{{ label }}</label>
    <div class="pure-g">
      <div v-for="i in ['min', 'max']" :key="i" class="pure-u-1-2">
        <f-select v-if="type === 'select'" v-model="data[i]" :class="i === 'min' ? 'f-range-left' : ''" :options="i === 'min' ? selectOptMin : selectOptMax" :nully="i" @input="$emit('input', data)" />
        <f-input v-else v-model="data[i]" :class="i === 'min' ? 'f-range-left' : ''" :type="type" :placeholder="i" @input="$emit('input', data)" />
      </div>
    </div>
    <small v-if="msg.length > 0" :class="`f-select-msg ${ !error || '--error' }`">* {{ msg }}</small>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: function() {return ''}
    },
    type: {
      type: String,
      default: function() {return 'text'}
    },
    msg: {
      type: String,
      default: function() {return ''}
    },
    error: {
      type: Boolean,
      default: function() {return false}
    },
    selectOptMin: {
      type: Array,
      default: function() {return []}
    },
    selectOptMax: {
      type: Array,
      default: function() {return []}
    }
  },
  data () {
    return {
      data : {
        min: null,
        max: null
      }
    }
  }
}
</script>
<style>
  .f-range-label {
    /*border: 1px solid #42b983;*/
    padding: 3px 15px;
    background: #42b983;
    color: white;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .f-range-left input, .f-range-left textarea, .f-range-left select {
    border-right: 0;
  }
</style>
