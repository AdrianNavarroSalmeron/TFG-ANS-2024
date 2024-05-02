<script setup>
import router from '../router'
</script>

<template>
  <ul class="ulContenedor">
    <li class="navegacion">
      <button @click="router.push('/biblioteca')" style="margin: 10px">
        Biblioteca
        <font-awesome-icon icon="fa-solid fa-book" />
      </button>
    </li>
    <li class="navegacion">
      <button @click="router.push('/listacompra')" style="margin: 10px">
        Lista de la compra
        <font-awesome-icon icon="cart-shopping" />
      </button>
    </li>
    <li class="navegacion">
      <button @click="router.push('/login')" style="margin: 10px">
        Login
        <font-awesome-icon icon="fa-solid fa-user" />
      </button>
    </li>
  </ul>
</template>

<style scoped>
.ulContenedor {
  justify-content: center;
  gap: 50px;
  list-style-type: none;
  margin: 0;
  padding: 0;
  height: 100%;
  position: fixed;
  overflow: auto;
  background-color: #faf4e4;
  border-radius: 25px;
}

.navegacion {
  display: block;
  padding: 8px 16px;
  text-decoration: none;
  font-size: 15px;
}

button:hover {
  background-color: #d3a121;
  color: #faf4e4;
}

button {
  height: 100px;
  width: 100px;
  background-color: #d3a121;
  color: black;
  border-radius: 4px;
  border-color: white;
  border-width: 0.5px;
}

@media screen and (max-width: 700px) {
  .ulContenedor {
    width: 100%;
    height: auto;
    position: relative;
  }
  .ulContenedor .navegacion {
    float: left;
  }
}

@media screen and (max-width: 400px) {
  .ulContenedor .navegacion {
    text-align: center;
    float: none;
  }
}
</style>
