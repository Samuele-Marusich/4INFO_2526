let puls = document.getElementById("idinv");
puls.addEventListener('click',Inviodati);
let pulscol = document.getElementById("idcol");
pulscol.addEventListener('click',Colora);
function Inviodati(){
    let nome = document.getElementById("nome").value;
    let media = document.getElementById("media").value;
    let tabella = document.getElementById("tavola-medie");
    let newriga = document.createElement("tr");
    tabella.append(newriga);
    let newName = document.createElement("td");
    newName.innerText = nome;
    let newMedia = document.createElement("td");
    newMedia.innerText = media;
    newriga.append(newName);
    newriga.append(newMedia);
}
function Colora(){
    let righe = document.getElementsByTagName("td");
    for(let indice = 0; indice < righe.length; indice+=2){
        classe = (indice/2) % 2 == 0 ? "blue" : "red";
        let elemento = righe[indice];
        let il = righe[indice+1];
        elemento.classList.add(classe);
        il.classList.add(classe);
    }
}
