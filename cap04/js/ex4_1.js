const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) =>{

    
    const nome = frm.inNome.value
    const nota1 = Number(frm.inNota1.value)
    const nota2 = Number(frm.inNota2.value)

    const media = (nota1 + nota2)/2
    resp1.innerHTML = `Médi das notas: ${media}` 

    if(media >= 7){
        resp2.innerText = `Parabéns ${nome}! Você foi aprovado`
        resp2.style.color = "blue"
    }
    else if (media >= 4){
        resp2.innerText = `Atenção ${nome}! Você está em exame`
        resp2.style.color = "yellow"
    }
    else{
        resp2.innerText = `Reprovado!`
        resp2.style.color = "red"
    }

    e.preventDefault()
})