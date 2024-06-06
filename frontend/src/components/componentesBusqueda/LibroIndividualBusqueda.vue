<script setup>
const props = defineProps({
  libro: Object
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
  width: 100vh;
  justify-content: center;
}

.portada {
  display: flex;
  height: 250px;
  width: 150px;
}

.parrafo {
  margin: 0px;
  margin-top: 20px;
  font-size: medium;
}

.boton {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center !important;
}

.portada img {
  object-fit: contain;
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
</style>
