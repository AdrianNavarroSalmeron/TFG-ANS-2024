<template>
  <div>
    <div id="viewerCanvas" style="width: 600px; height: 500px"></div>
  </div>
</template>

<script setup>
import { onMounted, watch } from 'vue'

const props = defineProps({
  id: String
})

const loadGoogleBooksAPI = () => {
  const script = document.createElement('script')
  script.src = 'https://www.google.com/books/jsapi.js'
  script.onload = initializeGoogleBooks
  document.head.appendChild(script)
}

const initializeGoogleBooks = () => {
  window.google.books.load()
  window.google.books.setOnLoadCallback(initializeViewer)
}

const initializeViewer = () => {
  const viewer = new window.google.books.DefaultViewer(document.getElementById('viewerCanvas'))
  viewer.load(props.id)
}

onMounted(() => {
  loadGoogleBooksAPI()
})

watch(
  () => props.id,
  (newId) => {
    if (newId) {
      initializeViewer()
    }
  }
)
</script>

<style scoped>
#viewerCanvas {
  border: 1px solid #ccc;
  border-radius: 10px;
}
</style>
