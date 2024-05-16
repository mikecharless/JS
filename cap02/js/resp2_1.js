const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) =>{
    const medicamento = frm.inMedicamento.value
    const preco = frm.inPreco.value

    const conta = Math.floor(preco * 2)

    resp1.innerHTML = `Promoção ${medicamento}`
    resp2.innerHTML = `Leve 2 por R$ ${conta.toFixed(2)}`
    
    e.preventDefault()
})
