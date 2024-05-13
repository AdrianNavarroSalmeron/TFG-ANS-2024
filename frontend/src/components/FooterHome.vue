<script setup></script>

<template>
  <v-divider :thickness="1" color="blue"></v-divider>
  <div class="copyRight">HomeBook- © 2024 Todos los derechos reservados</div>
  <div class="containerFooter">
    <div class="footerIcono">
      <font-awesome-icon icon="fa-brands fa-twitter" />
    </div>
    <div class="footerIcono">
      <font-awesome-icon icon="fa-brands fa-facebook" />
    </div>
    <div class="footerIcono">
      <font-awesome-icon icon="fa-brands fa-instagram" />
    </div>
  </div>
</template>

<style scoped>
.containerFooter {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
  width: 100%;
  justify-content: center;
  gap: 20px;
}

.copyRight {
  text-align: center;
  font-size: 1rem;
  margin-top: 20px;
  margin-bottom: 0;
  color: rgb(44, 177, 188);
}
</style>
