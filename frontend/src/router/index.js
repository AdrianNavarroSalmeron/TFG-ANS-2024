import { createWebHistory, createRouter } from 'vue-router'
import ListaCompra from '@/components/ListaCompra.vue'
import ListaLibros from '@/components/ListaLibros.vue'
import LoginScreen from '@/components/LoginScreen.vue'
import RegistroScreen from '@/components/RegistroScreen.vue'
import DetallesLibro from '@/components/DetallesLibro.vue'
import PaginaBusquedaLibros from '@/components/componentesBusqueda/PaginaBusquedaLibros.vue'
import BibliotecaComponent from '@/components/biblioteca/BibliotecaComponent.vue'
import PaginaGestionCuenta from '@/components/gestionCuenta/PaginaGestionCuenta.vue'

const routes = [
  {
    path: '/listacompra',
    name: 'ListaCompra',
    component: ListaCompra
  },
  {
    path: '/home',
    name: 'Home',
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
  },
  {
    path: '/detalleslibro/:id',
    name: 'DetallesLibro',
    component: DetallesLibro,
    props: true
  },
  {
    path: '/busqueda',
    name: 'PaginaBusquedaLibros',
    component: PaginaBusquedaLibros
  },
  {
    path: '/biblioteca',
    name: 'Biblioteca',
    component: BibliotecaComponent
  },
  {
    path: '/opciones',
    name: 'Opciones',
    component: PaginaGestionCuenta
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
