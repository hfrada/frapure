<template>
  <form>
    <label v-for="i in data" :key="i.fkey" :class="`f-search-label f-search---${ secret } ${ i.checked ? 'f-checked' : '' }`" :for="secret + i.fkey">
      <input :value="i" :type="type === 'multiple' ? 'checkbox' : 'radio'" :name="secret" :class="`f-search---${ secret }`" :id="secret + i.fkey" :checked="i.checked" @change="onChange(i)"> {{ i.name }}
    </label>
    <label v-if="data.length === 0" :class="`f-search---${ secret }`">Not search result.</label>
  </form>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: function() {return 'single'}
    },
    secret: {
      type: String,
      default: function() {return ''}
    },
    data: {
      type: Array,
      default: function() {return []}
    },
    keys: {
      type: Array,
      default: function() {return []}
    },
    checkAll: {
      type: Boolean,
      default: function() {return false}
    }
  },
  created () {
    if (this.data) {
      this.data.forEach((d, key) => {
        this.data[key] = d
        this.data[key].fkey = key
        this.data[key].fchecked = false
      })
    }
  },
  watch: {
    checkAll (val) {
      val ? 
      this.data.forEach((d, key) => {
        this.data[key] = d
        this.data[key].key = key
        this.data[key].checked = true
      }):
      this.data.forEach((d, key) => {
        this.data[key] = d
        this.data[key].key = key
        this.data[key].checked = false
      })

      this.$emit('f-change', this.checkedData())
    }
  },
  methods: {
    redux (data, keys) {
      var redux = array => array.map(o => keys.reduce((acc, curr) => {
        acc[curr] = o[curr];
        return acc;
      }, {}));
      return keys ? redux(data) : data
    },
    checkedData () {
      var data = this.data.filter((res) => { return res.checked })
      return this.redux(data, (this.keys.length > 0 ? this.keys : false ))
    },
    onChange (value) {
      if (this.type === 'multiple') {
        this.data[value.fkey].checked = !this.data[value.fkey].checked
        if (!this.checkAll) {
          this.checkAll = this.data.length === this.checkedData().length
        }
      } else {
        this.data.forEach((d, key) => {
          this.data[key].checked = key === value.fkey
        })
      }
      this.$emit('f-change', this.checkedData())
    }
  }
}
</script>
<style>
.f-search-label {
  display: block;
  text-align: left;
  padding: 5px;
}
.f-search-label:hover {
  background: #ddd;
}
</style>
