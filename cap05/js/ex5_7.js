const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const numero = Number(frm.inNumero.value)

    let simbolos = ""
    for(let i = 1; i <= numero; i++){
        if(i % 2 == 0){
            simbolos += "_"
        }
        else{
            simbolos += "*"
        }
    }
    resp1.innerHTML = simbolos

   
})

