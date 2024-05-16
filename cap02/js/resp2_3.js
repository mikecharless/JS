const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) =>{
    const produto = frm.inProduto.value
    const preco = Number(frm.inPreco.value)

    //3*preco
    //preco/2

    resp1.innerHTML = `${produto} - Promoção: Leve 3 por R$ ${(preco*3).toFixed(2)}`
    resp2.innerHTML = `O 3° produto custa apenas R$ ${(preco/2).toFixed(2)}`

    e.preventDefault()
})