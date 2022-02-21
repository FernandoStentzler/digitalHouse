const cinema = 'CineHouse'
const catalogo = [
    {
        codigo: 1,
        titulo: 'Uma Noite muito Louca',
        duracao: 1,
        atores: ['Jason', 'Boneco Assasino', 'Jack'],
        anoDeLancamento: 2022,
        emCartaz: true,

    },
    {
        codigo: 2,
        titulo: 'Vamos de Novo',
        duracao: 2,
        atores: ['Jess', 'Vulcans', "Bilbo",],
        anoDeLancamento: 2021,
        emCartaz: false,
    },

]
const novoFilme = {
    codigo: 3,
    titulo: 'Adiciono ?',
    duracao: 1.45,
    atores:['Diego', 'Lara', 'Felipe'],
    anoDeLancamento: 2020,
    emCartaz: false,
}

function adicionarFilme(filme){
    catalogo.push(filme)
}

function buscarFilme(id){
   return catalogo.find((filme) => filme.codigo === id)
}

function alterarStatusEmCartaz(id) {
    const auxiliar = buscarFilme(id);

    auxiliar.emCartaz = !auxiliar.emCartaz;
}


adicionarFilme(novoFilme)

console.log(buscarFilme(3))

alterarStatusEmCartaz(3)

console.log(catalogo)

// const nodemon = require('nodemon')
// console.log(cinema)
// const fs = require('fs')
// const caminhoTxt = __dirname + "/arquivo.txt"
// console.log(caminhoTxt)
// const leitorTxt = fs.readFileSync(caminhoTxt, 'utf-8')
// console.log(leitorTxt)
// const alunos = require('./meuModolo.js')
// console.log(alunos)