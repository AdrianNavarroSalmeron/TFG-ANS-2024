<script setup>
import { ref } from 'vue'

//Cuando se pulsa el boton inicar sesion se accede a una url de la API y se le manda el usuario
//y la contraseña, si es correcto se redirige a la pagina de compra
const rules = [
  (v) => !!v || 'El campo es requerido',
  (v) => (v && v.length >= 5) || 'El campo debe tener al menos 5 caracteres'
]

const usuario = ref('')
const contrasenia = ref('')

const iniciarSesion = () => {
  //Se obtienen los valores de los campos de texto

  //Se comprueba que los campos no esten vacios
  if (usuario.value === '' || contrasenia.value === '') {
    alert('Los campos no pueden estar vacios')
  } else {
    //Se realiza la peticion a la API
    fetch('http://localhost:8090/api/usuarios/login', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        idUsuario: '1',
        nombreUsuario: 'a',
        login: usuario.value,
        contrasenia: contrasenia.value
      })
    })
      .then((response) => {
        if (response.ok) {
          //Si la respuesta es correcta se redirige a la pagina de compra
          window.location.href = '/biblioteca'
        } else if (response.status === 400) {
          alert('Usuario o contraseña incorrectos')
          throw new Error('Usuario o contraseña incorrectos')
        } else {
          throw new Error('Error en el servidor')
        }
      })
      .catch((error) => {
        console.log('Error:', error)
      })
  }
}
</script>

<template>
  <div class="containerGeneral">
    <div class="containerImagen">
      <img class="imagenLogo" src="../assets/logo.png" alt="Logo" />
    </div>
    <div class="containerLogin">
      <!--Input Usuario-->
      <div class="containerInputs">
        <v-text-field
          v-model="usuario"
          :rules="rules"
          hide-details="auto"
          label="Usuario"
        ></v-text-field>
      </div>
      <div class="containerInputs">
        <!--Input Contresenia-->
        <v-text-field
          v-model="contrasenia"
          :rules="rules"
          hide-details="auto"
          label="Contraseña"
        ></v-text-field>
      </div>
      <div>
        <v-btn @click="iniciarSesion" class="botonIniciarSesion">Iniciar Sesión</v-btn>
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
