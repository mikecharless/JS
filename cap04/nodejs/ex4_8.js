const prompt = require("prompt-sync")()
const compra = Number(prompt("Valor total da compra R$: "))
let aux = Math.floor(compra/20)
let parcela = aux == 0 ? 1 : aux > 6 ? 6 : aux
let valorp = compra/parcela
console.log(`Pode pagar em ${parcela} x de R$ ${valorp.toFixed(2)}`)