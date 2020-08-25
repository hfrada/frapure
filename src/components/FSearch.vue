<template>
  <div :class="`f-search f-search---${ secret }`">
    <input v-model="search" type="text" placeholder="Search" :class="`f-search-input f-search---${ secret }`">
    <div :class="`f-search-r-menu f-search---${ secret }`">
      <span v-if="search.length > 0" :class="`f-search-searching-close f-search---${ secret }`" @click="search = ''">&times;</span>
      <input v-if="type === 'multiple'" v-model="checkAll" :class="`f-search---${ secret }`" type="checkbox">
    </div>
    
    <f-checked-list :data="items(data)" :keys="['name']" :type="type" :class="`f-search-container f-search---${ secret }`" :check-all="checkAll" :secret="secret" @f-change="val => $emit('f-change', val)" />
  </div>
</template>

<script>
export default {
  props: {
    secret: {
      type: String,
      default: function() {return ''}
    },
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
  data() {
    return {
      search: '',
      datas: [],
      checkAll: false,
      item: []
    }
  },
  watch: {
    data (val) {
      if (val) {
        this.data.forEach((d, key) => {
          this.datas[key] = d
          this.datas[key].key = key
          this.datas[key].checked = false
        })
      }
    }
  },
  methods: {
    items (item) {
      var json = item.filter((res) => {
        return res.name.toLowerCase().includes(this.search.toLowerCase())
      })
      function dynamicSort(property) {
        var sortOrder = 1;
        if(property[0] === "-") {
            sortOrder = -1
            property = property.substr(1)
        }
        return function (a,b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0
            return result * sortOrder
        }
      }
      json.sort(dynamicSort("name"))
      return json
    }
  }
}
</script>

<style>
.f-search {
  width: 500px;
  position: absolute;
  border: 1px solid #eee;
  padding: 10px;
  background: #fff;
  box-shadow: 5px 10px 18px #ddd;
  z-index: 999;
}
.f-search-r-menu {
  position: absolute;
  top: 15px;
  right: 10px;
}
.f-search-r-menu .f-search-searching-close {
  font-size: 21px;
  margin-right: 10px;
  background: #fff;
  cursor: pointer;
}
.f-search-input {
  width: 100%;
  border: 0;
  outline: 0;
  padding: 0;
  height: 30px;
  font-size: 17px;
}
.f-search-input:focus {
  border: 0;
  outline: 0;
}
.f-search-container {
  width: 100%;
  border-top: 1px solid #ddd;
  overflow-x: auto;
  height: 250px;
  background: #fdfdfd;
}
.f-search-container::-webkit-scrollbar {
  width: 10px;
}

.f-search-container::-webkit-scrollbar-track {
  box-shadow: inset 0 0 2px grey;
}
.f-search-container::-webkit-scrollbar-thumb {
  background: #ddd;
}
</style>
