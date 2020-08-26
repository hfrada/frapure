import Vue from 'vue'
import 'purecss'
import './assets/color.css'
import './assets/customize.css'

const mini = require.context('./Mini', true, /\.(js|vue)$/i)
mini.keys().map(key => {
  const name = key.match(/\w+/)[0]
  Vue.component(name, mini(key).default)
})

const complex = require.context('./', true, /\.(js|vue)$/i)
complex.keys().map(key => {
  const name = key.match(/\w+/)[0]
  Vue.component(name, complex(key).default)
})

const Components = {
  FSearch: () => import('./FSearch.vue'),
  FSearchPopup: () => import('./FSearchPopup.vue'),
  FFormRange: () => import('./FFormRange.vue'),
  FModal: () => import('./FModal.vue'),
  FTable: () => import('./FTable.vue')
}

// Object.keys(Components).forEach(name => {
//   Vue.component(name, Components[name])
// })

export default Components