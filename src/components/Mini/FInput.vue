<template>
  <div class="f-input">
    <label v-if="label.length > 0" :class="`f-input-label f-bg-primary ${ !error || '--error' }`">{{ label }}</label>
    <textarea v-if="type === 'textarea'" :value="value" :placeholder="placeholder" @input="e => { $emit('input', e.target.value) }" :class="`f-input-text ${ !error || '--error' }`" :style="{ height: txheight }"></textarea>
    <input v-else :value="value" :type="['text', 'number', 'date', 'datetime-local'].includes(type) ? type : 'text'" :class="`f-input-text ${ !error || '--error' }`" :placeholder="placeholder" @input="e => { $emit('input', e.target.value) }">
    <small v-if="msg.length > 0" :class="`f-input-msg ${ !error || '--error' }`">* {{ msg }}</small>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: function() {return ''}
    },
    placeholder: {
      type: String,
      default: function() {return ''}
    },
    value: {
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
    txheight: {
      type: String,
      default: function() {return '100px'}
    }
  }
}
</script>

<style>
.f-input {
  width: 100%;
  margin: auto;
  text-align: left;
}
.f-input-label {
  /*border: 1px solid #42b983;*/
  padding: 3px 15px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.f-input-text {
  box-sizing: border-box;
  padding: 0 10px;
  width: 100%;
  height: 25px;
  border: 1px solid #aaa;
}
textarea.f-input-text {
  padding: 10px;
  width: 100%;
  height: 100px;
  border: 1px solid #aaa;
}
.f-input-text:focus {
  height: 25px;
  border: 2px solid #42b983;
  outline: 0;
}
textarea.f-input-text:focus {
  height: 100px;
  border: 2px solid #42b983;
  outline: 0;
}
.f-input-msg {
  color: #aaa;
}
.f-input-msg.--error {
  color: #ff6647;
}
.f-input-label.--error {
  background: #ff2b24;
}
.f-input-text.--error {
  border: 1px solid #ff2b24;
}
.f-input-text.--error:focus {
  height: 25px;
  border: 2px solid #ff2b24;
  outline: 0;
}
</style>
