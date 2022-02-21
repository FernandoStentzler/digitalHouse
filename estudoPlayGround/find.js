const numeros = [5, 12, 8, 130, 44];

const numerosAcimaDe10 = numeros.find(element => element > 10);

const estudantes = require('./arrayEstudantes')

const situacaoEstudante = (arrayDeEstudante, nome, sobrenome) => {
    const filtraPeloNome = arrayDeEstudante.find((estudante) => estudante.nome === nome && estudante.sobrenome === sobrenome)
    console.log(filtraPeloNome.materias.map(
        (materias) => `${filtraPeloNome.nome} ${filtraPeloNome.sobrenome} ${materias.name} ${materias.nota >= 60 ? 'Aprovado' : 'Reprovado'}`
        )
    )
}

situacaoEstudante(estudantes, 'Jorge', 'Santos')

console.log(numerosAcimaDe10);