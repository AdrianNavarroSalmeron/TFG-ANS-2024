import { createWebHistory, createRouter } from 'vue-router'
import ListaCompra from '@/components/ListaCompra.vue'
import ListaLibros from '@/components/ListaLibros.vue'
import LoginScreen from '@/components/LoginScreen.vue'
import RegistroScreen from '@/components/RegistroScreen.vue'

const routes = [
  {
    path: '/listacompra',
    name: 'ListaCompra',
    component: ListaCompra
  },
  {
    path: '/biblioteca',
    name: 'PruebaApi',
    component: ListaLibros
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginScreen
  },
  {
    path: '/registro',
    name: 'Registro',
    component: RegistroScreen
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
