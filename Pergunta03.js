// Resposta 03
const dadosJson = require('./dados.json')

function maxValue(fileJson) {

    //Se o array for vazio lança um erro
    if(fileJson.length < 1) {
       throw new Error('Array vazio');
    }
    
    let array = []
    let valortotal = 0
    //Percorrendo o arquivo Json e salvando no array arrayAcumula
    for (let i = 0; i < fileJson.length; i++) {
        if(fileJson[i].valor != 0) {
            array.push(fileJson[i])
            valortotal += fileJson[i].valor
        }
    }

    const menorValor = array.reduce(function(ant, prox) {
            return (ant.valor < prox.valor) ? ant : prox
    })

    var resultMenor = Object.keys(menorValor).map(function (key) {
        return [String(key), menorValor[key]];
    });

    const maiorValor = array.reduce(function(ant, prox) {
            return (ant.valor > prox.valor) ? ant : prox
    })
    
    var resultMaior = Object.keys(maiorValor).map(function (key) {
        return [String(key), maiorValor[key]];
    });

    console.log(`Menor faturamento foi de ${resultMenor[1][1].toFixed(2)} R$ no dia ${resultMenor[0][1]} `)

    console.log(`Maior faturamento foi de ${resultMaior[1][1].toFixed(2)} R$ no dia ${resultMaior[0][1]} `)

  
    let mediaValor = valortotal/30
    console.log(`Dias que ultrapassaram a média de ${mediaValor.toFixed(2)} R$`)

    for (let i = 0; i < fileJson.length; i++) {
        if(fileJson[i].valor > mediaValor) {
            console.log(fileJson[i])
        }
    }
}
console.log(maxValue(dadosJson))
