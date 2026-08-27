let isInsert = true 
let idFoundLine = 0 
function salva(){
    let cognomeObj = document.getElementById("cognome")
    let cognomeValue = cognomeObj.value
    let nomeObj = document.getElementById("nome")
    let nomeValue = nomeObj.value
    let indirizzoObj = document.getElementById("indirizzo")
    let indirizzoValue = indirizzoObj.value
    let telefonoObj = document.getElementById("telefono")
    let telefonoValue = telefonoObj.value
    let tabellaObj = document.getElementById("tabella")
    if(cognomeValue != "" && nomeValue != "" && indirizzoValue != "" && telefonoValue != ""){
        if(isInsert == true){
            let id = "id_" + new Date().getTime() 
            const tr = document.createElement("tr")
            const tdCognome = document.createElement("td")
            const tdNome = document.createElement("td")
            const tdIndirizzo = document.createElement("td")
            const tdTelefono = document.createElement("td")
            const tdRimuovi = document.createElement("td")
            const buttonRimuovi = document.createElement("button")
            buttonRimuovi.innerText = "Rimuovi"
            buttonRimuovi.addEventListener("click", rimuovi)
            buttonRimuovi.id = id
            tr.id = id
            tdCognome.innerText = cognomeValue
            tdNome.innerText = nomeValue
            tdIndirizzo.innerText = indirizzoValue
            tdTelefono.innerText = telefonoValue
            tdRimuovi.colSpan = 2
            tdRimuovi.append(buttonRimuovi)
            tr.append(tdCognome)
            tr.append(tdNome)
            tr.append(tdIndirizzo)
            tr.append(tdTelefono)
            tr.append(tdRimuovi)
            tabellaObj.append(tr)
            cognomeObj.value = ""
            nomeObj.value = ""
            indirizzoObj.value = ""
            telefonoObj.value = ""    
        }
        else{
            let linea = document.getElementById(idFoundLine)
            linea.children[0].innerText = cognomeValue
            linea.children[1].innerText = nomeValue
            linea.children[2].innerText = indirizzoValue
            linea.children[3].innerText = telefonoValue
            cognomeObj.value = ""
            nomeObj.value = ""
            indirizzoObj.value = ""
            telefonoObj.value = ""    
            isInsert = true
        }
    }
    else{
        alert("Compilare tutti indice campi")
    }
}
function rimuovi(elemento){ 
    let trRemove = elemento.target.closest("tr");
    if(trRemove) trRemove.remove();
}
function cerca(){
    let cognomeForm = document.getElementById("cognome").value
    let telefonoForm = document.getElementById("telefono").value
    const tabella = document.getElementById("tabella")
    const linee = tabella.getElementsByTagName("tr")
    for (let indice = 2; indice < linee.length; indice++){
        const tdCognome = linee[indice].children[0].innerText 
        const tdTelefono = linee[indice].children[3].innerText
        if(tdCognome == cognomeForm || tdTelefono == telefonoForm){
            let cognomeObj = document.getElementById("cognome")
            let nomeObj = document.getElementById("nome")
            let indirizzoObj = document.getElementById("indirizzo")
            let telefonoObj = document.getElementById("telefono")
            cognomeObj.value = linee[indice].children[0].innerText
            nomeObj.value = linee[indice].children[1].innerText
            indirizzoObj.value = linee[indice].children[2].innerText
            telefonoObj.value = linee[indice].children[3].innerText
            isInsert = false 
            idFoundLine = linee[indice].id
            return
        }
    }
    alert("Utente non presente")
}