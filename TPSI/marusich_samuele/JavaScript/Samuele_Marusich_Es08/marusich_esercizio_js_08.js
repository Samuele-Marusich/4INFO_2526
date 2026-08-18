function salva(){
    let testoObj = document.getElementById("testo")
    let testoValue = testoObj.value
    let prioritaObj = document.getElementById("priorita")
    let prioritaValue = prioritaObj.value
    let tabellaObj = document.getElementById("tabella")
    if(testoValue != ""){
        let id = new Date().getTime() 
        const tr = document.createElement("tr")
        const tdTesto = document.createElement("td")
        const tdPriorita = document.createElement("td")
        const tdFatto = document.createElement("td")
        const tdElimina = document.createElement("td")
        const buttonFatto = document.createElement("img")
        const buttonElimina = document.createElement("img")
        buttonFatto.addEventListener("click", fatto)
        buttonElimina.addEventListener("click", elimina)
        buttonElimina.classList.add(id)
        buttonFatto.classList.add(id)
        tr.classList.add(id)
        tdTesto.innerText = testoValue
        const indicatorePriorita = document.createElement("img")
        if(prioritaValue == "alta"){
            indicatorePriorita.src = "../img/alto.png"
        }
        else if (prioritaValue == "media") {
            indicatorePriorita.src = "../img/medio.png"                
        }
        else if (prioritaValue == "bassa") {
            indicatorePriorita.src = "../img/basso.png"                
        }
        buttonFatto.src = "../img/fatto.png"
        buttonElimina.src = "../img/elimina.png"
        indicatorePriorita.classList.add("icona")
        buttonFatto.classList.add("icona")
        buttonElimina.classList.add("icona")
        tdTesto.classList.add("entryElenco")
        tdElimina.append(buttonElimina)
        tdFatto.append(buttonFatto)
        tdPriorita.append(indicatorePriorita)
        tr.append(tdTesto)
        tr.append(tdPriorita)
        tr.append(tdFatto)
        tr.append(tdElimina)
        tabellaObj.append(tr)
        testoObj.value = ""
        prioritaObj.value = "bassa"
    }
    else{
        alert("Compilare tutti indice campi")
    }
}
function elimina(elemento){ 
    const identificatorePulsante = elemento.srcElement.classList[0]
    let trRemove = document.getElementsByClassName(identificatorePulsante)
    trRemove[0].remove()
}
function fatto(elemento){
    const idPulsante = elemento.srcElement.classList[0]
    let trToTick = document.getElementsByClassName(idPulsante)
    trToTick[0].children[0].classList.toggle("eliminato")
}
