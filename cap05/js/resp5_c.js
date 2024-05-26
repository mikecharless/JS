const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const numero = Number(frm.inNumero.value)

    let divisores = ""
    let soma = 0
    for(let i = 1; i<= numero/2; i++){
        if(numero%i == 0){
            divisores += `${i}, `
            soma += i
        }
       
    }
    
    resp1.innerHTML = `Divisores do ${numero}: ${divisores} (Soma: ${soma})`

    if(soma == numero){
        resp2.innerHTML = `${numero} é um Número Perfeito.`
    }
    else{
        resp2.innerHTML = `${numero} não é um número perfeito`
    }
    

})