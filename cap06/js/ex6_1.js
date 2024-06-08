const frm = document.querySelector("form")
const resp1 = document.querySelector("span")
const resp2 = document.querySelector("#outResp2")

const pacientes = []

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const nome = frm.inPaciente.value
    pacientes.push(nome)
    lista = ""
    for(let i = 0; i < pacientes.length; i++){
        lista += `${i+1}. ${pacientes[i]}\n`
    }
    resp2.innerHTML = lista
    frm.inPaciente.value = ""
    frm.inPaciente.focus()
})

frm.btUrgencia.addEventListener("click", () =>{
    if(!frm.checkValidity()){
        alert("Informe o nome do paciente a ser atendido em caráter de urgência.")
        frm.inPaciente.focus()
        return
    }
    const nome = frm.inPaciente.value
    pacientes.unshift(nome)
    let lista = ""
    pacientes.forEach((paciente, i) => {lista += `${i+1}. ${paciente}\n`})
    resp2.innerText = lista
    frm.inPaciente.value = ""
    frm.inPaciente.focus()
})

frm.btAtender.addEventListener("click", () =>{
    if(pacientes.length == 0){
        alert("Não há pacientes a serem atendidos.")
        frm.inPaciente.focus()
        return
    }
    const atender = pacientes.shift()
    resp1.innerText = atender
    let lista = ""
    pacientes.forEach((paciente, i) => {lista += `${i+1}. ${paciente}\n`})
    resp2.innerText = lista
})
