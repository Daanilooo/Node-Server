const fs = require("fs")

function getTodosLivros (){
    return JSON.parse(fs.readFileSync("livros.json"))
}

function getLivroPorID(id){
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    
    const livroFiltrado = livros.filter(livro => livro.id === id)[0]
    return livroFiltrado
}

function insereLivro(livroNovo){
    const livros= JSON.parse(fs.readFileSync("livros.json"))
    
    const novaLista = [...livros, livroNovo]

    fs.writeFileSync("livros.json", JSON.stringify(novaLista))
}

function modificaLivro(modificacoes, id){
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const indice = livrosAtuais.findIndex(livro => livro.id === id)

    const conteudo = {...livrosAtuais[indice], ... modificacoes}    
    livrosAtuais[indice] = conteudo
    
    fs.writeFileSync("livros.json",JSON.stringify(livrosAtuais))
}

function deletarLivro(id){
    const livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const indice = livrosAtuais.findIndex(livro => livro.id === id)

    livrosAtuais.splice(indice,1)

    fs.writeFileSync("livros.json",JSON.stringify(livrosAtuais))

}
module.exports = {
    getTodosLivros,
    getLivroPorID,
    insereLivro,
    modificaLivro,
    deletarLivro
}