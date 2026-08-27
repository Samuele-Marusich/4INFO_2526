function aggiuntalinea(){
    let tabella = document.getElementById("tabella")
    let nome = document.getElementById("nome").value
    let media = document.getElementById("media").value
    let linea = document.createElement("tr")
    let dato1 = document.createElement("td")
    let dato2 = document.createElement("td")
    dato1.innerHTML = nome
    dato2.innerHTML = media
    tabella.append(linea)
    linea.append(dato1)
    linea.append(dato2)
}
function coloralinee(){
    let linee = document.getElementsByTagName("tr")
    for (let indice = 0; indice < linee.length; indice++){
        if (indice % 2 == 0){
            linee[indice].style.backgroundColor = "blue"
        }
        else{
            linee[indice].style.backgroundColor = "red"
        }
    }
}