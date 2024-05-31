const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

const pacientes = []

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const nome = frm.inNome.value
    pacientes.push(nome)
    let lista = ""
    for(let i = 0; i < paciente.length; i++){
        lista += `${i+1}. ${pacientes[i]}\n`
    }

    resp2.innerHTML = lista
    frm.inNome.value = ""
    frm.inNome.focus()  
})

frm.btUrgencia.addEventListener("click", () =>{
    
})