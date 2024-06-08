const frm = document.querySelector("form")
const respErros = document.querySelector("#outErros")
const respChances = document.querySelector("#outChances")
const respDicas = document.querySelector("#outDicas")

const erros = []
const sorteado = Math.floor(Math.random() * 100) + 1
const chances = 6 

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    if(numero == sorteado){
        respDicas.innerHTML = `Parabéns!! Número sorteado: ${sorteado}`
        frm.btSubmit.disabled = true
        frm.btNovo.className = "exibe"
    }
    else{
        if(erros.includes(numero)){
            alert(`VocÊ já apostou o número ${numero}. Tente outro...`)
        }else{
            erros.push(numero)
            const numErros = erros.length
            const numChances = chances - numErros
            respErros.innerHTML = `${numErros} (${erros.join(", ")})`
            respChances.innerHTML = numChances
            if(numChances == 0){
                alert("Suas chances acabaram...")
                frm.btSubmit.disabled = true
                frm.btNovo.className = "exibe"
                respDicas = `Game Over!! Número sorteado: ${sorteado}`
            }
            else{
                const dica = numero < sorteado ? "Maior" : "Menor"
                respDicas.innerHTML = `Dica: Tente um número ${dica} que ${numero}`
            }
        }
    }
    frm.inNumero.value = ""
    frm.inNumero.focus()
})

frm.btNovo.addEventListener("click", () =>{
    location.reload()
})