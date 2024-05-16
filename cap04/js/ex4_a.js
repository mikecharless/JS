const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")

frm.addEventListener("submit", (e) =>{
    const numero = frm.inNumero.value
    
    if(numero % 2 == 0){
        resp1.innerHTML = `${numero} é par.`
    }
    else{
        resp1.innerHTML = `${numero} é ímpar.`
    }

    e.preventDefault()
})

frm.addEventListener("reset", (e) =>{
    resp1.innerHTML = ""
})