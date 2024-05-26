const prompt = require("prompt-sync")()

const valor = Number(prompt("Valor R$: "))
const parcelas = Number(prompt("N° de parcelas: "))

const valorp = Math.floor(valor/parcelas)
let soma = 0
for(let i = 1; i< parcelas; i++){
    console.log(`${i}° Parcela: R$ ${valorp.toFixed(2)}`)
    soma += Math.floor(valorp)
}
let parcelaf = valor - soma
console.log(`${parcelas}° Parcela: R$ ${parcelaf.toFixed(2)}`)