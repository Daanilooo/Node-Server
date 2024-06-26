const {Router} = require('express')
const {getLivros, getID, postLivro, patchLivro, deleteLivro} = require('../controllers/livro')

const router = Router()

router.get('/', getLivros)

router.get('/:id', getID)

router.post('/', postLivro)

router.patch('/:id', patchLivro)

router.delete('/:id', deleteLivro)

module.exports = router