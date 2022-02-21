const dividir = function(numA, numB){
    if(numA == 0 || numB == 0){
        console.log('Não se pode Dividir por Zero')
    }else{
        console.log(numA / numB)
    }
}

module.exports = dividir