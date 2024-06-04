import express from 'express'
import axios from 'axios'
import cors from 'cors'
import process from 'process'

const app = express()
const PORT = process.env.PORT || 3000

// Configurar CORS
app.use(cors())

// Ruta para manejar las solicitudes a la API de Google Books
app.get('/api/books/:id', async (req, res) => {
  const { id } = req.params
  try {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`)
    res.json(response.data)
  } catch (error) {
    res.status(error.response.status).json({ message: error.message })
  }
})

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
