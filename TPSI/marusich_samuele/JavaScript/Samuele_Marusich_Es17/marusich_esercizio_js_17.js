let Numeri = function(n,m){
    (this.n = Number(n)),
    (this.m = Number(m)),
    (this.maggiore = function(){
        return `Il maggiore è ${this.n > this.m ? this.n : this.m}`
    })
}
function main(){
    let coppie = [[10,20],[5,6],["3","100"],["10",10]];
    for(let indice = 0;indice<coppie.length;indice++){
        let nuovoNumero = new Numeri(coppie[indice][0],coppie[indice][1]);
        console.log(nuovoNumero.maggiore());
    }
}
main();