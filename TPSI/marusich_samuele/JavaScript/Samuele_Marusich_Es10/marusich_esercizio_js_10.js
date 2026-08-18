function forIn(oggetto,funz,indent = 0){
    const chiavi = Object.keys(oggetto);
    for(let indice = 0;indice<chiavi.length;indice++){
        const ele = oggetto[chiavi[indice]];
        if(typeof ele == "object"){
            prova(chiavi[indice],"",indent);
            forIn(ele,funz,indent+1);
        }else{
            funz(chiavi[indice],ele,indent);
        }
    }
}
function prova(chiave,elemento = "",indent){
    indent = indent > 0 ? "\t".repeat(indent) : "";
    console.log(`${indent} ${chiave} : ${elemento}`);
}
const persona = {
    nome : "Marco",
    cognome : "Marusich",
    eta : 17,
    stato : "Italia",
    dataDiNascita : {
        giorno : 28,
        mese : 1,
        anno : 2008
    },
    battezzato : true,
    linguaggi : {
        python : {
            dizionari : {
                conoscenza : true,
                beh : false
            },
            liste : {
                conoscenza : true
            },
            etc : {
                ok : "Ok"
            }
        },
        javascript : {
            oggetti : {
                stoFacendo : true
            },
            domManipulation : {
                siBasta : true,
                esaurito : true,
                okbasta : false
            },
            eccezioni : {
                descrizione : "Tante e non necessarie",
                quindi : true
            }
        },
        c : {
            figo : true
        }
    },
    integrita : "Si, persona molto integra"
};
forIn(persona,prova);
