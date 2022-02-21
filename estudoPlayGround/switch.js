let semana = "quarta";

function fimDeSemana(dia){
	switch(dia){
		case "segunda":
		case "quarta":
		case "sexta-feira":
		console.log(" você tem aulas!")
		break;
		default:
		console.log("você não tem aulas")
	}
}

fimDeSemana(semana)

let dia = 'sexta-feira'

function fimDeSemana2(dia) {
    switch(dia){
        case "segunda-feira":
        console.log("é segunda")
        break
        case "terça-feira":
        console.log("é terça")
        break
        case "quarta-feira":
        console.log("é quarta")
        break
        case "quinta-feira":
        console.log("é quinta")
        break
        case "sexta-feira":
        console.log("é sexta uhull")
        break
        default:
        console.log("É Final de semana bora pra praia!")
    }
}

fimDeSemana2(dia)

function papagaio(texto){
    for(let i = 0;i<=4;i++){
        console.log(texto)
    }
}
papagaio("vim vi venci")