const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")

frm.addEventListener("submit", (e) =>{
    const numero = Number(frm.inNumero.value)

    const resultado = Math.sqrt(numero)
    if(Number.isInteger(resultado)){
        resp1.innerText = `Raíz: ${resultado}`
    }
    else{
        resp1.innerText = `Não raíz exata para o número ${numero}.`
    }

    e.preventDefault()
})

frm.addEventListener("reset", (e) =>{
    resp1.innerText = ""
})