//Codigo resposta 02
function fibonnaci(n, pertence) {
    let soma = 0
    let ant = 0
    let prox = 1

    for (let i = 0; i < n; i++) {
        soma = ant + prox
        ant = prox
        prox = soma
        console.log(soma)
    }

    if (pertence == n) {
        console.log('Este número pertence a sequência fibonnaci')
    } else {
        console.log('Este número não pertence a sequência fibonnaci')
    }
}