const estados = [
    { 'AC': 'Acre' },
    { 'AL': 'Alagoas' },
    { 'AP': 'Amapá' },
    { 'AM': 'Amazonas' },
    { 'BA': 'Bahia' },
    { 'CE': 'Ceará' },
    { 'DF': 'Distrito Federal' },
    { 'ES': 'Espírito Santo' },
    { 'GO': 'Goías' },
    { 'MA': 'Maranhão' },
    { 'MT': 'Mato Grosso' },
    { 'MS': 'Mato Grosso do Sul' },
    { 'MG': 'Minas Gerais' },
    { 'PA': 'Pará' },
    { 'PB': 'Paraíba' },
    { 'PR': 'Paraná' },
    { 'PE': 'Pernambuco' },
    { 'PI': 'Piauí' },
    { 'RJ': 'Rio de Janeiro' },
    { 'RN': 'Rio Grande do Norte' },
    { 'RS': 'Rio Grande do Sul' },
    { 'RO': 'Rondônia' },
    { 'RR': 'Roraíma' },
    { 'SC': 'Santa Catarina' },
    { 'SP': 'São Paulo' },
    { 'SE': 'Sergipe' },
    { 'TO': 'Tocantins' },
  ]


// function iniciais(inicial){
//     if(inicial[0] === inicial){
//         return inicial[0]
//     }
// }

const buscarPelaInicial = (array, inicial) => {
    let auxiliar = array.filter(element => Object.keys(element).filter(element => element[0] === inicial).length)
    return auxiliar
}


console.log(buscarPelaInicial(estados, "S"))

// console.log((estados.filter(a => Object.keys(a).filter(a => a[0] === 'T').length)))