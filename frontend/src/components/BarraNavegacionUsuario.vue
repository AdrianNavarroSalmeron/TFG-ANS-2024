<script setup>
import router from '../router'
import { onMounted, ref, computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const userData = store.getters['getData']
const usuario = computed(() => userData.nombreUsuario)
const login = ref('')

const cargarDatos = () => {
  if (userData.nombreUsuario === '' || userData.login === '') {
    router.push('/login')
  } else {
    usuario.value = userData.nombreUsuario
    login.value = userData.login
  }
}

const cerrarSesion = () => {
  store.dispatch('logout')
  router.push('/login')
  console.log('Estado del log:' + store.getters['isLoggedIn'])
  console.log('Datos del usuario:' + store.getters['getData'])
}

onMounted(() => {
  cargarDatos()
})
</script>

<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer expand-on-hover rail :width="200">
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/4.jpg"
            :title="usuario"
            :subtitle="login"
          >
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list density="compact" nav>
          <v-list-item
            @click="router.push('/home')"
            prepend-icon="fa-solid fa-house"
            title="Inicio"
            value="inicio"
          >
          </v-list-item>
          <v-list-item
            @click="router.push('/biblioteca')"
            prepend-icon="fa-solid fa-book"
            title="Biblioteca"
            value="biblioteca"
          >
          </v-list-item>
          <v-list-item
            @click="cerrarSesion"
            prepend-icon="fa-solid fa-right-from-bracket"
            title="Cerrar sesión"
            value="logout"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 250px"></v-main>
    </v-layout>
  </v-card>
</template>

<style scoped>
.barraBusqueda {
  background-color: white;
}

.toolBarItem {
  background-color: white;
}

.hover-item {
  visibility: hidden;
  opacity: 0;
  transition:
    visibility 0s,
    opacity 0.5s linear;
}

.hover-item:hover {
  visibility: visible;
  opacity: 1;
}
</style>
