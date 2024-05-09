<script setup>
import LibroIndividual from '@/components/LibroIndividual.vue'
import { ref, onMounted } from 'vue'
const props = defineProps({
  arrayDeLibros: Array
})

let scrollContainer = ref(null)

const scroll = (direccion) => {
  scrollContainer.value.scrollLeft += direccion * 200
}

onMounted(() => {
  scrollContainer = ref('scrollContainer')
})
</script>

<template>
  <div class="containerHeader">Popular esta semana</div>
  <div class="containerSeccion">
    <v-btn
      class="botonesDireccion"
      icon="fa-solid fa-arrow-left"
      size="x-small"
      @click="scroll(-1)"
    ></v-btn>
    <div ref="scrollContainer" class="scrollContainer">
      <div class="for" v-for="(libro, index) in props.arrayDeLibros" :key="index">
        <LibroIndividual :libro="libro" :index="index" />
      </div>
    </div>
    <v-btn
      class="botonesDireccion"
      icon="fa-solid fa-arrow-right"
      size="x-small"
      @click="scroll(1)"
    ></v-btn>
  </div>
</template>

<style scoped>
.containerSeccion {
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 20px;
  flex-wrap: nowrap;
  padding: 20px;
  border-radius: 25px;
  width: 100%;
  overflow-x: scroll;
  scrollbar-width: none;
}

.for {
  display: flex;
  flex-direction: column;
}

.containerHeader {
  text-align: left;
  font-size: 2rem;
  margin-top: 20px;
  margin-bottom: 20px;
  color: white;
}

.scrollContainer {
  display: flex;
  flex-direction: row;
  gap: 60px;
  overflow-x: scroll;
  scrollbar-width: none;
}

.scrollContainer::-webkit-scrollbar {
  display: none;
}

.botonesDireccion {
  margin-top: 100px;
  margin-bottom: 100px;
  margin-left: 0px;
  margin-right: 0px;
}
</style>
