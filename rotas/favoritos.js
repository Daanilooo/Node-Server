const {Router} = require('express')
const { getTodosFavoritos, postFavorito, deleteFavoritos } = require('../controllers/favoritos')

const routerFav = Router()

routerFav.get('/', getTodosFavoritos)
routerFav.post('/:id', postFavorito)
routerFav.delete('/:id', deleteFavoritos)

module.exports = routerFav
