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

/* Estilos para dispositivos pequeños */
@media screen and (max-width: 700px) {
  .contenedorHeaderBiblioteca {
    flex-direction: column;
    height: auto;
    padding: 10px;
    border-radius: 0px;
  }

  .imagenLogo {
    height: 60px;
    width: 60px;
    margin-bottom: 10px;
  }

  .iconoCuenta {
    height: 25px;
    width: 25px;
    margin-top: 10px;
  }

  .contenedorHeaderBiblioteca > * {
    margin: 5px 0;
  }
}
</style>
