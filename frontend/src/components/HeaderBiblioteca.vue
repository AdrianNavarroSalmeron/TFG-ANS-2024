<script setup>
import BarraDeBusqueda from './BarraDeBusqueda.vue'

const emit = defineEmits('emitBusqueda')

const enviarBusquedaAPadre = (valorDeBusqueda) => {
  emit('emitBusqueda', valorDeBusqueda)
  console.log('Soy header y mando: ' + valorDeBusqueda)
}
</script>

<template>
  <div class="contenedorHeaderBiblioteca">
    <img src="../assets/Logo.png" class="imagenLogo" />
    <BarraDeBusqueda @buscar-por="enviarBusquedaAPadre" />
    <font-awesome-icon class="iconoCuenta" icon="fa-solid fa-user-gear" />
  </div>
</template>

<style scoped>
.contenedorHeaderBiblioteca {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  height: 100px;
  border-radius: 25px;
}

.imagenLogo {
  height: 150px;
  width: 150px;
}

.iconoCuenta {
  height: 50px;
  width: 50px;
}

@media screen and (max-width: 700px) {
  .contenedorHeaderBiblioteca {
    border-radius: 0px;
    border: none;
  }
}
</style>
