<template>
  <div>
    <span @click="display = true">
      <slot>
        <button>Open</button>
      </slot>
    </span>
    <div id="myModal" class="modal" :style="`display: ${ display ? 'block' : 'none' };`" @click.self="display = false">
      <div class="modal-content">
        <div class="modal-header">
          <span class="close" @click="display = false">&times;</span>
          <slot name="header">
            <h2 v-if="header.length > 0">{{ header }}</h2>
          </slot>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <slot name="footer">
            <h3 v-if="footer.length > 0">{{ footer }}</h3>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    header: {
      type: String,
      default: function() {return ''}
    },
    footer: {
      type: String,
      default: function() {return ''}
    },
    type: {
      type: String,
      default: function() {return 'text'}
    }
  },
  data () {
    return {
      display: false
    }
  }
}
</script>
<style>
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
}
.modal-content {
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  border: 1px solid #888;
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s
}

@-webkit-keyframes animatetop {
  from {top:-300px; opacity:0} 
  to {top:0; opacity:1}
}

@keyframes animatetop {
  from {top:-300px; opacity:0}
  to {top:0; opacity:1}
}
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}
.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
.modal-header {
  padding: 2px 16px;
  /*background-color: #42b983;*/
  /*color: white;*/
}
.modal-body {padding: 2px 16px;}
.modal-footer {
  padding: 2px 16px;
  /*background-color: #42b983;*/
  /*color: white;*/
}
</style>
