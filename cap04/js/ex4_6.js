const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

frm.addEventListener("submit", (e) =>{
    const saque = Number(frm.inSaque.value)

    const notas100 = Math.floor(saque / 100)
    const notas50 = Math.floor((saque % 100)/50)
    const notas10 = Math.floor((saque % 50)/10)
    if (saque % 10 == 0){
        if(notas100 > 0){
            resp1.innerHTML = `Notas de R$ 100: ${notas100}`
        }
        if(notas50 > 0){
            resp2.innerHTML = `Notas de R$ 50: ${notas50}`
        }
        if(notas10 > 0){
            resp3.innerHTML = `Notas de R$ 10: ${notas10}`
        }
    }
    else{
        alert("Valor inválido para as notas disponíveis (R$ 10, 50, 100)")
        frm.inSaque.focus()
        return
    }

    e.preventDefault()
})

frm.addEventListener("reset", (e)=>{
    resp1.innerHTML = ""
    resp2.innerHTML = ""
    resp3.innerHTML = ""
})