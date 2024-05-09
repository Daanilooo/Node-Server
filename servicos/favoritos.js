const fs = require("fs")

function getFavoritos (){
    return JSON.parse(fs.readFileSync("favoritos.json"))
}

function deletarFavorito(id) {
    const livrosAtuais = JSON.parse(fs.readFileSync("favoritos.json"))
    const indice = livrosAtuais.findIndex(livro => livro.id === id)

    livrosAtuais.splice(indice,1)

    fs.writeFileSync("favoritos.json",JSON.stringify(livrosAtuais))
}

function insertFavorito(id){
    const Livros = JSON.parse(fs.readFileSync("livros.json"))
    const favoritos = JSON.parse(fs.readFileSync("favoritos.json"))

    const livroFavorito = Livros.find(livro => livro.id === id)
    const novaListaFav = [...favoritos,livroFavorito]

    fs.writeFileSync("favoritos.json", JSON.stringify(novaListaFav))
}

module.exports = {
    getFavoritos,
    deletarFavorito,  
    insertFavorito  
}