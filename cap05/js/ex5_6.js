const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")



frm.addEventListener("submit", (e) =>{
    const numero = Number(frm.inNumero.value)
    let cont = 0
    let temDivisor = 0 //declara e inicializa uma variável do tipo flag

    for(let i = 2; i <= numero/2; i++){
        if(numero % i == 0){
            temDivisor = 1
            break
        }
    }

    if(numero > 1 && !temDivisor){
        resp1.innerHTML = `${numero} é primo!`
    }
    else{
        resp1.innerHTML = `${numero} não é primo!`
    }
    
    frm.inNumero.value = ""

    e.preventDefault()
    
    frm.inNumero.value = ""
})