<script setup>
import { ref, onMounted, defineExpose, computed, watch } from 'vue'
import { useStore } from 'vuex'
import axios from 'axios'
import HeaderBiblioteca from '@/components/HeaderBiblioteca.vue'
import FooterHome from '@/components/FooterHome.vue'

const props = defineProps({
  id: String
})

const store = useStore()
const datosUsuario = computed(() => store.getters['getData'])

const libroApi = ref({
  tituloLibro: '',
  autorLibro: '',
  generoLibro: '',
  sinopsisLibro: '',
  coverDatos: '',
  isbn: '',
  formato: '',
  idioma: '',
  paginas: '',
  editorial: '',
  fechaPublicacion: ''
})

const mostrarDetalles = ref(false)
const mensajeOk = ref(false)

const mostrarMensajeOk = () => {
  mensajeOk.value = true
  setTimeout(() => {
    mensajeOk.value = false
  }, 3000)
}

//hacemos llamada a la API para obtener los detalles del libro a traves del titulo
const getDetallesLibro = async () => {
  try {
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${props.id}`)
    const data = await res.json()
    libroApi.value.tituloLibro = data.volumeInfo.title
    libroApi.value.autorLibro = data.volumeInfo.authors
      ? data.volumeInfo.authors[0]
      : 'Autor desconocido'
    libroApi.value.generoLibro = data.volumeInfo.categories
      ? data.volumeInfo.categories[0]
      : 'Género desconocido'
    libroApi.value.sinopsisLibro = data.volumeInfo.description
    libroApi.value.coverDatos = data.volumeInfo.imageLinks
      ? data.volumeInfo.imageLinks.thumbnail
      : ''
    libroApi.value.isbn = data.volumeInfo.industryIdentifiers
      ? data.volumeInfo.industryIdentifiers[0].identifier
      : 'ISBN desconocido'
    libroApi.value.formato = data.volumeInfo.printType
    libroApi.value.idioma = data.volumeInfo.language
    libroApi.value.paginas = data.volumeInfo.pageCount
    libroApi.value.editorial = data.volumeInfo.publisher
    libroApi.value.fechaPublicacion = data.volumeInfo.publishedDate
  } catch (error) {
    libroApi.value.tituloLibro = 'Error en la API' + error
  }
}

onMounted(() => {
  getDetallesLibro()
})

const accionSeleccionada = ref('')

const cambiarEstadoLibro = async (valor) => {
  accionSeleccionada.value = valor.target.value
  try {
    const libro = {
      titulo: libroApi.value.tituloLibro,
      autor: libroApi.value.autorLibro
    }
    // Primero intentamos registrar el libro
    try {
      const respuesta = await axios.post(`http://localhost:8090/api/libros`, libro)
      const idLibro = respuesta.data.idLibro
      if (respuesta.status == 200) {
        console.log('Libro registrado')
        console.log(respuesta.data)
        try {
          // Se guarda en la relación con el marcado para leer default
          const response = await axios.post(
            `http://localhost:8090/api/bibliotecas/${datosUsuario.value.id}/${idLibro}`,
            'Marcado para leer'
          )
          console.log(response.data)
        } catch (error) {
          console.error('Error al guardar en la relación:', error.response.data)
        }
      }
    } catch (error) {
      if (error.response && error.response.status !== 200) {
        //Consultamos la bd para buscar el libro
        const libroRespuesta = await axios.get(
          `http://localhost:8090/api/libros/titulo/${libroApi.value.tituloLibro}`
        )
        console.log(libroRespuesta.data)
        const idLibro = libroRespuesta.data.idLibro
        try {
          const respuestaEstaContiene = await axios.get(
            `http://localhost:8090/api/bibliotecas/${datosUsuario.value.id}/${idLibro}`
          )
          if (respuestaEstaContiene.status === 200) {
            console.log(respuestaEstaContiene.data)
            try {
              const estaContiene = ref({
                id: '',
                estadoLibro: ''
              })
              estaContiene.value.id = null
              estaContiene.value.estadoLibro = accionSeleccionada.value
              // Actualizamos el estado del libro
              const responseCambiarEstadoLibro = await axios.put(
                `http://localhost:8090/api/bibliotecas/${datosUsuario.value.id}/${idLibro}`,
                estaContiene.value,
                {
                  headers: {
                    'Content-Type': 'application/json'
                  }
                }
              )
              console.log(responseCambiarEstadoLibro.data)
              mostrarMensajeOk()
            } catch (error) {
              console.error('Error al cambiar el estado del libro:', error.response.data)
            }
          }
        } catch (error) {
          console.error('Error al comprobar la relación:', error.response.data)
        }
      } else {
        console.error('Error al registrar el libro:', error.response.data)
      }
    }
  } catch (error) {
    console.error('Error general:', error)
  }
}

