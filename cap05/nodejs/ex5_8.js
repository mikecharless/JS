const prompt = require("prompt-sync")()
console.log("Programa para verificar os Anos de copa do mundo. Digite 0 para sair")
console.log("--------------------------------------------------------------------")


while(true){
    const ano = Number(prompt("Digite o ano: "))
    if(ano == 0){
        break
    }
    else if(ano == 1942 || ano == 1946){
        console.log(`Não houve Copa em ${ano}. (Segunda Guerra Mundial.)`)
    }
    else if(ano >= 1930 && (ano % 1930) % 4 == 0){
        console.log(`Sim! No ano de ${ano} houve copa do mundo.`)
    }
    else{
        console.log(`Não... ${ano} não houve copa do mundo.`)
    }  

}

