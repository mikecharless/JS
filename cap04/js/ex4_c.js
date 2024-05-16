const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) =>{
    const valor = Number(frm.inValor.value)
    
    if (valor < 1){
        alert("Valor insuficiente!")
        frm.inValor.focus()
        return
    }

    else{
        if(valor >= 1 && valor < 1.75){
            resp1.innerText = "Tempo: 30min"
            resp2.innerText = `Troco R$ ${(valor - 1.00).toFixed(2)}`
        }
        else if(valor >= 1.75 && valor < 3){
            resp1.innerText = `Tempo: 60min`
            resp2.innerText = `Troco R$: ${(valor - 1.75).toFixed(2)}`
        }
        else{
            resp1.innerText = `Tempo: 120min`
            resp2.innerText = `Troco R$: ${(valor - 3.00).toFixed(2)}`
        }
    }

    e.preventDefault()
})

frm.addEventListener("reset", (e) =>{
    resp1.innerText = ""
    resp2.innerText = ""
})
