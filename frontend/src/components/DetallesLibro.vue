<script setup>
import { ref, onMounted, defineExpose, computed, watch } from 'vue'
import { useStore } from 'vuex'
import axios from 'axios'

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
  coverDatos: ''
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
    console.log('Este es el id del usuario ' + datosUsuario.value.id)
    libroApi.value.coverDatos = `https://books.google.com/books/publisher/content/images/frontcover/${datosUsuario.value.id}?fife=w400-h600&source=gbs_api`
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
              // Actualizamos el estado del libro
              const responseCambiarEstadoLibro = await axios.put(
                `http://localhost:8090/api/bibliotecas/${datosUsuario.value.id}/${idLibro}`,
                accionSeleccionada.value,
                {
                  headers: {
                    'Content-Type': 'application/json'
                  }
                }
              )
              console.log(responseCambiarEstadoLibro.data)
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
  <div class="contenedorGeneral">
    <div class="portadaLibro">
      <img :src="libroApi.coverDatos" />
    </div>
    <div class="informacionLibro">
      <p class="titulo">{{ libroApi.tituloLibro }}</p>
      <p class="nombreAutor">{{ libroApi.autorLibro }}</p>
      <p class="genero">Genero: {{ libroApi.generoLibro }}</p>
      <p class="sinopsis">{{ libroApi.sinopsisLibro }}</p>
    </div>
    <div class="botonCambiarEstado">
      <select @change="cambiarEstadoLibro">
        <option value="">Acciones</option>
        <option value="Leyendo">Leyendo</option>
        <option value="Leido">Leido</option>
        <option value="Por leer">Por leer</option>
      </select>
    </div>
  </div>
</template>

<style scoped>
.contenedorGeneral {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 200px;
  margin-top: 100px;
  margin-right: 100px;
  justify-content: space-evenly;
  gap: 100px;
}

.informacionLibro {
  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items: center;
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
  font-size: 1rem;
  margin-top: 20px;
  border: 1px solid white;
  border-radius: 10px;
  padding: 10px;
}

.portadaLibro img {
  display: flex;
  justify-content: center;
  width: 200px;
  height: 300px;
  border-radius: 10px;
}

.genero {
  color: rgb(44, 177, 188);
}

.botonCambiarEstado {
  width: 200px;
  border: 1px solid rgb(44, 177, 188);
}
</style>
