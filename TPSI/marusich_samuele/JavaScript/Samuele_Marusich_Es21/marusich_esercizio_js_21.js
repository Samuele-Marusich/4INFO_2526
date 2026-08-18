const somma = function(a,b){
    return a + b;
}
const prodotto = function(a,b){
    return a * b;
}
const potenza = function(a,b){
    return a ** b;
}
function funz(a,b,callback){
    return callback(a,b);
}
function main(){
    let funzioni = [somma,prodotto,potenza];
    let argomenti = [[1,2],[3,4],[5,10]];
    for(let indice = 0;indice<argomenti.length;indice++){
        let coppia = argomenti[indice]
        for(let j = 0;j<funzioni.length;j++){
            console.log(`Risultato della ${j+1} funzione: ${funz(coppia[0],coppia[1],funzioni[j])}`);
        }
        console.log();
    }
}
main()
