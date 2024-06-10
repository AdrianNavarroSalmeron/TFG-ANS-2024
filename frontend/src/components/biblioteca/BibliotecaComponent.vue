<script setup>
import FooterHome from '../FooterHome.vue'
import HeaderBiblioteca from '../HeaderBiblioteca.vue'
import SeccionesBiblioteca from './SeccionesBiblioteca.vue'
</script>

<template>
  <div class="contenedorTotal">
    <header>
      <HeaderBiblioteca />
      <hr class="barraSeparadora" />
      <div class="containerSecciones">
        <div class="seccion">
          <h3 class="titulo">Marcados para leer</h3>
          <SeccionesBiblioteca></SeccionesBiblioteca>
        </div>
        <div class="seccion">
          <h3 class="titulo">Leyendo</h3>
          <SeccionesBiblioteca></SeccionesBiblioteca>
        </div>
        <div class="seccion">
          <h3 class="titulo">Leídos</h3>
          <SeccionesBiblioteca></SeccionesBiblioteca>
        </div>
      </div>
    </header>
    <footer>
      <FooterHome />
    </footer>
  </div>
</template>
<style scoped>
.contenedorTotal {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;
}

.titulo {
  color: rgb(44, 177, 188);
}

.seccion {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
}
</style>
