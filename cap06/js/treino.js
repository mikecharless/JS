const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

const erros = []
const sorteado = Math.floor(Math.random() * 100) + 1
const chances = 6

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    if(numero == sorteado){
        resp3.innerHTML = `Parabéns!! Número sorteado: ${numero}`
        frm.btSubmit.disabled = true
        frm.btNovo.className = "exibe"
    } else {
        if(erros.includes(numero)){
            alert(`Você já apostou o número: ${numero}`)
        } else {
            erros.push(numero)
            const numErros = erros.length
            const numChances = chances - numErros
            resp1.innerHTML = `${numErros} (${erros.join(", ")})`
            resp2.innerHTML = numChances
            if(numChances == 0){
                alert("Sus chances acabaram")
                frm.btSubmit.disabled = true
                frm.btNovo.className = "exibe"
                resp3.innerHTML = `Game Over! Número sorteado: ${sorteado}`
            }
            else{
                const dica = numero < sorteado ? "maior" : "menor"
                resp3.innerHTML = `Tente um número ${dica} que ${numero}`
            }
        }
    }
    frm.inNumero.value = ""
    frm.inNumero.focus()
})

frm.btNovo.addEventListener("click", ()=>{
    location.reload()
})