watch(accionSeleccionada, (newVal) => {
  if (newVal) {
    cambiarEstadoLibro(newVal)
  }
})

defineExpose({
  cambiarEstadoLibro
})
</script>

<template>
  <div class="contenedorTotal">
    <header>
      <HeaderBiblioteca />
      <hr class="barraSeparadora" />
    </header>
    <div class="contenedorGeneral">
      <div class="portadaLibro">
        <img :src="libroApi.coverDatos" />
      </div>
      <div class="informacionLibro">
        <p class="titulo">{{ libroApi.tituloLibro }}</p>
        <p class="nombreAutor">{{ libroApi.autorLibro }}</p>
        <p class="genero">Genero: {{ libroApi.generoLibro }}</p>
        <button @click="mostrarDetalles = !mostrarDetalles" class="boton">
          {{ mostrarDetalles ? 'Ocultar detalles' : 'Mostrar detalles' }}
        </button>
        <div v-if="mostrarDetalles" class="detallesLibro">
          <p>ISBN: {{ libroApi.isbn }}</p>
          <p>Formato: {{ libroApi.formato }}</p>
          <p>Idioma: {{ libroApi.idioma }}</p>
          <p>Paginas: {{ libroApi.paginas }}</p>
          <p>Editorial: {{ libroApi.editorial }}</p>
          <p>Fecha de publicacion: {{ libroApi.fechaPublicacion }}</p>
        </div>
        <p class="sinopsis" v-html="libroApi.sinopsisLibro"></p>
      </div>
      <div class="botonCambiarEstado">
        <select @change="cambiarEstadoLibro" class="select">
          <option value="" disabled selected>Opciones</option>
          <option value="Leyendo">Leyendo</option>
          <option value="Leido">Leido</option>
          <option value="Por leer">Por leer</option>
        </select>
        <div v-if="mensajeOk" class="mensajeOk">
          <span class="iconoOk">&#10004;</span>
          Se ha actualizado
        </div>
      </div>
    </div>
    <footer>
      <FooterHome />
    </footer>
  </div>
</template>

<style scoped>
.contenedorTotal {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}
.contenedorGeneral {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 200px;
  margin-right: 100px;
  margin-bottom: 50px;
  justify-content: space-evenly;
  gap: 100px;
}

.informacionLibro {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
}

.titulo {
  font-size: 2rem;
  font-weight: bold;
}

.nombreAutor {
  font-size: 1.5rem;
}

.sinopsis {
  font-size: 1.1rem;
  margin-top: 20px;
  border: 1px solid white;
  border-radius: 10px;
  padding: 10px;
  max-height: 390px; /* Altura máxima de la sinopsis */
  overflow-y: auto; /* Habilita el scroll vertical */
}

.portadaLibro img {
  display: flex;
  justify-content: center;
  width: 200px;
  height: 300px;
  border-radius: 10px;
}

.botonCambiarEstado {
  margin-bottom: 200px;
  width: 200px;
}

.select {
  width: 150px;
  height: 35px;
  padding: 5px;
  border-radius: 10px;
  border: 1px;
  background-color: rgb(44, 177, 188);
  color: white;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 5"><path fill="white" d="M2 0L0 2h4zm0 5L0 3h4z"/></svg>');
  background-repeat: no-repeat;
  background-position:
    right 0.7em top 50%,
    0 0;
  background-size:
    0.65em auto,
    100%;
  appearance: none;
}

.informacionCompra {
  margin-top: 20px;
  font-size: 1rem;
  font-weight: bold;
  color: rgb(44, 177, 188);
}

.boton {
  margin: 10px;
  background-color: rgb(56, 190, 201);
  color: rgb(51, 51, 51);
  font-weight: bold;
  font-size: medium;
}

.boton:hover {
  background-color: white;
  color: rgb(51, 51, 51);
}

.detallesLibro {
  border: 1px solid white;
  border-radius: 10px;
  padding: 10px;
  margin-top: 20px;
  background-color: rgb(44, 177, 188);
  color: rgb(51, 51, 51);
  font-weight: bold;
  font-size: 1rem;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.barraSeparadora {
  border: none;
  border-top: 1px solid #ccc;
  margin-top: 20px;
}

.mensajeOk {
  background-color: rgb(51, 51, 51);
  color: white;
  font-weight: bold;
  font-size: 0.9rem;
  border-radius: 10px;
  margin-top: 20px;
  width: 100%;
  display: flex;
}

.iconoOk {
  color: #28a745;
  margin-right: 5px;
}
</style>
