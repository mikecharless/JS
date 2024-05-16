const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")

frm.addEventListener("submit", (e) =>{
    const velocidade = frm.inVelocidade.value
    const condutor = frm.inVelocidadeCondutor.value
    
    if(condutor <= velocidade){
        resp1.innerHTML = `Sem multa`
    }
    else if(condutor > velocidade && condutor <= velocidade*1.2){
        resp1.innerHTML = `Multa leve`
    }
    else{
        resp1.innerHTML = `Multa grave!`
        
    }

    e.preventDefault()
})

frm.addEventListener("reset", (e) =>{
    resp1.innerHTML = ""
})