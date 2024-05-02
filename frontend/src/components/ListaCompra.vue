<script setup>
import { onMounted, ref } from 'vue'
import EncabezadoComponente from './EncabezadoComponente.vue'
import PieComponente from './PieComponente.vue'
import ListaItems from './ListaItems.vue'
import NuevoItem from './NuevoItem.vue'

const lista = ref([])

const recibo = (itemHijo) => {
  lista.value.push({
    producto: itemHijo.value.producto,
    prioridad: itemHijo.value.prioridad
  })
  actualizarStorage()
}

const borrarItemDeArray = (indexListaItems) => {
  lista.value.splice(indexListaItems, 1)
  actualizarStorage()
}

const aniadirObjetoModificadoArray = (itemRecibido) => {
  const itemSinIndex = {
    producto: itemRecibido.value.producto,
    prioridad: itemRecibido.value.prioridad
  }
  lista.value.splice(itemRecibido.value.index, 1, itemSinIndex)
  actualizarStorage()
}

//Funciones Storage

const actualizarStorage = () => {
  localStorage.setItem('lista', JSON.stringify(lista.value))
}

onMounted(() => {
  lista.value = JSON.parse(localStorage.getItem('lista')) || lista.value
})
</script>

<template>
  <div class="contenedor">
    <EncabezadoComponente />
    <ListaItems
      :mis-compras="lista"
      @borrar-item="borrarItemDeArray"
      @enviar-emit-objeto-editado="aniadirObjetoModificadoArray"
    />
    <div class="nuevoItem">
      <NuevoItem @enviar="recibo" />
    </div>
    <PieComponente />
  </div>
</template>

<style scoped>
.nuevoItem {
  margin: 0;
  margin-left: 5px;
}

.contenedor {
  display: flex;
  flex-direction: column;
}
</style>
