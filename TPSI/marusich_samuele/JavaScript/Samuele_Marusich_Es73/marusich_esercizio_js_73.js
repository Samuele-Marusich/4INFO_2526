document.addEventListener("DOMContentLoaded", init, false)
function init(){
    let body = document.getElementById("body")
    let titolo = document.createElement("h1")
    titolo.innerText = "Form Registrazione Utente"
    let divForm = document.createElement("div")
    let inputNome = document.createElement("input")
    inputNome.type = "text"
    inputNome.id = "inputNome"
    inputNome.size = 15
    inputNome.placeholder = "Nome"
    divForm.append(inputNome)
    let inputCognome = document.createElement("input")
    inputCognome.type = "text"
    inputCognome.id = "inputCognome"
    inputCognome.size = 15
    inputCognome.placeholder = "Cognome"
    divForm.append(inputCognome)
    let inputEta = document.createElement("input")
    inputEta.type = "number"
    inputEta.id = "inputEta"
    inputEta.placeholder = "Eta'"
    divForm.append(inputEta)
    let inputColoreCapelli = document.createElement("input")
    inputColoreCapelli.type = "text"
    inputColoreCapelli.id = "inputColoreCapelli"
    inputColoreCapelli.size = 15
    inputColoreCapelli.placeholder = "Colore dei capelli"
    divForm.append(inputColoreCapelli)
    let pulsanteSubmit = document.createElement("button")
    pulsanteSubmit.innerText = "Invia form"
    pulsanteSubmit.onclick = "processaModulo()"
    divForm.append(pulsanteSubmit)
    body.append(titolo)
    body.append(divForm)
}
class User{
    constructor(nome, cognome, eta, coloreCapelli){
        this.nome = nome
        this.cognome = cognome
        this.eta = eta
        this.coloreCapelli = coloreCapelli
    }
    descrivi(){
        console.log(`Ciao io sono l'utente ${this.nome} ${this.cognome} di anni ${this.eta} e con indice capelli color ${this.coloreCapelli}`)
    }
}
function processaModulo(){
    let inputNome = document.getElementById("inputNome")
    let valueInputNome = inputNome.value
    let inputCognome = document.getElementById("inputCognome")
    let valueInputCognome = inputCognome.value
    let inputEta = document.getElementById("inputEta")
    let valueInputEta = inputEta.value
    let inputColoreCapelli = document.getElementById("inputColoreCapelli")
    let valueInputColoreCapelli = inputColoreCapelli.value
    let utente = new User(valueInputNome, valueInputCognome, valueInputEta, valueInputColoreCapelli)
    utente.descrivi()
}
