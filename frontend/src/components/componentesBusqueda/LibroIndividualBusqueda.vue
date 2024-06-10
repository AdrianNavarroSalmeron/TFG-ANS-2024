<script setup>
import { ref, defineExpose, watch, computed } from 'vue'
import axios from 'axios'
import { useStore } from 'vuex'

const props = defineProps({
  libro: Object
})
const store = useStore()
const datosUsuario = computed(() => store.getters['getData'])

const accionSeleccionada = ref('')
const mensajeOk = ref(false)

const mostrarMensajeOk = () => {
  mensajeOk.value = true
  setTimeout(() => {
    mensajeOk.value = false
  }, 3000)
}

const cambiarEstadoLibro = async (valor) => {
  accionSeleccionada.value = valor.target.value
  try {
    const libro = {
      id: props.libro.id,
      titulo: props.libro.tituloLibro,
      autor: props.libro.autorLibro
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
            `http://localhost:8090/api/bibliotecas/${datosUsuario.value.id}/${idLibro}/${props.libro.id}`,
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
          `http://localhost:8090/api/libros/titulo/${props.libro.tituloLibro}`
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
          <option value="Por leer">Por leer</option>
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
