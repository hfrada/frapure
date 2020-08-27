<template>
  <div id="app">
    <f-input-group type="success" style="width: 500px; margin-left: 10px">
      <f-input-group-label type="success">ssss</f-input-group-label>
      <!-- <f-input-group-button>ss</f-input-group-button> -->
      <f-input-group-main><f-input type="text" placeholder="Email Address" color="success" /></f-input-group-main>
    </f-input-group>
      
    <!-- <f-input-group class="input-group">
      <div class="input-group-icon">Income:</div>
      <div class="input-group-area"><input type="text" value="0.00"></div>
      <div class="input-group-icon">$</div>
    </f-input-group> -->
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <f-search-popup type="multiple" :keys="['name']" :data="dd" @f-change="val => items = val" />
    <br>
    <f-search-popup type="single" :keys="['name']" :data="dd" @f-change="val => items = val" />
    <f-input v-model="text" color="success" type="textarea" label="Test" placeholder="Test Input" msg="test pesan" style="width: 500px" />
    <br>
    <f-select v-model="text" label="Test" style="width: 500px" :options="[{value: 1}, {value: 2}]" nully="oke" msg="test pesan">
      <!-- <div slot-scope="row">
         {{ row.item.value }}
      </div> -->
    </f-select>
    <br>
    <f-form-range v-model="datas" type="date" style="width: 500px; margin: auto;" :select-opt-min="[{value: 1}, {value: 2}]" :select-opt-max="[{value: 1}, {value: 2}]" />
    <br>
    <f-row>
      <f-col :span="8" class="f-bg-light"><div class="f-bg-primary">grid-1</div></f-col>
      <f-col :span="8" class="f-bg-light"><div class="f-bg-primary">grid-2</div></f-col>
      <f-col :span="8" class="f-bg-light"><div class="f-bg-primary">grid-3</div></f-col>
    </f-row>
    <br>
    <f-table style="width: 500px; margin: auto" :header="header" :data="data" :striped="true" border="horizontal">
      <div slot-scope="row">
        {{ row.item[row.fkey] }}
      </div>
    </f-table>
    <br>
    <f-modal style="width: 500px; margin: auto;">
      <!-- <button class="pure-button pure-button-primary bg-warning">A Primary Button</button> -->
      <f-button>Open Modal</f-button>
      <template v-slot:body>
        <p class="color-warning">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </template>
    </f-modal>
    <br>
    {{ text }} {{ datas }}
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <f-checked-list :data="dd" :keys="['name']" type="multiple" @f-change="val => items = val" />
    {{ items }}
    <br>
    <f-menu style="width: 500px; margin:auto; text-align: left">
      <f-menu-heading><b>Yahoo Sites</b></f-menu-heading>
      <f-menu-list :disabled="true" link="/#/datas">Flickr</f-menu-list>
      <f-menu-list link="/#/datass">Messenger</f-menu-list>
      <f-menu-dropdown :disabled="true" :items="[{ name: 'Test', link: '#/woke'}, { name: 'Test2' }]">Messenger</f-menu-dropdown>
      <f-menu-list link="/#/datass">Sports</f-menu-list>
      <f-menu-list link="/#/datass">Finance</f-menu-list>
      <f-menu-heading><b>More Sites</b></f-menu-heading>
      <f-menu-list link="/#/datsas">Games</f-menu-list>
      <f-menu-list link="/#/datssas">News</f-menu-list>
      <f-menu-list link="/#/datsssas">OMG!</f-menu-list>
    </f-menu>
  </div>
</template>

<script>
import data from './assets/pengiriman.json'
export default {
  name: 'App',
  data () {
    return {
      dd: data,
      items: [],
      view: false,
      style: {},
      text: null,
      datas: [],
      header: [
        { name: 'data', key: 's1' },
        { name: 'data', key: 's2' },
        { name: 'data', key: 's3' },
        { name: 'data', key: 's4' },
      ],
      data: [
        { s1: 1, s2: 2, s3: 3, s4: 4 },
        { s1: 1, s2: 2, s3: 3, s4: 4 },
        { s1: 1, s2: 2, s3: 3, s4: 4 },
        { s1: 1, s2: 2, s3: 3, s4: 4 },
        { s1: 1, s2: 2, s3: 3, s4: 4 },
        { s1: 1, s2: 2, s3: 3, s4: 4 },
        { s1: 1, s2: 2, s3: 3, s4: 4 },
        { s1: 1, s2: 2, s3: 3, s4: 4 },
        { s1: 1, s2: 2, s3: 3, s4: 4 }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
