<script setup>
import ItemIndividual from './ItemIndividual.vue'

const props = defineProps({
  misCompras: Array
})

const emit = defineEmits(['borrarItem', 'enviarEmitObjetoEditado'])

const enviarEmitBorrarItem = (Index) => {
  emit('borrarItem', Index)
}

const enviarEmitObjetoEditado = (itemModificadoDeItemIndividual) => {
  emit('enviarEmitObjetoEditado', itemModificadoDeItemIndividual)
  console.log('Soy lista Item: he enviado el emit')
}
</script>

<template>
  <section class="items">
    <ItemIndividual
      @emit-borrar="enviarEmitBorrarItem"
      @emit-item-editado="enviarEmitObjetoEditado"
      v-for="(item, index) of props.misCompras"
      :key="index"
      :item="item"
      :index="index"
    />
  </section>
</template>

<style scoped>
.items {
  display: flex;
  flex-direction: column;
}
</style>
