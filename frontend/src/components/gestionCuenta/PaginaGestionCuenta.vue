<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import HeaderBiblioteca from '../HeaderBiblioteca.vue'
import Swal from 'sweetalert2'

const store = useStore()
const userData = store.getters['getData']
const usuario = ref(userData.nombreUsuario)
const contrasenia = ref()
const idUsuario = userData.id

const actualizarUsuario = () => {
  if (usuario.value === '') {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Usuario o contraseña vacíos'
    })
  } else {
    // Se realiza la petición a la API
    fetch(`http://localhost:8090/api/usuarios/${idUsuario}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nombreUsuario: usuario.value,
        contrasenia: contrasenia.value
      })
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else if (response.status === 400) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Usuario o contraseña incorrectos'
          })
          throw new Error('Usuario o contraseña incorrectos')
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo salió mal, por favor intenta nuevamente'
          })
          throw new Error('Error en la actualización')
        }
      })
      .then((data) => {
        console.log('Success:', data)
        actualizarDatosDelStore()
        Swal.fire({
          icon: 'success',
          title: '¡Éxito!',
          text: 'Se ha actualizado correctamente'
        })
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }
}

const actualizarDatosDelStore = () => {
  store.commit('aniadirDatosUsuario', {
    nombreUsuario: usuario.value,
    login: userData.login,
    id: userData.id
  })
}
</script>

<template>
  <div class="containerTotal">
    <header>
      <HeaderBiblioteca />
    </header>
    <hr class="barraSeparadora" />
    <div class="containerGeneral">
      <p class="titulos">Cambiar credenciales</p>
      <div class="divider"></div>
      <div class="containerInput">
        <v-text-field
          v-model="usuario"
          :rules="rules"
          hide-details="auto"
          label="Usuario"
        ></v-text-field>
      </div>
      <div class="containerInput">
        <v-text-field
          class="inputContrasenia"
          v-model="contrasenia"
          :rules="rules"
          hide-details="auto"
          label="Contraseña"
          type="password"
        ></v-text-field>
      </div>
      <v-btn class="botonGuardar" @click="actualizarUsuario">Actualizar</v-btn>
    </div>
  </div>
</template>

<style scoped>
.containerGeneral {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid white;
  padding: 20px;
}

.barraSeparadora {
  width: 100%;
  height: 1px;
  background-color: #ccc;
  margin-bottom: 20px;
}

.containerTotal {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}

.containerInput {
  display: flex;
  flex-direction: row;
  margin: 10px;
  width: 70%;
}

.divider {
  width: 100%;
  height: 1px;
  background-color: #ccc;
  margin: 20px 0;
}

.botonGuardar {
  margin: 10px;
  background-color: rgb(56, 190, 201);
  color: rgb(51, 51, 51);
  font-weight: bold;
}

.titulos {
  font-size: 20px;
  font-weight: bold;
}
</style>
