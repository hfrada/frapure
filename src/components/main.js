import Vue from 'vue'
import 'purecss'
import './assets/color.css'
import './assets/customize.css'

const req = require.context('./Mini', true, /\.(js|vue)$/i)
req.keys().map(key => {
  const name = key.match(/\w+/)[0]
  Vue.component(name, req(key).default)
})

const Components = {
  HelloWorld: () => import('./HelloWorld.vue'),
  FSearch: () => import('./FSearch.vue'),
  FSearchPopup: () => import('./FSearchPopup.vue'),
  FFormRange: () => import('./FFormRange.vue'),
  FModal: () => import('./FModal.vue'),
  FTable: () => import('./FTable.vue')
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components