const prompt = require("prompt-sync")()
console.log("Programa de etiquetas")
console.log("---------------------")

const produto = prompt("Produto: ")
const numero = Number(prompt("Número de etiquetas: "))

/*let resposta = ""
for(let i = 1; i <= numero; i++){
    i % 2 == 0 ? resposta += `${produto}\n` : resposta+= `${produto}` 
}

console.log(resposta)*/

for(let i = 1; i<= numero/2; i++){
    console.log(`${produto.padEnd(30)} ${produto.padEnd(30)}`)
}
if(numero % 2 == 1){
    console.log(produto)
}