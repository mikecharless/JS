const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")

frm.addEventListener("submit", (e) =>{
    const horaBrasil = Number(frm.inBrasil.value)
    
    let horaf = horaBrasil + 5
    if(horaf > 24){
        horaf -= 24
    }

    resp1.innerHTML = `Hora na França: ${horaf.toFixed(2)}`

    e.preventDefault()
})

frm.addEventListener("reset", (e) =>{
    resp1.innerHTML = ""
})