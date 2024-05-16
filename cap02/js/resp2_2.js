const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")

frm.addEventListener("submit", (e) =>{
    const valor = Number(frm.inValor.value)
    const tempo = Number(frm.inTempo.value)

    const conta = Math.ceil(tempo/15) * valor

    resp1.innerHTML = `Valor a Pagar R$ ${conta.toFixed(2)}`

    e.preventDefault()
})