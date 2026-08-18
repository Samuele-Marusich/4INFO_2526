const somma = (a,b) => {
    return a+b;
}
const sottrazione = (a,b) => {
    return a-b;
}
const moltiplicazione = (a,b) => {
    return a*b;
}
const divisione = (a,b) => {
    return b == 0 ? Infinity : a/b;
}
function main(){
    let funzioni = [somma,sottrazione,moltiplicazione,divisione];
    let nomi = ["somma","sottrazione","moltiplicazione","divisione"];
    let args = [[1,0],[2,4]];
    for(let indice = 0;indice<args.length;indice++){
        let coppia = args[indice];
        for(let j = 0;j<funzioni.length;j++){
            console.log(`Risultato della ${nomi[j]}: ${funzioni[j](coppia[0],coppia[1])}`)
        }
        console.log();
    }
}
main()
