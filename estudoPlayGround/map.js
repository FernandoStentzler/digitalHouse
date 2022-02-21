function adicionarHttp(url) {
    return "http://" + url
}

function processar(url, callback){
  return url.map(link => callback(link))
    
}

const transformarNegativo = (numero) => {
    if(numero > 0){
        return numero * -1
    }else{
        return numero
    }
}

const numerosNegativos = (arrayNumero, callback) => {
    return arrayNumero.map(numero => callback(numero))
}

const array = ["www.google.com","www.yahoo.com"]

const numeros = [12, 34, 22, 46, 18, 29, 44, 43, 39, -40, -38, -12];

const negativos = numeros.map((numero) => numero > 0 ? numero * -1 : numero
);

console.log(numerosNegativos(numeros, transformarNegativo))

console.log(processar(array, adicionarHttp))

console.log(negativos)