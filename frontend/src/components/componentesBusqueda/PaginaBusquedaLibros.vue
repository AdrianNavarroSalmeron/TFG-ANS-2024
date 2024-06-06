<script setup>
import FooterHome from '../FooterHome.vue'
import HeaderBiblioteca from '../HeaderBiblioteca.vue'
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'

const store = useStore()
//const arrayDeLibrosBusqueda = computed(() => store.getters['getLibros'])

const arrayDeLibrosBusqueda = computed(() =>
  store.getters['getLibros'].map((libroRef) => libroRef.value)
)

onMounted(() => {
  if (arrayDeLibrosBusqueda.value.length > 0) {
    console.log('Estos son los libros', arrayDeLibrosBusqueda.value[0].tituloLibro)
  } else {
    console.log('No se encontraron libros')
  }
})
</script>

<template>
  <div class="contenedorTotal">
    <header>
      <HeaderBiblioteca />
      <hr class="barraSeparadora" />
    </header>
    <div class="contenedorGeneral">
      <h1>Resultados de la Búsqueda</h1>
      <div v-for="libro in arrayDeLibrosBusqueda" :key="libro.id">
        <p>{{ libro.tituloLibro }}</p>
        <img :src="libro.coverDatos" alt="Portada del libro" />
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

.barraSeparadora {
  border: none;
  border-top: 1px solid #ccc;
  margin-top: 20px;
}
</style>
