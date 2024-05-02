<script setup>
import { ref } from 'vue'
const props = defineProps({
  item: Object,
  index: Number
})

const emit = defineEmits(['emitBorrar', 'emitItemEditado'])

const prioridades = {
  alta: '🔴',
  media: '🟡',
  baja: '🟢'
}

const enviarEmitBorrar = () => {
  emit('emitBorrar', props.index)
}

const seEstaEditando = ref(false)
const nuevoNombre = ref('')
const nuevaPrioridad = ref('')

const itemModificado = ref({
  producto: '',
  prioridad: '',
  index: ''
})

function obtenerPrioridad() {
  const primerSplit = nuevaPrioridad.value.split('-')
  const prioridadTemporal = primerSplit[1]
  return prioridadTemporal
}

const guardarObjeto = () => {
  seEstaEditando.value = false
  itemModificado.value.producto = nuevoNombre.value
  itemModificado.value.prioridad = obtenerPrioridad()
  itemModificado.value.index = props.index
  emit('emitItemEditado', itemModificado)
  console.log('Soy Item individual: he enviado el emit')

  //Limpiamos los inputs
  nuevoNombre.value = ''
  nuevaPrioridad.value = ''
}
</script>
<template>
  <article>
    <div class="nombre">
      <!--Renderizado normal-->
      <p id="nombreIndividual" v-if="!seEstaEditando">
        {{ props.index + 1 }} - {{ props.item.producto }}
      </p>
      <!--Renderizado cuando se edita-->
      <input v-else type="text" v-model="nuevoNombre" class="modoEdicion" />
    </div>
    <div class="resto">
      <!--Renderizado normal-->
      <p v-if="!seEstaEditando">{{ prioridades[props.item.prioridad] }}</p>
      <!--Renderizado cuando se edita-->
      <select v-else v-model="nuevaPrioridad" class="modoEdicion">
        <option value="" disabled selected>Prioridad</option>
        <option>🟢-baja</option>
        <option>🟡-media</option>
        <option>🔴-alta</option>
      </select>
    </div>
    <div class="resto">
      <!--Renderizado normal-->
      <button v-if="!seEstaEditando" class="boton">
        <font-awesome-icon @click="enviarEmitBorrar" icon="trash-can" />
      </button>
      <button v-if="!seEstaEditando" class="boton" @click="seEstaEditando = !seEstaEditando">
        <font-awesome-icon icon="user-pen" />
      </button>
      <!--Renderizado cuando se edita-->
      <button
        @click="guardarObjeto"
        v-if="seEstaEditando && nuevaPrioridad && nuevoNombre"
        class="modoEdicion botonEdicion"
      >
        Guardar
      </button>
    </div>
  </article>
</template>

<style scoped>
article {
  /*width: auto;*/
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 25px;
}

.nombre {
  width: 20%;
}

.resto {
  width: 20%;
}

.modoEdicion {
  width: 85%;
  margin-bottom: 15px;
}

.botonEdicion {
  width: 30%;
}
</style>
