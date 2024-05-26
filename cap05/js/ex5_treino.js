const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const numero = frm.inNumero.value

    let cont = 0
    let temDivisor = 0
    for(let i = 2; i<= numero/2; i++){
        if(numero % i == 0){
            temDivisor = 1
            break
        }
    }
    if(numero > 1 && !temDivisor){
        resp1.innerText = `${numero} é primo`
    }
    else{
        resp1.innerText = `${numero} não é primo`
    }
})