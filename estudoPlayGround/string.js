const frase = 'Ola mundo'

// .lenght Retorna o comprimento da string
console.log(frase.length)

//.indexOf retorna a posição da string
console.log(frase.indexOf('mundo'))

//.slice retorna da string oque esta dentro das posições dadas
console.log(frase.slice(0, 4))

//trim remove os espaços antes e depois da string
console.log(frase.trim())

//split transforma a string em um array colocando string fazia no parametro ele separa kada letra em uma array
console.log(frase.split())

//.replace substitui uma palavra da string pela palava da condição
console.log(frase.replace('mundo', 'Universo'))