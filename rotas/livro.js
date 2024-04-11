const {Router} = require('express')
const {getLivros, getID, postLivro} = require('../controllers/livro')

const router = Router()

router.get('/', getLivros)

router.get('/:id', getID)

router.post('/', postLivro)
router.patch('/', (req, res) => {
    res.send('Voce fez uma requisição do tipo PATCH!')
})

router.delete('/', (req, res) => {
    res.send('Voce fez uma requisição do tipo DELETE!')
})

module.exports = router