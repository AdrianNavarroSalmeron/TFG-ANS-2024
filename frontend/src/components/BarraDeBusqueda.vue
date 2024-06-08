<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import router from '../router'

const store = useStore()

const textoBuscador = ref('')
const emit = defineEmits(['buscarPor'])

const clickBoton = () => {
  gestionarBusquedaUsuario(textoBuscador.value)
  emit('buscarPor', textoBuscador.value)
  setTimeout(() => {
    store.dispatch('updateLibros', arrayDeLibrosBusqueda.value)
    router.push('/busqueda')
  }, 1000) // Tiempo de retraso
}

const datosLibros = ref({
  id: '',
  tituloLibro: '',
  coverDatos: ''
})
const genero = ref('fantasía')
const arrayDeLibrosBusqueda = ref([])

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
        coverDatos: '',
        autorLibro: '',
        generoLibro: '',
        numeroPaginas: ''
      })
      libroTemporal.value.id = data.items[i].id
      libroTemporal.value.tituloLibro = data.items[i].volumeInfo.title
      const bookImgId = data.items[i].id
      libroTemporal.value.coverDatos = `https://books.google.com/books/publisher/content/images/frontcover/${bookImgId}?fife=w400-h600&source=gbs_api`
      libroTemporal.value.autorLibro = data.items[i].volumeInfo.authors
        ? data.items[i].volumeInfo.authors[0]
        : 'Autor desconocido'
      libroTemporal.value.generoLibro = data.items[i].volumeInfo.categories
        ? data.items[i].volumeInfo.categories[0]
        : 'Género desconocido'
      libroTemporal.value.numeroPaginas = data.items[i].volumeInfo.pageCount
      //Se añade al array de libros
      arrayDeLibrosBusqueda.value.push(libroTemporal)
      console.log(arrayDeLibrosBusqueda.value)
    }
  } catch (error) {
    datosLibros.value.tituloLibro = 'Error en la API' + error
  }
}

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
