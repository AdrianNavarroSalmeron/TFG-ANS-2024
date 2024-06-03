<script setup>
import { ref, onMounted } from 'vue'
const props = defineProps({
  id: String
})

const libroApi = ref({
  tituloLibro: '',
  autorLibro: '',
  generoLibro: '',
  sinopsisLibro: ''
})

//hacemos llamada a la API para obtener los detalles del libro a traves del titulo
const getDetallesLibro = async () => {
  try {
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${props.id}`)
    const data = await res.json()
    libroApi.value.tituloLibro = data.items[0].volumeInfo.title
    libroApi.value.autorLibro = data.items[0].volumeInfo.authors[0]
    libroApi.value.generoLibro = data.items[0].volumeInfo.categories[0]
    libroApi.value.sinopsisLibro = data.items[0].volumeInfo.description
  } catch (error) {
    libroApi.value.tituloLibro = 'Error en la API' + error
  }
}

onMounted(() => {
  getDetallesLibro()
})
</script>

<template>
  <div class="contenedorGeneral">
    <div class="portadaLibro"></div>
    <div class="informacionLibro">
      <h1>{{ libroApi.tituloLibro }}</h1>
      <h2>{{ libroApi.autorLibro }}</h2>
      <h3>{{ libroApi.generoLibro }}</h3>
      <p>{{ libroApi.sinopsisLibro }}</p>
    </div>
    <div class="botones"></div>
  </div>
</template>

<style scoped>
.contenedorGeneral {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
}
</style>
