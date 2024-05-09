const express = require('express')
const rotaLivro = require('./rotas/livro')
const cors = require('cors')
const routerFav = require('./rotas/favoritos')

const app = express()
app.use(express.json())
app.use(cors({origin: "*"}))

const port = 8000

app.use('/livros', rotaLivro)
app.use('/favoritos', routerFav)

app.listen(port, () => {
  console.log(`Escutando a porta ${port}`)
})
