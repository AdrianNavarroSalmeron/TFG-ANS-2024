<script setup>
import FooterHome from '../FooterHome.vue'
import HeaderBiblioteca from '../HeaderBiblioteca.vue'
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
import LibroIndividualBusqueda from './LibroIndividualBusqueda.vue'

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
      <div v-if="arrayDeLibrosBusqueda.length > 0">
        <p class="tituloBusqueda">Resultados de la búsqueda</p>
        <div v-for="libro in arrayDeLibrosBusqueda" :key="libro.id">
          <LibroIndividualBusqueda :libro="libro" />
        </div>
      </div>
      <div v-else>
        <p class="tituloBusqueda">No se encontraron resultados</p>
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
  flex-direction: column;
  margin-top: 20px;
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

.tituloBusqueda {
  display: flex;
  font-size: 1.2rem;
  justify-content: center;
  margin-right: 200px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .contenedorGeneral {
    margin-left: 20px;
    margin-right: 20px;
    gap: 20px;
  }

  .tituloBusqueda {
    margin-right: 20px;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .contenedorGeneral {
    margin-left: 10px;
    margin-right: 10px;
  }

  .tituloBusqueda {
    margin-right: 10px;
    font-size: 0.9rem;
  }
}
</style>
