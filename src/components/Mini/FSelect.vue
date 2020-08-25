<template>
  <div class="f-select">
    <label v-if="label.length > 0" :class="`f-select-label f-bg-primary ${ !error || '--error' }`">{{ label }}</label>
    <select :value="value" :class="`f-select-selector ${ !error || '--error' }`" @input="e => { $emit('input', e.target.value) }">
      <option :value="null">{{ nully }}</option>
      <option v-for="(val, i) in options" :key="i" :value="val[optVal]">
        <slot :item="val">
          {{ val[optName] }}
        </slot> 
      </option>
    </select>
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
    nully: {
      type: String,
      default: function() {return ''}
    },
    value: {
      type: String,
      default: function() {return null}
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
    options: {
      type: Array,
      default: function() {return []}
    },
    optVal: {
      type: String,
      default: function() {return 'value'}
    },
    optName: {
      type: String,
      default: function() {return 'value'}
    }
  }
}
</script>

<style>
 option:hover{background-color:yellow;}
.f-select {
  width: 100%;
  margin: auto;
  text-align: left;
}
.f-select-label {
  /*border: 1px solid #42b983;*/
  padding: 3px 15px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.f-select-selector {
  padding: 0 10px;
  width: 100%;
  height: 30px;
  border: 1px solid #aaa;
}
.f-select-selector:focus {
  height: 30px;
  border: 2px solid #42b983;
  outline: 0;
}
.f-select-msg {
  color: #aaa;
}
.f-select-msg.--error {
  color: #ff6647;
}
.f-select-label.--error {
  background: #ff2b24;
}
.f-select-selector.--error {
  border: 1px solid #ff2b24;
}
.f-select-selector.--error:focus {
  height: 30px;
  border: 2px solid #ff2b24;
  outline: 0;
}
</style>
