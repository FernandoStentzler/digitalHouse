const catalogo = require('./database/catalogo.json')

const novoFilme = {
    codigo: 4,
    titulo: 'Vamos outra Vez',
    duracao: 2.5,
    atores: ['Power', 'Batman', 'Superman'],
    anoDeLancamento: 2025,
    emCartaz: true,
}




const adicionarFilme = (filme) => {
    catalogo.push(filme)
}

const listarTodosOsFilmes = (arrayDeFilmes) => {
    for(i = 0; i < arrayDeFilmes.length; i++){
        console.log(arrayDeFilmes[ i ])
    }
}

const listarFilmesEmCartaz = (arrayDeFilmes) => {
    for(i = 0; i < arrayDeFilmes.length; i++){
        if(arrayDeFilmes[i].emCartaz === true){
            console.log("Filme de Indice: " + i + arrayDeFilmes[ i ])
        }
    }
}

function buscarFilme(id){
    return catalogo.find((filme) => filme.codigo === id)
 }

function alterarStatusEmCartaz(id) {
    const auxiliar = buscarFilme(id);

    auxiliar.emCartaz === true ? auxiliar.emCartaz = false : auxiliar.emCartaz = true
    console.log(auxiliar)
}

adicionarFilme(novoFilme)

listarTodosOsFilmes(catalogo)
listarFilmesEmCartaz(catalogo)
alterarStatusEmCartaz(4)
