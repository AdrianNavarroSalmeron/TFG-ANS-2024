import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { createStore } from 'vuex'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import router from './router'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    iconfont: 'mdi'
  }
})

const store = createStore({
  modules: {
    user: {
      state: () => ({
        data: {},
        estaLogado: false
      }),
      mutations: {
        setData(state, data) {
          state.data = data
        },
        setLoggedIn(state, value) {
          state.estaLogado = value
        },
        aniadirDatosUsuario(state, userData) {
          state.data.nombreUsuario = userData.nombreUsuario
          state.data.login = userData.login
          state.data.id = userData.id
        }
      },
      actions: {
        updateData({ commit }, newData) {
          commit('setData', newData)
        },
        login({ commit }, userData) {
          commit('setData', userData)
          commit('setLoggedIn', true)
        },
        logout({ commit }) {
          commit('setData', {})
          commit('setLoggedIn', false)
        }
      },
      getters: {
        getData: (state) => state.data,
        isLoggedIn: (state) => state.estaLogado
      }
    },
    libros: {
      state: () => ({
        librosBusqueda: []
      }),
      mutations: {
        setLibrosBusqueda(state, libros) {
          state.librosBusqueda = libros
        }
      },
      actions: {
        updateLibros({ commit }, libros) {
          commit('setLibrosBusqueda', libros)
        }
      },
      getters: {
        getLibros: (state) => state.librosBusqueda
      }
    }
  }
})

library.add(fas, far, fab)
dom.watch()

createApp(App)
  .use(router)
  .use(vuetify)
  .use(store)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
