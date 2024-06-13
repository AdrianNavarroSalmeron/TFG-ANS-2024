<script setup>
import BarraDeBusqueda from './BarraDeBusqueda.vue'
import router from '@/router'

const emit = defineEmits('emitBusqueda')

const enviarBusquedaAPadre = (valorDeBusqueda) => {
  emit('emitBusqueda', valorDeBusqueda)
  console.log('Soy header y mando: ' + valorDeBusqueda)
}

const volverHome = () => {
  router.push('/home')
}

const irOpcionesCuenta = () => {
  router.push('/opciones')
}
</script>

<template>
  <div class="contenedorHeaderBiblioteca">
    <img src="../assets/Logo.png" class="imagenLogo" @click="volverHome" />
    <BarraDeBusqueda @buscar-por="enviarBusquedaAPadre" />
    <!--    //TODO: nos tiene que mandar a la cuenta del usuario-->
    <font-awesome-icon class="iconoCuenta" icon="fa-solid fa-user-gear" @click="irOpcionesCuenta" />
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
