let oggetto = function(a,b,c,d,e,f){
    (this.a = a),
    (this.b = b),
    (this.c = c),
    (this.d = d),
    (this.e = e),
    (this.f = f),
    (this.mostra = function(){
        for(let indice in this){
            let cont = this[indice];
            let tipo = typeof cont;
            if(typeof cont == "string"){
                cont = cont.toLowerCase();
            }else if(typeof cont == "function"){
                continue;
            }
            console.log(`Attributo: ${indice} : ${cont}, tipo : ${tipo}`);
        }
    })
}
function main(){
    let nuovo = new oggetto(1,"Ciaooo","-1",[12,33],12,12);
    nuovo.mostra();
    nuovo = new oggetto("ciao Addwj 21",23,823873248721,{ciao:"12"},[12,12,23,34],"mewkewUV!UHJCE");
    nuovo.mostra();
}
main()