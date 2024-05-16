const prompt = require("prompt-sync")()
const numero = Number(prompt("Número (Centena): "))
if(numero <100 || numero >= 1000){
    alert("Erro... Digite uma centena")
    return
}
else{
    const centena = Math.floor(numero/100)
    const dezena = Math.floor((numero % 100)/10)
    const unidade = numero % 10
    console.log(`Número invertido ${unidade}${dezena}${centena}`)
}
