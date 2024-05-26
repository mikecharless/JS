const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) =>{
    const fruta = frm.inFruta.value
    const numero = Number(frm.inNumero.value)
    
    let resposta = ""
    for(let i =1; i< numero; i++){
        resposta += `${fruta} * `
    }
    resposta += `${fruta}`

    resp.innerText = resposta

    e.preventDefault()
})

frm.addEventListener("reset", (e) =>{
    resp.innerText = ""
})