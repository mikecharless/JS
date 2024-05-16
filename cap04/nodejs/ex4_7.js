const prompt = require("prompt-sync")()
const pessoas = Number(prompt("N° de pessos: "))
const peixes = Number(prompt("N° de peixes: "))

let conta
if(peixes <= pessoas){
    conta = pessoas * 20 
}
else{
    conta = (pessoas * 20) + (peixes - pessoas)*12
}
console.log(`Pagar r$: ${conta.toFixed(2)}`)
