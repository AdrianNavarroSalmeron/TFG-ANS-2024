<script setup>
import { ref, defineExpose, watch, computed, onMounted } from 'vue'
import axios from 'axios'
import { useStore } from 'vuex'

const props = defineProps({
  libro: Object
})
const store = useStore()
const datosUsuario = computed(() => store.getters['getData'])

const accionSeleccionada = ref('')
const mensajeOk = ref(false)
const libroEnBibliotecaActualizar = ref(false)

const consultarSiLibroEnBiblioteca = async () => {
  try {
    const estadoLibro = await axios.get(
      `http://localhost:8090/api/bibliotecas/libroapi/${datosUsuario.value.id}/${props.libro.id}`
    )
    if (estadoLibro.status === 200) {
      accionSeleccionada.value = estadoLibro.data.estadoLibro
      libroEnBibliotecaActualizar.value = true
    }
  } catch (error) {
    console.error(
      'Error al consultar si el libro está en la biblioteca:',
      error.response?.data || error.message
    )
  }
}

onMounted(() => {
  consultarSiLibroEnBiblioteca()
})

const mostrarMensajeOk = () => {
  mensajeOk.value = true
  setTimeout(() => {
    mensajeOk.value = false
  }, 3000)
}

const cambiarEstadoLibro = async (valor) => {
  const accion = valor.target.value
  accionSeleccionada.value = accion

  if (!libroEnBibliotecaActualizar.value) {
    try {
      const libro = {
        id: props.libro.id,
        titulo: props.libro.tituloLibro,
        autor: props.libro.autorLibro
      }

      // Intentamos registrar el libro
      const respuesta = await axios.post(`http://localhost:8090/api/libros`, libro)
      const idLibro = respuesta.data.idLibro
      console.log('Libro registrado', respuesta.data)

      // Crear la relación con el marcado para leer default
      try {
        const response = await axios.post(
          `http://localhost:8090/api/bibliotecas/${datosUsuario.value.id}/${idLibro}/${props.libro.id}`,
          'Marcado para leer'
        )
        console.log(response.data)
        mostrarMensajeOk()
      } catch (error) {
        console.error('Error al guardar en la relación:', error.response?.data || error.message)
      }
    } catch (error) {
      if (error.response && error.response.status !== 200) {
        try {
          // Consultamos la bd para buscar el libro si no se pudo registrar
          const libroRespuesta = await axios.get(
            `http://localhost:8090/api/libros/titulo/${props.libro.tituloLibro}`
          )
          const idLibro = libroRespuesta.data.idLibro
          console.log(libroRespuesta.data)

          // Crear la relación con el marcado para leer default
          try {
            const response = await axios.post(
              `http://localhost:8090/api/bibliotecas/${datosUsuario.value.id}/${idLibro}/${props.libro.id}`,
              'Marcado para leer'
            )
            console.log(response.data)
            mostrarMensajeOk()
          } catch (error) {
            console.error('Error al guardar en la relación:', error.response?.data || error.message)
          }
        } catch (error) {
          console.error('Error al consultar el libro:', error.response?.data || error.message)
        }
      } else {
        console.error('Error al registrar el libro:', error.response?.data || error.message)
      }
    }
  } else {
    try {
      const idLibro = props.libro.id
      const estaContiene = {
        id: null,
        estadoLibro: accionSeleccionada.value
      }

      // Actualizamos el estado del libro
      const responseCambiarEstadoLibro = await axios.put(
        `http://localhost:8090/api/bibliotecas/${datosUsuario.value.id}/${idLibro}`,
        estaContiene,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      console.log(responseCambiarEstadoLibro.data)
      mostrarMensajeOk()
    } catch (error) {
      console.error('Error al cambiar el estado del libro:', error.response?.data || error.message)
    }
  }
}

watch(accionSeleccionada, (newVal) => {
  if (newVal) {
    cambiarEstadoLibro({ target: { value: newVal } })
  }
})

defineExpose({
  cambiarEstadoLibro
})
</script>

<template>
  <div class="contenedorGeneral">
    <div class="portada">
      <img :src="props.libro.coverDatos" alt="Portada del libro" />
    </div>
    <div class="parrafo">
      <p class="titulo">{{ props.libro.tituloLibro }}</p>
      <p><strong>Autor: </strong>{{ props.libro.autorLibro }}</p>
      <p><strong>Genero: </strong> {{ props.libro.generoLibro }}</p>
      <p><strong>Num paginas: </strong> {{ props.libro.numeroPaginas }} páginas</p>
    </div>
    <div class="boton">
      <div class="botonCambiarEstado">
        <select @change="cambiarEstadoLibro" class="select">
          <option value="" disabled selected>Opciones</option>
          <option value="Leyendo">Leyendo</option>
          <option value="Leido">Leido</option>
          <option value="Marcado para leer">Por leer</option>
        </select>
        <div v-if="mensajeOk" class="mensajeOk">
          <span class="iconoOk">&#10004;</span>
          Se ha actualizado
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contenedorGeneral {
  display: flex;
  flex-direction: row !important;
  border: 1px solid white;
  border-radius: 10px;
  background-color: rgb(56, 190, 201);
  color: white;
  padding: 10px;
  justify-content: center;
}

.parrafo {
  margin: 0px;
  margin-top: 20px;
  font-size: medium;
  width: 100%;
}

.boton {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center !important;
  width: 33%;
}

.portada {
  display: flex;
  height: 250px;
  width: 33%;
}

.titulo {
  font-size: 1.3rem;
  font-weight: bold;
}

.select {
  width: 150px;
  height: 35px;
  padding: 5px;
  border-radius: 10px;
  border: 1px;
  background-color: rgb(51, 51, 51);
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

.botonCambiarEstado {
  margin-bottom: 200px;
  width: 200px;
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
