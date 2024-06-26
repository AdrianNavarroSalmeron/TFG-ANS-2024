<script setup>
import { ref } from 'vue'
import Swal from 'sweetalert2'
import router from '../router'
import { useStore } from 'vuex'

//Cuando se pulsa el boton inicar sesion se accede a una url de la API y se le manda el usuario
//y la contraseña, si es correcto se redirige a la pagina de compra
const rules = [
  (v) => !!v || 'El campo es requerido',
  (v) => (v && v.length >= 5) || 'El campo debe tener al menos 5 caracteres'
]

//Definimos la store
const store = useStore()

//Variables reactivas
const usuario = ref('')
const contrasenia = ref('')

const datosUsuario = ref({
  nombreUsuario: '',
  login: ''
})

const rellenarUsuario = (usuarioRecibido, loginRecibido) => {
  datosUsuario.value.nombreUsuario = usuarioRecibido
  datosUsuario.value.login = loginRecibido
  cargarDatos()
}

//Rellene los datos del usuario
const cargarDatos = () => {
  if (datosUsuario.value.nombreUsuario === '' || datosUsuario.value.login === '') {
    router.push('/login')
  } else {
    usuario.value = datosUsuario.value.nombreUsuario
    contrasenia.value = datosUsuario.value.login
    store.commit('setData', datosUsuario.value)
    console.log('Usuario:', datosUsuario.value.nombreUsuario)
    console.log('Contrasenia:', datosUsuario.value.login)
    store.commit('setLoggedIn', true)
    console.log('Loggeado:', store.getters['isLoggedIn'])
  }
}

const iniciarSesion = () => {
  //Se obtienen los valores de los campos de texto

  //Se comprueba que los campos no esten vacios
  if (usuario.value === '' || contrasenia.value === '') {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Usuario o contraseña vacios'
    })
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
        if (response.status === 200) {
          return response.json()
        } else if (response.status === 400) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Usuario o contraseña incorrectos'
          })
          throw new Error('Usuario o contraseña incorrectos')
        } else {
          throw new Error('Error en el servidor')
        }
      })
      .then((data) => {
        rellenarUsuario(data.nombreUsuario, data.login)
        //TODO: crear la mutacion para guardar el usuario en el store
        store.commit('aniadirDatosUsuario', {
          nombreUsuario: data.nombreUsuario,
          login: data.login,
          id: data.idUsuario
        })
        router.push('/home')
      })
      .catch((error) => {
        console.log('Error:', error)
      })
  }
}

const registrarse = () => {
  router.push('/registro')
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
          class="inputContrasenia"
          v-model="contrasenia"
          :rules="rules"
          hide-details="auto"
          label="Contraseña"
          type="password"
        ></v-text-field>
      </div>

      <div>
        <v-btn @click="iniciarSesion" class="botonIniciarSesion">Iniciar Sesión</v-btn>
      </div>
      <label @click="registrarse" class="botonRegistrarse">Registrarse</label>
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
  display: flex;
  flex-direction: row;
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

.botonIniciarSesion:hover {
  background-color: white;
  color: rgb(56, 190, 201);
}
.botonRegistrarse {
  color: rgb(56, 190, 201);
  background-color: rgb(51, 51, 51);
  text-decoration: underline;
  font-weight: lighter;
  font-size: medium;
}

.botonRegistrarse:hover {
  cursor: pointer;
  color: white;
}

.containerGeneral {
  flex-direction: column;
}

.containerLogin,
.containerInputs {
  width: 90%;
}

.imagenLogo {
  height: 200px;
  width: auto;
}

@media (min-width: 768px) {
  .containerGeneral {
    flex-direction: row;
  }

  .containerLogin,
  .containerInputs {
    width: 50%;
  }

  .imagenLogo {
    height: 250px;
  }
}

@media (min-width: 1024px) {
  .containerLogin,
  .containerInputs {
    width: 30%;
  }

  .imagenLogo {
    height: 300px;
  }
}
</style>
