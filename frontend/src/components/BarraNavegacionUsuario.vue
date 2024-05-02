<script setup>
import router from '../router'
</script>

<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer expand-on-hover rail>
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            subtitle="sandra_a88@gmailcom"
            title="Sandra Adams"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item
            @click="router.push('/inicio')"
            prepend-icon="fa-solid fa-house"
            title="Inicio"
            value="inicio"
          >
          </v-list-item>
          <v-list-item
            @click="router.push('/biblioteca')"
            prepend-icon="fa-solid fa-book"
            title="Biblioteca"
            value="biblioteca"
          >
          </v-list-item>
          <v-list-item>
            <v-toolbar dense floating class="toolBarItem">
              <v-text-field
                class="barraBusqueda"
                prepend-icon="fa-solid fa-magnifying-glass"
                hide-details
                single-line
                placeholder="Libros, autores...."
              ></v-text-field>
            </v-toolbar>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 250px"></v-main>
    </v-layout>
  </v-card>
</template>

<style scoped>
.barraBusqueda {
  background-color: white;
}

.toolBarItem {
  background-color: white;
}
</style>
