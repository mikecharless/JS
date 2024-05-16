const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

let contas = ""
let cont = 0
let valort = 0



frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    resp1.innerHTML = ""

    const descricao = frm.inConta.value
    const valor = Number(frm.inValor.value)

    cont++
    valort += valor
    contas += `${descricao} - R$: ${valor.toFixed(2)} \n`
    resp1.innerHTML += `${contas}--------------------`
    resp2.innerHTML = `${cont} Conta(s) - Total R$: ${valort.toFixed(2)}`

    frm.inConta.value = ""
    frm.inValor.value = ""
      
})
