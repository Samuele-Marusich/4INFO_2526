function modifica_stile(){
    let titoli1 = document.getElementsByTagName("h1");
    let titoli2 = document.getElementsByTagName("h2");
    let parag = document.getElementsByTagName("p");
    console.log(parag);
    for(let indice = 0;indice < titoli1.length;indice++){
        titoli1[indice].style.color="red";
    }
    for(let indice = 0;indice < titoli2.length;indice++){
        titoli2[indice].style.fontSize="40px";
        titoli2[indice].style.backgroundColor="yellow";        
        titoli2[indice].style.backgroundColor="blue";
        let text = titoli2[indice].innerText;
        titoli2[indice].innerText= text.toUpperCase();
    }
    for(let indice = 0;indice < parag.length;indice++){
        let p = parag[indice];
        if( indice == 0 || indice == 3){
            p.style.color="red";
        }else if( indice == 1 || indice == 4 || indice == 7){
            p.style.backgroundColor="lightgreen"
        }else if( indice == 2){
            p.innerText = p.innerText.toUpperCase();
            p.style.backgroundColor="lightblue";
        }else if( indice == 5){
            p.innerText = p.innerText.toUpperCase();
        }else if( indice == 6){
            p.style.fontFamily="italic"
        }
    }
}
