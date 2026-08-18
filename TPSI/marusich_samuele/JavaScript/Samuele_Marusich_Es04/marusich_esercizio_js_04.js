function modifica_stile(){
    let titolih1 = document.getElementsByTagName("h1");
    let titolih2 = document.getElementsByClassName("titoloL2");
    let par1 = document.getElementById("par1");
    let par2 = document.getElementById("par2");
    let par3 = document.getElementById("par3");
    let par4 = document.getElementById("par4");
    let par5 = document.getElementById("par5");
    let par6 = document.getElementById("par6");
    let par7 = document.getElementById("par7");
    let par8 = document.getElementById("par8");
    for(let indice = 0; indice < titolih1.length; indice++){
        titolih1[indice].style.color = "red";
    }
    for(let indice = 0; indice < titolih2.length; indice++){
        titolih2[indice].style.color = "blue";
        titolih2[indice].style.backgroundColor = "yellow";
        titolih2[indice].style.fontSize = "40px";
        titolih2[indice].innerText = titolih2[indice].innerText.toUpperCase();
    }
    par1.style.color = "red";
    par4.style.color = "red";
    par2.style.backgroundColor = "lightgreen";
    par5.style.backgroundColor = "lightgreen";
    par8.style.backgroundColor = "lightgreen";
    par3.style.backgroundColor = "lightblue";
    par3.innerText = par3.innerText.toUpperCase();
    par6.innerText = par6.innerText.toUpperCase();
    par7.style.fontStyle = "italic";
}
