const fs = require ('fs')
const {getTodosLivros, getLivroPorID, insereLivro} = require('../servicos/livro')


function getLivros(req, res) {
    try{
      const livros = getTodosLivros()
      res.send(livros)
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
  }

  function getID(req,res){
    try{
      const id = req.params.id
      const livro = getLivroPorID(id)
      res.send(livro)
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
  }

  function postLivro(req,res){
    try{
      const livroNovo = req.body
      insereLivro(livroNovo)
      res.send("Livro inserido com sucesso")
      res.send(201)

    }catch(error){
      res.status(500)
      res.send(error.message)
    }
  }

  module.exports = {
    getLivros,
    getID,
    postLivro
  }