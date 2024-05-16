const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")

frm.addEventListener("submit", (e) =>{
    const numero = Number(frm.inNumero.value)

    let resposta = `Entre ${numero} e 1 temos: `
    for(let i = numero; i >= 1; i--){
      i == 1 ? resposta += `${i}.` : resposta += `${i}, `
    }
    resp1.innerText = resposta

    e.preventDefault()
})