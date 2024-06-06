<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue'
import HeaderBiblioteca from '@/components/HeaderBiblioteca.vue'
import SeccionHome from '@/components/SeccionHome.vue'
import FooterHome from '@/components/FooterHome.vue'

const datosLibros = ref({
  id: '',
  tituloLibro: '',
  coverDatos: ''
})
const genero = ref('fantasía')
const generoSeccion1 = 'fantasía'
const generoSeccion2 = 'Sanderson'
const arrayDeLibros = ref([])
const arrayDeLibros2 = ref([])
const arrayDeLibrosBusqueda = ref([])

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
        id: '',
        tituloLibro: '',
        coverDatos: ''
      })
      libroTemporal.value.id = data.items[i].id
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

async function getLibrosMisterio() {
  try {
    const res = await fetch(
      'https://www.googleapis.com/books/v1/volumes?q=sanderson&orderBy=relevance'
    )
    const data = await res.json()
    //Recibimos y almacenamos el numero total de libros recibidos
    const numeroTotalDeLibros = data.items.length

    for (let i = 0; i < numeroTotalDeLibros; i++) {
      const libroTemporal = ref({
        id: '',
        tituloLibro: '',
        coverDatos: ''
      })
      libroTemporal.value.id = data.items[i].id
      libroTemporal.value.tituloLibro = data.items[i].volumeInfo.title
      const bookImgId = data.items[i].id
      libroTemporal.value.coverDatos = `https://books.google.com/books/publisher/content/images/frontcover/${bookImgId}?fife=w400-h600&source=gbs_api`
      //Se añade al array de libros
      arrayDeLibros2.value.push(libroTemporal)
    }
  } catch (error) {
    datosLibros.value.tituloLibro = 'Error en la API' + error
  }
}

async function getLibrosBusqueda(cadenaBusqueda) {
  try {
    console.log(cadenaBusqueda)
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${cadenaBusqueda}&orderBy=relevance`
    )
    const data = await res.json()

    //Inicializamos el array
    arrayDeLibrosBusqueda.value = []

    //Recibimos y almacenamos el numero total de libros recibidos
    const numeroTotalDeLibros = data.items.length

    for (let i = 0; i < numeroTotalDeLibros; i++) {
      const libroTemporal = ref({
        id: '',
        tituloLibro: '',
        coverDatos: ''
      })
      libroTemporal.value.id = data.items[i].id
      libroTemporal.value.tituloLibro = data.items[i].volumeInfo.title
      const bookImgId = data.items[i].id
      libroTemporal.value.coverDatos = `https://books.google.com/books/publisher/content/images/frontcover/${bookImgId}?fife=w400-h600&source=gbs_api`
      //Se añade al array de libros
      arrayDeLibrosBusqueda.value.push(libroTemporal)
      console.log(arrayDeLibrosBusqueda.value)
    }
  } catch (error) {
    datosLibros.value.tituloLibro = 'Error en la API' + error
  }
}

onMounted(() => {
  getLibrosFantasia()
  getLibrosMisterio()
})

//Filtra la cadena de busqueda que introduce el usuario
const filtrarCadenaBusqueda = (cadena) => {
  // Eliminar espacios al inicio y al final, y convertir a minúsculas
  const cadenaTrimmed = cadena.trim().toLowerCase()
  // Reemplazar espacios intermedios con '+'
  const cadenaFiltrada = cadenaTrimmed.replace(/\s+/g, '+')
  return cadenaFiltrada
}

const gestionarBusquedaUsuario = (valorIntroducidoPorUsuario) => {
  // Filtramos la cadena introducida por el usuario
  const valorFiltrado = filtrarCadenaBusqueda(valorIntroducidoPorUsuario)

  if (valorFiltrado != null && valorFiltrado != '' && valorFiltrado != undefined) {
    //Limpiamos el array
    while (arrayDeLibrosBusqueda.value.length > 0) {
      arrayDeLibrosBusqueda.value.pop()
    }
    genero.value = valorFiltrado
    getLibrosBusqueda(valorIntroducidoPorUsuario)
  }
}
</script>

<template>
  <HeaderBiblioteca @emit-busqueda="gestionarBusquedaUsuario" />
  <div class="containerLibros">
    <div class="containerSeccion">
      <SeccionHome :arrayDeLibros="arrayDeLibros" :genero="generoSeccion1" />
    </div>
    <div class="containerSeccion">
      <SeccionHome :arrayDeLibros="arrayDeLibros2" :genero="generoSeccion2" />
    </div>
  </div>
  <div>
    <v-divider :thickness="5" color="blue"></v-divider>
    <FooterHome />
  </div>
</template>

<style scoped>
.containerLibros {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
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
