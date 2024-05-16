//cria uma referência com o método query selector paro formulário e ao tag h de resposta
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

//cria um ouvinte de evento, acionado quando o botão submit for clicado
    frm.addEventListener("submit", (e) =>{
    const titulo = frm.inTitulo.value //obtém o conteúdo do campo form
    const duracao = Number(frm.inDuracao.value)

    const hora = duracao / 60
    const min = duracao % 60

    resp1.innerText = titulo
    resp2.innerText = `Horas: ${Math.floor(hora)} hora(s) e ${min} minuto(s).`

    e.preventDefault()
})
