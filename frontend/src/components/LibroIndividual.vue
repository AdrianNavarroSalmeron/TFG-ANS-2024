<script setup>
import router from '@/router'
const props = defineProps({
  libro: Object,
  index: Number
})

const limitarLongitud = (titulo, limite = 35) => {
  return titulo.length > limite ? titulo.substring(0, limite) + '...' : titulo
}
</script>

<template>
  <div class="contenedorLibro">
    <img class="imagen" :src="props.libro.value.coverDatos" />
    <div class="parrafo">
      <p>{{ limitarLongitud(props.libro.value.tituloLibro) }}</p>
    </div>
    <button class="botonDetalles" @click="router.push(`/detallesLibro/${props.libro.value.id}`)">
      Detalles
    </button>
  </div>
</template>

<style scoped>
.contenedorLibro {
  display: flex;
  flex-direction: column;
  font-size: medium;
}
img {
  height: 200px;
  width: 150px;
}

.parrafo {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 10px;
  text-align: center;
  height: 75px;
  overflow: hidden;
}

.imagen {
  top: -50px;
  left: -35px;
  display: block;
  cursor: pointer;
}

.botonDetalles {
  background-color: rgb(56, 190, 201);
  color: rgb(51, 51, 51);
  width: 150px;
}

.botonDetalles:hover {
  background-color: white;
  color: rgb(56, 190, 201);
}

@media screen and (max-width: 768px) {
  .imagen {
    width: 100%;
    height: 150px;
  }

  .parrafo {
    font-size: small; /* Reducir el tamaño del texto en pantallas más pequeñas */
    height: auto; /* Permitir que el texto crezca si se recorta */
  }
  .botonDetalles {
    width: fit-content;
  }
}
</style>
