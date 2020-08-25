<template>
  <div id="app" class="bg-light">
    <f-row>
      <f-col :span="4" style="padding: 0;">
        <f-menu theme="dark" style="position: fixed; height: 100vh; min-width: 200px">
          <f-menu-heading><b>Frada</b></f-menu-heading>
          <hr>
          <f-menu-list link="/">Layout</f-menu-list>
          <f-menu-list link="/">Forms</f-menu-list>
          <f-menu-list link="/">Buttons</f-menu-list>
          <f-menu-list link="/">Tables</f-menu-list>
          <f-menu-list link="/">Menus</f-menu-list>
        </f-menu>
      </f-col>
      <f-col :span="18" style="padding-top: 10px;color: #666; font-weight: 100;">
        <h1 class="f-text-center"><span style="font-size: 50px">Layout</span></h1>
        <hr>
        <h2>Basic Grids</h2>
        <p>basic grids with Pure CSS</p>

      </f-col>
    </f-row>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  </div>
</template>

<script>
import data from '../assets/pengiriman.json'
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
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
