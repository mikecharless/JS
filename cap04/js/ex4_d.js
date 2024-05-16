const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const ladoa = Number(frm.inLadoA.value)
    const ladob = Number(frm.inLadoB.value)
    const ladoc = Number(frm.inLadoC.value)

    if((ladoa > ladob + ladoc) || (ladob > ladoc + ladoa) || (ladoc > ladoa + ladob)){
        alert("Os lados informados não podem informar um triângulo")
        frm.inLadoA.focus()
        return
    }
    else{
        resp1.innerHTML = `Os lados podem formar um triângulo`

        if(ladoa == ladob && ladoa == ladoc && ladob == ladoc){
            resp2.innerHTML = `Tipo Equilátero`
        }
        else if((ladoa == ladob && ladoa != ladoc) || (ladoa == ladoc && ladoa != ladob) || (ladob == ladoc && ladob != ladoa)){
            resp2.innerHTML = `Tipo isósceles`
        }
        else{
            resp2.innerHTML = `Tipo escaleno`
        }
    }  
})

frm.addEventListener("reset", (e) => {
    resp1.innerHTML = ""
    resp2.innerHTML = ""
})