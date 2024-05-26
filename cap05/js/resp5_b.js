const frm = document.querySelector("form")
const resp = document.querySelector("pre")


frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    do{
        const chincila = Number(frm.inChincila.value)
         const anos = Number(frm.inAnos.value)
        if(chincila < 2){
            alert("O número informado deve ser maior ou igual a 2 (um casal)")
            frm.inChincila.value = ""
            frm.inAnos.value = ""
        }
        else{
            let resposta = ""
            let cont = 0
            let nchincila = chincila
             for(let i = 1; i<= anos; i++){
                cont++
                resposta += `${cont}° Ano: ${nchincila} Chincilas\n`
                nchincila *= 3
            } 
            resp.innerText = resposta
            }
    }while(chincila < 2)
       
})