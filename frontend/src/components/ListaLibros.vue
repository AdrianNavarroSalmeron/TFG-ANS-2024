<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue'
import HeaderBiblioteca from '@/components/HeaderBiblioteca.vue'
import SeccionHome from '@/components/SeccionHome.vue'

const datosLibros = ref({
  tituloLibro: '',
  coverDatos: ''
})
const genero = ref('fantasía')

const arrayDeLibros = ref([])

async function getLibrosFantasia() {
  try {
    const res = await fetch(
      'https://www.googleapis.com/books/v1/volumes?q=subject:fantasy&orderBy=relevance'
    )
    const data = await res.json()
    //Recibimos y almacenamos el numero total de libros recibidos
    const numeroTotalDeLibros = data.items.length

    for (let i = 0; i < numeroTotalDeLibros; i++) {
      const libroTemporal = ref({
        tituloLibro: '',
        coverDatos: ''
      })
      libroTemporal.value.tituloLibro = data.items[i].volumeInfo.title
      const bookImgId = data.items[i].id
      libroTemporal.value.coverDatos = `https://books.google.com/books/publisher/content/images/frontcover/${bookImgId}?fife=w400-h600&source=gbs_api`
      //Se añade al array de libros
      arrayDeLibros.value.push(libroTemporal)
    }
  } catch (error) {
    datosLibros.value.tituloLibro = 'Error en la API' + error
  }
}

onMounted(() => {
  const genero = 'magic'
  getLibrosFantasia(genero)
})

const gestionarBusquedaUsuario = (valorIntroducidoPorUsuario) => {
  if (
    valorIntroducidoPorUsuario.includes('love', 0) ||
    valorIntroducidoPorUsuario.includes('mistery', 0)
  ) {
    //Limpiamos el array
    while (arrayDeLibros.value.length > 0) {
      arrayDeLibros.value.pop()
    }
    genero.value = valorIntroducidoPorUsuario
    getLibrosFantasia(valorIntroducidoPorUsuario)
  }
}
</script>

<template>
  <HeaderBiblioteca @emit-busqueda="gestionarBusquedaUsuario" />
  <div class="cabeceraLibros">
    <h1>
      <font-awesome-icon v-if="genero == 'fantasía'" icon="fa-solid fa-dice-d20" /> Genero:
      {{ genero }}
      <font-awesome-icon v-if="genero == 'fantasía'" icon="fa-solid fa-dragon" />
    </h1>
  </div>
  <div class="containerLibros">
    <!--
    <LibroIndividual
      v-for="(libro, index) of arrayDeLibros"
      :key="index"
      :libro="libro"
      :index="index"
    />
  -->
    <div class="containerSeccion">
      <SeccionHome :arrayDeLibros="arrayDeLibros" />
    </div>
    <div class="containerSeccion">
      <SeccionHome :arrayDeLibros="arrayDeLibros" />
    </div>
  </div>
</template>

<style scoped>
.containerLibros {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #d3a121;
  padding: 20px;
  border-radius: 25px;
}

.cabeceraLibros {
  text-align: center;
  margin-bottom: 60px;
}

.containerSeccion {
  width: 80%; /* Adjust as needed */
  height: 5%; /* Adjust as needed */
  margin: 0;
  padding: 0;
}
</style>
