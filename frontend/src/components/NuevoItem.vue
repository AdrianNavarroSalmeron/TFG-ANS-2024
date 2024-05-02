<script setup>
import { ref } from 'vue'

const emit = defineEmits(['enviar'])

const itemNuevo = ref({
  producto: '',
  prioridad: ''
})

function obtenerPrioridad() {
  const primerSplit = prioridadElegida.value.split('-')
  const prioridadTemporal = primerSplit[1]
  return prioridadTemporal
}

function aniadirDatosAObjeto() {
  itemNuevo.value.producto = nombreProducto.value
  itemNuevo.value.prioridad = obtenerPrioridad()
  enviarEmit()
}

function enviarEmit() {
  emit('enviar', itemNuevo)
}

const nombreProducto = ref('')
const prioridadElegida = ref('')
</script>

<template>
  <p>Nuevo item</p>
  <div class="contenedorNuevoItem">
    <input
      class="componenteContenedorNuevoItem"
      type="text"
      v-model="nombreProducto"
      id="contenedorNuevoItem"
      placeholder="Agua"
    />
    <select v-model="prioridadElegida" class="componenteContenedorNuevoItem" id="selector">
      <option value="" disabled selected>Prioridad</option>
      <option>🟢-baja</option>
      <option>🟡-media</option>
      <option>🔴-alta</option>
    </select>
    <button
      v-show="nombreProducto && prioridadElegida"
      @click="aniadirDatosAObjeto"
      class="componenteContenedorNuevoItem"
      id="boton"
    >
      Añadir
    </button>
  </div>
</template>

<style scoped>
.contenedorNuevoItem {
  display: flex;
}

.componenteContenedorNuevoItem {
  margin-right: 15px;
  height: auto;
}
</style>
