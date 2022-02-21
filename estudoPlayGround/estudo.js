function dominio(url){
    return("http://" + url) 
}

console.log(dominio("twitter.com"))

console.log(dominio("gov.br"))

console.log(dominio("digitalhouse.com"))


const dia = "segunda";

const resultado = dia == "Domingo" ? "Vou a Praia" : "Fico em Casa";

console.log(resultado)

switch(dia){
    case "Segunda":
        console.log("Vou tomar Cafe");
        break
    case "Quarta":
        console.log('Vou Jogar');
        break;
    default:
        console.log("Nao vou Fazer nada")
}

const dado = true
const resultadoDado = dado == true ? "É verdadeiro!" : "É falso!";

console.log(resultadoDado)