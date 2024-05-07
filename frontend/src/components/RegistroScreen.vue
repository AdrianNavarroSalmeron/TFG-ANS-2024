<script setup>
import { ref } from 'vue'
import Swal from 'sweetalert2'

const usuario = ref({
  id: 0,
  nombre: '',
  login: '',
  contrasenia: ''
})
const nombre = ref('')
const login = ref('')
const contrasenia = ref('')

//Reglas para los campos de texto
const rules = [
  (v) => !!v || 'El campo es requerido',
  (v) => (v && v.length >= 5) || 'El campo debe tener al menos 5 caracteres'
]

//Funcion para registrar un usuario
const registrarUsuario = async () => {
  if (nombre.value.trim() == '' || nombre.value.trim().length < 5) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'El nombre no puede estar vacio o tener menos de 5 caracteres'
    })
    return
  }
  //Comprobacion del login
  if (login.value.trim() == '' || login.value.trim().length < 5) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'El login no puede estar vacio o tener menos de 5 caracteres'
    })
    return
  }
  //Comprobamos si el login ya esta en uso
  if (await comprobarSiUsuarioEnUso()) {
    return
  }
  //Comprobacion de la contraseña
  if (contrasenia.value.trim() == '' || contrasenia.value.trim().length < 5) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'La contraseña no puede estar vacia o tener menos de 5 caracteres'
    })
    return
  }
  //Rellenamos el objeto usuario
  usuario.value = {
    id: 0,
    nombre: nombre.value,
    login: login.value,
    contrasenia: contrasenia.value
  }
  console.log(usuario.value)
}

const comprobarSiUsuarioEnUso = async () => {
  const response = await fetch('http://localhost:8090/api/usuarios')
  const data = await response.json()
  return recorrerVectorUsuarios(data)
}

const recorrerVectorUsuarios = (vectorUsuarios) => {
  for (let i = 0; i < vectorUsuarios.length; i++) {
    if (vectorUsuarios[i].login === login.value) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El login ya esta en uso'
      })
      return true
    }
  }
  return false
}
</script>

<template>
  <div class="containerGeneral">
    <div class="containerImagen">
      <img class="imagenLogo" src="../assets/logo.png" alt="Logo" />
    </div>
    <div class="containerLogin">
      <!--Input Nombre usuario-->
      <div class="containerInputs">
        <v-text-field
          v-model="nombre"
          :rules="rules"
          hide-details="auto"
          label="Nombre"
          hint="Introduzca su nombre"
        ></v-text-field>
      </div>
      <!--Input Login-->
      <div class="containerInputs">
        <v-text-field
          hint="Debe contener mas de 5 caracteres"
          v-model="login"
          :rules="rules"
          hide-details="auto"
          label="Login"
        ></v-text-field>
      </div>
      <div class="containerInputs">
        <!--Input Contrasenia-->
        <v-text-field
          hint="Debe contener mas de 5 caracteres"
          v-model="contrasenia"
          :rules="rules"
          hide-details="auto"
          label="Contraseña"
        ></v-text-field>
      </div>
      <div>
        <v-btn @click="registrarUsuario" class="botonIniciarSesion">Registarse</v-btn>
      </div>
    </div>
  </div>
</template>

<style scoped>
.containerGeneral {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgb(51, 51, 51);
  font-family: Verdana, Geneva, Tahoma, sans-serif !important;
  color: white !important;
}

.containerLogin {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80vh;
  border: 1px solid white;
  border-radius: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
}

.containerInputs {
  margin: 10px;
  width: 40%;
}

.botonIniciarSesion {
  margin: 10px;
  background-color: rgb(56, 190, 201);
  color: rgb(51, 51, 51);
  font-weight: bold;
}

.imagenLogo {
  height: 250px;
  width: 250px;
}

.containerImagen {
  margin: 0px;
}
</style>
