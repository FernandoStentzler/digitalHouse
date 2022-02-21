let numeros = [12, 34, 22, 46, 18, 29, 44, 43, 39];

let maiores = numeros.filter(function(numero){
    return numero > 18
})

const numerosPares = (numero) => {
    return numero % 2 === 0
}

const resultado = numeros.filter(numerosPares)

const estudantes = require('./arrayEstudantes')

const nomeCompletoManha = (arrayDeEstudantes) => {
    const estudanteManha = arrayDeEstudantes.filter((estudante) => estudante.turno === 'Manhã')
    console.log(estudanteManha.map((estudante) => estudante.nome + ' ' + estudante.sobrenome))
}

// console.log(maiores)

// console.log(resultado)

nomeCompletoManha(estudantes)