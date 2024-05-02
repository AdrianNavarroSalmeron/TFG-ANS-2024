<script setup>
import { ref } from 'vue'

const textoBuscador = ref('')
const emit = defineEmits(['buscarPor'])

const clickBoton = () => {
  emit('buscarPor', textoBuscador.value)
}
</script>

<template>
  <div class="contenedorBusqueda">
    <input
      type="text"
      size="40"
      placeholder="Busca por autor, título, género, ISBN"
      v-model="textoBuscador"
    /><font-awesome-icon
      @click="clickBoton"
      class="botonBuscar"
      icon="fa-solid fa-magnifying-glass"
    />
  </div>
</template>

<style scoped>
.contenedorBusqueda {
  display: flex;
  gap: 10px;
  max-height: 20px;
  margin-right: 70px;
}

.botonBuscar:hover {
  border-radius: 50%;
  background-color: white;
  color: black;
}

@media screen and (max-width: 700px) {
  .contenedorBusqueda {
    margin-right: 10px;
  }
}
</style>
