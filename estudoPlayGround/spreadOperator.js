const clubeUm = ['Gremio', 'Cruzeiro', 'Internacional']

const clubeDois = ['Santos', 'Santa Cruz', 'São Paulo']

const todosOsClubes = [...clubeUm, ...clubeDois]

const partes = ['Aniversario', 'Para']

const frase = ['Feliz', ...partes, 'Você']

const carro = {
    marca: 'Porsche',
    kms: 0,
    ano: 2022
}

const pilotoUm = {
    nome: 'Vettel',
    idade: 32,
    ...carro
}

const pilotoDois = {
    nome: 'Leclerc',
    idade: 21,
    ...carro
}

const notas = [9.3, 8.5, 3.2, 7, 10]

function somar(...numeros){
    return numeros.reduce((pilha, num) => pilha += num);
}

console.log(todosOsClubes)

console.log(frase)

console.log(pilotoUm)

console.log(pilotoDois)

console.log(Math.min(...notas))

console.log(somar(1, 4, 6, 10, 1, 25, 30))