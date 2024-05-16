const frm = document.querySelector("form")
const resp1 = document.querySelector("pre")

frm.addEventListener("submit", (e) =>{
    const numero = Number(frm.inNumero.value)

    let resposta = ""
    for(let i = 1; i<= 10; i++){
        resposta += `${numero} x ${i} = ${numero*i} \n`
    }
    resp1.innerHTML = resposta

    e.preventDefault()
} )

frm.addEventListener("reset", (e) =>{
    resp1.innerHTML = ""
})