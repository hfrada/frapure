<template>
  <div style="position: relative;">
    <span :class="`f-search---${ secret } f-point---${ secret }`">
      <slot>
        <button :class="`pure-button pure-button-success`">open</button>
      </slot>
    </span>
    <f-search v-if="view" :type="type" :data="data" @f-change="val => $emit('f-change', val)" :keys="keys" :style="style" :secret="secret" />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: function() {return 'single'}
    },
    data: {
      type: Array,
      default: function() {return []}
    },
    keys: {
      type: Array,
      default: function() {return []}
    }
  },
  data () {
    return {
      view: false,
      style: {},
      secret: Math.random().toString(36).substring(7)
    }
  },
  mounted () {
    document.addEventListener('click', this.globalEventHandler)
  },
  methods: {
    globalEventHandler (ev) {
      if (!ev.target.classList.contains(`f-search---${ this.secret }`) && (!ev.target.parentElement || !ev.target.parentElement.classList.contains(`f-search---${ this.secret }`))) {
        this.view = false
      } else if(!this.view) {
        this.view = true
        var style = {}
        if (ev.clientX < ((window.innerWidth / 2) - 250)) {
          style.left = '0px'
        } else if (ev.clientX > ((window.innerWidth / 2) - 250) && ev.clientX < ((window.innerWidth / 2) + 250)) {
          style.right = `${ (window.innerWidth - 500) / 2 }px`
        } else {
          style.right = `${ window.innerWidth - ev.clientX }px`
        }

        if (ev.clientY < ((window.innerHeight / 2))) {
          style.top = '0px'
        } else {
          style.bottom = '0px'
        }

        this.style = style
      }
    }
  }
}
</script>
