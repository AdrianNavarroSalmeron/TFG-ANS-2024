<script setup>
import { computed } from 'vue'
import BarraNavegacion from './components/BarraNavegacionUsuario.vue'
import { useStore } from 'vuex'

const store = useStore()

const condicion = computed(() => {
  return store.getters['isLoggedIn']
})
</script>

<template>
  <div class="contenedorGenerico">
    <div class="contenedorNav">
      <BarraNavegacion v-if="condicion" />
    </div>
    <div class="contenedorCompra">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.contenedorGenerico {
  width: 100%;
  display: flex;
  flex-direction: row;
}

.contenedorCompra {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1.4rem;
  background-color: rgb(51, 51, 51);
  padding: 1rem;
  place-items: center;
  width: 100%;
  min-height: 100vh;
  color: white;
  margin-left: auto;
}

.contenedorNav {
  display: flex;
  margin: 0px;
  padding: 0px;
}
</style>
