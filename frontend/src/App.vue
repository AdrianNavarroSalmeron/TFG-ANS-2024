<script setup>
import BarraNavegacion from './components/BarraNavegacionUsuario.vue'
</script>

<template>
  <div class="contenedorGenerico">
    <div class="contenedorNav">
      <BarraNavegacion />
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
  background-color: black;
  margin: 25px;
  padding: 1rem;
  place-items: center;
  width: 80%;
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
