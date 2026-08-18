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
    }),
    (this.vis = function(){
        return `${this.h} : ${this.m} : ${this.s}`;
    })
}
function min(a,b,c){
    if(a == b && b == c){
        return null;
    }
    return a < b ? (a < c ? 0 : 2) : (b < c ? 1 : 2); 
}
function minore(or1,or2,or3){
    let ore = [or1,or2,or3];
    let s1 = or1.gh() * 3600 + or1.gm() * 60 + or1.gs();
    let s2 = or2.gh() * 3600 + or2.gm() * 60 + or2.gs();
    let s3 = or3.gh() * 3600 + or3.gm() * 60 + or3.gs();
    let m = min(s1,s2,s3);
    m = m == null ? 0 : m;
    console.log(`Minore: ${ore[m].vis()}`);
}
function main(){
    let a = new Orario(11,10,9);
    let b = new Orario(11,10,10);
    let c = new Orario(12,9,10);
    minore(a,b,c);
    a = new Orario(19,20,30)
    b = new Orario(10,7,22);
    c = new Orario(9,5,4);
    minore(a,b,c);
    a = new Orario(19,2,3)
    b = new Orario(19,2,3);
    c = new Orario(19,2,3);
    minore(a,b,c);
}
main()
