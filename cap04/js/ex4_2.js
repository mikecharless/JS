const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")

frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value
    const masculino = frm.inMasculino.checked
    const altura = Number(frm.inAltura.value)

    /*let peso
    if(masculino){
        peso = 22 * Math.pow(altura, 2)
    }
    else{
        peso = 21 * Math.pow(altura, 2)
    }*/

    const peso = masculino ? 22* Math.pow(altura,2) : 21* Math.pow(altura,2)

    resp1.innerHTML = `${nome}: Seu peso ideal é ${peso.toFixed(3)} kg.`

    e.preventDefault()
    frm.addEventListener("reset", (e) =>{
        resp1.innerText = ""
    })
   
   
   
})