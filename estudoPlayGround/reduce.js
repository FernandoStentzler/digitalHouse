const numeros = [10, 2, 5, 28]

const somaReduce = numeros.reduce(function(pilha, numero){
    return pilha + numero;
})

console.log(somaReduce)