const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")

frm.addEventListener("submit", (e) =>{
    const quilo = Number(frm.inQuilo.value)
    const consumo = Number(frm.inConsumo.value)
    
    const conta = (consumo/1000) * quilo

    resp1.innerHTML = `Valor a pagar R$ ${conta.toFixed(2)}`

    e.preventDefault()
})