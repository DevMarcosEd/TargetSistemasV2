// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

// SP – R$67.836,43
// RJ – R$36.678,66
// MG – R$29.229,88
// ES – R$27.165,48
// Outros – R$19.849,53

let sp = 67836.43
let rj = 36678.66
let mg = 29229.88
let es = 27165.48
let out = 19849.53

total = sp + rj + mg + es + out

//formato do valor
var f = total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
console.log(`Soma total dos estado ${f}`)

porcentagemSp = ((sp/total)*100).toFixed(2)
porcentagemRj = ((rj/total)*100).toFixed(2)
porcentagemMg = ((mg/total)*100).toFixed(2)
porcentagemEs = ((es/total)*100).toFixed(2)
porcentagemOut = ((out/total)*100).toFixed(2)

console.log(`Porcentagem de SP ${porcentagemSp}%`)
console.log(`Porcentagem de RJ ${porcentagemRj}%`)
console.log(`Porcentagem de MG ${porcentagemMg}%`)
console.log(`Porcentagem de ES ${porcentagemEs}%`)
console.log(`Porcentagem de OUT ${porcentagemOut}%`)
