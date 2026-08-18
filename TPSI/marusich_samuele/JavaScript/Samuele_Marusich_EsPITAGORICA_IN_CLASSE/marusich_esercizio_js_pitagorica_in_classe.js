function generaPitagorica(){
    let colonne = document.getElementById("colonne").value  
    let tabella = document.getElementById("pitagorica")     
    if(colonne < 4 || colonne > 12){
        alert("Inserisci un numero valido, tra 4 e 12.")
        return
    }
    for(let r = 0; r <= colonne; r++){
        let riga = document.createElement("tr")
        tabella.append(riga)                                
        for(let c = 0; c <= colonne; c++){
            let cella = document.createElement("td")        
            if(r != 0 || c != 0){
                cella.innerText = r * c                     
                if(r == 0){                                 
                    cella.innerText = c
                    cella.classList.add("header")
                }
                if(c == 0){                                 
                    cella.innerText = r
                    cella.classList.add("header")
                }
            }
            riga.append(cella)                              
        }
    }
}
function calcolaMultipliDivisori(tipo){
    let numero = document.getElementById("numero").value
    let tabella = document.getElementById("pitagorica")
    let righe = tabella.children
    if(numero <= 0){
        alert("Inserisci un numero positivo.")
        return
    }
    for(let r = 1; r < righe.length; r++){
        let riga = righe[r]
        let celle = riga.children
        for(let c = 1; c < celle.length; c++){
            let cella = celle[c]
            let cellaValue = Number(cella.innerText)        
            if(tipo){                                       
                if(cellaValue % numero == 0){               
                    cella.classList.add("multiplo")
                }    
            }
            else{                                           
                if(numero % cellaValue == 0){               
                    cella.classList.add("divisore")
                }    
            }
        }
    }
}
