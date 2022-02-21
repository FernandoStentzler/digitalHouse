const somar = (numA, numB) => {
    return numA + numB;
}
const calculadora = (numeA, numeB, operacao) => {
    return operacao(numeA, numeB)
} 

console.log(calculadora(10, 20, somar))

const dobro = (numero) => {
    return numero * 2
}

const triplo = (numero) => {
    return numero * 3
}


const aplicar = (numero, callback) => {
    return callback(numero)
}

console.log(dobro(2))
console.log(triplo(2))
console.log(aplicar(4, dobro))
console.log(aplicar(4, triplo))

function adicionarHttp(url) {
    return "http://" + url
}

function processar(url, callback){
    // return url.map(link => callback(link))
    let urll = []
    for(i = 0; i < url.length; i++){
        urll.push(callback(url[i]))
    } 
    return urll
}

const array = ["www.google.com","www.yahoo.com"]

console.log(processar(array, adicionarHttp))