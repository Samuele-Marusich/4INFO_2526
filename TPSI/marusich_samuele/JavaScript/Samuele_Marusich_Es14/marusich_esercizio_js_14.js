let Orario = function(ora,minuto,secondo){
    (this.h = ora),
    (this.m = minuto),
    (this.s = secondo),
    (this.gh = function(){
        return this.h;
    }),
    (this.gm = function(){
        return this.m;
    }),
    (this.gs = function(){
        return this.s;
    })
}
function differenziatore(orario1,orario2){
    let dh = Math.abs(orario1.gh() - orario2.gh())
    let dm = Math.abs(orario1.gm() - orario2.gm())
    let ds = Math.abs(orario1.gs() - orario2.gs())
    console.log(`${dh} ore, ${dm} minuti, ${ds} secondi e ${ds*1000} millisecondi`);
}
function main(){
    let a = new Orario(12,12,12);
    let b = new Orario(11,11,11);
    differenziatore(a,b);
    a = new Orario(10,0,0);
    b = new Orario(19,50,22);
    differenziatore(a,b);
}
main()
