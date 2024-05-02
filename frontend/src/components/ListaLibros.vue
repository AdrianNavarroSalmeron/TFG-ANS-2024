<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue'
import LibroIndividual from '@/components/LibroIndividual.vue'
import HeaderBiblioteca from '@/components/HeaderBiblioteca.vue'

const datosLibros = ref({
  tituloLibro: '',
  coverDatos: ''
})
const genero = ref('fantasía')

const arrayDeLibros = ref([])

const generarDireccionImagen = (id) => {
  const direccion = 'https://covers.openlibrary.org/b/id/' + id + '-M.jpg'
  return direccion
}

async function getLibrosFantasia(genero) {
  try {
    const res = await fetch('https://openlibrary.org/subjects/' + genero + '.json')
    const data = await res.json()

    //Recibimos y almacenamos el numero total de libros recibidos
    const numeroTotalDeLibros = data.works.length

    for (let i = 0; i < numeroTotalDeLibros; i++) {
      const libroTemporal = ref({
        tituloLibro: '',
        coverDatos: ''
      })
      libroTemporal.value.tituloLibro = data.works[i].title
      libroTemporal.value.coverDatos = generarDireccionImagen(data.works[i].cover_id)
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
    <LibroIndividual
      v-for="(libro, index) of arrayDeLibros"
      :key="index"
      :libro="libro"
      :index="index"
    />
  </div>
</template>

<style scoped>
.containerLibros {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 70px;
  flex-wrap: wrap;
  background-color: #d3a121;
  padding: 20px;
  border-radius: 25px;
}

.cabeceraLibros {
  text-align: center;
  margin-bottom: 60px;
}
</style>
