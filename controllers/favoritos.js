const { getFavoritos, insertFavorito, deletarFavorito } = require("../servicos/favoritos")

function getTodosFavoritos(req, res) {
    try{
      const livros = getFavoritos()
      res.send(livros)
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function postFavorito(req,res){
    try{ 
    const id = req.params.id
    insertFavorito(id)
    res.send("Livro inserido com sucesso")
    res.send(201)
    }catch(error){
      res.status(500)
      res.send(error.message)
    }
  }

function deleteFavoritos(req, res){
try{
    const id = req.params.id
    if(id && Number(id)){
    deletarFavorito(id)
    res.send("Livro Deletado")
    }else{
    res.status(422)
    res.send("ID inválido!")
    }

}catch(error){
    res.status(500)
    res.send(error.message)
}
}


module.exports = {
    getTodosFavoritos,
    postFavorito,
    deleteFavoritos
}