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
      class="barraBusquedaInput"
      placeholder="Busca tu libro favorito..."
      v-model="textoBuscador"
    />
    <font-awesome-icon
      @click="clickBoton"
      class="botonBuscar"
      icon="fa-solid fa-magnifying-glass"
    />
  </div>
</template>

<style scoped>
.contenedorBusqueda {
  display: flex;
  flex-direction: row;
  gap: 10px;
  max-height: 20px;
  margin-right: 70px;
}

.botonBuscar {
  background-color: white;
  color: black;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
}

.botonBuscar:hover {
  border-radius: 50%;
  background-color: rgb(44, 177, 188);
  color: white;
}

@media screen and (max-width: 700px) {
  .contenedorBusqueda {
    margin-right: 10px;
  }
}

.barraBusquedaInput {
  border-radius: 25px;
  padding: 20px;
  width: fit-content;
  border: 1px solid white;
  color: white;
}
</style>
