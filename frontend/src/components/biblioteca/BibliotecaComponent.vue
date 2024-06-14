<script setup>
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import FooterHome from '../FooterHome.vue'
import HeaderBiblioteca from '../HeaderBiblioteca.vue'
import SeccionesBiblioteca from './SeccionesBiblioteca.vue'

const store = useStore()
const userData = store.getters['getData']
const arrayMarcadosParaLeer = ref([])
const arrayLeyendo = ref([])
const arrayLeidos = ref([])

const fetchBookDetails = async (idLibroApi) => {
  try {
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${idLibroApi}`)
    const data = await res.json()
    const libro = ref({
      id: idLibroApi,
      tituloLibro: data.volumeInfo.title,
      autor: data.volumeInfo.authors ? data.volumeInfo.authors.join(', ') : 'Desconocido',
      coverDatos: data.volumeInfo.imageLinks ? data.volumeInfo.imageLinks.thumbnail : ''
    })
    console.log(
      'Este es el libro: ' +
        libro.value.id +
        ' ' +
        libro.value.tituloLibro +
        ' ' +
        libro.value.autor +
        ' ' +
        libro.value.coverDatos
    )
    return libro
  } catch (error) {
    console.error('Error fetching book details:', error)
    return null
  }
}

const fetchAndPopulateBooks = async (booksArray, stateArray) => {
  const arrayLibrosLlenos = ref([])
  for (let i = 0; i < booksArray.length; i++) {
    await fetchBookDetails(booksArray[i]).then((libro) => {
      arrayLibrosLlenos.value.push(libro)
    })
  }
  stateArray.value = arrayLibrosLlenos.value
}

onMounted(async () => {
  const userId = userData.id
  try {
    const response = await fetch(`http://localhost:8090/api/bibliotecas/biblioteca/${userId}`, {
      method: 'GET'
    })
    const data = await response.json()

    const marcadosParaLeer = []
    const leyendo = []
    const leidos = []

    for (let i = 0; i < data.length; i++) {
      if (data[i].estadoLibro === 'Marcado para leer') {
        marcadosParaLeer.push(data[i].idLibroApi)
      } else if (data[i].estadoLibro === 'Leyendo') {
        leyendo.push(data[i].idLibroApi)
        console.log('Leyendo: ' + data[i].idLibroApi)
      } else if (data[i].estadoLibro === 'Leido') {
        leidos.push(data[i].idLibroApi)
      }
    }

    await fetchAndPopulateBooks(marcadosParaLeer, arrayMarcadosParaLeer)
    await fetchAndPopulateBooks(leyendo, arrayLeyendo)
    await fetchAndPopulateBooks(leidos, arrayLeidos)

    console.log(arrayMarcadosParaLeer.value)
    console.log(arrayLeyendo.value)
    console.log(arrayLeidos.value)
  } catch (error) {
    console.error('Error fetching biblioteca data:', error)
  }
})
</script>

<template>
  <div class="contenedorTotal">
    <header>
      <HeaderBiblioteca />
      <hr class="barraSeparadora" />
      <div class="containerSecciones">
        <div class="seccion">
          <h3 class="titulo">Marcados para leer</h3>
          <SeccionesBiblioteca :arrayDeLibros="arrayMarcadosParaLeer"></SeccionesBiblioteca>
        </div>
        <div class="seccion">
          <h3 class="titulo">Leyendo</h3>
          <SeccionesBiblioteca :arrayDeLibros="arrayLeyendo"></SeccionesBiblioteca>
        </div>
        <div class="seccion">
          <h3 class="titulo">Leídos</h3>
          <SeccionesBiblioteca :arrayDeLibros="arrayLeidos"></SeccionesBiblioteca>
        </div>
      </div>
    </header>
    <footer>
      <FooterHome />
    </footer>
  </div>
</template>
<style scoped>
.contenedorTotal {
}

.containerSecciones {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px;
  border-radius: 25px;
}

.titulo {
  color: rgb(44, 177, 188);
}

.seccion {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 5%;
  margin: 0;
  padding: 0;
}
</style>
