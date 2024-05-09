<script setup>
const props = defineProps({
  libro: Object,
  index: Number
})
</script>

<template>
  <div class="contenedorLibro">
    <img class="imagen" :src="props.libro.value.coverDatos" />
    <div class="parrafo">
      <p>{{ props.libro.value.tituloLibro }}</p>
    </div>
    <button>Leer</button>
  </div>
</template>

<style scoped>
.contenedorLibro {
  display: flex;
  flex-direction: column;
  font-size: medium;
  width: 20%;
  justify-content: space-between;
}
img {
  height: 300px;
  width: 250px;
}

.parrafo {
  text-align: center;
}

.imagen {
  top: -50px;
  left: -35px;
  display: block;
  cursor: pointer;
}

.imagen:hover {
  transform: scale(1.3);
}
</style>
